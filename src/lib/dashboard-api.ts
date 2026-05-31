import { api } from './api';

export async function getStats() {
  const response = await api.get(
    '/dashboard/stats',
  );

  return response.data;
}

export async function getRecentActivity() {
    const response =
        await api.get(
            '/dashboard/recent-activity',
        );

    return response.data;
}