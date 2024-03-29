import Chart from "react-apexcharts";
import { Card, Tooltip } from "flowbite-react";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, userUuidVar } from "src/state";
import { useGoalMetChartGetTodosCountQuery } from "./graphql.generated";
import { Loader } from "src/components";
import { TbMath } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import dayjs from "src/utils/dayjs";

const currentDate = dayjs().toISOString();

export const ReliabilityIndex = () => {
  const darkMode = useReactiveVar(darkModeVar);

  const { data: totalData, loading } = useGoalMetChartGetTodosCountQuery({
    variables: {
      get_todos_input: {
        query: {
          completed: true,
          OR: [
            {
              LT: {
                goal_date: currentDate,
              },
            },
            {
              GT: {
                goal_date: currentDate,
              },
            },
          ],
          access: {
            revoked: false,
            user: { uuid: userUuidVar() },
          },
        },
        opts: {
          per_page: -1,
        },
      },
    },
  });
  const totalCount =
    totalData?.get_todos?.data?.filter((t) => t.deleted_at === null).length ??
    0;
  const completedCount =
    totalData?.get_todos?.data?.filter(
      (t) =>
        dayjs(t.completed_at).isBefore(t.goal_date) && t.deleted_at === null
    ).length ?? 0;
  const percentage = Math.round((completedCount / totalCount) * 100) || 0;

  const getPercentageColor = () => {
    if (percentage > 70) {
      return "#81c784";
    } else if (percentage > 30) {
      return "#fff176";
    } else {
      return "#ff1744";
    }
  };

  if (loading) {
    return (
      <Card className="h-full">
        <Loader
          message="Calculating Goals Met"
          icon={<TbMath className="h-20 w-20 animate-pulse text-indigo-400" />}
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Reliability Index</h3>
        <Tooltip
          content={`Based on previous achievements, you are ${percentage}% likely to meet goals on time.`}
        >
          <FaInfoCircle />
        </Tooltip>
      </div>
      <Chart
        type="radialBar"
        options={{
          fill: {
            colors: [getPercentageColor()],
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  color: darkMode ? "#fff" : "#000",
                  fontSize: "13px",
                  show: false,
                },
                value: {
                  color: darkMode ? "#fff" : "#000",
                  fontSize: "30px",
                  show: true,
                },
              },
            },
          },
        }}
        series={[percentage]}
      />
      <p className="text-lg text-center">
        Of {totalCount} goals, you have completed {completedCount} on time.
      </p>
    </Card>
  );
};
