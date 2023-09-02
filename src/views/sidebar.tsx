import { Sidebar } from "flowbite-react";
import { HiChartPie, HiClipboardCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const AppSidebar = () => {
  const navigate = useNavigate();

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie} onClick={() => navigate("/")}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => navigate("/list")}
            icon={HiClipboardCheck}
          >
            <p>Todos</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
