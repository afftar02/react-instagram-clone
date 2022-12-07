import { request } from './axiosService';

export const getAllPosts = async () => {
    const { data } = await request({ url: '/post/all' });
    return data;
};

export const getPost = async (id) => {
    const { data } = await request({ url: `/post/${id}` });
    return data;
};

export const getUserPosts = async (userId) => {
    const { data } = await request({ url: `/post/user/${userId}` });
    return data;
};

export const createPost = async (description) => {
    const { data } = await request({ method: 'POST', url: '/post', data: { description } });
    return data;
};