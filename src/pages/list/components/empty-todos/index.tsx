import { Button, Table } from "flowbite-react";
import { HiClipboardCheck, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const EmptyTodos = () => {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <Table.Cell colSpan={6}>
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-2xl text-gray-400 mb-3">No todos found.</h1>
          <HiClipboardCheck className="h-20 w-20 text-gray-400 mb-3" />
          <Button
            className="flex justify-center items-center"
            onClick={() => navigate("/create")}
          >
            <HiPlus className="h-5 mr-2" />
            Create Todo
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};
