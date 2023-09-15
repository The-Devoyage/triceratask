import { Edit, List, Dashboard, View, Add, Login, Register } from "./pages";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { PublicOnly } from "./utils/PublicOnly";

export const appRoutes = {
  dashboard: {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  editTodo: {
    path: "/todos/:id/edit",
    element: (
      <ProtectedRoute>
        <Edit />
      </ProtectedRoute>
    ),
  },
  viewTodo: {
    path: "/todos/:id",
    element: (
      <ProtectedRoute>
        <View />
      </ProtectedRoute>
    ),
  },
  listTodos: {
    path: "/todos",
    element: (
      <ProtectedRoute>
        <List />
      </ProtectedRoute>
    ),
  },
  createTodo: {
    path: "/todos/create",
    element: (
      <ProtectedRoute>
        <Add />
      </ProtectedRoute>
    ),
  },
  login: {
    path: "/login",
    element: (
      <PublicOnly>
        <Login />
      </PublicOnly>
    ),
  },
  register: {
    path: "/register",
    element: (
      <PublicOnly>
        <Register />
      </PublicOnly>
    ),
  },
};
