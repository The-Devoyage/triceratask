import { useRef } from "react";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { HiClipboardCheck, HiLockClosed, HiOutlineLogin } from "react-icons/hi";
import { TbUserBolt } from "react-icons/tb";
import { isLoggedInVar } from "src/state";
import { useReactiveVar } from "@apollo/client";

export const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const ctaRef = useRef<HTMLElement>(null);

  return (
    <>
      <section className="bg-white/60 dark:bg-gray-900/75 rounded-lg rounded-b-none p-3">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Tasks Roar Here
            </h1>
            <p className="max-w-2xl mb-6 ml-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
              Don't let your tasks become <strong>extinct</strong> – track
              progress with TriceraTask now and embark on a journey towards
              unparalleled productivity! 🦖✨
            </p>
            <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3">
              <a
                onClick={() => navigate(appRoutes.login.path)}
                className="inline-flex items-center justify-center cursor-pointer text-base font-medium text-center text-gray-500 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                <Button outline className="w-full">
                  {isLoggedIn ? "Dashboard" : "Login"}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </a>
              <Button
                gradientDuoTone="purpleToBlue"
                onClick={() =>
                  ctaRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png"
              className="dark:brightness-200"
              alt="logo"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 p-3">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Feature Frenzy: TriceraTask Unleashes Productivity Prowess
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-300">
              Tools to help you securely organize, share, and accomplish your
              tasks.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <HiClipboardCheck className="h-12 w-12 dark:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Task Management
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Quickly add and manage tasks with ease. TriceraTask's intuitive
                interface makes it easy to stay on top of your to-dos.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <TbUserBolt className="h-12 w-12 dark:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Share and Collaborate
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Share your tasks with friends and family. Collaborate on
                projects with your team. TriceraTask makes it easy to work
                together.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <HiLockClosed className="h-12 w-12 dark:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Encrypted and Secure
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Encrypted at the source and stored without credentials. You are
                in charge of your tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex bg-white/60 dark:bg-gray-900/75 text-right p-3 rounded-lg rounded-t-none"
        ref={ctaRef}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Task Management Zeroed In On Focus
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              TriceraTask is the indispensable ally for task-conquering
              enthusiasts of every era, ensuring your to-dos are as
              well-organized as a herd of triceratops roaming the productivity
              plains. 🦕
            </p>
          </div>
          <div className="flex flex-col justify-end space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3">
            <Button
              gradientDuoTone="purpleToBlue"
              onClick={() => navigate(appRoutes.login.path)}
            >
              <HiOutlineLogin className="mr-2" />
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
