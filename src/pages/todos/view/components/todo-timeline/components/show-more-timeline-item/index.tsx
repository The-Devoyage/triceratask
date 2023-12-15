import { Button, ButtonProps, Timeline } from "flowbite-react";
import { FC } from "react";
import { MdBookmarkAdded } from "react-icons/md";

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
        <Timeline.Content className="hover:mb-32 transition-all">
          <Button
            className="text-center w-full text-sm py-1"
            size="small"
            {...props}
          >
            Show More
          </Button>
        </Timeline.Content>
      </Timeline.Content>
    </Timeline.Item>
  );
};
