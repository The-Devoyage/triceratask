import { Checkbox, Table } from "flowbite-react";
import dayjs from "../utils/dayjs";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate();

  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="w-5">ID</Table.HeadCell>
        <Table.HeadCell className="w-3/5">Name</Table.HeadCell>
        <Table.HeadCell>Created At</Table.HeadCell>
        <Table.HeadCell>Updated At</Table.HeadCell>
        <Table.HeadCell className="text-center">Completed</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row
          className="cursor-pointer"
          onClick={() => navigate("/edit/12345")}
        >
          <Table.Cell>12345</Table.Cell>
          <Table.Cell>Pet Dogs</Table.Cell>
          <Table.Cell>{dayjs().to(dayjs("2023-09-02 18:04:00"))}</Table.Cell>
          <Table.Cell>{dayjs().to(dayjs("2023-09-02 18:04:00"))}</Table.Cell>
          <Table.Cell className="text-center">
            <Checkbox checked={true} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
