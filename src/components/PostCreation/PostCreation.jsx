import { useState } from 'react';
import { useAuth } from '../../auth/Auth';
import { createPost } from '../../services/postService';
import styles from './PostCreation.module.scss';

function PostCreation() {
    const [description, setDescription] = useState('');

    const { getUserName } = useAuth();

    async function handleCreation() {
        if (!description) {
            alert('Description field is required');
            return;
        }
        await createPost(description);
        setDescription('');
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={handleCreation}>Share</button>
            </div>
            <div className={styles.main}>
                <div className={styles.userBlock}>
                    <div className={styles.avatar}>
                        <img src='/img/me.jpg' alt='' />
                    </div>
                    <span>{getUserName()}</span>
                </div>
                <div className={styles.inputBlock}>
                    <textarea placeholder='Write a caption...' value={description} onChange={(event) => setDescription(event.target.value)} />
                </div>
            </div>
        </div>
    )
};

export default PostCreation;