'use client';

import { PopupProvider } from '@/context/PopupContext';
import ContactPopup from '@/components/ContactPopup';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PopupProvider>
            {children}
            <ContactPopup />
        </PopupProvider>
    );
}
