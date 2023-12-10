import { Card } from "flowbite-react";
import { FC } from "react";
import { AccessTableRow } from "./components/access-table-row";
import { Todo, Todo_Access } from "src/types/generated";
import { InviteForm } from "./components";

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
  </Card>
);
