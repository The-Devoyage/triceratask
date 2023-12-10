import { Card, Tooltip } from "flowbite-react";
import { FC } from "react";
import { AccessTableRow } from "./components/access-table-row";
import { Todo, Todo_Access } from "src/types/generated";
import { InviteForm } from "./components";
import { FaCircleInfo } from "react-icons/fa6";

export const TaskAccess: FC<{
  access?: Array<
    Pick<Todo_Access, "uuid" | "revoked" | "edit" | "manage"> & {
      user: Pick<Todo_Access["user"], "uuid" | "identifier" | "profile_img">;
    }
  >;
  todo_uuid?: Todo["uuid"];
}> = ({ access, todo_uuid }) => (
  <Card>
    <div className="flex justify-between mb-3">
      <h1 className="text-2xl font-bold">Team</h1>
      <div className="flex justify-center items-center">
        <InviteForm todo_uuid={todo_uuid} />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      {access?.map((access) => (
        <AccessTableRow access={access} key={access.uuid} user={access.user} />
      ))}
    </div>
    <div className="flex justify-end items-center mt-3">
      <Tooltip
        content={
          <div className="flex flex-col">
            <p className="text-sm">
              <span className="font-bold">Manage</span> - Can manage the todo
              status. (Limited Access)
            </p>
            <p className="text-sm">
              <span className="font-bold">Edit</span> - Can edit the task
              (title, description...), and manage team member privileges.
            </p>
          </div>
        }
      >
        <FaCircleInfo className="ml-2 text-gray-500" />
      </Tooltip>
    </div>
  </Card>
);
