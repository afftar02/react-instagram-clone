import styles from './PostContent.module.scss';

function PostContent({ onDoubleClick }) {
    return (
        <div className={styles.contentBlock} onDoubleClick={onDoubleClick}>
            <img src='img/supafast-setup.jpg' alt='' />
        </div>
    )
};

export default PostContent;