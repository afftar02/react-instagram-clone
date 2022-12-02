import { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import styles from './PostActionBlock.module.scss';

import { FavoriteBorder, Favorite, ModeCommentOutlined } from '@mui/icons-material';

function PostActionBlock({ id, liked, onLike, likesAmount, onAddComment, description, commentsAmount, date }) {
    const [comment, setComment] = useState('');

    function handleComment() {
        onAddComment(comment);
        setComment('');
    }

    return (
        <div className={styles.bottomBlock}>
            <div className={styles.iconsSection}>
                {liked ? <Favorite sx={{ fontSize: 35, color: 'red' }} onClick={onLike} /> : <FavoriteBorder sx={{ fontSize: 35 }} onClick={onLike} />}
                <CustomLink to={`/post/${id}`}>
                    <ModeCommentOutlined sx={{ fontSize: 33 }} className={styles.commentIcon} />
                </CustomLink>
            </div>
            <div className={styles.likeAmountSection}>
                <span>{likesAmount} likes</span>
            </div>
            <div className={styles.descriptionSection}>
                <div className={styles.description}>
                    <span className={styles.nickname}>Nikita Steckij</span>
                    <span>{description}</span>
                </div>
                <CustomLink to={`/post/${id}`}>
                    <div className={styles.commentsLink}>
                        {commentsAmount > 0 && <span>View all {commentsAmount} comments</span>}
                    </div>
                </CustomLink>
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