import React from 'react';
import styles from './AuthForm.module.scss';

function AuthForm({ type, handleChangeForm }) {
    const [password, setPassword] = React.useState('');
    const [showed, setShowed] = React.useState(false);

    return (
        <div className={styles.formContainer} >
            {type === 'registration' && <input type="text" className={styles.input} placeholder='First name' onChange={(event) => handleChangeForm('firstName', event.target.value)} />}
            {type === 'registration' && <input type="text" className={styles.input} placeholder='Last name' onChange={(event) => handleChangeForm('lastName', event.target.value)} />}
            <input type="email" className={styles.input} placeholder='Email' onChange={(event) => handleChangeForm('email', event.target.value)} />
            <div className={styles.passwordContainer}>
                <input type={showed ? "text" : "password"} className={styles.passwordInput} value={password} placeholder='Password' onChange={(event) => { setPassword(event.target.value); handleChangeForm('password', password) }} />
                {password && <button onClick={() => setShowed(!showed)}>{showed ? 'Hide' : 'Show'}</button>}
            </div>
        </div>
    )
};

export default AuthForm;