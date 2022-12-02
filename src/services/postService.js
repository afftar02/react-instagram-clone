import { request } from './axiosService';

export const getAllPosts = async () => {
    const { data } = await request({ url: '/post/all' });
    return data;
};

export const getPost = async (id) => {
    const { data } = await request({ url: `/post/${id}` });
    return data;
};