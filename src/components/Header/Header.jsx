import React from 'react';
import styles from './Header.module.scss';
import BlueButton from '../BlueButton/BlueButton';
import NavigationItem from '../NavigationItem/NavigationItem';

import { ReactComponent as HomeSvg } from './assets/home.svg';
import { ReactComponent as ExploreSvg } from './assets/explore.svg';
import { ReactComponent as NotificationsSvg } from './assets/notifications.svg';
import { ReactComponent as MessagesSvg } from './assets/messages.svg';
import { ReactComponent as BookmarksSvg } from './assets/bookmarks.svg';
import { ReactComponent as ListsSvg } from './assets/lists.svg';
import { ReactComponent as ProfileSvg } from './assets/profile.svg';
import { ReactComponent as MoreSvg } from './assets/more.svg';

function Header() {
    const [navItems, setNavItems] = React.useState([
        {
            icon: <HomeSvg />,
            label: 'Home',
            isChosen: true
        },
        {
            icon: <ExploreSvg />,
            label: 'Explore',
            isChosen: false
        },
        {
            icon: <NotificationsSvg />,
            label: 'Notifications',
            isChosen: false
        },
        {
            icon: <MessagesSvg />,
            label: 'Messages',
            isChosen: false
        },
        {
            icon: <BookmarksSvg />,
            label: 'Bookmarks',
            isChosen: false
        },
        {
            icon: <ListsSvg />,
            label: 'Lists',
            isChosen: false
        },
        {
            icon: <ProfileSvg />,
            label: 'Profile',
            isChosen: false
        },
        {
            icon: <MoreSvg />,
            label: 'More',
            isChosen: false
        }
    ]);

    function onNavItemClick(item) {
        console.log(item);
    }

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.logoContainer}>
                        <img width={35} src='img/blue-bird.png' alt='twitter' />
                    </div>
                    <div className={styles.menuContainer}>
                        <nav>
                            {navItems.map((item) =>
                                <NavigationItem icon={item.icon}
                                    label={item.label}
                                    isChosen={item.isChosen}
                                    onClick={() => onNavItemClick(item)} />)}
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