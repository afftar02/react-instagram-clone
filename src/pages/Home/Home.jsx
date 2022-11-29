import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Post from '../../components/Post/Post';
import { getAllPosts } from '../../services/postService';
import { Link } from 'react-router-dom';
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
            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
              <div className={styles.avatar}>
                <img src='img/me.jpg' alt='' />
              </div>
            </Link>
            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <span>{getUserName()}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;