'use client';

export function Header() {
    return (
        <header className="flex items-center justify-between border-b bg-white px-6 py-4">

            <div>
                <h1 className="text-xl font-semibold">
                    Welcome Back
                </h1>

                <p className="text-sm text-gray-500">
                    Manage your devices efficiently
                </p>
            </div>

            <button
                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
            >
                Logout
            </button>

        </header>
    );
}