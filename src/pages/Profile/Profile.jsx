import styles from './Profile.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { useParams } from 'react-router-dom';
import UserProfile from '../../components/UserProfile/UserProfile';
import ShortPost from '../../components/ShortPost/ShortPost';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userService';
import { getUserPosts } from '../../services/postService';

function Profile() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const user = await getUser(id);
      setUser(user);
      const posts = await getUserPosts(id);
      setPosts(posts);
    })();
  }, [id]);

  return (
    <>
      <Navigation />
      <div className={styles.profileContainer}>
        {user && <UserProfile user={user} postsAmount={posts.length} />}
        <div className={styles.postsBlock}>
          {
            posts.map((post) =>
              <ShortPost
                key={post.id}
                id={post.id}
                likesAmount={post.likesAmount}
                commentsAmount={post.commentsAmount}
              />
            )
          }
        </div>
      </div>
    </>
  )
};

export default Profile;