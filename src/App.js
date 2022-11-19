import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './auth/Auth';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Profile from './pages/Profile/Profile';
import AuthorizedRoute from './utils/AuthorizedRoute';
import UnauthorizedRoute from './utils/UnauthorizedRoute';

function App() {
  return (
    <div className="wrapper">
      <Auth>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route exact path="/registration" element={
            <UnauthorizedRoute>
              <Registration />
            </UnauthorizedRoute>
          } />
          <Route exact path="/login" element={
            <UnauthorizedRoute>
              <Login />
            </UnauthorizedRoute>
          } />
          <Route exact path="/home" element={
            <AuthorizedRoute>
              <Home />
            </AuthorizedRoute>
          } />
          <Route exact path="/create" element={
            <AuthorizedRoute>
              <Create />
            </AuthorizedRoute>
          } />
          <Route exact path="/profile" element={
            <AuthorizedRoute>
              <Profile />
            </AuthorizedRoute>
          } />
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
