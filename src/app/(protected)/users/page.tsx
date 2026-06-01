'use client';

import { useUsers } from '@/hooks/use-users';

export default function UsersPage() {
    const {
        data,
        isLoading,
    } = useUsers();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <h1 className="text-3xl font-bold">
                    Users
                </h1>

                <button
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                    Add User
                </button>

            </div>

            <div className="overflow-hidden rounded-lg border bg-white">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>
                            <th className="p-3 text-left">
                                Name
                            </th>

                            <th className="p-3 text-left">
                                Email
                            </th>

                            <th className="p-3 text-left">
                                Role
                            </th>
                        </tr>

                    </thead>

                    <tbody>

                        {data?.map((user: any) => (
                            <tr
                                key={user.id}
                                className="border-t"
                            >
                                <td className="p-3">
                                    {user.name}
                                </td>

                                <td className="p-3">
                                    {user.email}
                                </td>

                                <td className="p-3">
                                    {user.role}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}