import clsx from "clsx";
import { Avatar, AvatarProps, Tooltip, TooltipProps } from "flowbite-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { User } from "src/types/generated";
import { useIsUserActive } from "src/utils/useIsUserActive";

interface UserAvatarProps extends AvatarProps {
  user?: Pick<User, "profile_img" | "uuid" | "identifier"> | null;
  showStatus?: boolean;
  button?: boolean;
  tooltip?: boolean | Partial<TooltipProps>;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  user,
  showStatus,
  button,
  tooltip,
  ...props
}) => {
  const isActive = useIsUserActive(user?.uuid);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Tooltip
      {...(typeof tooltip === "object" ? tooltip : {})}
      content={!!tooltip && user?.identifier}
      theme={{
        target: "hover:z-50",
      }}
      trigger={tooltip ? "hover" : "click"}
    >
      <Avatar
        img={user?.profile_img || undefined}
        status={showStatus ? (isActive ? "online" : "offline") : undefined}
        className={clsx({
          "hover:scale-110 transition-all duration-200 cursor-pointer hover:z-50": button,
        })}
        onClick={(e) => {
          if (!button) return;
          e.stopPropagation();
          navigate(appRoutes.profile.path.replace(":uuid", user?.uuid));
        }}
        {...props}
      />
    </Tooltip>
  );
};

UserAvatar.defaultProps = {
  tooltip: false,
};
