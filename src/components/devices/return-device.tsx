'use client';

import { returnDevice } from '@/lib/allocation-api';

interface Props {
    userId: string;
    deviceId: string;
}

export function ReturnDevice({
    userId,
    deviceId,
}: Props) {
    async function handleReturn() {
        await returnDevice(
            userId,
        );

        window.location.reload();
    }

    return (
        <button
            onClick={handleReturn}
        >
            Return Device
        </button>
    );
}