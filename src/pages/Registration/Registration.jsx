import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import ConfirmationButton from '../../components/ConfirmationButton/ConfirmationButton';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/authSlice';

function Registration() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = React.useState({});

    const [errorMessageOpacity, setErrorMessageOpacity] = React.useState('0');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleChangeForm = (name, value) => {
        setForm({ ...form, [name]: value })
    };

    async function handleSignUp() {
        try {
            const response = await dispatch(register(form));
            localStorage.setItem("access_token", response.payload.accessToken);
            localStorage.setItem("refresh_token", response.payload.refreshToken);
            navigate('/home');
        } catch (err) {
            setErrorMessage('Incorrect registration data');
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