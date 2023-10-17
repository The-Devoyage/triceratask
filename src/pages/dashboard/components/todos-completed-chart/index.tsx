import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import Chart from "react-apexcharts";
import { GetTodosQuery } from "src/pages/todos/list/graphql.generated";
import { darkModeVar } from "src/state";
import dayjs from "src/utils/dayjs";

interface TodosCompletedProps {
  todos: GetTodosQuery["get_todos"];
}

export const TodosCompletedChart: FC<TodosCompletedProps> = ({ todos }) => {
  const darkMode = useReactiveVar(darkModeVar);

  const completedLastWeek = todos.filter((todo) => {
    if (!todo.completed || !todo.completed_at) return false;
    const lastWeek = dayjs().subtract(6, "day");
    const completedDate = dayjs.tz(todo.completed_at).local();
    return completedDate.isAfter(lastWeek);
  });
  const incompleteLastWeek = todos.filter((todo) => {
    if (todo.completed || !todo.goal_date) return false;
    const lastWeek = dayjs().subtract(6, "day");
    const goalDate = dayjs(todo.goal_date);
    return goalDate.isAfter(lastWeek) && goalDate.isBefore(dayjs());
  });

  const sortTodos = <T,>(arr: T[]) => {
    const today = dayjs().day();
    const sorted = [...arr.slice(today + 1), ...arr.slice(0, today + 1)];
    return sorted;
  };

  const xAxisLabelsSorted = sortTodos(dayjs.weekdaysShort(true));

  const completed = completedLastWeek.reduce(
    (acc, todo) => {
      if (todo?.completed_at) {
        const todoDay = dayjs.tz(todo?.completed_at).local().day();
        acc[todoDay] += 1;
        return acc;
      }
      return acc;
    },
    [0, 0, 0, 0, 0, 0, 0]
  );
  const sortedCompleted = sortTodos(completed);

  const incomplete = incompleteLastWeek.reduce(
    (acc, todo) => {
      if (todo?.goal_date) {
        const todoDay = dayjs(todo?.goal_date).day();
        acc[todoDay] += 1;
      }
      return acc;
    },
    [0, 0, 0, 0, 0, 0, 0]
  );
  const sortedIncomplete = sortTodos(incomplete);

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
          theme: darkMode ? "dark" : "light",
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
          data: sortedCompleted,
        },
        {
          name: "Todos Incomplete",
          data: sortedIncomplete,
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
