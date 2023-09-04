import { useReactiveVar } from "@apollo/client";
import { Sidebar } from "flowbite-react";
import { useEffect } from "react";
import { HiChartPie, HiClipboardCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { sidebarHiddenVar } from "src/state";
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
      onClick: () => handleNavigate("/"),
      children: <p>Dashboard</p>,
    },
    {
      onClick: () => handleNavigate("/list"),
      icon: HiClipboardCheck,
      children: <p>Todos</p>,
    },
  ];

  return (
    <Sidebar
      hidden={hidden}
      className="absolute md:relative z-50"
      theme={{
        root: {
          inner: "bg-neutral-100 h-screen z-50",
        },
      }}
    >
      <Sidebar.Items>
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
      </Sidebar.Items>
    </Sidebar>
  );
};
