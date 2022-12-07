import styles from './ShortPost.module.scss';
import CustomLink from '../CustomLink/CustomLink';

import { FavoriteRounded, ModeCommentRounded } from '@mui/icons-material';

function ShortPost({ id, likesAmount, commentsAmount }) {
    return (
        <CustomLink to={`/post/${id}`}>
            <div className={styles.post}>
                <img src='/img/supafast-setup.jpg' alt='' />
                <div className={styles.postInfo}>
                    <div className={styles.likes}>
                        <FavoriteRounded sx={{ fontSize: 30, color: '#fff' }} />
                        <span>{likesAmount}</span>
                    </div>
                    <div className={styles.comments}>
                        <ModeCommentRounded sx={{ fontSize: 30, color: '#fff' }} />
                        <span>{commentsAmount}</span>
                    </div>
                </div>
            </div>
        </CustomLink>
    )
};

export default ShortPost;