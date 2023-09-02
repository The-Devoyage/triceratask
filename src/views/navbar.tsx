import { Button, Navbar } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const AppNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      className="bg-slate-200"
      fluid
      theme={{
        inner: { base: "m-0 flex justify-between w-full items-center" },
      }}
    >
      <span className="text-xl font-semibold dark:text-white m-0">
        My Todos
      </span>
      <Button size="xs" onClick={() => navigate("/add")}>
        <HiPlus />
      </Button>
    </Navbar>
  );
};
