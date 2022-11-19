import { request } from './axiosService';

export const getCurrentUser = async () => {
    const { data } = await request({ url: '/user' });
    return data;
};