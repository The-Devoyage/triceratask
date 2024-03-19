import { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  TextInput,
  Textarea,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import { ChangeProfileImg } from "./components";
import dayjs from "src/utils/dayjs";
import { useParams } from "react-router-dom";
import { useIsUserActive } from "src/utils/useIsUserActive";
import { isActiveVar, userUuidVar } from "src/state";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "./graphql.generated";
import clsx from "clsx";
import { useToaster } from "src/utils/useToaster";
import { useForm } from "react-hook-form";
import { Update_Users_Input } from "src/types/generated";
import { FaSquareCheck } from "react-icons/fa6";

export const Profile = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [updateUser, { loading: updating }] = useUpdateUserProfileMutation({
    onCompleted: () => {
      toaster.addToast("success", "Settings Saved!");
    },
  });
  const { register, handleSubmit, reset, formState } = useForm<
    Update_Users_Input["values"]
  >();
  const toaster = useToaster();
  const { data, loading } = useGetUserProfileQuery({
    variables: {
      get_user_input: {
        query: {
          uuid,
        },
      },
    },
  });
  const isActive = useIsUserActive(uuid);

  useEffect(() => {
    reset({
      status: data?.get_user?.data?.status ?? "",
      email: data?.get_user?.data?.email ?? "",
      phone: data?.get_user?.data?.phone ?? "",
    });
  }, [data?.get_user?.data, reset]);

  const handleActive = (checked: boolean) => {
    isActiveVar(checked);
    updateUser({
      variables: {
        update_users_input: {
          query: {
            uuid: userUuidVar(),
          },
          values: {
            share_active: checked,
          },
        },
      },
    });
  };

  const onSubmit = (values: Update_Users_Input["values"]) => {
    updateUser({
      variables: {
        update_users_input: {
          query: {
            uuid: userUuidVar(),
          },
          values,
        },
      },
    });
  };

  return (
    <Card>
      <div className="grid grid-cols-6 gap-4 mb-3">
        <div className="col-span-6 md:col-span-1">
          <ChangeProfileImg loading={loading} data={data} />
        </div>
        <div className="col-span-6 md:col-span-5">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col md:flex-row">
                <h1 className="text-3xl font-bold leading-none">
                  {data?.get_user?.data?.identifier}
                </h1>
                <Tooltip
                  content={`Member since ${dayjs
                    .tz(data?.get_user?.data?.created_at)
                    .format("MMMM DD, YYYY")}.`}
                >
                  <Badge
                    color="info"
                    size="sm"
                    className="mx-0 md:mx-2 my-2 md:my-0"
                  >
                    {dayjs
                      .tz(data?.get_user?.data?.created_at)
                      .format("MMMM DD, YYYY")}
                  </Badge>
                </Tooltip>
              </div>
              {uuid === userUuidVar() ? (
                <Tooltip
                  content={
                    isActive
                      ? "Other users can see that you are active."
                      : "Your status is not currently being shared with other users."
                  }
                >
                  <ToggleSwitch
                    checked={isActive}
                    onChange={handleActive}
                    className={clsx({
                      "animate-pulse": updating,
                    })}
                    disabled={updating}
                    theme={{
                      root: {
                        label: "hidden",
                      },
                    }}
                  />
                </Tooltip>
              ) : (
                <Badge color={isActive ? "success" : "gray"} size="sm">
                  {isActive ? "Active" : "Inactive"}
                </Badge>
              )}
            </div>
            {uuid === userUuidVar() ? (
              <form onSubmit={handleSubmit(onSubmit)} className="py-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="col">
                    <TextInput
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                      placeholder="Email"
                      color={formState.errors.email ? "failure" : undefined}
                    />
                  </div>
                  <div>
                    <TextInput
                      type="tel"
                      {...register("phone", {
                        pattern: /^\+\d{1,3}\s?\(\d{1,3}\)\s?\d{3,}-?\d{2,}$/,
                      })}
                      placeholder="+1 (555) 555-5555"
                      color={formState.errors.phone ? "failure" : undefined}
                      multiple
                      helperText={
                        formState.errors.phone && "Format: +1 (555) 555-5555"
                      }
                    />
                  </div>
                </div>
                <Textarea
                  className="my-2"
                  placeholder="Share your status with other users."
                  {...register("status")}
                />
                <Button type="submit" className="float-right">
                  <FaSquareCheck className="h-5 md:mr-2" />
                  Save
                </Button>
              </form>
            ) : (
              <Textarea
                className="my-2"
                placeholder={`${data?.get_user?.data?.identifier} has not shared their status.`}
                value={data?.get_user?.data?.status ?? ""}
                readOnly
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
