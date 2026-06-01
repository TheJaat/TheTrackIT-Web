'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import Link from 'next/link';

export function logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
}

export function Sidebar() {
    const { data } = useCurrentUser();

    return (
        <aside className="w-64 border-r bg-white">

            <div className="p-6 border-b">
                <h1 className="text-xl font-bold">
                    Track It
                </h1>
                <div className="mt-4 rounded-lg bg-gray-100 p-3">
                    <p className="font-medium">
                        {data?.name}
                    </p>

                    <p className="text-sm text-gray-500">
                        {data?.role}
                    </p>
                </div>
            </div>

            <nav className="p-4 space-y-2">

                <Link
                    href="/dashboard"
                    className="block rounded p-2 hover:bg-gray-100"
                >
                    Dashboard
                </Link>

                <Link
                    href="/devices"
                    className="block rounded p-2 hover:bg-gray-100"
                >
                    Devices
                </Link>

                <Link
                    href="/users"
                    className="block rounded p-2 hover:bg-gray-100"
                >
                    Users
                </Link>

            </nav>

            <button onClick={logout}
                className="w-full rounded-lg border px-4 py-2 text-left hover:bg-gray-100"
            >
                Logout
            </button>

        </aside>
    );
}