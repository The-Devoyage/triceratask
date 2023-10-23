import { useEffect } from "react";
import { Toast } from "flowbite-react";
import { HiClipboardList } from "react-icons/hi";
import { useReactiveVar } from "@apollo/client";
import { ToastItem, toastsVar } from "src/state";
import { useToaster } from "src/utils/useToaster";
import clsx from "clsx";

export const Toaster = () => {
  const toasts = useReactiveVar(toastsVar);
  const { removeToast } = useToaster();

  const getTitle = (type: ToastItem["type"]) => {
    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Error";
      case "warning":
        return "Warning";

      default:
        return "Info";
    }
  };

  const getIcon = (type: ToastItem["type"]) => {
    switch (type) {
      case "success":
        return <HiClipboardList />;
      case "error":
        return <HiClipboardList />;
      case "warning":
        return <HiClipboardList />;

      default:
        return <HiClipboardList />;
    }
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        removeToast(toasts[0].id);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toasts, removeToast]);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      {toasts.map((toast) => (
        <Toast className="bg-gray-900 px-4 py-3 text-white shadow-2xl hover:shadow-none transition-all duration-300 ease-in-out animate-[wiggle_0.5s_ease-in-out_1.25]">
          <div
            className={clsx({
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  mr-4": true,
              "bg-green-100 text-green-500 dark-bg-green-900 dark:text-green-300":
                toast.type === "success",
              "bg-green-100 dark:bg-green-900": toast.type === "success",
              "bg-cyan-100 dark:bg-cyan-900": toast.type === "info",
              "bg-red-400 dark:bg-red-900": toast.type === "error",
              "bg-yellow-100 dark:bg-yellow-900": toast.type === "warning",
            })}
          >
            {getIcon(toast.type)}
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{getTitle(toast.type)}</span>
            <span className="text-sm">{toast.message}</span>
          </div>
        </Toast>
      ))}
    </div>
  );
};
