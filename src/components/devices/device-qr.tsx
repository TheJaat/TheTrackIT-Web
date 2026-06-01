'use client';

import { useEffect, useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

interface Props {
    deviceId: string;
}

export function DeviceQr({
    deviceId,
}: Props) {
    const [url, setUrl] =
        useState('');

    const qrRef = useRef<HTMLDivElement>(null);

    async function handleDownload() {
        if (!qrRef.current) {
            return;
        }

        const dataUrl =
            await toPng(qrRef.current);

        const link =
            document.createElement('a');

        link.download =
            `device-${deviceId}.png`;

        link.href = dataUrl;

        link.click();
    }

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

            <div
                ref={qrRef}
                className="flex justify-center bg-white p-4"
            >                <QRCode
                    value={url}
                    size={200}
                />
            </div>

            <p className="mt-4 text-xs text-gray-500 break-all">
                {url}
            </p>

            <button
                onClick={handleDownload}
                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
                Download QR
            </button>

        </div>
    );
}