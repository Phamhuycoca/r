import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  element: ReactNode;
}

export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { isAuthenticated } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")!)
    : { isAuthenticated: false };
  
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" replace />;
};