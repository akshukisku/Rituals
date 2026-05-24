
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useredux';

const AdminProtected = () => {
 const { isAuthenticate, user, role } = useAppSelector((state)=>state.auth)
  const location = useLocation();

  if (!isAuthenticate || !user) {
    return <Navigate to="/login" state={{ from: location }}  />;
  }

  if (role !== "admin") {
    return <Navigate to="/"  />;
  }

  return <Outlet />;
};

export default AdminProtected;
