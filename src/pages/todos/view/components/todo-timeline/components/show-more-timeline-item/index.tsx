import { Button, ButtonProps, Timeline } from "flowbite-react";
import { FC } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

interface ShowMoreTimelineItemProps extends ButtonProps {
  visible: boolean;
  onClick: () => void;
}

export const ShowMoreTimelineItem: FC<ShowMoreTimelineItemProps> = ({
  visible,
  ...props
}) => {
  if (!visible) return null;

  return (
    <Timeline.Item>
      <Timeline.Point icon={MdBookmarkAdded} />
      <Timeline.Content>
        <Timeline.Content className="group">
          <Button
            className="text-center w-full text-sm py-1"
            size="small"
            {...props}
          >
            Show More
          </Button>
          <div
            className="flex justify-center h-0 group-hover:h-auto group-hover:opacity-100 opacity-0 transition ease-in-out duration-300
            "
          >
            <FaHistory className="text-gray-400 h-20 w-20 mt-10 animate-bounce" />
          </div>
        </Timeline.Content>
      </Timeline.Content>
    </Timeline.Item>
  );
};
