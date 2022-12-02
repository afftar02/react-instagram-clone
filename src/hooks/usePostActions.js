import { useState } from 'react';
import { addLike, removeLike } from '../services/likeService';
import { createComment } from '../services/commentService';
import useDate from './useDate';

function usePostActions(post) {
    const [liked, setLiked] = useState(post.isLiked);
    const [likesAmount, setLikesAmount] = useState(post.likesAmount);
    const [commentsAmount, setCommentsAmount] = useState(post.commentsAmount);

    const handleLike = async () => {
        if (!liked) {
            const amount = await addLike(post.id);
            setLikesAmount(amount);
        }
        else {
            const amount = await removeLike(post.id);
            setLikesAmount(amount);
        }
        setLiked(!liked);
    };

    const addComment = async (text) => {
        await createComment(post.id, text);
        setCommentsAmount(commentsAmount + 1);
    };

    return { handleLike, addComment, liked, likesAmount, commentsAmount, date: useDate(post.createdAt) };
};

export default usePostActions;