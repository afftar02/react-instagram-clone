import React from 'react';
import styles from './AuthForm.module.scss';

function AuthForm({ type, handleChangeForm }) {
    return (
        <div className={styles.inputContainer} >
            {type === 'registration' && <input type="text" placeholder='First name' onChange={(event) => handleChangeForm('firstName', event.target.value)} />}
            {type === 'registration' && <input type="text" placeholder='Last name' onChange={(event) => handleChangeForm('lastName', event.target.value)} />}
            <input type="email" placeholder='Email' onChange={(event) => handleChangeForm('email', event.target.value)} />
            <input type="password" placeholder='Password' onChange={(event) => handleChangeForm('password', event.target.value)} />
        </div>
    )
};

export default AuthForm;