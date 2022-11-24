import React from 'react';
import styles from './Post.module.scss';

import { FavoriteBorder, Favorite } from '@mui/icons-material';

function Post({ description, createdAt, user, likesAmount, isLiked, commentsAmount }) {
  const [liked, setLiked] = React.useState(isLiked);

  return (
    <div className={styles.post}>
      <div className={styles.userBlock}>
        <div className={styles.avatar}>
          <img src='img/me.jpg' alt='' />
        </div>
        <span>{user.firstName + ' ' + user.lastName}</span>
      </div>
      <div className={styles.contentBlock} onDoubleClick={() => setLiked(true)}>
        <img src='img/supafast-setup.jpg' alt='' />
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.likeSection}>
          {liked ? <Favorite sx={{ fontSize: 35, color: 'red' }} onClick={() => setLiked(!liked)} /> : <FavoriteBorder sx={{ fontSize: 35 }} onClick={() => setLiked(!liked)} />}
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
    </div>
  )
};

export default Post;