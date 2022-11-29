import { useState } from 'react';
import { addLike, removeLike } from '../services/likeService';

function usePostActions({ id, post }) {
    const [liked, setLiked] = useState(post.isLiked);
    const [likesAmount, setLikesAmount] = useState(post.likesAmount);

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

    return { handleLike, liked, likesAmount };
};

export default usePostActions;