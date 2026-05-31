'use client';

import { useDashboard } from '@/hooks/use-dashboard';

export default function DashboardPage() {
  const {
    data,
    isLoading,
  } = useDashboard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>
        Total Devices:
        {' '}
        {data.totalDevices}
      </h2>

      <h2>
        Available:
        {' '}
        {data.availableDevices}
      </h2>

      <h2>
        Allocated:
        {' '}
        {data.allocatedDevices}
      </h2>

      <h2>
        Employees:
        {' '}
        {data.totalUsers}
      </h2>
    </div>
  );
}