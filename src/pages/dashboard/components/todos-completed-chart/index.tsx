import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import Chart from "react-apexcharts";
import { GetTodosQuery } from "src/pages/list/graphql.generated";
import { darkModeVar } from "src/state";
import dayjs from "src/utils/dayjs";

interface TodosCompletedProps {
  todos: GetTodosQuery["get_todos"];
}

export const TodosCompletedChart: FC<TodosCompletedProps> = ({ todos }) => {
  const last7Days = todos.filter((todo) => {
    if (!todo.completed || !todo.completed_at) return false;
    const lastWeek = dayjs().subtract(7, "day");
    const todoDate = dayjs.tz(todo.completed_at).local();
    return todoDate.isAfter(lastWeek);
  });
  const darkMode = useReactiveVar(darkModeVar);

  const sortTodos = <T,>(arr: T[]) => {
    const today = dayjs().day();
    const sorted = [...arr.slice(today + 1), ...arr.slice(0, today + 1)];
    return sorted;
  };

  const xAxisLabelsSorted = sortTodos(dayjs.weekdaysShort(true));

  const data = last7Days.reduce(
    (acc, todo) => {
      const todoDay = dayjs.tz(todo.completed_at).local().day();
      acc[todoDay] += 1;
      return acc;
    },
    [0, 0, 0, 0, 0, 0, 0]
  );
  const sortedData = sortTodos(data);

  return (
    <Chart
      options={{
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ["#0369a1", "#f87171"],
        tooltip: {
          enabled: false,
        },
        stroke: {
          curve: "stepline",
        },
        yaxis: {
          show: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: xAxisLabelsSorted,
          labels: {
            style: {
              colors: darkMode ? "#fff" : "#000",
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      }}
      series={[
        {
          name: "Todos Completed",
          data: sortedData,
        },
        {
          name: "Todos todo",
          //NOTE: Hardcoded data.
          data: [1, 3, 4, 0, 0, 2, 1],
        },
      ]}
      type="bar"
      style={{
        margin: "0 auto",
        minHeight: "300px",
        width: "100%",
      }}
    />
  );
};
