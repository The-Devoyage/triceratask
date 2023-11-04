import { useEffect, useState } from "react";
import dayjs from "src/utils/dayjs";
import { useGetUserLastActiveQuery } from "./graphql.generated";
import { User } from "src/types/generated";
import { useReactiveVar } from "@apollo/client";
import { isActiveVar, userUuidVar } from "src/state";

export const useIsUserActive = (user_uuid?: User["uuid"], skip?: boolean) => {
  const [isActive, setIsActive] = useState(false);
  const currentUserUuid = useReactiveVar(userUuidVar);
  const userIsActive = useReactiveVar(isActiveVar);

  const { data } = useGetUserLastActiveQuery({
    pollInterval: 5000,
    skip: !user_uuid || skip || user_uuid === currentUserUuid,
    variables: {
      get_user_input: {
        query: {
          uuid: user_uuid,
        },
      },
    },
  });
  const { last_active } = data?.get_user ?? { last_active: null };

  useEffect(() => {
    if (user_uuid === currentUserUuid) {
      setIsActive(userIsActive);
    } else {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [last_active, userIsActive]);

  return isActive;
};
