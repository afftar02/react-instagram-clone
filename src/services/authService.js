import { request } from './axiosService';

export const register = async ({ firstName, lastName, email, password }) => {
    const { data } = await request({ method: 'POST', url: 'http://localhost:4444/api/auth/register', data: { firstName, lastName, email, password } });
    localStorage.setItem('tokens', { accessToken: data.accessToken, refreshToken: data.refreshToken });
};

export const login = async ({ email, password }) => {
    const { data } = await request({ method: 'POST', url: 'http://localhost:4444/api/auth/login', data: { email, password } });
    localStorage.setItem('tokens', { accessToken: data.accessToken, refreshToken: data.refreshToken });
};