import { makeVar } from "@apollo/client";

const token = localStorage.getItem("token");
const userUuid = localStorage.getItem("user_uuid");
const userIdentifier = localStorage.getItem("user_identifier");

export const isLoggedInVar = makeVar(token ? true : false);
export const userUuidVar = makeVar(userUuid);
export const userIdentifierVar = makeVar(userIdentifier);
export const isActiveVar = makeVar(false);
