'use client';

import { useEffect } from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export function Modal({
    open,
    onClose,
    title,
    children,
}: ModalProps) {
    // close on ESC
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal box */}
            <div className="relative z-10 w-[400px] rounded-md bg-white p-4 shadow-lg">
                {title && (
                    <h2 className="mb-3 text-lg font-semibold">
                        {title}
                    </h2>
                )}

                {children}
            </div>
        </div>
    );
}