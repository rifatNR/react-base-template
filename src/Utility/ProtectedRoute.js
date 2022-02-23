import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import LogoLoading from './LogoLoading';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    let isAuth = false; // TODO: DELETE
    let loading = false; // TODO: DELETE

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute