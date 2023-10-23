import { FC, useState } from "react";
import { userUuidVar } from "src/state";
import { getRandomAvatar } from "src/utils/getRandomImage";
import { useUpdateUsersMutation } from "../../graphql.generated";
import { GET_USER } from "src/views/navbar/graphql";
import { getOperationName } from "@apollo/client/utilities";
import clsx from "clsx";
import { IoIosSave } from "react-icons/io";
import { IoRefreshCircleSharp } from "react-icons/io5";
import { TbPhotoCancel } from "react-icons/tb";
import { useToaster } from "src/utils/useToaster";
import { GetUserQuery } from "src/views/navbar/graphql.generated";

export const ChangeProfileButton: FC<{
  loading: boolean;
  data?: GetUserQuery;
}> = ({ loading, data }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [updateUser, { loading: updating }] = useUpdateUsersMutation({
    refetchQueries: [getOperationName(GET_USER) ?? ""],
  });
  const toaster = useToaster();

  const handleUpdateProfileImage = () => {
    updateUser({
      variables: {
        update_users_input: {
          query: {
            uuid: userUuidVar(),
          },
          values: {
            profile_img: profileImage,
          },
        },
      },
      onCompleted: () => {
        toaster.addToast("success", "Profile image updated successfully");
      },
    });
  };

  const handleGenerate = () => {
    setProfileImage(getRandomAvatar());
  };

  return (
    <div
      className={clsx({
        "relative col-span-6 md:col-span-1": true,
        "animate-pulse": loading || updating,
      })}
    >
      <div className="absolute flex justify-between mb-4 h-full w-full p-2 group hover:bg-white/25 rounded-lg">
        <div className="flex justify-center items-center">
          <TbPhotoCancel
            role="button"
            className="text-white hover:scale-125 hover:text-red-500 cursor-pointer h-10 w-10 hidden group-hover:block transition duration-500 ease-in-out"
            onClick={() => setProfileImage(null)}
          />
        </div>
        <div className="flex justify-center items-center">
          <IoRefreshCircleSharp
            role="button"
            className="text-white hover:scale-125 hover:text-blue-900 cursor-pointer h-14 w-14 hidden group-hover:block transition duration-500 ease-in-out"
            onClick={handleGenerate}
          />
        </div>
        <div className="flex justify-center items-center">
          <IoIosSave
            role="button"
            className="text-white hover:scale-125 hover:text-green-400 cursor-pointer h-10 w-10 hidden group-hover:block transition duration-500 ease-in-out"
            onClick={handleUpdateProfileImage}
          />
        </div>
      </div>
      <img
        className={clsx({
          "mr-2 rounded-lg shadow-lg hover:shadow-xl": !loading && !updating,
        })}
        src={profileImage ?? data?.get_user?.profile_img ?? ""}
        role="button"
        onClick={handleUpdateProfileImage}
      />
    </div>
  );
};
