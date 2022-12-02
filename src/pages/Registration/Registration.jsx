import { useState } from 'react';
import styles from './Registration.module.scss';
import CustomLink from '../../components/CustomLink/CustomLink';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/Auth';

function Registration() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [errorMessageOpacity, setErrorMessageOpacity] = useState('0');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSignUp(data) {
        try {
            await register(data);
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
                <CustomLink to='/login'>
                    <span className={styles.loginLink}>Login</span>
                </CustomLink>
            </div>
            <div className={styles.errorMessage} style={{ opacity: errorMessageOpacity }}>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
};

export default Registration;