import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
