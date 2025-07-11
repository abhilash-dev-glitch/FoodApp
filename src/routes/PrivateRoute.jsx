import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const userId = localStorage.getItem('userId');
  return userId ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;