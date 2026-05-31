import { api } from './api';

// export async function getDevices() {
//   const response = await api.get('/devices');
//   return response.data;
// }
export async function getDevices(
    params?: Record<string, string>,
) {
    const response = await api.get(
        '/devices',
        {
            params,
        },
    );

    return response.data;
}

export async function getDevice(id: string) {
    const response = await api.get(`/devices/${id}`);
    return response.data;
}

export async function createDevice(
    data: {
        name: string;
        brand: string;
        model: string;
        serialNumber?: string;
    },
) {
    const response = await api.post(
        '/devices',
        data,
    );

    return response.data;
}