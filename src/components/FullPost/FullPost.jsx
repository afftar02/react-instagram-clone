import usePostActions from "../../hooks/usePostActions";
import FullPostContent from '../FullPostContent/FullPostContent';
import FullPostHeader from '../FullPostHeader/FullPostHeader';
import FullPostInfoBlock from '../FullPostInfoBlock/FullPostInfoBlock';
import FullPostActionBlock from '../FullPostActionBlock/FullPostActionBlock';
import styles from './FullPost.module.scss';

function FullPost({ post }) {
    const { handleLike, liked, likesAmount, addComment, date } = usePostActions(post);

    return (
        <div className={styles.post}>
            <FullPostContent />
            <div className={styles.rightBlock}>
                <FullPostHeader
                    user={post.user}
                />
                <FullPostInfoBlock
                    id={post.id}
                    user={post.user}
                    description={post.description}
                    createdAt={post.createdAt}
                />
                <FullPostActionBlock
                    liked={liked}
                    onLike={handleLike}
                    likesAmount={likesAmount}
                    onAddComment={addComment}
                    date={date}
                />
            </div>
        </div>
    )
};

export default FullPost;