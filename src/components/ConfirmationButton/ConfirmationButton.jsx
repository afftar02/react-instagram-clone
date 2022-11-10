import React from 'react';
import styles from './ConfirmationButton.module.scss';

function ConfirmationButton({ value, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>{value}</span>
        </button>
    )
};

export default ConfirmationButton;