'use client';

import Link from 'next/link';

import { Device } from '@/types/device';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Props {
    devices: Device[];
    currentUserId: string | null;
    onAllocate: (deviceId: string) => void;
    onReturn: (deviceId: string) => void;
}

export function DeviceTable({
    devices,
    currentUserId,
    onAllocate,
    onReturn,
}: Props) {
    return (
        <table className="w-full border">
            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 text-left">
                        Name
                    </th>

                    <th className="p-2 text-left">
                        Brand
                    </th>

                    <th className="p-2 text-left">
                        Status
                    </th>

                    <th className="p-2 text-left">
                        Holder
                    </th>

                    <th className="p-2 text-left">
                        Actions
                    </th>
                </tr>
            </thead>

            <tbody>
                {devices.map((device) => (
                    <tr
                        key={device.id}
                        className="border-t"
                    >
                        <td className="p-2">
                            {device.name}
                        </td>

                        <td className="p-2">
                            {device.brand}
                        </td>

                        <td className="p-2">
                            <Badge
                                type={
                                    device.status ===
                                        'AVAILABLE'
                                        ? 'success'
                                        : 'danger'
                                }
                            >
                                {device.status}
                            </Badge>
                        </td>

                        <td className="p-2">
                            {device.currentUser?.name ??
                                'None'}
                        </td>

                        <td className="p-2 space-x-2">
                            <Link
                                href={`/devices/${device.id}`}
                            >
                                <Button variant="secondary">
                                    View
                                </Button>
                            </Link>

                            {device.currentUser?.id ===
                                currentUserId ? (
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        onReturn(
                                            device.id,
                                        )
                                    }
                                >
                                    Return
                                </Button>
                            ) : device.status ===
                                'AVAILABLE' ? (
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        onAllocate(
                                            device.id,
                                        )
                                    }
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
    );
}