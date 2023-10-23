import {
  Edit,
  List,
  Dashboard,
  View,
  Add,
  Login,
  Register,
  MyConnections,
} from "./pages";
import { Profile } from "./pages/profile";
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
  profile: {
    path: "/profile/:uuid",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  editTodo: {
    path: "/todos/:uuid/edit",
    element: (
      <ProtectedRoute>
        <Edit />
      </ProtectedRoute>
    ),
  },
  viewTodo: {
    path: "/todos/:uuid",
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
  createConnection: {
    path: "/connections",
    element: (
      <ProtectedRoute>
        <MyConnections />
      </ProtectedRoute>
    ),
  },
};
