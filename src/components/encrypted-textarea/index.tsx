import clsx from "clsx";
import {
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "flowbite-react";
import { FC } from "react";
import { HiLockClosed } from "react-icons/hi";

interface EncryptedTextareaProps extends TextareaProps {
  showPassword: boolean;
  inputProps?: TextInputProps;
  textareaProps?: TextareaProps;
}

export const EncryptedTextarea: FC<EncryptedTextareaProps> = ({
  showPassword,
  inputProps,
  ...props
}) => {
  return (
    <>
      <Textarea
        className={clsx({
          "rounded-b-none": showPassword,
          [`${props.className}`]: !!props.className,
        })}
        {...props}
      />
      {showPassword && (
        <TextInput
          {...inputProps}
          type="password"
          placeholder="Password"
          rightIcon={() => <HiLockClosed className="h-4" />}
          sizing="sm"
          theme={{
            field: {
              input: {
                withAddon: {
                  off: "rounded-b",
                },
              },
            },
          }}
        />
      )}
    </>
  );
};
