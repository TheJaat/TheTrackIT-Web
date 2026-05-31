import { api } from './api';

export async function getDeviceHistory(
  deviceId: string,
) {
  const response = await api.get(
    `/allocations/device/${deviceId}/history`,
  );

  return response.data;
}