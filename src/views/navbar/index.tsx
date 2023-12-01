import { useReactiveVar } from "@apollo/client";
import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { HiMenu, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import {
  darkModeVar,
  isActiveVar,
  isLoggedInVar,
  sidebarHiddenVar,
  userIdentifierVar,
  userUuidVar,
} from "src/state";
import { useGetUserQuery } from "./graphql.generated";

export const AppNavbar = () => {
  const navigate = useNavigate();
  const sidebarHidden = useReactiveVar(sidebarHiddenVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isActive = useReactiveVar(isActiveVar);
  const darkMode = useReactiveVar(darkModeVar);
  const { data } = useGetUserQuery({
    skip: !isLoggedIn,
    variables: {
      get_user_input: {
        query: {
          uuid: userUuidVar(),
        },
      },
    },
    onCompleted: (data) => {
      if (data?.get_user?.share_active) {
        isActiveVar(data.get_user.share_active);
      }
    },
  });

  const handleDarkMode = () => {
    darkModeVar(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_uuid");
    localStorage.removeItem("user_identifier");
    isLoggedInVar(false);
    userUuidVar(null);
    userIdentifierVar(null);
    isActiveVar(false);
    navigate(appRoutes.login.path);
  };

  return (
    <Navbar className="bg-sky-100 sticky top-0 z-50" fluid>
      <div className="flex row items-center">
        <Button
          color="transparent"
          className="sm:block md:hidden border-none"
          onClick={() => sidebarHiddenVar(!sidebarHidden)}
        >
          <HiMenu className="text-sky-700" />
        </Button>
        <div
          onClick={() => navigate(appRoutes.dashboard.path)}
          className="hidden md:flex items-center cursor-pointer"
        >
          <img
            className="w-10 h-10 mr-2 filter brightness-125"
            src="https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png"
          />
          <span className="text-xl font-semibold dark:text-white m-0 text-sky-700">
            TriceraTask
          </span>
        </div>
      </div>
      {isLoggedIn ? (
        <div className="flex relative">
          <Tooltip content="Create Task" placement="bottom">
            <Button
              onClick={() => navigate(appRoutes.createTodo.path)}
              className="mr-1 flex items-center justify-center"
              outline
              gradientDuoTone="purpleToBlue"
            >
              <HiPlus className="h-4" />
            </Button>
          </Tooltip>
          <Dropdown
            inline
            arrowIcon={false}
            label={
              <Avatar
                img={data?.get_user.profile_img ?? ""}
                className="ml-1 cursor-pointer hover:scale-110"
                status={isActive ? "online" : "offline"}
                onClick={() =>
                  navigate(
                    appRoutes.profile.path.replace(":uuid", userUuidVar() ?? "")
                  )
                }
              />
            }
            trigger="hover"
            dismissOnClick
          >
            <Dropdown.Header
              className="cursor-pointer hover:bg-gray-600"
              onClick={() =>
                navigate(
                  appRoutes.profile.path.replace(":uuid", userUuidVar() ?? "")
                )
              }
            >
              <span className="block text-sm w-32">{userIdentifierVar()}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown>
        </div>
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
