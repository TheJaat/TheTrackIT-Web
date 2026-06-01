'use client';

import { forwardRef, useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

interface Props {
    deviceId: string;
    deviceCode: string;
    deviceName: string;
}

export const AssetLabel = forwardRef<
    HTMLDivElement,
    Props
>(
    (
        {
            deviceId,
            deviceCode,
            deviceName,
        },
        ref,
    ) => {
        const [url, setUrl] =
            useState('');

        useEffect(() => {
            setUrl(
                `${window.location.origin}/devices/${deviceId}`,
            );
        }, [deviceId]);

        if (!url) {
            return null;
        }

        return (
            <div
                ref={ref}
                className="w-[320px] border bg-white p-4"
            >
                <div className="text-center">

                    <h3 className="font-bold text-lg">
                        TRACK IT
                    </h3>

                    <p className="text-xs text-gray-500">
                        Asset Tracking System
                    </p>

                </div>

                <div className="flex justify-center my-4">
                    <QRCode
                        value={url}
                        size={140}
                    />
                </div>

                <div className="text-center space-y-1">

                    <p className="font-bold text-lg">
                        {deviceCode}
                    </p>

                    <p className="text-sm">
                        {deviceName}
                    </p>

                </div>
            </div>
        );
    },
);

AssetLabel.displayName =
    'AssetLabel';