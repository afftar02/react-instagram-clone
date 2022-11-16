import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { register, login } from './services/authService';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const AuthContext = React.createContext();

root.render(
  <AuthContext.Provider value={{ register, login }}>
    <Router>
      <App />
    </Router>
  </AuthContext.Provider>
);