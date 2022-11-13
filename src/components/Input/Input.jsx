import React from 'react';
import styles from './Input.module.scss';

function Input({ validation, placeholder, errorMessage }) {
    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                {...validation}
                className={styles.input}
                placeholder={placeholder} />
            <div className={styles.validationContainer}>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
};

export default Input;