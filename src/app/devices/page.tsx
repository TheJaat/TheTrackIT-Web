'use client';

import { DeviceTable } from '@/components/devices/device-table';
import { useDevices } from '@/hooks/use-devices';

export default function DevicesPage() {
    const {
        data,
        isLoading,
        error,
    } = useDevices();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading devices</div>;
    }

    return (
        <div>
            <h1>Devices</h1>

            <DeviceTable
                devices={data ?? []}
            />
        </div>
    );
}