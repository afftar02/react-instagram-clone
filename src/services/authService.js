import { request } from './axiosService';

export const registerUser = async ({ firstName, lastName, email, password }) => {
    const { data } = await request({ method: 'POST', url: '/auth/register', data: { firstName, lastName, email, password } });
    localStorage.setItem('tokens', JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
};

export const loginUser = async ({ email, password }) => {
    const { data } = await request({ method: 'POST', url: '/auth/login', data: { email, password } });
    localStorage.setItem('tokens', JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
};