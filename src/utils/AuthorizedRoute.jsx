import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

function AuthorizedRoute({ children }) {
    const { isAuth } = React.useContext(AuthContext);

    return isAuth ? children : <Navigate to="/login" />;
};

export default AuthorizedRoute;