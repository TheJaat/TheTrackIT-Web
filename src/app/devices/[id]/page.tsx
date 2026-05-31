'use client';

import { useParams } from 'next/navigation';

import { useDevice } from '@/hooks/use-device';
import { AllocateDevice } from '@/components/devices/allocate-device';

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
        </div>
    );
}