import { AppNavbar } from "./views/navbar";
import { AppSidebar } from "./views/sidebar";
import { Outlet } from "react-router-dom";

export interface Todo {
  _id: string;
  name: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export const App = () => {
  return (
    <div className="h-screen">
      <AppNavbar />
      <div className="flex flex-row h-full w-full">
        <AppSidebar />
        <div className="container p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
