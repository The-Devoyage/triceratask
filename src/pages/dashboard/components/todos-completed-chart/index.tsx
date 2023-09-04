import { FC } from "react";
import Chart from "react-apexcharts";
import { GetTodosQuery } from "src/pages/list/graphql.generated";
import dayjs from "src/utils/dayjs";

interface TodosCompletedProps {
  todos: GetTodosQuery["get_todos"];
}

export const TodosCompletedChart: FC<TodosCompletedProps> = ({ todos }) => {
  const last7Days = todos.filter((todo) => {
    if (!todo.completed || !todo.completed_at) return false;
    const lastWeek = dayjs().subtract(7, "day");
    const todoDate = dayjs(todo.completed_at);
    return todoDate.isAfter(lastWeek);
  });

  const sortTodos = <T,>(arr: T[]) => {
    const today = dayjs().day();
    const sorted = [...arr.slice(today + 1), ...arr.slice(0, today + 1)];
    return sorted;
  };

  const xAxisLabelsSorted = sortTodos(dayjs.weekdaysShort(true));

  const data = last7Days.reduce(
    (acc, todo) => {
      const todoDay = dayjs(todo.completed_at).day();
      acc[todoDay] += 1;
      return acc;
    },
    [0, 0, 0, 0, 0, 0, 0]
  );
  const sortedData = sortTodos(data);

  return (
    <Chart
      options={{
        stroke: {
          curve: "stepline",
        },
        chart: {
          id: "line",
        },
        xaxis: {
          categories: xAxisLabelsSorted,
        },
      }}
      series={[
        {
          name: "Todos Completed",
          data: sortedData,
        },
      ]}
      type="line"
      style={{ margin: "0 auto", minHeight: "300px", width: "100%" }}
    />
  );
};
