'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { useUser } from '@/hooks/use-user';
import { updateUser } from '@/lib/user-api';

export default function EditUserPage() {
    const params = useParams();

    const { data } =
        useUser(
            params.id as string,
        );

    const [name, setName] =
        useState('');

    const [email, setEmail] =
        useState('');

    useEffect(() => {
        if (!data) return;

        setName(data.name);
        setEmail(data.email);
    }, [data]);

    async function handleSave() {
        await updateUser(
            params.id as string,
            {
                name,
                email,
            },
        );

        alert('User updated');
    }

    return (
        <div className="max-w-xl mx-auto p-6 space-y-4">

            <h1 className="text-2xl font-bold">
                Edit User
            </h1>

            <input
                value={name}
                onChange={(e) =>
                    setName(
                        e.target.value,
                    )
                }
                className="w-full border p-2"
            />

            <input
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value,
                    )
                }
                className="w-full border p-2"
            />

            <button
                onClick={handleSave}
                className="rounded bg-blue-600 px-4 py-2 text-white"
            >
                Save Changes
            </button>

        </div>
    );
}