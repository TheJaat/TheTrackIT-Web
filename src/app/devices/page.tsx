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

            <table className="w-full border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Brand</th>
                        <th className="p-2 text-left">Status</th>
                        <th className="p-2 text-left">Holder</th>
                        <th className="p-2 text-left">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.items?.map((device: any) => (
                        <tr key={device.id} className="border-t">
                            <td className="p-2">{device.name}</td>
                            <td className="p-2">{device.brand}</td>

                            <td className="p-2">
                                <Badge
                                    type={
                                        device.status === 'AVAILABLE'
                                            ? 'success'
                                            : 'danger'
                                    }
                                >
                                    {device.status}
                                </Badge>
                            </td>

                            <td className="p-2">
                                {device.currentUser?.name ?? 'None'}
                            </td>

                            <td className="p-2 space-x-2">
                                <Button variant="secondary">
                                    View
                                </Button>

                                {device.currentUserId === currentUserId ? (
                                    <Button
                                        variant="danger"
                                        onClick={() => setReturnDeviceId(device.id)}
                                    >
                                        Return
                                    </Button>
                                ) : device.status === 'AVAILABLE' ? (
                                    <Button
                                        variant="primary"
                                        onClick={() => setAllocateDeviceId(device.id)}
                                    >
                                        Allocate
                                    </Button>
                                ) : (
                                    <Button disabled>
                                        Allocated
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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