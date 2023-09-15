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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const toasts = toastsVar();

  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
    graphQLErrors.forEach(({ message }) => {
      toastsVar([
        ...toasts,
        {
          id: uuidv4(),
          type: "error",
          message,
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
        message: networkError.message,
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
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: Object.values(appRoutes),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
