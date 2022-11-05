import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Navigation from './components/Navigation/Navigation';

function App() {
  const location = useLocation();

  return (
    <div className="wrapper">
      {
        location.pathname !== "/registration" && location.pathname !== "/login" && <Navigation />
      }
      <Routes>
        <Route
          exact path="/"
          element={<Navigate to="/login" />}
        />
        <Route
          exact path="/registration"
          element={<Registration />}
        />
        <Route
          exact path="/login"
          element={<Login />}
        />
        <Route
          exact path="/home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
