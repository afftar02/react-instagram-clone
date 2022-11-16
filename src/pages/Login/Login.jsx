import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { AuthContext } from '../..';

function Login() {
    const navigate = useNavigate();
    const { login } = React.useContext(AuthContext)

    const [errorMessageOpacity, setErrorMessageOpacity] = useState('0');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSignIn(data) {
        try {
            await login(data);
            navigate('/home');
        } catch (err) {
            setErrorMessage('Authorization error');
            setErrorMessageOpacity('1');

            setTimeout(() => {
                setErrorMessageOpacity('0');
            }, 3000);
        }
    }

    return (
        <div className={styles.overlay}>
            <AuthForm type='login' onSubmit={handleSignIn} />
            <div className={styles.registerContainer}>
                <span>Don't have an account yet?</span>
                <Link to='/registration' style={{ textDecoration: 'none' }}>
                    <span className={styles.registerLink}>Register</span>
                </Link>
            </div>
            <div className={styles.errorMessage} style={{ opacity: errorMessageOpacity }}>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
};

export default Login;