import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.scss';
import Welcome from '../Welcome/Welcome';
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
            const { data } = await axios.post('http://localhost:4444/auth/login', { email, password });
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
        <>
            <Welcome />
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <Link to='/'>
                        <svg className={styles.cross} viewBox="0 0 24 24" aria-hidden="true" width={20} height={20}>
                            <g>
                                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                            </g>
                        </svg>
                    </Link>
                    <img width={45} src='img/blue-bird.png' alt='' />
                    <div className={styles.headText}>
                        <h1>Sign in to Twitter</h1>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                        <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <BlueButton value="Sign in" onClick={onSignIn} />
                </div>
                <div className={styles.errorMessage} style={{ opacity: errorMessageOpacity }}>
                    <span>{errorMessage}</span>
                </div>
            </div>
        </>
    )
};

export default Login;