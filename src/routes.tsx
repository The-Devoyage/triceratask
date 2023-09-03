import { Edit, List, Dashboard, View } from "./pages";
import { RouteObject } from "react-router-dom";

export const appRoutes: RouteObject[] = [
  { path: "/", element: <Dashboard /> },
  { path: "/edit/:id", element: <Edit /> },
  { path: "/view", element: <View /> },
  { path: "/list", element: <List /> },
];
