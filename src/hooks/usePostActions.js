import { useEffect, useState } from 'react';
import { addLike, removeLike } from '../services/likeService';
import { createComment } from '../services/commentService';

function usePostActions({ id, post }) {
    const [liked, setLiked] = useState(post.isLiked);
    const [likesAmount, setLikesAmount] = useState(post.likesAmount);
    const [commentsAmount, setCommentsAmount] = useState(post.commentsAmount);
    const [date, setDate] = useState('');

    // eslint-disable-next-line
    useEffect(() => calculateDate(), []);

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

    const calculateDate = () => {
        const daysAmount = new Date().getDate() - new Date(post.createdAt).getDate();
        const hoursAmount = new Date().getHours() - new Date(post.createdAt).getHours();
        const minutesAmount = new Date().getMinutes() - new Date(post.createdAt).getMinutes();

        if (daysAmount > 0) {
            setDate(daysAmount + ' DAYS');
        }
        else if (hoursAmount > 0) {
            setDate(hoursAmount + ' HOURS');
        }
        else if (minutesAmount > 0) {
            setDate(minutesAmount + ' MINUTES');
        }
        else {
            setDate('FEW SECONDS');
        }
    };

    return { user: post.user, handleLike, addComment, liked, likesAmount, commentsAmount, date, description: post.description };
};

export default usePostActions;