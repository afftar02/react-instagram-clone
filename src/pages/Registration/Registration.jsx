import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/authSlice';

function Registration() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errorMessageOpacity, setErrorMessageOpacity] = React.useState('0');
    const [errorMessage, setErrorMessage] = React.useState('');

    async function handleSignUp(data) {
        try {
            const response = await dispatch(register(data));
            localStorage.setItem("access_token", response.payload.accessToken);
            localStorage.setItem("refresh_token", response.payload.refreshToken);
            navigate('/home');
        } catch (err) {
            setErrorMessage('Registration error');
            setErrorMessageOpacity('1');

            setTimeout(() => {
                setErrorMessageOpacity('0');
            }, 3000);
        }
    }

    return (
        <div className={styles.overlay}>
            <AuthForm type='registration' onSubmit={handleSignUp} />
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