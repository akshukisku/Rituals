// import React from 'react'
import { useAppSelector } from '../hooks/useredux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const UserProtected = () => {
 const { isAuthenticate, user, role } = useAppSelector((state)=>state.auth)
  const location = useLocation();

  if (!isAuthenticate || !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default UserProtected