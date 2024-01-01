import { useState } from "react";
import { Alert, Flowbite } from "flowbite-react";
import { AppNavbar, AppSidebar, Toaster } from "./views";
import { Outlet } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, sidebarHiddenVar } from "./state";
import { useUpdateActive } from "./utils/useUpdateActive";
import { theme } from "./theme.ts";
import { useWindowSize } from "./utils/useWindowSize/index.ts";
import { useGetUsersActive } from "./utils/useGetUsersActive/index.tsx";

export interface Todo {
  _id: string;
  name: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export const App = () => {
  const [showAlert, setShowAlert] = useState(
    localStorage.getItem("showAlert") === null
  );
  const darkMode = useReactiveVar(darkModeVar);
  const { isMobile } = useWindowSize();
  const sidebarHidden = useReactiveVar(sidebarHiddenVar);
  useUpdateActive();
  useGetUsersActive();

  const handleHideSidebar = () => {
    if (!sidebarHidden && isMobile) sidebarHiddenVar(true);
  };

  return (
    <Flowbite
      theme={{
        theme,
      }}
    >
      {showAlert && (
        <Alert
          color="warning"
          onDismiss={() => {
            localStorage.setItem("showAlert", "false");
            setShowAlert(false);
          }}
        >
          <span>
            <p>
              <span className="font-bold mr-2">Alpha Release</span>
              Expect bugs and missing features.
            </p>
          </span>
        </Alert>
      )}
      <div className={`${darkMode && "dark"}`}>
        <div
          className={
            darkMode ? "gradient-background-dark" : "gradient-background"
          }
        />
        <AppNavbar />
        <div className="flex">
          <AppSidebar />
          <div
            className="container p-4 mx-auto w-full"
            onClick={handleHideSidebar}
          >
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </Flowbite>
  );
};
