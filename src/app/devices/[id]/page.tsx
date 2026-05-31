'use client';

import { useParams } from 'next/navigation';

import { useDevice } from '@/hooks/use-device';
import { AllocateDevice } from '@/components/devices/allocate-device';
import { ReturnDevice } from '@/components/devices/return-device';
import { DeviceHistory } from '@/components/devices/device-history';
import { Badge } from '@/components/ui/badge';

export default function DevicePage() {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                        <div>
                            <p className="font-medium">
                                {data.currentUser.name}
                            </p>

                            <p className="text-sm text-gray-500">
                                Device is currently allocated
                            </p>
                        </div>
                    ) : (
                        <p>
                            Device is not allocated
                        </p>
                    )}
                </div>

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