import { useReactiveVar } from "@apollo/client";
import { Button, Navbar } from "flowbite-react";
import { HiMenu, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { sidebarHiddenVar } from "src/state";

export const AppNavbar = () => {
  const navigate = useNavigate();
  const sidebarHidden = useReactiveVar(sidebarHiddenVar);

  return (
    <Navbar className="bg-sky-100" fluid>
      <div className="flex row items-center">
        <Button
          color="light"
          className="sm:block md:hidden"
          theme={{
            color: "bg-sky-100",
          }}
          onClick={() => sidebarHiddenVar(!sidebarHidden)}
        >
          <HiMenu className="text-sky-700" />
        </Button>
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
