import { makeVar } from "@apollo/client";

export const sidebarHiddenVar = makeVar(false);
const darkMode = localStorage.getItem("darkMode");
export const darkModeVar = makeVar(darkMode === "true" ? true : false);

export interface ToastItem {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
}
export const toastsVar = makeVar<ToastItem[]>([]);

export const usersWatchedVar = makeVar<{ [key: string]: string | null }>({});
