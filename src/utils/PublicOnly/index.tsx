import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { isLoggedInVar } from "src/state";

export const PublicOnly: FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  if (isLoggedIn) {
    return <Navigate to={appRoutes.dashboard.path} />;
  }

  return <>{children}</>;
};
