import { Alert, Button } from "flowbite-react";
import { useNavigate, useRouteError } from "react-router-dom";
import { appRoutes } from "src/routes";

export const NotFound404 = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center h-screen p-3">
      <img
        className="w-1/4 mb-5"
        src="https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png"
      />
      <h2 className="text-2xl font-semibold">Agh...</h2>
      <p className="text-xl">Let's try that again.</p>
      <p className="text-xl">
        Please check the URL or click the button below to be redirected to the
        homepage.
      </p>
      <Alert color="warning">
        {(error as { message?: string })?.message as string}
      </Alert>
      <Button
        outline
        className="mt-5"
        onClick={() => navigate(appRoutes.dashboard.path)}
      >
        Go Home
      </Button>
    </div>
  );
};
