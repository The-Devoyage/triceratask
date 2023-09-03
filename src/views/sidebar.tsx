import { Sidebar } from "flowbite-react";
import { HiChartPie, HiClipboardCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const AppSidebar = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      icon: HiChartPie,
      onClick: () => navigate("/"),
      className: "cursor-pointer",
      children: <p>Dashboard</p>,
    },
    {
      onClick: () => navigate("/list"),
      icon: HiClipboardCheck,
      className: "cursor-pointer",
      children: <p>Todos</p>,
    },
  ];

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidebarItems.map((item) => (
            <Sidebar.Item
              icon={item.icon}
              onClick={item.onClick}
              className={item.className}
            >
              {item.children}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
