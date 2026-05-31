'use client';

import { useDeviceHistory } from '@/hooks/use-device-history';

interface Props {
  deviceId: string;
}

export function DeviceHistory({
  deviceId,
}: Props) {
  const {
    data,
    isLoading,
  } = useDeviceHistory(deviceId);

  if (isLoading) {
    return <div>Loading history...</div>;
  }

  return (
    <div>
      <h2>History</h2>

      {data.map((item: any) => (
        <div
          key={item.id}
          style={{
            marginBottom: '20px',
            borderBottom:
              '1px solid #ddd',
          }}
        >
          <p>
            User:
            {' '}
            {item.user.name}
          </p>

          <p>
            Status:
            {' '}
            {item.status}
          </p>

          <p>
            Allocated:
            {' '}
            {new Date(
              item.allocatedAt,
            ).toLocaleString()}
          </p>

          {item.returnedAt && (
            <p>
              Returned:
              {' '}
              {new Date(
                item.returnedAt,
              ).toLocaleString()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}