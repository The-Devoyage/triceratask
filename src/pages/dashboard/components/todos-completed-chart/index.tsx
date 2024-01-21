import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { darkModeVar, userUuidVar } from "src/state";
import dayjs from "src/utils/dayjs";
import { useTodoCompletedChartGetTodosLazyQuery } from "./graphql.generated";

export const TodosCompletedChart = () => {
  const darkMode = useReactiveVar(darkModeVar);
  const [
    getCompletedLastWeek,
    { data: completedLastWeek },
  ] = useTodoCompletedChartGetTodosLazyQuery();
  const [
    getIncompleteLastWeek,
    { data: incompleteLastWeek },
  ] = useTodoCompletedChartGetTodosLazyQuery();

  useEffect(() => {
    getCompletedLastWeek({
      variables: {
        get_todos_input: {
          query: {
            completed: true,
            access: { revoked: false, user: { uuid: userUuidVar() } },
            AND: [
              {
                GT: {
                  completed_at: dayjs().subtract(6, "day").toISOString(),
                },
              },
              {
                LT: {
                  completed_at: dayjs().toISOString(),
                },
              },
            ],
          },
        },
      },
    });
    getIncompleteLastWeek({
      variables: {
        get_todos_input: {
          query: {
            completed: false,
            access: { revoked: false, user: { uuid: userUuidVar() } },
            AND: [
              {
                GT: {
                  goal_date: dayjs().subtract(6, "day").toISOString(),
                },
              },
              {
                LT: {
                  goal_date: dayjs().toISOString(),
                },
              },
            ],
          },
        },
      },
    });
  }, [getCompletedLastWeek, getIncompleteLastWeek]);

  const sortTodos = <T,>(arr: T[]) => {
    const today = dayjs().day();
    const sorted = [...arr.slice(today + 1), ...arr.slice(0, today + 1)];
    return sorted;
  };

  const xAxisLabelsSorted = sortTodos(dayjs.weekdaysShort(true));

  const completed = completedLastWeek?.get_todos.data.reduce(
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
  const sortedCompleted = sortTodos(completed ?? []);

  const incomplete = incompleteLastWeek?.get_todos.data.reduce(
    (acc, todo) => {
      if (todo?.goal_date) {
        const todoDay = dayjs(todo?.goal_date).day();
        acc[todoDay] += 1;
      }
      return acc;
    },
    [0, 0, 0, 0, 0, 0, 0]
  );
  const sortedIncomplete = sortTodos(incomplete ?? []);

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
