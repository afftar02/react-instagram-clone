import React, { useState } from 'react';
import axios from 'axios';
import styles from './Registration.module.scss';
import Welcome from '../Welcome/Welcome';
import BlueButton from '../../components/BlueButton/BlueButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/tokenSlice';

function Registration() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [namePlaceholder, setNamePlaceholder] = useState("Name");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

    const [namePlaceholderClass, setNamePlaceholderClass] = useState('');
    const [emailPlaceholderClass, setEmailPlaceholderClass] = useState('');
    const [passwordPlaceholderClass, setPasswordPlaceholderClass] = useState('');

    async function onSignUp() {
        try {
            const { data } = await axios.post('http://localhost:4444/auth/register', { name, email, password });
            dispatch(setToken("Bearer " + data.token));
            navigate('/home');
        } catch (err) {
            handleIncorrectInput(err.response.data);
        }
    }

    function handleIncorrectInput(data) {
        data.forEach(item => {
            switch (item.param) {
                case 'name':
                    setName('');
                    setNamePlaceholder(item.msg);
                    setNamePlaceholderClass(styles.redPlaceholder);
                    break;
                case 'email':
                    setEmail('');
                    setEmailPlaceholder(item.msg);
                    setEmailPlaceholderClass(styles.redPlaceholder);
                    break;
                case 'password':
                    setPassword('');
                    setPasswordPlaceholder(item.msg);
                    setPasswordPlaceholderClass(styles.redPlaceholder);
                    break;
                default:
                    alert('Sign up failed');
                    break;
            }
        });
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
                    <div className={styles.headText}>
                        <h1>Registration</h1>
                    </div>
                    <div className={styles.inputContainer} >
                        <input type="text" className={namePlaceholderClass} placeholder={namePlaceholder} value={name} onChange={(event) => setName(event.target.value)} />
                        <input type="email" className={emailPlaceholderClass} placeholder={emailPlaceholder} value={email} onChange={(event) => setEmail(event.target.value)} />
                        <input type="password" className={passwordPlaceholderClass} placeholder={passwordPlaceholder} value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <BlueButton value="Sign up" onClick={onSignUp} />
                </div>
            </div>
        </>
    )
};

export default Registration;