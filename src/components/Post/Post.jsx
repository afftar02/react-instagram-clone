import { useState } from 'react';
import styles from './Post.module.scss';

import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostActionBlock from '../PostActionBlock/PostActionBlock';

function Post({ description, createdAt, user, likesAmount, isLiked, commentsAmount }) {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className={styles.post}>
      <PostHeader user={user} />
      <PostContent onDoubleClick={() => setLiked(true)} />
      <PostActionBlock
        likesAmount={likesAmount}
        description={description}
        commentsAmount={commentsAmount}
        liked={liked}
        onLikeClick={() => setLiked(!liked)}
      />
    </div>
  )
};

export default Post;