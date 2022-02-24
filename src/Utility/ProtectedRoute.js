import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import LogoLoading from './LogoLoading';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuth, loading } = useContext(AuthContext);

    return !isAuth ? (!loading ? <Navigate to="/login" /> : <LogoLoading/>) : <Outlet />;
}

export default ProtectedRoute