import { FC } from "react";
import { HiClipboardList } from "react-icons/hi";

interface Props {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export const Empty: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-2 text-sky-700">
        {title ?? "The day gets longer..."}
      </h1>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        {icon ?? <HiClipboardList className="w-8 h-8 text-indigo-500" />}
      </div>
      <p className="text-lg font-medium text-center text-gray-500">
        {description ?? "Not found."}
      </p>
    </div>
  );
};
