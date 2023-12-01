import { Button, Card, Table } from "flowbite-react";
import { FC } from "react";
import { EditGetTodoQuery } from "../../graphql.generated";
import { UserAvatar } from "src/components";
import { HiPlus } from "react-icons/hi";
import { DropdownSelect } from "src/components/dropdown-select";
import {
  useTaskAccessCreateAccessMutation,
  useTaskAccessSelectGetConnectionsQuery,
} from "./graphql.generated";
import { userUuidVar } from "src/state";
import { useForm } from "react-hook-form";
import { Create_Todo_Access_Input } from "src/types/generated";
import { useToaster } from "src/utils/useToaster";
import { getOperationName } from "@apollo/client/utilities";
import { EDIT_GET_TODO } from "../../graphql";
import { AccessTableRow } from "./components/access-table-row";

export const TaskAccess: FC<{
  access?: EditGetTodoQuery["get_todo"]["access"];
  todo_uuid: string;
}> = ({ access, todo_uuid }) => {
  const toaster = useToaster();
  const [createAccess, { loading }] = useTaskAccessCreateAccessMutation({
    refetchQueries: [getOperationName(EDIT_GET_TODO) ?? ""],
  });
  const { register, reset, handleSubmit, watch } = useForm<
    Create_Todo_Access_Input["values"]
  >();

  const { data } = useTaskAccessSelectGetConnectionsQuery({
    variables: {
      get_user_connections_input: {
        query: {
          AND: [{ revoked: false, accepted: true }],
          OR: [
            {
              user_uuid: userUuidVar(),
            },
            {
              connected_user_uuid: userUuidVar(),
            },
          ],
        },
      },
      get_user_input: {
        query: {},
      },
      get_connected_user_input: {
        query: {},
      },
    },
  });

  const users = data?.get_user_connections.map((connection) => {
    if (connection.user_uuid.uuid === userUuidVar()) {
      return connection.connected_user_uuid;
    }
    return connection.user_uuid;
  });

  const onSubmit = (values: Create_Todo_Access_Input["values"]) => {
    createAccess({
      variables: {
        create_todo_access_input: {
          values: {
            ...values,
            todo_uuid: todo_uuid,
            edit: true,
            view: true,
            revoked: false,
          },
        },
      },
      onCompleted: () => {
        toaster.addToast("success", "Access Granted!");
      },
    });
  };

  return (
    <Card className="overflow-x-auto">
      <div className="flex justify-between mb-3">
        <h1 className="text-2xl font-bold">Team</h1>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-start">
            <DropdownSelect
              {...register("user_uuid", { required: true })}
              options={users?.map((user) => ({
                value: user,
                label: (
                  <>
                    <UserAvatar user={user} />
                    <h1 className="ml-2">{user?.identifier}</h1>
                  </>
                ),
              }))}
              onSelected={(user) =>
                reset({
                  user_uuid: user?.uuid,
                })
              }
              value={
                users?.find((u) => u?.uuid === watch("user_uuid"))?.identifier
              }
              sizing="sm"
              placeholder="Invite"
              className="mr-2"
            />
            <Button
              size="sm"
              outline
              gradientDuoTone="purpleToBlue"
              type="submit"
              isProcessing={loading}
            >
              <HiPlus />
            </Button>
          </form>
        </div>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell className="flex justify-start md:justify-center">
            User
          </Table.HeadCell>
          <Table.HeadCell className="hidden md:table-cell" />
          <Table.HeadCell>View</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell className="flex justify-center">
            Revoke
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {access?.map((access) => (
            <AccessTableRow
              access={access}
              key={access.uuid}
              user={access.user_uuid}
            />
          ))}
        </Table.Body>
      </Table>
    </Card>
  );
};
