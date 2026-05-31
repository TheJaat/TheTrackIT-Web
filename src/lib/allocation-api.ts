import { api } from './api';

// export async function allocateDevice(
//   deviceId: string,
//   userId: string,
// ) {
//   const response = await api.post(
//     '/allocations/allocate',
//     {
//       deviceId,
//       userId,
//     },
//   );

//   return response.data;
// }

export async function allocateDevice(deviceId: string) {
    const response = await api.post('/allocations/allocate', {
        deviceId,
    });

    return response.data;
}

// export async function returnDevice(
//     userId: string,
//     deviceId: string,
// ) {
//     const response = await api.post(
//         '/allocations/return',
//         {
//             userId,
//             deviceId,
//         },
//     );

//     return response.data;
// }

export async function returnDevice(deviceId: string) {
    const res = await api.post('/allocations/return', {
        deviceId,
    });

    return res.data;
}