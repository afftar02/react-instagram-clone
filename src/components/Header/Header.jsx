import React from 'react';
import styles from './Header.module.scss';
import BlueButton from '../BlueButton/BlueButton';
import NavigationItem from '../NavigationItem/NavigationItem';

function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.logoContainer}>
                        <img width={35} src='img/blue-bird.png' alt='twitter' />
                    </div>
                    <div className={styles.menuContainer}>
                        <nav>
                            <NavigationItem
                                image='./assets/home.svg'
                                label='Home'
                                isChosen={true}
                            />
                            <NavigationItem
                                label='Explore'
                                isChosen={false}
                            />
                            <NavigationItem
                                label='Notifications'
                                isChosen={false}
                            />
                            <NavigationItem
                                label='Messages'
                                isChosen={false}
                            />
                            <NavigationItem
                                label='Bookmarks'
                                isChosen={false}
                            />
                            <NavigationItem
                                label='Lists'
                                isChosen={false}
                            />
                            <NavigationItem
                                label='Profile'
                                isChosen={false}
                            />
                            <NavigationItem
                                label='More'
                                isChosen={false}
                            />
                        </nav>
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