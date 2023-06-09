import { Navigate , Outlet } from 'react-router-dom';



function PrivateRoute() {
   const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
   const isAuthenticated = token !== null;
   console.log(token)
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet /> ;
  
}

export default PrivateRoute;
