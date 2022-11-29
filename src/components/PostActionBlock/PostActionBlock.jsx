import { useState } from 'react';
import styles from './PostActionBlock.module.scss';

import { FavoriteBorder, Favorite } from '@mui/icons-material';

function PostActionBlock({ liked, onLike, likesAmount, onAddComment, description, commentsAmount, date }) {
    const [comment, setComment] = useState('');

    function handleComment() {
        onAddComment(comment);
        setComment('');
    }

    return (
        <div className={styles.bottomBlock}>
            <div className={styles.likeSection}>
                {liked ? <Favorite sx={{ fontSize: 35, color: 'red' }} onClick={onLike} /> : <FavoriteBorder sx={{ fontSize: 35 }} onClick={onLike} />}
            </div>
            <div className={styles.likeAmountSection}>
                <span>{likesAmount} likes</span>
            </div>
            <div className={styles.descriptionSection}>
                <div className={styles.description}>
                    <span className={styles.nickname}>Nikita Steckij</span>
                    <span>{description}</span>
                </div>
                <div className={styles.commentsLink}>
                    <span>View all {commentsAmount} comments</span>
                </div>
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

export default PostActionBlock;