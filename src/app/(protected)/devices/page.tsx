'use client';

import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useDevices } from '@/hooks/use-devices';
import { useQueryClient } from '@tanstack/react-query';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AllocateModal } from '@/components/devices/allocate-modal';
import { ReturnModal } from '@/components/devices/return-modal';
import { getCurrentUserId } from '@/lib/auth';
import { DeviceTable } from '@/components/devices/device-table';

export default function DevicesPage() {
    const [searchText, setSearchText] = useState('');
    const [search] = useDebounce(searchText, 500);

    const queryClient = useQueryClient();

    const { data, isLoading } = useDevices({ search });
    const [selectedDevice, setSelectedDevice] =
        useState<string | null>(null);

    const [allocateDeviceId, setAllocateDeviceId] =
        useState<string | null>(null);

    const [returnDeviceId, setReturnDeviceId] =
        useState<string | null>(null);

    const currentUserId = getCurrentUserId();


    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="p-6 space-y-4">

            <h1 className="text-2xl font-bold">
                Devices
            </h1>

            <Input
                placeholder="Search devices..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <DeviceTable
                devices={data?.items ?? []}
                currentUserId={currentUserId}
                onAllocate={setAllocateDeviceId}
                onReturn={setReturnDeviceId}
            />
            <AllocateModal
                deviceId={allocateDeviceId || ''}
                open={!!allocateDeviceId}
                onClose={() => setAllocateDeviceId(null)}
            />
            <ReturnModal
                deviceId={returnDeviceId || ''}
                open={!!returnDeviceId}
                onClose={() => setReturnDeviceId(null)}
            />

        </div>
    );
}