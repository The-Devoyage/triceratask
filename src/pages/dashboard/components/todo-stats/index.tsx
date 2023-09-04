import { Card } from "flowbite-react";
import { FC } from "react";

interface TodoStatsProps {
  total: number;
  label: string;
}

export const TodoStats: FC<TodoStatsProps> = ({ total, label }) => {
  return (
    <Card>
      <h4 className="text-xl font-bold">{label}</h4>
      <p className="text-4xl font-bold">{total}</p>
    </Card>
  );
};
