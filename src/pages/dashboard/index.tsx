import { Card } from "flowbite-react";
import { TodoStats, TodosCompletedChart } from "./components";
import { useGetTodosQuery } from "../list/list.generated";

export const Dashboard = () => {
  const { data } = useGetTodosQuery({ variables: { get_todos_input: {} } });
  const todos = data?.get_todos ?? [];

  //account for smaller screen sizes
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <Card>
          <h4 className="text-xl font-bold">Todos Completed</h4>
          <TodosCompletedChart todos={todos} />
        </Card>
        <div className="grid grid-cols-2 gap-4">
          <TodoStats label="Total Todos" total={todos.length ?? 0} />
          <TodoStats
            label="Not Complete"
            total={todos.filter((todo) => !todo.completed).length ?? 0}
          />
          <TodoStats
            label="Complete"
            total={todos.filter((t) => t.completed).length}
          />
        </div>
      </div>
    </>
  );
};
