import { useReactiveVar } from "@apollo/client";
import { Sidebar } from "flowbite-react";
import { useEffect } from "react";
import { HiChartPie, HiClipboardCheck } from "react-icons/hi";
import { TbUserBolt } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { isLoggedInVar, sidebarHiddenVar, userUuidVar } from "src/state";
import { useWindowSize } from "src/utils/useWindowSize";
import { useNewConnectionsSidebarQuery } from "./graphql.generated";

export const AppSidebar = () => {
  const navigate = useNavigate();
  const hidden = useReactiveVar(sidebarHiddenVar);
  const { isMobile } = useWindowSize();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useNewConnectionsSidebarQuery({
    skip: !isLoggedIn,
    variables: {
      get_user_connections_input: {
        query: {
          connected_user: {
            uuid: userUuidVar(),
          },
          accepted: false,
          revoked: false,
        },
      },
    },
  });

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
      children: <p>Dashboard</p>,
      icon: HiChartPie,
      onClick: () => handleNavigate(appRoutes.dashboard.path),
    },
    {
      children: <p>Tasks</p>,
      icon: HiClipboardCheck,
      onClick: () => handleNavigate(appRoutes.listTodos.path),
    },
    {
      children: <p>Connections</p>,
      icon: TbUserBolt,
      onClick: () => handleNavigate(appRoutes.createConnection.path),
      label: data?.get_user_connections?.length,
    },
  ];

  if (!isLoggedInVar()) return null;

  return (
    <Sidebar
      collapseBehavior="hide"
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
              label={item.label || undefined}
            >
              {item.children}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
