import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Edit } from "./pages/edit.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { View } from "./pages/view.tsx";
import { List } from "./pages/list.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/edit", element: <Edit /> },
      { path: "/view", element: <View /> },
      { path: "/list", element: <List /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
