import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { Card } from "flowbite-react";
import styles from "./style.module.css";

interface TodoStatsProps {
  total: number;
  label: string;
  onClick?: () => void;
  loading?: boolean;
}

export const TodoStats: FC<TodoStatsProps> = ({
  total,
  label,
  loading,
  onClick,
}) => {
  const [showAnimatedCounter, setShowAnimatedCounter] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowAnimatedCounter(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <Card
      onClick={onClick && onClick}
      className={clsx({
        "cursor-pointer hover:shadow-xl hover:scale-105 transition-all": !!onClick,
        "animate-pulse": loading || showAnimatedCounter,
      })}
    >
      <h4 className="text-xl font-bold">{label}</h4>
      {showAnimatedCounter ? (
        <p className={clsx(styles.animated_counter, "text-4xl font-bold")} />
      ) : (
        <p className="text-4xl font-bold">{total}</p>
      )}
    </Card>
  );
};
