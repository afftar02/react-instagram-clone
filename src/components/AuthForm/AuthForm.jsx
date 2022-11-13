import React from 'react';
import styles from './AuthForm.module.scss';
import { useForm } from "react-hook-form";
import ConfirmationButton from '../../components/ConfirmationButton/ConfirmationButton';
import Input from '../../components/Input/Input';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

// eslint-disable-next-line no-useless-escape
const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function AuthForm({ type, onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });

    return (
        <div className={styles.container}>
            <img width={200} src='img/instagram_logo.png' alt='' />
            <div className={styles.formContainer} >
                {
                    type === 'registration' &&
                    <Input
                        validation={register('firstName', {
                            required: "The field is required",
                            minLength: {
                                value: 3,
                                message: 'Minimum 3 characters'
                            },
                            maxLength: {
                                value: 25,
                                message: 'Maximum 25 characters'
                            }
                        })}
                        placeholder='First name'
                        errorMessage={errors?.firstName?.message} />
                }
                {
                    type === 'registration' &&
                    <Input
                        validation={register('lastName', {
                            required: "The field is required",
                            minLength: {
                                value: 3,
                                message: 'Minimum 3 characters'
                            },
                            maxLength: {
                                value: 25,
                                message: 'Maximum 25 characters'
                            }
                        })}
                        placeholder='Last name'
                        errorMessage={errors?.lastName?.message} />
                }
                <Input
                    validation={register('email', {
                        required: "The field is required",
                        pattern: {
                            value: isValidEmail,
                            message: 'Incorrect email format'
                        }
                    })}
                    placeholder='Email'
                    errorMessage={errors?.email?.message} />
                <PasswordInput
                    validation={register('password', {
                        required: "The field is required",
                        minLength: {
                            value: 5,
                            message: 'Minimum 5 characters'
                        },
                        maxLength: {
                            value: 15,
                            message: 'Maximum 15 characters'
                        }
                    })}
                    placeholder='Password'
                    errorMessage={errors?.password?.message} />
            </div>
            <ConfirmationButton value={type === 'registration' ? 'Register' : 'Login'} onClick={handleSubmit(onSubmit)} />
        </div>
    )
};

export default AuthForm;