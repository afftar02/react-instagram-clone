import styles from './PostActionBlock.module.scss';

import { FavoriteBorder, Favorite } from '@mui/icons-material';

function PostActionBlock({ likesAmount, description, commentsAmount, liked, onLikeClick }) {
    return (
        <div className={styles.bottomBlock}>
            <div className={styles.likeSection}>
                {liked ? <Favorite sx={{ fontSize: 35, color: 'red' }} onClick={onLikeClick} /> : <FavoriteBorder sx={{ fontSize: 35 }} onClick={onLikeClick} />}
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
                <span>5 HOURS AGO</span>
            </div>
            <div className={styles.addCommentSection}>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
            </div>
        </div>
    )
};

export default PostActionBlock;