import React from 'react';
import styles from './Header.module.scss';
import BlueButton from '../../components/BlueButton/BlueButton';

function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.logoContainer}>
                        <img width={35} src='img/blue-bird.png' alt='twitter' />
                    </div>
                    <div className={styles.menuContainer}>
                        
                    </div>
                    <BlueButton value="Tweet" width={193} height={52} margin='16px 0' />
                </div>
                <div className={styles.bottomContainer}>

                </div>
            </div>
        </header>
    )
};

export default Header;