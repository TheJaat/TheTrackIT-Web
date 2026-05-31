export const tokenStorage = {
    get() {
        return localStorage.getItem('token');
    },

    set(token: string) {
        localStorage.setItem('token', token);
    },

    clear() {
        localStorage.removeItem('token');
    },
};

export function getCurrentUserId() {
    if (typeof window === 'undefined') return null;

    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));

    return payload.sub; // your userId
}