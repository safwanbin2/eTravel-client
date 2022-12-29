import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }
    return children;
};

export default PrivateRoute;