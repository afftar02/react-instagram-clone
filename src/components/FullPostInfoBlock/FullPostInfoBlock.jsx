import { useState } from 'react';
import { useEffect } from 'react';
import Comment from '../Comment/Comment';
import { getPostComments } from '../../services/commentService';
import styles from './FullPostInfoBlock.module.scss';

function FullPostInfoBlock({ id, user, description, createdAt, commentsAmount }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getPostComments(id);
            setComments(response);
        })();
    }, [id, commentsAmount]);

    return (
        <div className={styles.infoBlock}>
            <Comment user={user} text={description} createdAt={createdAt} />
            {comments.map((comment) => (
                <Comment key={comment.id} user={comment.user} text={comment.text} createdAt={comment.createdAt} />
            ))}
        </div>
    )
};

export default FullPostInfoBlock;