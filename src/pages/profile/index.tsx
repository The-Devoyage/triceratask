import { Alert, Badge, Card } from "flowbite-react";
import { useGetUserQuery } from "src/views/navbar/graphql.generated";
import { ChangeProfileImg } from "./components";
import dayjs from "src/utils/dayjs";
import { useParams } from "react-router-dom";
import { useIsUserActive } from "src/utils/useIsUserActive";

export const Profile = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, loading } = useGetUserQuery({
    variables: {
      get_user_input: {
        query: {
          uuid,
        },
      },
    },
  });
  const isActive = useIsUserActive(uuid);

  return (
    <Card>
      <div className="grid grid-cols-6 gap-4 mb-3">
        <div className="col-span-6 md:col-span-1">
          <ChangeProfileImg loading={loading} data={data} />
        </div>
        <div className="col-span-6 md:col-span-5">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold align-bottom">
                {data?.get_user?.identifier}
              </h1>
              <Badge color={isActive ? "success" : "gray"} size="sm">
                {isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
            <Alert color="info" className="my-3">
              <span className="font-bold mr-2">
                TriceraTask welcomes {data?.get_user?.identifier}!
              </span>
              <p>
                Account created:{" "}
                {dayjs.tz(data?.get_user?.created_at).format("MMMM DD, YYYY")}
              </p>
            </Alert>
          </div>
        </div>
      </div>
    </Card>
  );
};
