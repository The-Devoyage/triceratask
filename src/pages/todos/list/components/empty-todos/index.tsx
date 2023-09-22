import { Button, Table } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Empty } from "src/components";
import { appRoutes } from "src/routes";

export const EmptyTodos = () => {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <Table.Cell colSpan={6}>
        <div className="flex flex-col w-full justify-center items-center">
          <Empty description="Celebrate your wins." title="No Todos" />
          <Button
            className="flex justify-center items-center mt-4"
            size="sm"
            onClick={() => navigate(appRoutes.createTodo.path)}
          >
            <HiPlus className="h-5 mr-2" />
            Create Todo
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};
