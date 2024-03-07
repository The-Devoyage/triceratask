import { makeVar } from "@apollo/client";

const token = localStorage.getItem("token");
const userUuid = localStorage.getItem("user_uuid");
const userIdentifier = localStorage.getItem("user_identifier");
const userEmail = localStorage.getItem("user_email");
const userPhone = localStorage.getItem("user_phone");

export const isLoggedInVar = makeVar(token ? true : false);
export const userUuidVar = makeVar(userUuid);
export const userIdentifierVar = makeVar(userIdentifier);
export const isActiveVar = makeVar(false);
export const userEmailVar = makeVar<string | null | undefined>(userEmail);
export const userPhoneVar = makeVar<string | null | undefined>(userPhone);
