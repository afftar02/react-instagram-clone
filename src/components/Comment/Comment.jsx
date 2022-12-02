import { Link } from 'react-router-dom';
import useDate from '../../hooks/useDate';
import styles from './Comment.module.scss';

function Comment({ user, text, createdAt }) {
    const date = useDate(createdAt);

    return (
        <div className={styles.comment}>
            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
                <div className={styles.avatar}>
                    <img src='/img/me.jpg' alt='' />
                </div>
            </Link>
            <div className={styles.infoBlock}>
                <div className={styles.textBlock}>
                    <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <span className={styles.nickname}>{user.firstName} {user.lastName}</span>
                    </Link>
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