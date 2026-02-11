'use client';

export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if (src.startsWith('https://images.unsplash.com') || src.startsWith('https://images.pexels.com')) {
        const url = new URL(src);
        url.searchParams.set('w', width.toString());
        url.searchParams.set('q', (quality || 75).toString());

        // Unsplash/Pexels auto-format usually handles webp/avif if the browser supports it
        // But explicitly asking for auto=format is good practice
        if (!url.searchParams.has('auto')) {
            url.searchParams.set('auto', 'format');
        }

        return url.toString();
    }

    // For other images, return as is (or handle local images if needed)
    // For static export of local images, usually we need a different strategy,
    // but most images here seem to be external.
    return src;
}
