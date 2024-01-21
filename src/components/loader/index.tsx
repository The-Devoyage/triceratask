import { FC } from "react";
import { HiClipboardCheck } from "react-icons/hi";
import dayjs from "src/utils/dayjs";

interface Props {
  message?: string;
  icon?: React.ReactNode;
}

export const Loader: FC<Props> = ({ message, icon }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl text-sky-700 mb-3">{`Happy ${dayjs().format(
        "dddd"
      )}`}</h1>
      {icon ? (
        icon
      ) : (
        <HiClipboardCheck className="h-20 w-20 text-indigo-400 mb-3 animate-pulse" />
      )}
      <h2 className="text-lg text-sky-700 mb-3">{message ?? "Loading..."}</h2>
    </div>
  );
};
