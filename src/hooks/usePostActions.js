import { useState } from 'react';

function usePostActions({ id, post }) {
    const [liked, setLiked] = useState(post.isLiked);

    const handleLike = () => {
        setLiked(!liked);
    };

    return { handleLike, liked };
};

export default usePostActions;