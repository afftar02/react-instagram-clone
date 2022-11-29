import styles from './Post.module.scss';

import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostActionBlock from '../PostActionBlock/PostActionBlock';
import usePostActions from '../../hooks/usePostActions';

function Post({ post }) {
  const { user, handleLike, liked, likesAmount, addComment, commentsAmount, date, description } = usePostActions({ post });

  return (
    <div className={styles.post}>
      <PostHeader user={user} />
      <PostContent />
      <PostActionBlock
        liked={liked}
        onLike={handleLike}
        likesAmount={likesAmount}
        onAddComment={addComment}
        commentsAmount={commentsAmount}
        date={date}
        description={description}
      />
    </div>
  )
};

export default Post;