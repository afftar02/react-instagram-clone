import styles from './PostHeader.module.scss';

function PostHeader({ user }) {
    return (
        <div className={styles.userBlock}>
            <div className={styles.avatar}>
                <img src='img/me.jpg' alt='' />
            </div>
            <span>{user.firstName} {user.lastName}</span>
        </div>
    )
};

export default PostHeader;