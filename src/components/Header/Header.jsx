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

const navItems = [
    {
        id: 1,
        icon: <HomeSvg />,
        label: 'Home'
    },
    {
        id: 2,
        icon: <ExploreSvg />,
        label: 'Explore'
    },
    {
        id: 3,
        icon: <NotificationsSvg />,
        label: 'Notifications'
    },
    {
        id: 4,
        icon: <MessagesSvg />,
        label: 'Messages'
    },
    {
        id: 5,
        icon: <BookmarksSvg />,
        label: 'Bookmarks'
    },
    {
        id: 6,
        icon: <ListsSvg />,
        label: 'Lists'
    },
    {
        id: 7,
        icon: <ProfileSvg />,
        label: 'Profile'
    },
    {
        id: 8,
        icon: <MoreSvg />,
        label: 'More'
    }
];

function Header() {
    const [chosen, setChosen] = React.useState(1);

    function onNavItemClick(item) {
        setChosen(item.id);
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
                                    isChosen={item.id === chosen ? true : false}
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