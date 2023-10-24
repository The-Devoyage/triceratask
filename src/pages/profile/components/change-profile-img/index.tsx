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
import { Modal, Tooltip } from "flowbite-react";

export const ChangeProfileImg: FC<{
  loading: boolean;
  data?: GetUserQuery;
}> = ({ loading, data }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [updateUser, { loading: updating }] = useUpdateUsersMutation({
    refetchQueries: [getOperationName(GET_USER) ?? ""],
  });
  const [showModal, setShowModal] = useState(false);
  const toaster = useToaster();
  const allowEdit = data?.get_user?.uuid === userUuidVar();

  const handleUpdateProfileImage = () => {
    updateUser({
      variables: {
        update_users_input: {
          query: {
            uuid: userUuidVar(),
          },
          values: {
            profile_img: profileImage ?? data?.get_user?.profile_img ?? "",
          },
        },
      },
      onCompleted: () => {
        setShowModal(false);
        toaster.addToast("success", "Profile image updated successfully");
      },
    });
  };

  const handleGenerate = () => {
    setProfileImage(getRandomAvatar());
  };

  return (
    <>
      <div
        className={clsx({
          "relative col-span-6 md:col-span-1": true,
          "animate-pulse": loading || updating,
        })}
      >
        <img
          className={clsx({
            "hover:opacity-75": allowEdit,
            "mr-2 rounded-lg shadow-lg hover:shadow-xl w-full":
              !loading && !updating,
          })}
          src={profileImage ?? data?.get_user?.profile_img ?? ""}
          role={allowEdit ? "button" : undefined}
          onClick={() => allowEdit && setShowModal(true)}
        />
        <Modal show={showModal} dismissible onClose={() => setShowModal(false)}>
          <div className="absolute flex justify-center mb-4 p-2 shadow-lg bottom-0 w-full">
            <div className="flex justify-center items-center bg-white/25 rounded-lg">
              <div className="flex justify-center items-center">
                <Tooltip content="Keep previously saved photo.">
                  <TbPhotoCancel
                    role="button"
                    className="text-white hover:scale-125 hover:text-red-500 cursor-pointer h-12 w-12 transition duration-500 ease-in-out m-4"
                    onClick={() => {
                      setShowModal(false);
                      setProfileImage(null);
                    }}
                  />
                </Tooltip>
              </div>
              <div className="flex justify-center items-center">
                <Tooltip content="Generate new random photo.">
                  <IoRefreshCircleSharp
                    role="button"
                    className="text-white hover:scale-125 hover:text-blue-900 cursor-pointer h-14 w-14 transition duration-500 ease-in-out m-4"
                    onClick={handleGenerate}
                  />
                </Tooltip>
              </div>
              <div className="flex justify-center items-center">
                <Tooltip content="Save/replace photo.">
                  <IoIosSave
                    role="button"
                    className="text-white hover:scale-125 hover:text-green-400 cursor-pointer h-12 w-12 transition duration-500 ease-in-out m-4"
                    onClick={handleUpdateProfileImage}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <img
            className={clsx({
              "mr-2 rounded-lg shadow-lg hover:shadow-xl w-full":
                !loading && !updating,
            })}
            src={profileImage ?? data?.get_user?.profile_img ?? ""}
            role="button"
          />
        </Modal>
      </div>
    </>
  );
};
