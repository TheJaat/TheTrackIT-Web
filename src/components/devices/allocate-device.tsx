'use client';

import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { allocateDevice } from '@/lib/allocation-api';
interface Props {
    deviceId: string;
}

export function AllocateDevice({ deviceId }: Props) {
    const [loading, setLoading] = useState(false);

    const queryClient = useQueryClient();

    async function handleAllocate() {
        setLoading(true);

        try {
            await allocateDevice(deviceId);

            await queryClient.invalidateQueries({
                queryKey: ['device', deviceId],
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={handleAllocate}
            disabled={loading}
            className="px-3 py-2 bg-blue-600 text-white rounded"
        >
            {loading ? 'Allocating...' : 'Allocate'}
        </button>
    );
}