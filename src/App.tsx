import { useState, useEffect } from "react";
import { Alert, Flowbite } from "flowbite-react";
import { AppNavbar, AppSidebar, Toaster } from "./views";
import { Outlet } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, userUuidVar } from "./state";
import { useUpdateUserLastActiveMutation } from "./graphql.generated";
import dayjs from "src/utils/dayjs";

export interface Todo {
  _id: string;
  name: string;
  todo: string;
  createdAt: string;
  updatedAt: string;
}

export const App = () => {
  const [showAlert, setShowAlert] = useState(true);
  const darkMode = useReactiveVar(darkModeVar);
  const [updateUser] = useUpdateUserLastActiveMutation();

  useEffect(() => {
    const updateActive = () => {
      if (document.visibilityState === "visible") {
        updateUser({
          variables: {
            update_users_input: {
              query: {
                uuid: userUuidVar(),
              },
              values: {
                last_active: dayjs.tz().toDate().toISOString(),
              },
            },
          },
        });
      }
    };

    const interval = setInterval(() => {
      updateActive();
    }, 1000 * 10);

    updateActive();

    document.addEventListener("visibilitychange", updateActive);

    return () => {
      document.removeEventListener("visibilitychange", updateActive);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flowbite
      theme={{
        theme: {
          button: {
            color: {
              info: "bg-sky-700 text-white hover:bg-sky-600",
              success:
                "text-white bg-green-500 border border-transparent enabled:hover:bg-green-400 focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:enabled:hover:bg-green-400 dark:focus:ring-green-500",
              failure:
                "text-white bg-red-500 border border-transparent enabled:hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:enabled:hover:bg-red-600 dark:focus:ring-red-900",
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
          tab: {
            tablist: {
              tabitem: {
                styles: {
                  default: {
                    active: {
                      on:
                        "bg-gray-100 text-cyan-600 dark:bg-gray-700 dark:text-cyan-500",
                    },
                  },
                },
              },
            },
          },
        },
      }}
    >
      {showAlert && (
        <Alert color="warning" onDismiss={() => setShowAlert(false)}>
          <span>
            <p>
              <span className="font-bold mr-2">Alpha Release</span>
              Expect bugs and missing features.
            </p>
          </span>
        </Alert>
      )}
      <div className={`${darkMode && "dark"}`}>
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
