import { Card } from "flowbite-react";
import { FC } from "react";

interface TodoStatsProps {
  total: number;
  label: string;
  onClick?: () => void;
}

export const TodoStats: FC<TodoStatsProps> = ({ total, label, onClick }) => {
  return (
    <Card
      onClick={onClick && onClick}
      className={onClick ? "cursor-pointer" : ""}
    >
      <h4 className="text-xl font-bold">{label}</h4>
      <p className="text-4xl font-bold">{total}</p>
    </Card>
  );
};
