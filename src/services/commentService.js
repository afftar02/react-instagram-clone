import { request } from './axiosService';

export const createComment = async (postId, text) => {
    const { data } = await request({ method: 'POST', url: `/comment/${postId}`, data: { text } });
    return data;
};

export const getPostComments = async (postId) => {
    const { data } = await request({ url: `/comment/${postId}` });
    return data;
};

export const removeComment = async (postId) => {
    const { data } = await request({ method: 'DELETE', url: `/comment/${postId}` });
    return data;
};