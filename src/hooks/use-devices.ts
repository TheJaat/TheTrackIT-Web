'use client';

import { useQuery } from '@tanstack/react-query';
import { getDevices } from '@/lib/device-api';

export function useDevices(
    params?: Record<string, string>,
) {
    return useQuery({
        queryKey: ['devices', params],
        queryFn: () => getDevices(params),
    });
}