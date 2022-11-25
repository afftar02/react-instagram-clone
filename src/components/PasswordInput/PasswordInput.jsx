import { useState } from 'react';
import styles from './PasswordInput.module.scss';

function PasswordInput({ validation, placeholder, errorMessage }) {
    const [password, setPassword] = useState('');
    const [showed, setShowed] = useState(false);

    return (
        <div className={styles.inputContainer}>
            <div className={styles.passwordContainer}>
                <input
                    type={showed ? "text" : "password"}
                    {...validation}
                    className={styles.passwordInput}
                    value={password}
                    placeholder={placeholder}
                    onChange={(event) => setPassword(event.target.value)} />
                {password && <button onClick={() => setShowed(!showed)}>{showed ? 'Hide' : 'Show'}</button>}
            </div>
            <div className={styles.validationContainer}>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
};

export default PasswordInput;