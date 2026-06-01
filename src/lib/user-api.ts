import { api } from './api';

export async function getUsers() {
    const response = await api.get('/users');

    return response.data;
}

export async function getUsersCount() {
    const response = await api.get('/users/count');

    return response.data;
}