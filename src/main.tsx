import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { appRoutes } from "./routes";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import "./index.css";
import { toastsVar } from "./state/index.ts";
import { v4 as uuidv4 } from "uuid";
import { NotFound404 } from "./pages/index.ts";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const toasts = toastsVar();

  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
    graphQLErrors.forEach(({ message, extensions }) => {
      toastsVar([
        ...toasts,
        {
          id: uuidv4(),
          type: "error",
          title: (Object.values(extensions ?? {})[0] as string) || message,
        },
      ]);
    });
  }

  if (networkError) {
    console.log("networkError", networkError);
    toastsVar([
      ...toasts,
      {
        id: uuidv4(),
        type: "error",
        title: networkError.message,
      },
    ]);
  }
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          get_todo_historys: {
            keyArgs: [["get_todo_historys_input", ["query"]]],
            merge(existing, incoming) {
              if (!existing) {
                return incoming;
              }

              return {
                ...incoming,
                data: [...existing.data, ...incoming.data],
              };
            },
          },
        },
      },
      todo: {
        keyFields: ["uuid"],
      },
      user: {
        keyFields: ["uuid"],
      },
      notification: {
        keyFields: ["uuid"],
      },
      user_connection: {
        keyFields: ["uuid"],
      },
      todo_access: {
        keyFields: ["uuid"],
      },
      todo_history: {
        keyFields: ["uuid"],
      },
    },
  }),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: Object.values(appRoutes),
    errorElement: <NotFound404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
