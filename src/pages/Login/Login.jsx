import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.scss';
import BlueButton from '../../components/BlueButton/BlueButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/tokenSlice';

function Login() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [errorMessageOpacity, setErrorMessageOpacity] = useState('0');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    async function onSignIn() {
        try {
            const { data } = await axios.post('http://localhost:4444/api/auth/login', { email, password });
            dispatch(setToken("Bearer " + data.token));
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
                <div className={styles.inputContainer}>
                    <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <BlueButton value="Login" onClick={onSignIn} width={268} height={40} margin='50px 0 0' />
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