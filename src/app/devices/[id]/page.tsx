'use client';

import { useParams } from 'next/navigation';

import { useDevice } from '@/hooks/use-device';
import { AllocateDevice } from '@/components/devices/allocate-device';
import { ReturnDevice } from '@/components/devices/return-device';

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
        <div>
            <h1>{data.name}</h1>

            <p>
                Status: {data.status}
            </p>

            <p>
                Holder:{' '}
                {data.currentUser?.name ?? 'None'}
            </p>

            {data.status === 'AVAILABLE' && (
                <div style={{ marginTop: '20px' }}>
                    <AllocateDevice
                        deviceId={data.id}
                    />
                </div>
            )}

            {data.status === 'ALLOCATED' &&
                data.currentUser && (
                    <div style={{ marginTop: '20px' }}>
                        <ReturnDevice
                            userId={data.currentUser.id}
                            deviceId={data.id}
                        />
                    </div>
                )}
        </div>
    );
}