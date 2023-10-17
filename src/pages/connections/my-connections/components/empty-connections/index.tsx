import { Button } from "flowbite-react";
import { forwardRef } from "react";
import { Empty } from "src/components";

export const EmptyConnections = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className="flex flex-col justify-center">
      <Empty
        title="Invite Anyone and Conquor Anything"
        description="Invite a friend to join you on your journey to conquer your goals."
      />
      <Button
        className="self-center mt-3"
        onClick={() => {
          const inputRef = ref as React.MutableRefObject<HTMLInputElement>;
          if (inputRef?.current) {
            inputRef?.current.focus();
          }
        }}
      >
        Invite a Friend
      </Button>
    </div>
  );
});
