import { useReactiveVar } from "@apollo/client";
import { toastsVar } from "src/state";
import { v4 as uuidv4 } from "uuid";

export const useToaster = () => {
  const toasts = useReactiveVar(toastsVar);

  const addToast = (
    type: "success" | "error" | "warning" | "info",
    title: string,
    message?: string
  ) => {
    const id = uuidv4();
    toastsVar([...toasts, { id, type, title, message }]);
  };

  const removeToast = (id: string) => {
    toastsVar(toasts.filter((toast) => toast.id !== id));
  };

  return {
    addToast,
    removeToast,
  };
};
