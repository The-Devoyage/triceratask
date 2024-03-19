import { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { usersWatchedVar } from "src/state";
import { useGetUsersActiveQuery } from "./graphql.generated";

export const useGetUsersActive = () => {
  const watchedUsers = useReactiveVar(usersWatchedVar);
  const { data } = useGetUsersActiveQuery({
    pollInterval: 5000,
    skip: Object.keys(watchedUsers).length === 0,
    variables: {
      get_users_input: {
        query: {
          OR: Object.keys(watchedUsers).map((uuid) => ({ uuid })),
        },
      },
    },
  });

  useEffect(() => {
    if (data) {
      data.get_users.data.forEach((user) => {
        if (user?.last_active) {
          usersWatchedVar({
            ...watchedUsers,
            [user.uuid]: user.last_active,
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};
