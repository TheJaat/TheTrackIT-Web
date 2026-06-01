'use client';

import Link from 'next/link';

export function Sidebar() {
    return (
        <aside className="w-64 border-r bg-white">

            <div className="p-6 border-b">
                <h1 className="text-xl font-bold">
                    Track It
                </h1>
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

        </aside>
    );
}