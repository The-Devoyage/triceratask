import { Checkbox, Dropdown, Table } from "flowbite-react";
import { useContext } from "react";
import { Sort_Direction } from "src/types/generated";
import { TodosListContext } from "../../provider";

export const TodosListHeader = () => {
  const {
    getTodos,
    setSelected,
    handleBulkEdit,
    selected,
    handleFilter,
  } = useContext(TodosListContext);
  const { variables } = getTodos?.[1] || {};
  const { data: todos } = getTodos?.[1]?.data?.get_todos || {};

  const getSortDirection = (sortKey: string) => {
    if (variables?.get_todos_input?.opts?.sort?.at(0)?.field === sortKey) {
      return variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
        Sort_Direction.Desc
        ? "▼"
        : "▲";
    }
    return "";
  };

  return (
    <Table.Head>
      <Table.HeadCell>
        <Dropdown
          label={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected(todos?.map((t) => t.uuid) || []);
                } else {
                  setSelected([]);
                }
              }}
            />
          }
          inline
          theme={{
            inlineWrapper: "flex flex-row items-center justify-center w-full",
          }}
        >
          <Dropdown.Item
            onClick={() =>
              handleBulkEdit(selected, {
                completed: true,
              })
            }
            disabled={selected.length === 0}
          >
            Mark Completed
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleBulkEdit(selected, {
                completed: false,
              })
            }
            disabled={selected.length === 0}
          >
            Mark Incomplete
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleBulkEdit(selected, {
                is_deleted: true,
              })
            }
            disabled={selected.length === 0}
          >
            Delete
          </Dropdown.Item>
        </Dropdown>
      </Table.HeadCell>
      <Table.HeadCell
        className="w-2/5 text-left"
        role="button"
        onClick={() =>
          handleFilter({
            completed: variables?.get_todos_input?.query.completed,
            sort: "todo.title",
            order:
              variables?.get_todos_input?.opts?.sort?.at(0)?.field ===
                "todo.title" &&
              variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
                Sort_Direction.Desc
                ? Sort_Direction.Asc
                : Sort_Direction.Desc,
          })
        }
      >
        Title
        {getSortDirection("todo.title")}
      </Table.HeadCell>
      <Table.HeadCell className="text-left hidden md:table-cell">
        Team
      </Table.HeadCell>
      <Table.HeadCell
        className="hidden md:table-cell text-left cursor-pointer"
        role="button"
        onClick={() =>
          handleFilter({
            completed: variables?.get_todos_input?.query.completed,
            sort: "todo.created_at",
            order:
              variables?.get_todos_input?.opts?.sort?.at(0)?.field ===
                "todo.created_at" &&
              variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
                Sort_Direction.Desc
                ? Sort_Direction.Asc
                : Sort_Direction.Desc,
          })
        }
      >
        Created At
        {getSortDirection("todo.created_at")}
      </Table.HeadCell>
      <Table.HeadCell
        className="hidden md:table-cell text-left"
        role="button"
        onClick={() =>
          handleFilter({
            completed: variables?.get_todos_input?.query.completed,
            sort: "todo.updated_at",
            order:
              variables?.get_todos_input?.opts?.sort?.at(0)?.field ===
                "todo.updated_at" &&
              variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
                Sort_Direction.Desc
                ? Sort_Direction.Asc
                : Sort_Direction.Desc,
          })
        }
      >
        Updated At
        {getSortDirection("todo.updated_at")}
      </Table.HeadCell>
      <Table.HeadCell className="text-center">
        <Dropdown
          label={
            variables?.get_todos_input?.query.completed !== undefined
              ? variables.get_todos_input.query.completed
                ? "Completed"
                : "Not Complete"
              : "All"
          }
          inline
          theme={{
            inlineWrapper: "flex flex-row items-center justify-center w-full",
          }}
        >
          <Dropdown.Item onClick={() => handleFilter({ completed: true })}>
            Completed
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter({ completed: false })}>
            Not Complete
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleFilter({
                completed: null,
              })
            }
          >
            All
          </Dropdown.Item>
        </Dropdown>
      </Table.HeadCell>
    </Table.Head>
  );
};
