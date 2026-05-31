'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';

import { allocateDevice } from '@/lib/allocation-api';

export function AllocateModal({
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

    async function handleAllocate() {
        setLoading(true);

        try {
            await allocateDevice(deviceId);
            await queryClient.invalidateQueries({
                queryKey: ['device', deviceId],
            });

            await queryClient.invalidateQueries({
                queryKey: ['devices'],
            });
            onClose();
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Allocate Device"
        >
            <div className="space-y-3">
                <Button onClick={handleAllocate}>
                    Confirm Allocation
                </Button>
            </div>
        </Modal>
    );
}