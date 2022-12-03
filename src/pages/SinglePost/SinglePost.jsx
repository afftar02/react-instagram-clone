import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import Navigation from '../../components/Navigation/Navigation';
import { getPost } from '../../services/postService';
import styles from './SinglePost.module.scss';

function SinglePost() {
    const { id } = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        (async () => {
            const postResponse = await getPost(id);
            setPost(postResponse);
        })();
    }, [id]);

    return (
        <>
            <Navigation />
            <div className={styles.singlePostContainer}>
                {post ? <FullPost post={post} /> : <span>Loading...</span>}
            </div>
        </>
    )
};

export default SinglePost;