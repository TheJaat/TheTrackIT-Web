'use client';

import { useParams } from 'next/navigation';

import { useDevice } from '@/hooks/use-device';
import { AllocateDevice } from '@/components/devices/allocate-device';
import { ReturnDevice } from '@/components/devices/return-device';
import { DeviceHistory } from '@/components/devices/device-history';
import { Badge } from '@/components/ui/badge';
import { DeviceQr } from '@/components/devices/device-qr';
import { AssetLabel } from '@/components/devices/asset-label';
import { useRef } from 'react';

export default function DevicePage() {

    const labelRef =
        useRef<HTMLDivElement>(null);

    function handlePrint() {
        if (!labelRef.current) {
            return;
        }

        const printWindow =
            window.open(
                '',
                '_blank',
                'width=500,height=600',
            );

        if (!printWindow) {
            return;
        }

        printWindow.document.write(`
        <html>
            <head>
                <title>Asset Label</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 20px;
                        font-family: Arial;
                    }
                </style>
            </head>
            <body>
                ${labelRef.current.outerHTML}
            </body>
        </html>
    `);

        printWindow.document.close();

        printWindow.focus();

        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 300);
    }

    const params = useParams();

    const {
        data,
        isLoading,
        error,
    } = useDevice(
        params.id as string,
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading device</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">

            <div>
                <h1 className="text-3xl font-bold">
                    {data.name}
                </h1>

                <p className="text-gray-500">
                    Device Details
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">
                        Device Information
                    </h2>

                    <div className="space-y-3">

                        <div>
                            <p className="text-sm text-gray-500">
                                Device Code
                            </p>

                            <p>
                                {data.deviceCode}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Brand
                            </p>

                            <p>
                                {data.brand}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Model
                            </p>

                            <p>
                                {data.model}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Status
                            </p>

                            <Badge
                                type={
                                    data.status === 'AVAILABLE'
                                        ? 'success'
                                        : 'danger'
                                }
                            >
                                {data.status}
                            </Badge>
                        </div>

                    </div>
                </div>

                <div className="border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">
                        Current Holder
                    </h2>

                    {data.currentUser ? (
                        <div className="space-y-2">

                            <div className="inline-flex items-center rounded-lg border px-3 py-2">
                                <span className="font-medium">
                                    {data.currentUser.name}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500">
                                Device is currently allocated
                            </p>

                        </div>
                    ) : (
                        <div className="rounded-lg border border-dashed p-4">
                            <p className="text-gray-500">
                                Device is not allocated
                            </p>
                        </div>
                    )}
                </div>

                <DeviceQr
                    deviceId={data.id}
                />

            </div>

            <div className="border rounded-lg p-6">

                <div className="flex items-center justify-between mb-6">

                    <h2 className="text-lg font-semibold">
                        Asset Label
                    </h2>

                    <button
                        onClick={handlePrint}
                        className="rounded bg-green-600 px-4 py-2 text-white"
                    >
                        Print Label
                    </button>

                </div>

                <AssetLabel
                    ref={labelRef}
                    deviceId={data.id}
                    deviceCode={data.deviceCode}
                    deviceName={`${data.brand} ${data.model}`}
                />

            </div>

            <div className="flex gap-3">

                {data.status === 'AVAILABLE' && (
                    <AllocateDevice
                        deviceId={data.id}
                    />
                )}

                {data.status === 'ALLOCATED' &&
                    data.currentUser && (
                        <ReturnDevice
                            deviceId={data.id}
                        />
                    )}

            </div>

            <div className="border rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                    Allocation History
                </h2>

                <DeviceHistory
                    deviceId={data.id}
                />
            </div>

        </div>
    );
}