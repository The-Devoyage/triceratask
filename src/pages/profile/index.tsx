import { Alert, Card } from "flowbite-react";
import { userUuidVar } from "src/state";
import { useGetUserQuery } from "src/views/navbar/graphql.generated";
import { ChangeProfileButton } from "./components/change-profile-button";
import dayjs from "src/utils/dayjs";

export const Profile = () => {
  const { data, loading } = useGetUserQuery({
    variables: {
      get_user_input: {
        query: {
          uuid: userUuidVar(),
        },
      },
    },
  });

  return (
    <Card>
      <div className="grid grid-cols-6 gap-4 mb-3">
        <div className="col-span-6 md:col-span-1">
          <ChangeProfileButton loading={loading} data={data} />
        </div>
        <div className="col-span-6 md:col-span-5">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white">
              {data?.get_user?.identifier}
            </h1>
            <Alert color="success" className="my-3">
              <span className="font-bold mr-2">Welcome to TriceraTask</span>
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
