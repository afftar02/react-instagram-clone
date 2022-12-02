import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Post from '../../components/Post/Post';
import { getAllPosts } from '../../services/postService';
import CustomLink from '../../components/CustomLink/CustomLink';
import { useAuth } from '../../auth/Auth';

function Home() {
  const [posts, setPosts] = useState([]);

  const { user, getUserName } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getAllPosts();
      setPosts(response);
    })();
  }, []);

  return (
    <>
      <Navigation />
      <div className={styles.homeContainer}>
        <div className={styles.postsBlock}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.userBlock}>
            <CustomLink to={`/profile/${user.id}`}>
              <div className={styles.avatar}>
                <img src='img/me.jpg' alt='' />
              </div>
            </CustomLink>
            <CustomLink to={`/profile/${user.id}`}>
              <span>{getUserName()}</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;