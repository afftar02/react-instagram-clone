import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Authorization/Login';
import Registration from './pages/Registration/Registration';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <div className="wrapper">
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
      </Routes>
    </div>
  );
}

export default App;
