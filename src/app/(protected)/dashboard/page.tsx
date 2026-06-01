'use client';

import { useDashboard, useRecentActivity }
    from '@/hooks/use-dashboard';

export default function DashboardPage() {
    const {
        data,
        isLoading,
    } = useDashboard();

    const activity = useRecentActivity();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                padding: '20px',
            }}
        >
            <h1>Dashboard</h1>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(5, 1fr)',
                    gap: '20px',
                }}
            >
                <div>
                    <h3>Total Devices</h3>
                    <p>
                        {data.totalDevices}
                    </p>
                </div>

                <div>
                    <h3>Available</h3>
                    <p>
                        {data.availableDevices}
                    </p>
                </div>

                <div>
                    <h3>Allocated</h3>
                    <p>
                        {data.allocatedDevices}
                    </p>
                </div>

                <div>
                    <h3>Users</h3>
                    <p>
                        {data.totalUsers}
                    </p>
                </div>

                <div>
                    <h3>
                        Active Allocations
                    </h3>

                    <p>
                        {data.activeAllocations}
                    </p>
                </div>
            </div>
            <h2
                style={{
                    marginTop: '40px',
                }}
            >
                Recent Activity
            </h2>

            <ul>
                {activity.data?.map(
                    (item: any) => (
                        <li key={item.id}>
                            {item.user}
                            {' → '}
                            {item.device}
                            {' ('}
                            {item.status}
                            {')'}
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}