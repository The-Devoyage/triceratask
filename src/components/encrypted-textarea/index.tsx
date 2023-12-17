import { useReactiveVar } from "@apollo/client";
import { Editable, useEditor } from "@wysimark/react";
import clsx from "clsx";
import {
  Button,
  Label,
  TextInput,
  TextInputProps,
  Tooltip,
} from "flowbite-react";
import { FC, ReactNode, useState } from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import { darkModeVar } from "src/state";

interface EncryptedTextareaProps {
  label?: ReactNode;
  onChange: (value: string) => void;
  isDecrypted?: boolean;
  passwordInputProps?: TextInputProps;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  requirePassword?: boolean;
  disablePassword?: boolean;
  isEncrypting?: boolean;
  setIsEncrypting?: (value: boolean) => void;
}

export const EncryptedTextarea: FC<EncryptedTextareaProps> = ({
  label,
  onChange,
  isDecrypted,
  passwordInputProps,
  value,
  placeholder,
  disabled,
  requirePassword,
  setIsEncrypting,
  disablePassword,
}) => {
  const [showPassword, setShowPassword] = useState(requirePassword || false);
  const password = passwordInputProps?.value?.toString();
  const darkMode = useReactiveVar(darkModeVar);
  const editor = useEditor({
    minHeight: 250,
  });

  return (
    <>
      <div className="flex justify-between items-end mb-1">
        <Label>{label}</Label>
        <div className="flex mb-1">
          {showPassword && (
            <TextInput
              {...passwordInputProps}
              type="password"
              placeholder="Password"
              color={
                isDecrypted
                  ? "success"
                  : password?.length
                  ? "failure"
                  : undefined
              }
              sizing="sm"
              theme={{
                field: {
                  input: {
                    withAddon: {
                      off: "rounded-l rounded-r-none",
                    },
                  },
                },
              }}
            />
          )}
          <Tooltip
            className="max-w-sm"
            content={
              showPassword || requirePassword
                ? "This will be encrypted. A password is required to view or edit this description."
                : "This will not be encrypted."
            }
            placement="bottom"
          >
            <Button
              color={darkMode ? "dark" : "light"}
              size="sm"
              className={clsx("h-full", {
                "rounded-l-none": showPassword || requirePassword,
                "rounded-l-lg": !showPassword && !requirePassword,
                "bg-red-200 dark:bg-red-800": showPassword || requirePassword,
                "bg-green-200 dark:bg-green-800": !showPassword || isDecrypted,
              })}
              onClick={() => {
                if (setIsEncrypting) setIsEncrypting(!showPassword);
                setShowPassword(!showPassword);
              }}
              disabled={requirePassword || disablePassword}
            >
              {!isDecrypted ? <HiLockClosed /> : <HiLockOpen />}
            </Button>
          </Tooltip>
        </div>
      </div>
      <Editable
        editor={editor}
        value={value?.toString() ?? ""}
        onChange={!disabled ? onChange : () => null}
        placeholder={placeholder}
        className={clsx("prose dark:prose-invert")}
      />
    </>
  );
};
