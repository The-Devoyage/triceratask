import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";

export const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        className="w-1/4 mb-5"
        src="https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png"
      />
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <p className="text-xl">
        Please check the URL or click the button below to be redirected to the
        homepage.
      </p>
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
