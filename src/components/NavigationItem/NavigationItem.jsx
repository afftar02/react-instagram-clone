import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.scss';

function NavigationItem({ icon, label, isChosen, onClick, url }) {
    return (
        <div className={styles.itemContainer} onClick={onClick}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={url}>
                <div className={isChosen ? `${styles.chosenItem} ${styles.item}` : styles.item}>
                    <div className={styles.imageContainer}>
                        {icon}
                    </div>
                    <div className={styles.labelContainer}>
                        <span>{label}</span>
                    </div>
                </div>
            </Link>
        </div >
    )
};

export default NavigationItem;