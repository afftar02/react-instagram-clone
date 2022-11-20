import React from 'react';
import styles from './Home.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Post from '../../components/Post/Post';

function Home() {
  return (
    <>
      <Navigation />
      <div className={styles.homeContainer}>
        <div className={styles.postsBlock}>
          {[1, 2, 3, 4, 5].map(() => (<Post />))}
        </div>
        <div className={styles.infoBlock}>

        </div>
      </div>
    </>
  )
};

export default Home;