import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Post from '../../components/Post/Post';
import { getAllPosts } from '../../services/postService';

function Home() {
  const [posts, setPosts] = useState([]);

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
            <Post
              key={post.id}
              description={post.description}
              createdAt={post.createdAt}
              user={post.user}
              likesAmount={post.likesAmount}
              isLiked={post.isLiked}
              commentsAmount={post.commentsAmount}
            />
          ))}
        </div>
        <div className={styles.infoBlock}>

        </div>
      </div>
    </>
  )
};

export default Home;