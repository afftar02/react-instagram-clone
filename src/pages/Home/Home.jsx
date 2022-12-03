import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Post from '../../components/Post/Post';
import { getAllPosts } from '../../services/postService';
import CurrentUser from '../../components/CurrentUser/CurrentUser';

function Home() {
  const [posts, setPosts] = useState();

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
        {
          posts ?
            <>
              <div className={styles.postsBlock}>
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
              <div className={styles.infoBlock}>
                <CurrentUser />
              </div>
            </>
            :
            <div className={styles.loading}>
              <span>Loading...</span>
            </div>
        }
      </div>
    </>
  )
};

export default Home;