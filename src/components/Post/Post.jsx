import styles from './Post.module.scss';

import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostActionBlock from '../PostActionBlock/PostActionBlock';
import usePostActions from '../../hooks/usePostActions';

function Post({ post }) {
  const { handleLike, liked, likesAmount, addComment, commentsAmount } = usePostActions({ post });

  return (
    <div className={styles.post}>
      <PostHeader user={post.user} />
      <PostContent />
      <PostActionBlock
        liked={liked}
        onLike={handleLike}
        likesAmount={likesAmount}
        onAddComment={addComment}
        commentsAmount={commentsAmount}
        description={post.description}
      />
    </div>
  )
};

export default Post;