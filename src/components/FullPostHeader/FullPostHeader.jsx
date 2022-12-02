import CustomLink from '../CustomLink/CustomLink';
import styles from './FullPostHeader.module.scss';

function FullPostHeader({ user }) {
    return (
        <div className={styles.userBlock}>
            <CustomLink to={`/profile/${user.id}`}>
                <div className={styles.avatar}>
                    <img src='/img/me.jpg' alt='' />
                </div>
            </CustomLink>
            <CustomLink to={`/profile/${user.id}`}>
                <span>{user.firstName} {user.lastName}</span>
            </CustomLink>
        </div>
    )
};

export default FullPostHeader;