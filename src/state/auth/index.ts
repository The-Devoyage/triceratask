import { makeVar } from "@apollo/client";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

export const isLoggedInVar = makeVar(token ? true : false);
export const userIdVar = makeVar(userId);
