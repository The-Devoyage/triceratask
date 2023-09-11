import { Button, Card } from "flowbite-react";
import { MdOutlineAddTask } from "react-icons/md";
import { LuRepeat2 } from "react-icons/lu";
import { IoCreate } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";

export const LoginCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="col-span-3 md:col-span-1">
      <h1 className="text-2xl">Already have an account?</h1>
      <p className="text-gray-500">Login to manage your tasks.</p>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <IoCreate className="text-4xl text-sky-700" />
          <span className="text-gray-500">Create</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineAddTask className="text-4xl text-sky-700" />
          <span className="text-gray-500">Complete</span>
        </div>
        <div className="flex flex-col items-center">
          <LuRepeat2 className="text-4xl text-sky-700" />
          <span className="text-gray-500">Repeat</span>
        </div>
        <div className="flex flex-col items-center">
          <TbRulerMeasure className="text-4xl text-sky-700" />
          <span className="text-gray-500">Track</span>
        </div>
      </div>
      <Button
        className="flex justify-center items-center mt-4"
        size="sm"
        onClick={() => navigate(appRoutes.login.path)}
      >
        Login
      </Button>
    </Card>
  );
};
