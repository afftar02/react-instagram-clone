import React from 'react';
import styles from './Welcome.module.scss';
import { Link } from 'react-router-dom';
import BlueButton from '../../components/BlueButton/BlueButton';

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src='img/welcome_background.png' alt='' />
        <img src='img/bird.png' alt='' className={styles.birdImage} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.contentContainer}>
          <img width={45} src='img/blue-bird.png' alt='' />
          <span className={styles.firstText}>Happening now</span>
          <span className={styles.secondText}>Join Twitter today.</span>
          <Link style={{ textDecoration: 'none' }} to='/registration'>
            <BlueButton value="Sign up with phone or email" />
          </Link>
          <div className={styles.signInContainer}>
            <div className={styles.textContainer}>
              <span>Already have an account?</span>
            </div>
            <Link style={{ textDecoration: 'none' }} to='/login'>
              <div className={styles.signInButton}>
                <span>Sign in</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Welcome;