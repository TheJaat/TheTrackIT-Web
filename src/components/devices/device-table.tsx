'use client';

import { Device } from '@/types/device';
import Link from 'next/link';

interface Props {
    devices: Device[];
}

export function DeviceTable({
    devices,
}: Props) {
    return (
        <table className="w-full border">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Status</th>
                    <th>Holder</th>
                </tr>
            </thead>

            <tbody>
                {devices.map((device) => (
                    <tr key={device.id}>
                        <td>
                            <Link
                                href={`/devices/${device.id}`}
                            >
                                {device.deviceCode}
                            </Link>
                        </td>
                        <td>{device.name}</td>
                        <td>{device.brand}</td>
                        <td>{device.model}</td>
                        <td>{device.status}</td>

                        <td>
                            {device.currentUser?.name ??
                                '-'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}