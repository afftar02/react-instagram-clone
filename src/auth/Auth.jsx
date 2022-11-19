import React from 'react';
import { registerUser, loginUser } from '../services/authService';
import { getCurrentUser } from '../services/userService';

export const AuthContext = React.createContext({});

function Auth({ children }) {
    const [isAuth, setIsAuth] = React.useState(false);
    const [user, setUser] = React.useState({});

    const login = async (data) => {
        await loginUser(data);
        setIsAuth(true);
        const userData = await getCurrentUser();
        setUser(userData);
    };

    const register = async (data) => {
        await registerUser(data);
        setIsAuth(true);
        const userData = await getCurrentUser();
        setUser(userData);
    };

    const logout = () => {
        setIsAuth(false);
        setUser({});
    };

    const getUserName = () => `${user.firstName} ${user.lastName}` || user.email;

    return (
        <AuthContext.Provider value={{ isAuth, user, register, login, logout, getUserName }}>
            {children}
        </AuthContext.Provider>
    )
};

export default Auth;