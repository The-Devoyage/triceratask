import { Table } from "flowbite-react";
import { Loader } from "src/components";

export const TodosLoading = () => (
  <Table.Row>
    <Table.Cell colSpan={6}>
      <Loader />
    </Table.Cell>
  </Table.Row>
);
