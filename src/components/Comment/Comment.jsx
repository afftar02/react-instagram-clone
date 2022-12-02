import CustomLink from '../CustomLink/CustomLink';
import useDate from '../../hooks/useDate';
import styles from './Comment.module.scss';

function Comment({ user, text, createdAt }) {
    const date = useDate(createdAt);

    return (
        <div className={styles.comment}>
            <CustomLink to={`/profile/${user.id}`}>
                <div className={styles.avatar}>
                    <img src='/img/me.jpg' alt='' />
                </div>
            </CustomLink>
            <div className={styles.infoBlock}>
                <div className={styles.textBlock}>
                    <CustomLink to={`/profile/${user.id}`}>
                        <span className={styles.nickname}>{user.firstName} {user.lastName}</span>
                    </CustomLink>
                    <span>{text}</span>
                </div>
                <div className={styles.timeSection}>
                    <span>{date} AGO</span>
                </div>
            </div>
        </div>
    )
};

export default Comment;