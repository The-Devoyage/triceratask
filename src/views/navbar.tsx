import { Button, Navbar } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const AppNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      className="bg-sky-100"
      fluid
      theme={{
        inner: { base: "m-0 flex justify-between w-full items-center" },
      }}
    >
      <div className="flex row items-center">
        <img
          className="w-10 h-10 mr-2"
          src="https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png"
        />
        <span className="text-xl font-semibold dark:text-white m-0 text-sky-700">
          TriceraTask
        </span>
      </div>
      <Button size="xs" onClick={() => navigate("/create")}>
        <HiPlus />
      </Button>
    </Navbar>
  );
};
