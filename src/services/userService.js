import { request } from './axiosService';

export const getCurrentUser = async () => {
    const { data } = await request({ url: '/user' });
    return data;
};

export const getUser = async (id) => {
    const { data } = await request({ url: `/user/${id}` });
    return data;
};