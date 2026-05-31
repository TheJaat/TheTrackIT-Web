'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';

import { returnDevice } from '@/lib/allocation-api';

export function ReturnModal({
    deviceId,
    open,
    onClose,
}: {
    deviceId: string;
    open: boolean;
    onClose: () => void;
}) {
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();

    async function handleReturn() {
        setLoading(true);

        try {
            await returnDevice(deviceId);
            queryClient.invalidateQueries({ queryKey: ['devices'] });
            onClose();
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Return Device"
        >
            <div className="space-y-3">

                <p className="text-sm text-gray-600">
                    Are you sure you want to return this device?
                </p>

                <Button
                    onClick={handleReturn}
                    disabled={loading}
                    variant="danger"
                    className="w-full"
                >
                    {loading ? 'Returning...' : 'Confirm Return'}
                </Button>

            </div>
        </Modal>
    );
}