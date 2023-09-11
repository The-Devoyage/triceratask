import { makeVar } from "@apollo/client";

const token = localStorage.getItem("token");

export const isLoggedInVar = makeVar(token ? true : false);
