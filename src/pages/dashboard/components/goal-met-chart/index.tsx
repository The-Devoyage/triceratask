import { useEffect } from "react";
import Chart from "react-apexcharts";
import { Card, Tooltip } from "flowbite-react";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, userUuidVar } from "src/state";
import { useGoalMetChartGetTodosCountLazyQuery } from "./graphql.generated";
import { Loader } from "src/components";
import { TbMath } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";

export const GoalMetChart = () => {
  const darkMode = useReactiveVar(darkModeVar);

  const [
    getTotal,
    { data: totalData, loading: loadingTotal },
  ] = useGoalMetChartGetTodosCountLazyQuery();
  const [
    getCompleted,
    { data: completedData, loading: loadingCompleted },
  ] = useGoalMetChartGetTodosCountLazyQuery();
  const totalCount = totalData?.get_todos?.meta?.total_count || 0;
  const completedCount = completedData?.get_todos?.meta?.total_count || 0;
  const percentage = Math.round((completedCount / totalCount) * 100) || 0;
  const loading = loadingTotal || loadingCompleted;

  useEffect(() => {
    getTotal({
      variables: {
        get_todos_input: {
          query: {
            LT: {
              goal_date: new Date().toISOString(),
            },
            access: {
              revoked: false,
              user: { uuid: userUuidVar() },
            },
          },
        },
      },
    });
    getCompleted({
      variables: {
        get_todos_input: {
          query: {
            completed: true,
            LT: {
              goal_date: new Date().toISOString(),
            },
            access: {
              revoked: false,
              user: { uuid: userUuidVar() },
            },
          },
        },
      },
    });
  }, [getTotal, getCompleted]);

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
        <h3 className="text-2xl font-bold">Goal Score</h3>
        <Tooltip
          content={`You are ${percentage}% likely to meet goals on time.`}
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
