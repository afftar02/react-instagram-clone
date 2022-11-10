import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.scss';
import ConfirmationButton from '../../components/ConfirmationButton/ConfirmationButton';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = React.useState({});

    const [errorMessageOpacity, setErrorMessageOpacity] = useState('0');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeForm = (name, value) => {
        setForm({ ...form, [name]: value })
    };

    async function handleSignIn() {
        try {
            // const { data } = await axios.post('http://localhost:4444/api/auth/login', { email, password });
            // dispatch(setToken("Bearer " + data.token));
            navigate('/home');
        } catch (err) {
            setErrorMessage(err.response.data.message);
            setErrorMessageOpacity('1');

            setTimeout(() => {
                setErrorMessageOpacity('0');
            }, 3000);
        }
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <img width={200} src='img/instagram_logo.png' alt='' />
                <AuthForm type='login' handleChangeForm={handleChangeForm} />
                <ConfirmationButton value="Login" onClick={handleSignIn} />
            </div>
            <div className={styles.registerContainer}>
                <span>Don't have an account yet?</span>
                <Link to='/registration' style={{textDecoration: 'none'}}>
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