import { request } from './axiosService';

export const addLike = async (postId) => {
    const { data } = await request({ method: 'POST', url: `/like/${postId}` });
    return data;
};

export const removeLike = async (postId) => {
    const { data } = await request({ method: 'DELETE', url: `/like/${postId}` });
    return data;
};