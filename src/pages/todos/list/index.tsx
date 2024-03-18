import { Table } from "flowbite-react";
import { TodoListSearch, TodosListBody, TodosListHeader } from "./components";
import { ListFooter } from "./components/list-footer";
import { TodosListProvider } from "./provider";

export const List = () => {
  return (
    <TodosListProvider>
      <TodoListSearch />
      <Table
        hoverable
        theme={{
          root: {
            base: "rounded-lg overflow-hidden shadow-md w-full",
          },
        }}
      >
        <TodosListHeader />
        <TodosListBody />
      </Table>
      <ListFooter isFooter />
    </TodosListProvider>
  );
};
