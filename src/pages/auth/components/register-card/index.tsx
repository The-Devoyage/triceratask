import { Button, Card } from "flowbite-react";
import { MdOutlineAddTask } from "react-icons/md";
import { LuRepeat2 } from "react-icons/lu";
import { IoCreate } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";

export const RegisterCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="col-span-3 md:col-span-1">
      <h1 className="text-2xl">Start Tackeling Your Goals</h1>
      <p>Create an account and start tracking your goals.</p>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <IoCreate className="text-4xl text-sky-700" />
          <span>Create</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineAddTask className="text-4xl text-sky-700" />
          <span>Complete</span>
        </div>
        <div className="flex flex-col items-center">
          <LuRepeat2 className="text-4xl text-sky-700" />
          <span>Repeat</span>
        </div>
        <div className="flex flex-col items-center">
          <TbRulerMeasure className="text-4xl text-sky-700" />
          <span>Track</span>
        </div>
      </div>
      <Button
        className="flex justify-center items-center mt-4"
        size="sm"
        onClick={() => navigate(appRoutes.register.path)}
      >
        Create Account
      </Button>
    </Card>
  );
};
