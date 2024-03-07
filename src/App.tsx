import { useEffect, useState } from "react";
import { Alert, Button, Flowbite, Modal } from "flowbite-react";
import { AppNavbar, AppSidebar, Toaster } from "./views";
import { Outlet, useNavigate } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import {
  darkModeVar,
  isLoggedInVar,
  sidebarHiddenVar,
  userEmailVar,
  userPhoneVar,
  userUuidVar,
} from "./state";
import { useUpdateActive } from "./utils/useUpdateActive";
import { theme } from "./theme.ts";
import { useWindowSize } from "./utils/useWindowSize/index.ts";
import { useGetUsersActive } from "./utils/useGetUsersActive/index.tsx";
import { MdContacts } from "react-icons/md";
import clsx from "clsx";
import { appRoutes } from "./routes.tsx";

export interface Todo {
  _id: string;
  name: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export const App = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(
    localStorage.getItem("showAlert") === null
  );
  const darkMode = useReactiveVar(darkModeVar);
  const { isMobile } = useWindowSize();
  const sidebarHidden = useReactiveVar(sidebarHiddenVar);
  const userEmail = useReactiveVar(userEmailVar);
  const userPhone = useReactiveVar(userPhoneVar);
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  useUpdateActive();
  useGetUsersActive();

  useEffect(() => {
    if (!isLoggedIn) return;

    if (!userEmail || !userPhone) setShowModal(true);
    if (userEmail || userPhone) setShowModal(false);
  }, [userEmail, userPhone, isLoggedIn]);

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
      <Modal show={showModal} className={clsx({ dark: darkMode })}>
        <Modal.Body className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            Backup Your Account
          </h1>
          <MdContacts className="text-7xl text-sky-500" />
          <p className="text-center m-4 dark:text-gray-300 w-96">
            Please backup your account by adding your email and phone number.
          </p>
          <div className="flex flex-row space-x-4">
            <Button outline onClick={() => setShowModal(false)}>
              Maybe Later
            </Button>
            <Button
              onClick={() => {
                setShowModal(false);
                navigate(
                  appRoutes.profile.path.replace(":uuid", userUuidVar()!)
                );
              }}
            >
              My Profile
            </Button>
          </div>
        </Modal.Body>
      </Modal>
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
