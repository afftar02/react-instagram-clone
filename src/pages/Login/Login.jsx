import { useState } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../auth/Auth';
import CustomLink from '../../components/CustomLink/CustomLink';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

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
                <CustomLink to='/registration'>
                    <span className={styles.registerLink}>Register</span>
                </CustomLink>
            </div>
            <div className={styles.errorMessage} style={{ opacity: errorMessageOpacity }}>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
};

export default Login;