import { api } from './api';

export async function allocateDevice(
  deviceId: string,
  userId: string,
) {
  const response = await api.post(
    '/allocations/allocate',
    {
      deviceId,
      userId,
    },
  );

  return response.data;
}