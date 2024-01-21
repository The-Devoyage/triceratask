import { Pagination, Select } from "flowbite-react";
import { FC } from "react";
import { Meta, Options_Input } from "src/types/generated";
import { useWindowSize } from "src/utils/useWindowSize";
import { PaginationParams } from "../..";

interface ListFooterProps {
  handlePagination: (paginationParams: PaginationParams) => void;
  page: Meta["page"];
  perPage: Options_Input["per_page"];
  totalPages: Meta["total_pages"];
}

export const ListFooter: FC<ListFooterProps> = ({
  handlePagination,
  perPage,
  page,
  totalPages,
}) => {
  const { isMobile } = useWindowSize();

  return (
    <div className="flex justify-between">
      <Select
        className="mt-2"
        sizing="sm"
        value={perPage || 15}
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
        totalPages={totalPages || 1}
        layout={isMobile ? "navigation" : "pagination"}
        showIcons
        onPageChange={(page) =>
          handlePagination({
            page,
          })
        }
      />
    </div>
  );
};
