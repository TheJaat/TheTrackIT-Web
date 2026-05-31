'use client';

import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { DeviceTable } from '@/components/devices/device-table';
import { DeviceSearch } from '@/components/devices/device-search';
import { useDevices } from '@/hooks/use-devices';
import Link from 'next/link';

export default function DevicesPage() {
    const [searchText, setSearch] =
        useState('');
    const [search] = useDebounce(
        searchText,
        500,
    );

    const {
        data,
        isLoading,
        error,
    } = useDevices({
        search,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading devices</div>;
    }

    return (
        <div>
            <h1>Devices</h1>

            <DeviceSearch
                value={searchText}
                onChange={setSearch}
            />

            <DeviceTable
                devices={data.items}
            />
            <Link href="/devices/new">
                Create Device
            </Link>
        </div>
    );
}