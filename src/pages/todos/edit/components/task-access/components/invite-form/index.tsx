import { useState, FC, useRef } from "react";
import { Button, Modal } from "flowbite-react";
import { UserAvatar } from "src/components";
import { HiPlus } from "react-icons/hi";
import { DropdownSelect } from "src/components/dropdown-select";
import {
  useTaskAccessCreateAccessMutation,
  useTaskAccessSelectGetConnectionsQuery,
} from "./graphql.generated";
import { darkModeVar, userUuidVar } from "src/state";
import { useForm } from "react-hook-form";
import { Create_Todo_Access_Input, Todo } from "src/types/generated";
import { useToaster } from "src/utils/useToaster";
import { getOperationName } from "@apollo/client/utilities";
import { EDIT_GET_TODO } from "../../../../graphql";

export const InviteForm: FC<{ todo_uuid?: Todo["uuid"] }> = ({ todo_uuid }) => {
  const toaster = useToaster();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showModal, setShowModal] = useState(false);
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
              user: {
                uuid: userUuidVar(),
              },
            },
            {
              connected_user: {
                uuid: userUuidVar(),
              },
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

  const users = data?.get_user_connections.data.map((connection) => {
    if (connection?.user?.data.uuid === userUuidVar()) {
      return connection?.connected_user;
    }
    return connection?.user;
  });

  const onSubmit = (values: Create_Todo_Access_Input["values"]) => {
    if (!todo_uuid) toaster.addToast("error", "Todo not found!");
    createAccess({
      variables: {
        create_todo_access_input: {
          values: {
            ...values,
            todo_uuid,
            edit: true,
            manage: true,
            revoked: false,
          },
        },
      },
      onCompleted: () => {
        toaster.addToast("success", "Access Granted!");
        setShowModal(false);
        if (inputRef.current) inputRef.current.value = "";
        reset({
          user_uuid: "",
        });
      },
    });
  };

  return (
    <>
      <Button
        outline
        gradientDuoTone="purpleToBlue"
        onClick={() => setShowModal(true)}
      >
        <HiPlus />
      </Button>
      <Modal
        show={showModal}
        className={darkModeVar() ? "dark" : ""}
        onClose={() => setShowModal(false)}
        dismissible
      >
        <Modal.Header
          className="h-12"
          theme={{
            base:
              "flex justify-center items-center px-4 border-b border-gray-200 dark:border-gray-500",
            title: "text-md font-bold text-gray-900 dark:text-gray-100",
          }}
        >
          Invite a Team Member
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-2 grid-cols-12"
          >
            <DropdownSelect
              {...register("user_uuid", { required: true })}
              options={users?.map((user) => ({
                value: user,
                label: (
                  <>
                    <UserAvatar user={user.data} />
                    <h1 className="ml-2">{user?.data.identifier}</h1>
                  </>
                ),
              }))}
              onSelected={(user) =>
                reset({
                  user_uuid: user?.data.uuid,
                })
              }
              value={
                users?.find((u) => u?.data.uuid === watch("user_uuid"))?.data
                  .identifier
              }
              placeholder="Invite"
              containerClassName="col-span-10"
              inputRef={(e) => {
                (inputRef as React.MutableRefObject<HTMLInputElement>).current = e as HTMLInputElement;
              }}
            />
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              type="submit"
              isProcessing={loading}
              className="col-span-2"
            >
              <HiPlus className="h-4 w-4" />
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
