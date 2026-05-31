'use client';

import { useQuery } from '@tanstack/react-query';

import { getStats } from '@/lib/dashboard-api';
import { getRecentActivity, } from '@/lib/dashboard-api';

export function useDashboard() {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: getStats,
    });
}

export function useRecentActivity() {
    return useQuery({
        queryKey: [
            'recent-activity',
        ],
        queryFn:
            getRecentActivity,
    });
}