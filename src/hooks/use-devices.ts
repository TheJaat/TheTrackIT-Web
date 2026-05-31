'use client';

import { useQuery } from '@tanstack/react-query';
import { getDevices } from '@/lib/device-api';

export function useDevices() {
  return useQuery({
    queryKey: ['devices'],
    queryFn: getDevices,
  });
}