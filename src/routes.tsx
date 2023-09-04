import { Edit, List, Dashboard, View } from "./pages";
import { Add } from "./pages/add";

export const appRoutes = {
  dashboard: { path: "/", element: <Dashboard /> },
  editTodo: { path: "/:id/edit", element: <Edit /> },
  viewTodo: { path: "todos/:id", element: <View /> },
  listTodos: { path: "/todos", element: <List /> },
  createTodo: { path: "/todos/create", element: <Add /> },
};
