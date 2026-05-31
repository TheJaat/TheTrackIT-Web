'use client';

import { returnDevice } from '@/lib/allocation-api';
import { Button } from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
    deviceId: string;
}

export function ReturnDevice({
    deviceId,
}: Props) {
    const queryClient = useQueryClient();

    async function handleReturn() {
        await returnDevice(
            deviceId,
        );

        queryClient.invalidateQueries({
            queryKey: ['device', deviceId],
        });
    }

    return (
        <Button
            variant="danger"
            onClick={handleReturn}
        >
            Return Device
        </Button>
    );
}