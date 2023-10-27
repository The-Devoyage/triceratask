import { useEffect, useState } from "react";
import dayjs from "src/utils/dayjs";

export const useIsUserActive = (last_active?: string | null) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      if (last_active) {
        setIsActive(
          dayjs(last_active).isAfter(dayjs().subtract(15, "seconds"))
        );
      }
    };

    checkActive();

    const interval = setInterval(() => {
      checkActive();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [last_active]);

  return isActive;
};
