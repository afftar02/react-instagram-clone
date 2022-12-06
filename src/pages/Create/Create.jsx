import styles from './Create.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import PostCreation from '../../components/PostCreation/PostCreation';

function Create() {
  return (
    <>
      <Navigation />
      <div className={styles.createContainer}>
        <PostCreation />
      </div>
    </>
  )
};

export default Create;