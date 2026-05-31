'use client';

import { useState } from 'react';
import { createDevice } from '@/lib/device-api';

export default function NewDevicePage() {
    const [name, setName] =
        useState('');

    const [brand, setBrand] =
        useState('');

    const [model, setModel] =
        useState('');

    const [serialNumber,
        setSerialNumber] =
        useState('');

    async function handleSubmit() {
        await createDevice({
            name,
            brand,
            model,
            serialNumber,
        });

        alert('Device created');
    }

    return (
        <div>
            <h1>Create Device</h1>

            <input
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <br />

            <input
                placeholder="Brand"
                value={brand}
                onChange={(e) =>
                    setBrand(e.target.value)
                }
            />

            <br />

            <input
                placeholder="Model"
                value={model}
                onChange={(e) =>
                    setModel(e.target.value)
                }
            />

            <br />

            <input
                placeholder="Serial Number"
                value={serialNumber}
                onChange={(e) =>
                    setSerialNumber(e.target.value)
                }
            />

            <br />

            <button
                onClick={handleSubmit}
            >
                Create Device
            </button>
        </div>
    );
}