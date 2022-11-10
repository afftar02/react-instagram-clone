import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Create from './pages/Create/Create';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
