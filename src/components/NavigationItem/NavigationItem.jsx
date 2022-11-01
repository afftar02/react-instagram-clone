import React from 'react';
import styles from './NavigationItem.module.scss';

function NavigationItem({ icon, label, isChosen, onClick }) {
    return (
        <div className={styles.itemContainer} onClick={onClick}>
            <div className={styles.item}>
                <div className={styles.imageContainer}>
                    {icon}
                </div>
                <div className={isChosen ? `${styles.chosenContainer} ${styles.labelContainer}` : styles.labelContainer}>
                    <span>{label}</span>
                </div>
            </div>
        </div>
    )
};

export default NavigationItem;