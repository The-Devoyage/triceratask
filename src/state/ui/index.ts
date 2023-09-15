import { makeVar } from "@apollo/client";

export const sidebarHiddenVar = makeVar(false);
const darkMode = localStorage.getItem("darkMode");
export const darkModeVar = makeVar(darkMode === "true" ? true : false);

export interface ToastItem {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
}
export const toastsVar = makeVar<ToastItem[]>([]);
