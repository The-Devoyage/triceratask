import { useReactiveVar } from "@apollo/client";
import { Sidebar } from "flowbite-react";
import { useEffect } from "react";
import { HiChartPie, HiClipboardCheck } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { isLoggedInVar, sidebarHiddenVar } from "src/state";
import { useWindowSize } from "src/utils/useWindowSize";

export const AppSidebar = () => {
  const navigate = useNavigate();
  const hidden = useReactiveVar(sidebarHiddenVar);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isMobile) {
      sidebarHiddenVar(true);
    } else {
      sidebarHiddenVar(false);
    }
  }, [isMobile]);

  const handleNavigate = (path: string) => {
    if (isMobile) sidebarHiddenVar(true);
    navigate(path);
  };

  const sidebarItems = [
    {
      icon: HiChartPie,
      onClick: () => handleNavigate(appRoutes.dashboard.path),
      children: <p>Dashboard</p>,
    },
    {
      onClick: () => handleNavigate(appRoutes.listTodos.path),
      icon: HiClipboardCheck,
      children: <p>Todos</p>,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    isLoggedInVar(false);
    navigate(appRoutes.login.path);
  };

  if (!isLoggedInVar()) return null;

  return (
    <Sidebar
      style={{
        height: "calc(100vh - 60px)",
      }}
      hidden={hidden}
      className="absolute md:sticky top-[60px] z-50"
      theme={{
        root: {
          collapsed: {
            on: "w-16",
            off: "w-64",
          },
          inner:
            "h-full overflow-y-auto overflow-x-hidden bg-neutral-50 py-4 px-3 dark:bg-gray-800",
        },
      }}
    >
      <Sidebar.Items className="flex flex-col justify-between h-full">
        <Sidebar.ItemGroup>
          {sidebarItems.map((item, i) => (
            <Sidebar.Item
              key={i}
              icon={item.icon}
              onClick={item.onClick}
              className="cursor-pointer"
            >
              {item.children}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            icon={FiLogOut}
            onClick={handleLogout}
            className="cursor-pointer"
          >
            <p>Logout</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
