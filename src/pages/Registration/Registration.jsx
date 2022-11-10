import React, { useState } from 'react';
import axios from 'axios';
import styles from './Registration.module.scss';
import ConfirmationButton from '../../components/ConfirmationButton/ConfirmationButton';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [namePlaceholder, setNamePlaceholder] = useState("Name");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

    const [namePlaceholderClass, setNamePlaceholderClass] = useState('');
    const [emailPlaceholderClass, setEmailPlaceholderClass] = useState('');
    const [passwordPlaceholderClass, setPasswordPlaceholderClass] = useState('');

    async function handleSignUp() {
        try {
            // const { data } = await axios.post('http://localhost:4444/api/auth/register', { name, email, password });
            // dispatch(setToken("Bearer " + data.token));
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
        <div className={styles.overlay}>
            <div className={styles.container}>
                <img width={200} src='img/instagram_logo.png' alt='' />
                <div className={styles.inputContainer} >
                    <input type="text" className={namePlaceholderClass} placeholder={namePlaceholder} value={name} onChange={(event) => setName(event.target.value)} />
                    <input type="email" className={emailPlaceholderClass} placeholder={emailPlaceholder} value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" className={passwordPlaceholderClass} placeholder={passwordPlaceholder} value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <ConfirmationButton value="Register" onClick={handleSignUp} />
            </div>
            <div className={styles.loginContainer}>
                <span>Have an account?</span>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <span className={styles.loginLink}>Login</span>
                </Link>
            </div>
        </div>
    )
};

export default Registration;