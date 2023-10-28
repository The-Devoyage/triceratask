import { Avatar, AvatarProps } from "flowbite-react";
import { FC } from "react";
import { User } from "src/types/generated";
import { useIsUserActive } from "src/utils/useIsUserActive";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "profile_img" | "uuid">;
  showStatus?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  user,
  showStatus,
  ...props
}) => {
  const isActive = useIsUserActive(user?.uuid);

  return (
    <Avatar
      img={user?.profile_img || undefined}
      className="mr-2"
      status={showStatus ? (isActive ? "online" : "offline") : undefined}
      {...props}
    />
  );
};
