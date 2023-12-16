import clsx from "clsx";
import {
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "flowbite-react";
import { FC } from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

interface EncryptedTextareaProps extends TextareaProps {
  showPassword: boolean;
  isDecrypted?: boolean;
  inputProps?: TextInputProps;
  textareaProps?: TextareaProps;
}

export const EncryptedTextarea: FC<EncryptedTextareaProps> = ({
  showPassword,
  inputProps,
  isDecrypted,
  ...props
}) => {
  console.log(inputProps);
  const password = inputProps?.value?.toString();
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
          color={
            isDecrypted ? "success" : password?.length ? "failure" : undefined
          }
          rightIcon={() =>
            isDecrypted ? (
              <>
                <span className="mr-2 text-xs font-bold">Decrypted</span>
                <HiLockOpen
                  className={clsx("h-4", {
                    "text-red-300": !isDecrypted && (password?.length ?? 0) > 0,
                    "text-green-300": isDecrypted,
                  })}
                />
              </>
            ) : (
              <HiLockClosed className="h-4" />
            )
          }
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
