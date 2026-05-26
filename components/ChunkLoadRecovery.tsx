'use client';

import { useEffect } from 'react';

const RELOAD_KEY = 'uc-chunk-reload';

function isChunkLoadError(reason: unknown): boolean {
  if (!reason) return false;
  const message =
    typeof reason === 'string'
      ? reason
      : reason instanceof Error
        ? reason.message
        : typeof reason === 'object' && reason !== null && 'message' in reason
          ? String((reason as { message: unknown }).message)
          : String(reason);

  return (
    /ChunkLoadError/i.test(message) ||
    /Loading chunk \d+ failed/i.test(message) ||
    /Failed to fetch dynamically imported module/i.test(message)
  );
}

/**
 * After a deploy, browsers can still have cached HTML that points at removed
 * hashed chunks. Reload once so users pick up the new index.html + assets.
 */
export default function ChunkLoadRecovery() {
  useEffect(() => {
    const reloadOnce = () => {
      if (sessionStorage.getItem(RELOAD_KEY)) return;
      sessionStorage.setItem(RELOAD_KEY, '1');
      window.location.reload();
    };

    const onError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.error ?? event.message)) {
        reloadOnce();
        return;
      }

      // Detect SyntaxErrors in Next.js chunks (often caused by the server returning HTML/404 for missing assets after a deploy)
      const message = event.message || '';
      const filename = event.filename || '';
      const isNextChunkSyntaxError =
        (message.includes('SyntaxError') || 
         message.toLowerCase().includes('unexpected token') || 
         message.toLowerCase().includes('invalid token')) &&
        (filename.includes('_next/') || filename.includes('chunk') || filename.includes('page-'));

      if (isNextChunkSyntaxError) {
        console.warn('Next.js chunk syntax error detected. Reloading page to fetch the fresh build...', message, filename);
        reloadOnce();
      }
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadError(event.reason)) {
        reloadOnce();
        return;
      }

      const reason = event.reason;
      if (reason && typeof reason === 'object') {
        const msg = String((reason as any).message || '');
        const file = String((reason as any).fileName || (reason as any).filename || '');
        if (
          (msg.includes('SyntaxError') || msg.toLowerCase().includes('unexpected token')) &&
          (file.includes('_next/') || file.includes('chunk'))
        ) {
          console.warn('Unhandled promise rejection chunk syntax error detected. Reloading page...', msg, file);
          reloadOnce();
        }
      }
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, []);

  return null;
}
