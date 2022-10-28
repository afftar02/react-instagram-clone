import React from 'react';
import styles from './NavigationItem.module.scss';

function NavigationItem({ image, label, isChosen }) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <div className={styles.imageContainer}>
                    <img src={image} alt='' /> {/* //TODO:add svg images into nav */}
                </div>
                <div className={isChosen ? `${styles.chosenContainer} ${styles.labelContainer}` : styles.labelContainer}>
                    <span>{label}</span>
                </div>
            </div>
        </div>
    )
};

export default NavigationItem;