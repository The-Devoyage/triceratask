import { useReactiveVar } from "@apollo/client";
import { Button, Navbar } from "flowbite-react";
import { HiMenu, HiOutlineMoon, HiOutlineSun, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { darkModeVar, isLoggedInVar, sidebarHiddenVar } from "src/state";

export const AppNavbar = () => {
  const navigate = useNavigate();
  const sidebarHidden = useReactiveVar(sidebarHiddenVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  const handleDarkMode = () => {
    darkModeVar(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <Navbar className="bg-sky-100 sticky top-0 z-50" fluid>
      <div className="flex row items-center">
        <Button
          color="light"
          className="sm:block md:hidden border-none"
          onClick={() => sidebarHiddenVar(!sidebarHidden)}
        >
          <HiMenu className="text-sky-700" />
        </Button>
        <div
          onClick={() => navigate(appRoutes.dashboard.path)}
          className="flex items-center cursor-pointer"
        >
          <img
            className="w-10 h-10 mr-2"
            src="https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png"
          />
          <span className="text-xl font-semibold dark:text-white m-0 text-sky-700">
            TriceraTask
          </span>
        </div>
      </div>
      <div className="flex-grow" />
      <Button
        onClick={handleDarkMode}
        size="lg"
        className={darkMode ? "bg-sky-300" : "bg-sky-900"}
      >
        {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
      {isLoggedIn ? (
        <Button
          onClick={() => navigate(appRoutes.createTodo.path)}
          className="ml-1 flex items-center justify-center"
        >
          <HiPlus className="md:mr-1 h-4" />
          <span className="hidden md:flex items-center">Todo</span>
        </Button>
      ) : (
        <Button
          className="hidden md:block ml-1"
          onClick={() => navigate(appRoutes.login.path)}
        >
          <span>Login</span>
        </Button>
      )}
    </Navbar>
  );
};
