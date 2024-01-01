import { useEffect, useState } from "react";
import dayjs from "src/utils/dayjs";
import { User } from "src/types/generated";
import { useReactiveVar } from "@apollo/client";
import { isActiveVar, userUuidVar, usersWatchedVar } from "src/state";

export const useIsUserActive = (user_uuid?: User["uuid"], skip?: boolean) => {
  const [isActive, setIsActive] = useState(false);
  const currentUserUuid = useReactiveVar(userUuidVar);
  const userIsActive = useReactiveVar(isActiveVar);
  const watchedUsers = useReactiveVar(usersWatchedVar);
  const lastActive = watchedUsers[user_uuid || ""];

  useEffect(() => {
    if (user_uuid && user_uuid !== currentUserUuid && !skip) {
      usersWatchedVar({
        ...usersWatchedVar(),
        [user_uuid]: null,
      });
    }
  }, [user_uuid, currentUserUuid, skip]);

  useEffect(() => {
    console.log("CHECKING");
    if (document.visibilityState !== "visible") return;
    if (user_uuid === currentUserUuid) {
      setIsActive(userIsActive);
    } else {
      const checkActive = () => {
        console.log("checkActive", lastActive);
        if (lastActive) {
          setIsActive(
            dayjs(lastActive).isAfter(dayjs().subtract(15, "seconds"))
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastActive, userIsActive]);

  return isActive;
};
