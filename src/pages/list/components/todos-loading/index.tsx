import { Spinner, Table } from "flowbite-react";
import { HiClipboardCheck } from "react-icons/hi";
import dayjs from "src/utils/dayjs";

export const TodosLoading = () => (
  <Table.Row>
    <Table.Cell colSpan={6}>
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-2xl text-gray-400 mb-3">{`Happy ${dayjs().format(
          "dddd"
        )}!`}</h1>
        <HiClipboardCheck className="h-20 w-20 text-gray-400 mb-3" />
        <Spinner />
      </div>
    </Table.Cell>
  </Table.Row>
);
