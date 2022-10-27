import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Authorization/Login';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Welcome from './pages/Welcome/Welcome';
import Header from './components/Header/Header';

function App() {
  const location = useLocation();

  return (
    <div className="wrapper">
      {
        location.pathname !== "/" && location.pathname !== "/registration" && location.pathname !== "/login" && <Header />
      }
      <Routes>
        <Route
          exact path="/"
          element={<Welcome />}
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
