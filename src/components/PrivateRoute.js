import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const user = useSelector((state) => state.handleCart)

    return user.userInfo ? children : <Navigate to="/login" />
};

export default PrivateRoute;