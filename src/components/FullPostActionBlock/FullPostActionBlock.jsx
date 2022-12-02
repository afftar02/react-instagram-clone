import { useState } from 'react';
import styles from './FullPostActionBlock.module.scss';

import { FavoriteBorder, Favorite } from '@mui/icons-material';

function FullPostActionBlock({ liked, onLike, likesAmount, onAddComment, date }) {
    const [comment, setComment] = useState('');

    function handleComment() {
        onAddComment(comment);
        setComment('');
    }

    return (
        <div className={styles.actionBlock}>
            <div className={styles.iconsSection}>
                {liked ? <Favorite sx={{ fontSize: 35, color: 'red' }} onClick={onLike} /> : <FavoriteBorder sx={{ fontSize: 35 }} onClick={onLike} />}
            </div>
            <div className={styles.likeAmountSection}>
                <span>{likesAmount} likes</span>
            </div>
            <div className={styles.timeSection}>
                <span>{date} AGO</span>
            </div>
            <div className={styles.addCommentSection}>
                <input type="text" placeholder='Add a comment...' value={comment} onChange={(event) => setComment(event.target.value)} />
                <button onClick={handleComment}>Post</button>
            </div>
        </div>
    )
};

export default FullPostActionBlock;