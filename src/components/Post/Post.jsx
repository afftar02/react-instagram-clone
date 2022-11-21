import React from 'react';
import styles from './Post.module.scss';

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.userBlock}>
        <div className={styles.avatar}>
          <img src='img/me.jpg' alt='' />
        </div>
        <span>Nikita Steckij</span>
      </div>
      <div className={styles.contentBlock}>
        <img src='img/supafast-setup.jpg' alt='' />
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.likeSection}>
          <svg fill="#ed4956" viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        </div>
        <div className={styles.likeAmountSection}>
          <span>5,000 likes</span>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <span className={styles.nickname}>Nikita Steckij</span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, enim! Praesentium, veniam consequuntur obcaecati architecto ad deleniti dolorem commodi eius sint ducimus quas maiores animi, possimus suscipit nulla et quasi id! Vero, eum? Architecto vitae neque dolore. Quam iusto illo odio molestiae voluptatem atque eum temporibus! Obcaecati commodi error iusto?
            </span>
          </div>
          <div className={styles.commentsLink}>
            <span>View all 15 comments</span>
          </div>
        </div>
        <div className={styles.timeSection}>
          <span>5 HOURS AGO</span>
        </div>
        <div className={styles.addCommentSection}>
          <input type="text" placeholder='Add a comment...'/>
          <button>Post</button>
        </div>
      </div>
    </div>
  )
};

export default Post;