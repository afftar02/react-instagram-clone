import CustomLink from '../CustomLink/CustomLink';
import { useAuth } from '../../auth/Auth';
import styles from './CurrentUser.module.scss';

function CurrentUser() {
    const { user, getUserName } = useAuth();

    return (
        <div className={styles.userBlock}>
            <CustomLink to={`/profile/${user.id}`}>
                <div className={styles.avatar}>
                    <img src='img/me.jpg' alt='' />
                </div>
                <span>{getUserName()}</span>
            </CustomLink>
        </div>
    )
};

export default CurrentUser;