import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import Navigation from '../../components/Navigation/Navigation';
import { getPost } from '../../services/postService';
import styles from './SinglePost.module.scss';

import { ArrowBackRounded } from '@mui/icons-material';

function SinglePost() {
    const { id } = useParams();
    const navigate = useNavigate();

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
                <div className={styles.back} onClick={() => navigate(-1)}>
                    <ArrowBackRounded sx={{ fontSize: 35 }} />
                </div>
                {post ? <FullPost post={post} /> : <span>Loading...</span>}
            </div>
        </>
    )
};

export default SinglePost;