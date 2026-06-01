'use client';

import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

interface Props {
    deviceId: string;
}

export function DeviceQr({
    deviceId,
}: Props) {
    const [url, setUrl] =
        useState('');

    useEffect(() => {
        setUrl(
            `${window.location.origin}/devices/${deviceId}`
        );
    }, [deviceId]);

    if (!url) {
        return null;
    }

    return (
        <div className="border rounded-lg p-6 bg-white">

            <h2 className="text-lg font-semibold mb-4">
                Device QR Code
            </h2>

            <div className="flex justify-center bg-white p-4">
                <QRCode
                    value={url}
                    size={200}
                />
            </div>

            <p className="mt-4 text-xs text-gray-500 break-all">
                {url}
            </p>

        </div>
    );
}