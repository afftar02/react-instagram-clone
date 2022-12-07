import styles from './UserProfile.module.scss';

function UserProfile({ user, postsAmount }) {
    return (
        <div className={styles.userBlock}>
            <div className={styles.avatar}>
                <img src='/img/me.jpg' alt='' />
            </div>
            <div className={styles.userInfo}>
                <div className={styles.nicknameBlock}>
                    <span>{user.firstName} {user.lastName}</span>
                </div>
                <div className={styles.amountInfoBlock}>
                    <span className={styles.amount}>{postsAmount}</span>
                    <span className={styles.property}>{postsAmount === 1 ? 'post' : 'posts'}</span>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;