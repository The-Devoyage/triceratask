import { Flowbite } from "flowbite-react";
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
    <Flowbite
      theme={{
        theme: {
          button: {
            color: {
              info: "bg-sky-700 text-white hover:bg-sky-600",
            },
          },
          table: {
            head: {
              base: "text-sky-700 px-4 py-4 rounded-tl-lg rounded-tr-lg",
              cell: {
                base:
                  "bg-sky-100 px-4 py-4 after:rounded-none before:rounded-none first:rounded-tl-lg last:rounded-tr-lg",
              },
            },
            row: {
              base: "text-slate-600 px-4 py-4",
            },
          },
        },
      }}
    >
      <div className="h-screen">
        <AppNavbar />
        <div className="flex flex-row h-full w-full">
          <AppSidebar />
          <div className="container p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </Flowbite>
  );
};
