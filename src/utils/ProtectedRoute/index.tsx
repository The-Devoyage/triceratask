import { FC } from "react";
import { Navigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { isLoggedInVar } from "src/state";

export const ProtectedRoute: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    isLoggedInVar(false);
    return <Navigate to={appRoutes.login.path} />;
  }

  return <>{children}</>;
};
