import React, { useContext } from 'react'
import { Navigate, Outlet, Route, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import LogoLoading from './LogoLoading';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    
    const { isAuth, loading, active_route, SetActiveRoute } = useContext(AuthContext);

    const curr_route = useLocation().pathname;
    if(active_route !== curr_route) SetActiveRoute(curr_route)

    return !isAuth ? (!loading ? <Navigate to="/login" /> : <LogoLoading/>) : <Outlet />;
}

export default ProtectedRoute