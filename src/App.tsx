import { AppNavbar } from "./views/navbar";
import { AppSidebar } from "./views/sidebar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="h-screen">
      <AppNavbar />
      <div className="flex flex-row h-full">
        <AppSidebar />
        <Outlet />
      </div>
    </div>
  );
};
