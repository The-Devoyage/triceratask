import { Flowbite } from "flowbite-react";
import { AppNavbar } from "./views/navbar";
import { AppSidebar } from "./views/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "./views/toaster";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "./state";

export interface Todo {
  _id: string;
  name: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export const App = () => {
  const darkMode = useReactiveVar(darkModeVar);

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
                  "bg-sky-100 px-4 py-4 after:rounded-none before:rounded-none first:rounded-tl-lg last:rounded-tr-lg dark:bg-slate-800 dark:text-slate-400",
              },
            },
            row: {
              base:
                "text-slate-600 px-4 py-4 bg-white last:rounded-bl-lg last:rounded-br-lg dark:bg-slate-800 dark:text-slate-400",
            },
          },
          card: {
            root: {
              base:
                "bg-white rounded-lg shadow-lg dark:bg-slate-800 text-slate-600 dark:text-slate-200",
            },
          },
        },
      }}
    >
      <div className={`h-full ${darkMode && "dark"}`}>
        <div
          className={
            darkMode ? "gradient-background-dark" : "gradient-background"
          }
        />
        <AppNavbar />
        <div className="flex">
          <AppSidebar />
          <div className="container p-4 mx-auto w-full">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </Flowbite>
  );
};
