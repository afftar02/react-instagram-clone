import { useState, useEffect, createContext, useContext } from 'react';
import { registerUser, loginUser } from '../services/authService';
import { getCurrentUser } from '../services/userService';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

function Auth({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        (async () => {
            if (localStorage.getItem('tokens')) {
                setIsAuth(true);
                const userData = await getCurrentUser();
                setUser(userData);
            }
            setIsAuthChecked(true);
        })();
    }, []);

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
            {isAuthChecked && children}
        </AuthContext.Provider>
    )
};

export default Auth;