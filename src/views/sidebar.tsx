import { Sidebar } from "flowbite-react";
import { HiChartPie, HiClipboardCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const AppSidebar = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      icon: HiChartPie,
      onClick: () => navigate("/"),
      children: <p>Dashboard</p>,
    },
    {
      onClick: () => navigate("/list"),
      icon: HiClipboardCheck,
      children: <p>Todos</p>,
    },
  ];

  return (
    <Sidebar aria-label="Default sidebar example">
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
