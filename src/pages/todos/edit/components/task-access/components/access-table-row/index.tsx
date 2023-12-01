import { Button, Checkbox, Table } from "flowbite-react";
import { FC } from "react";
import { MdGroupRemove } from "react-icons/md";
import { UserAvatar } from "src/components";
import { Todo_Access, Update_Todo_Accesss_Input } from "src/types/generated";
import { useTaskAccessUpdateAccesssMutation } from "./graphql.generated";
import { EDIT_GET_TODO } from "src/pages/todos/edit/graphql";
import { getOperationName } from "@apollo/client/utilities";
import { useToaster } from "src/utils/useToaster";

export const AccessTableRow: FC<{
  access: Pick<Todo_Access, "view" | "edit" | "uuid">;
  user: Pick<Todo_Access["user_uuid"], "identifier" | "uuid">;
}> = ({ access, user }) => {
  const toaster = useToaster();
  const [updateAccess] = useTaskAccessUpdateAccesssMutation({
    refetchQueries: [getOperationName(EDIT_GET_TODO) ?? ""],
  });

  const handleClick = (values: Update_Todo_Accesss_Input["values"]) => {
    updateAccess({
      variables: {
        update_todo_accesss_input: {
          query: {
            uuid: access.uuid,
          },
          values,
        },
      },
      onCompleted: () => toaster.addToast("success", "Access updated"),
      onError: () => toaster.addToast("error", "Access update failed"),
    });
  };

  return (
    <Table.Row key={access.uuid}>
      <Table.Cell className="hidden md:table-cell">
        <UserAvatar user={user} button showStatus />
      </Table.Cell>
      <Table.Cell className="text-left">{user.identifier}</Table.Cell>
      <Table.Cell className="w-1/8">
        <Checkbox
          checked={access.view}
          onClick={() =>
            handleClick({
              view: !access.view,
            })
          }
        />
      </Table.Cell>
      <Table.Cell className="w-1/8">
        <Checkbox
          checked={access.edit}
          onClick={() =>
            handleClick({
              edit: !access.edit,
            })
          }
        />
      </Table.Cell>
      <Table.Cell className="flex justify-center">
        <Button size="small" color="failure" className="px-2">
          <MdGroupRemove className="mr-0 md:mr-2" />
          <span className="hidden md:inline">Revoke</span>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
