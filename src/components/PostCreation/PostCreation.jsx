import { useAuth } from '../../auth/Auth';
import styles from './PostCreation.module.scss';

function PostCreation() {
    const { getUserName } = useAuth();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button>Share</button>
            </div>
            <div className={styles.main}>
                <div className={styles.userBlock}>
                    <div className={styles.avatar}>
                        <img src='/img/me.jpg' alt='' />
                    </div>
                    <span>{getUserName()}</span>
                </div>
                <div className={styles.inputBlock}>
                    <textarea placeholder='Write a caption...' />
                </div>
            </div>
        </div>
    )
};

export default PostCreation;