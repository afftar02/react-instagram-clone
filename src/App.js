import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './auth/Auth';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Profile from './pages/Profile/Profile';
import AuthorizedRoutes from './utils/AuthorizedRoutes';
import UnauthorizedRoutes from './utils/UnauthorizedRoutes';

function App() {
  return (
    <div className="wrapper">
      <Auth>
        <UnauthorizedRoutes>
          <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </UnauthorizedRoutes>
        <AuthorizedRoutes>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/post/create" element={<Create />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </AuthorizedRoutes>
      </Auth>
    </div>
  );
}

export default App;
