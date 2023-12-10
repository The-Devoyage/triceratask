import { Badge, Button, Card, ToggleSwitch } from "flowbite-react";
import { FC } from "react";
import { MdGroupRemove } from "react-icons/md";
import { Todo_Access, Update_Todo_Accesss_Input } from "src/types/generated";
import { useTaskAccessUpdateAccesssMutation } from "./graphql.generated";
import { EDIT_GET_TODO } from "src/pages/todos/edit/graphql";
import { getOperationName } from "@apollo/client/utilities";
import { useToaster } from "src/utils/useToaster";
import { userUuidVar } from "src/state";
import { useIsUserActive } from "src/utils/useIsUserActive";

export const AccessTableRow: FC<{
  access: Pick<Todo_Access, "manage" | "edit" | "uuid" | "revoked">;
  user: Pick<Todo_Access["user"], "identifier" | "uuid" | "profile_img">;
}> = ({ access, user }) => {
  const toaster = useToaster();
  const [updateAccess] = useTaskAccessUpdateAccesssMutation({
    refetchQueries: [getOperationName(EDIT_GET_TODO) ?? ""],
  });
  const isActive = useIsUserActive(user.uuid);

  const handleChange = (values: Update_Todo_Accesss_Input["values"]) => {
    if (user.uuid === userUuidVar()) {
      return toaster.addToast("error", "You cannot manage your own access");
    }
    updateAccess({
      variables: {
        update_todo_accesss_input: {
          query: {
            uuid: access.uuid,
          },
          values,
        },
      },
      onCompleted: () => toaster.addToast("success", "Access updated."),
      onError: () =>
        toaster.addToast(
          "error",
          "Access update failed. You may not have permission to do this."
        ),
    });
  };

  return (
    <Card
      imgAlt="User profile image."
      imgSrc={user.profile_img ?? ""}
      className="border-2 flex w-full"
      horizontal
      theme={{
        root: {
          children: "w-full p-4 flex flex-col justify-between",
        },
      }}
    >
      <div>
        <div className="flex flex-row justify-between items-center w-full">
          <h4 className="text-lg font-bold">{user.identifier}</h4>
          <Badge color={isActive ? "success" : "failure"}>
            {isActive ? "Active" : "Offline"}
          </Badge>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <ToggleSwitch
            checked={access.manage}
            onChange={() => handleChange({ manage: !access.manage })}
          />
          <label className="text-sm ml-2">Manage</label>
        </div>
        <div className="flex flex-row justify-start items-center w-full">
          <ToggleSwitch
            checked={access.edit}
            onChange={() => handleChange({ edit: !access.edit })}
            className="my-2"
          />
          <label className="text-sm ml-2">Edit</label>
        </div>
      </div>
      <div className="flex justify-end w-full mt-auto">
        <Button
          size="small"
          color={access.revoked ? "success" : "failure"}
          className="px-4"
          onClick={() =>
            handleChange({
              revoked: !access.revoked,
              manage: access.revoked ? true : false,
              edit: access.revoked ? true : false,
            })
          }
        >
          <MdGroupRemove className="mr-2" />
          <span>{!access.revoked ? "Revoke" : "Grant"}</span>
        </Button>
      </div>
    </Card>
  );
};
