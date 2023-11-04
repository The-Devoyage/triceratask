import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isActiveVar, isLoggedInVar, userUuidVar } from "src/state";
import dayjs from "src/utils/dayjs";
import { useUpdateUserLastActiveMutation } from "./graphql.generated";

export const useUpdateActive = () => {
  const isAuthenticated = useReactiveVar(isLoggedInVar);
  const isActive = useReactiveVar(isActiveVar);
  const userUuid = useReactiveVar(userUuidVar);
  const [updateUser] = useUpdateUserLastActiveMutation();

  useEffect(() => {
    if (!isAuthenticated) return;

    const updateActive = () => {
      if (document.visibilityState === "visible" && isActive) {
        console.log("IS ACTIVE", isActive);
        updateUser({
          variables: {
            update_users_input: {
              query: {
                uuid: userUuid,
              },
              values: {
                last_active: dayjs.tz().toDate().toISOString(),
              },
            },
          },
        });
      }
    };

    const interval = setInterval(() => {
      updateActive();
    }, 1000 * 10);

    updateActive();

    document.addEventListener("visibilitychange", updateActive);

    return () => {
      document.removeEventListener("visibilitychange", updateActive);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isActive]);

  return null;
};
