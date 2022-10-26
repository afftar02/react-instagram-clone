import React from 'react';
import styles from './BlueButton.module.scss';

function BlueButton({ value, onClick }) {
    return (
        <div className={styles.button} onClick={onClick}>
            <span>{value}</span>
        </div>
    )
};

export default BlueButton;