import React from 'react';
import styles from './BlueButton.module.scss';

function BlueButton({ value, width, height, margin, onClick }) {
    return (
        <div className={styles.button} style={{ width: width, height: height, margin: margin }} onClick={onClick}>
            <span>{value}</span>
        </div>
    )
};

export default BlueButton;