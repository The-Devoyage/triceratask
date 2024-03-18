import { Pagination, Select } from "flowbite-react";
import { FC, useContext } from "react";
import { useWindowSize } from "src/utils/useWindowSize";
import { TodosListContext } from "../../provider";
import clsx from "clsx";

export const ListFooter: FC<{ isFooter?: boolean }> = ({ isFooter }) => {
  const { isMobile } = useWindowSize();
  const { getTodos, handlePagination } = useContext(TodosListContext);
  const { variables } = getTodos?.[1] || {};
  const { per_page } = variables?.get_todos_input?.opts || {};
  const { page, total_pages } = getTodos?.[1]?.data?.get_todos?.meta || {};

  return (
    <div
      className={clsx("flex justify-between mb-2", {
        "items-start mt-2": isFooter,
        "items-end": !isFooter,
      })}
    >
      <Select
        sizing="sm"
        value={per_page || 15}
        onChange={(e) =>
          handlePagination({ page: 1, per_page: parseInt(e.target.value) })
        }
      >
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>
      <Pagination
        currentPage={page || 1}
        totalPages={total_pages || 1}
        layout={isMobile ? "navigation" : "pagination"}
        showIcons
        theme={{
          pages: {
            base: "mt-0 flex",
          },
        }}
        onPageChange={(page) =>
          handlePagination({
            page,
          })
        }
      />
    </div>
  );
};
