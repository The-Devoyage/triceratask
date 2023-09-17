import { makeVar } from "@apollo/client";

const token = localStorage.getItem("token");
const userUuid = localStorage.getItem("user_uuid");

export const isLoggedInVar = makeVar(token ? true : false);
export const userUuidVar = makeVar(userUuid);
