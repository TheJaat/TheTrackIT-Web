import { api } from './api';

export async function getDevices() {
  const response = await api.get('/devices');
  return response.data;
}

export async function getDevice(id: string) {
  const response = await api.get(`/devices/${id}`);
  return response.data;
}