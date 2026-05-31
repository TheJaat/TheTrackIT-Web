'use client';

import { useQuery } from '@tanstack/react-query';

import { getDeviceHistory } from '@/lib/history-api';

export function useDeviceHistory(
  deviceId: string,
) {
  return useQuery({
    queryKey: ['history', deviceId],
    queryFn: () =>
      getDeviceHistory(deviceId),
  });
}