import { Navigate } from "react-router";
import useAuth from "../pages/auth/useAuth";

const ProtectedRoute = ({ children }) => {
   console.log("auth", useAuth());
   const { user } = useAuth();
   return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
