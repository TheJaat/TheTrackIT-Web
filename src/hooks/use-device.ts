'use client';

import { useQuery } from '@tanstack/react-query';

import { getDevice } from '@/lib/device-api';

export function useDevice(
  id: string,
) {
  return useQuery({
    queryKey: ['device', id],
    queryFn: () => getDevice(id),
  });
}