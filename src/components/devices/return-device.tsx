'use client';

import { returnDevice } from '@/lib/allocation-api';

interface Props {
    deviceId: string;
}

export function ReturnDevice({
    deviceId,
}: Props) {
    async function handleReturn() {
        await returnDevice(
            deviceId,
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