import { Button, Label, TextInput, Card } from "flowbite-react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "src/state";
import { appRoutes } from "src/routes";
import { useNavigate } from "react-router-dom";
import { CallToAction, LogoCard, RegisterCard } from "../components";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{
    username: string;
    password: string;
  }>();

  const onSubmit = (data: { username: string; password: string }) => {
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", data.password);
    isLoggedInVar(true);
    navigate(appRoutes.dashboard.path);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CallToAction />
        <LogoCard />
        <RegisterCard />
        <Card className="col-span-3 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Login</h1>
            <Label>Username</Label>
            <TextInput {...register("username")} />
            <Label>Password</Label>
            <TextInput {...register("password")} />
            <div className="flex flex-row justify-end pt-4 mt-4">
              <Button type="submit" color="info">
                Login
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
