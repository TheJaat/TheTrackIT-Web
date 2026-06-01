'use client';

import { useParams } from 'next/navigation';

import { useUser } from '@/hooks/use-user';
import Link from 'next/link';

export default function UserPage() {
    const params = useParams();

    const {
        data,
        isLoading,
        error,
    } = useUser(
        params.id as string,
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                Error loading user
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">

            <div>
                <h1 className="text-3xl font-bold">
                    {data.name}
                </h1>

                <p className="text-gray-500">
                    User Details
                </p>
            </div>

            <Link
                href={`/users/${data.id}/edit`}
                className="inline-block rounded bg-blue-600 px-4 py-2 text-white"
            >
                Edit User
            </Link>

            <div className="rounded-lg border bg-white p-6">

                <div className="space-y-4">

                    <div>
                        <p className="text-sm text-gray-500">
                            Name
                        </p>

                        <p className="font-medium">
                            {data.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Email
                        </p>

                        <p className="font-medium">
                            {data.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Role
                        </p>

                        <p className="font-medium">
                            {data.role}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Created At
                        </p>

                        <p className="font-medium">
                            {new Date(
                                data.createdAt,
                            ).toLocaleDateString()}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}