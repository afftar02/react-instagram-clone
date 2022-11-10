import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../../components/ConfirmationButton/ConfirmationButton';

function Registration() {
    const navigate = useNavigate();

    const [form, setForm] = React.useState({});

    const [errorMessageOpacity, setErrorMessageOpacity] = React.useState('0');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleChangeForm = (name, value) => {
        setForm({ ...form, [name]: value })
    };

    async function handleSignUp() {
        try {
            // const { data } = await axios.post('http://localhost:4444/api/auth/register', { firstName, secondName, email, password });
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
                <AuthForm type='registration' handleChangeForm={handleChangeForm} />
                <ConfirmationButton value="Register" onClick={handleSignUp} />
            </div>
            <div className={styles.loginContainer}>
                <span>Have an account?</span>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <span className={styles.loginLink}>Login</span>
                </Link>
            </div>
            <div className={styles.errorMessage} style={{ opacity: errorMessageOpacity }}>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
};

export default Registration;