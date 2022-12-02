import { Link } from 'react-router-dom';
import styles from './FullPostHeader.module.scss';

function FullPostHeader({ user }) {
    return (
        <div className={styles.userBlock}>
            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
                <div className={styles.avatar}>
                    <img src='/img/me.jpg' alt='' />
                </div>
            </Link>
            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <span>{user.firstName} {user.lastName}</span>
            </Link>
        </div>
    )
};

export default FullPostHeader;