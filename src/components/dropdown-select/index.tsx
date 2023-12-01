import { TextInput, TextInputProps } from "flowbite-react";
import { useState } from "react";

interface OptionType<K> {
  label: React.ReactNode;
  value: K;
}

interface DropdownSelectProps<K, T extends OptionType<K>>
  extends TextInputProps {
  options?: T[];
  onSelected: (option: T["value"]) => void;
}

export const DropdownSelect = <T extends OptionType<K>, K>(
  props: DropdownSelectProps<K, T> & { inputRef?: React.Ref<HTMLInputElement> }
) => {
  const { options, onSelected, inputRef } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <TextInput
        {...props}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        autoComplete="off"
        ref={inputRef}
      />
      <div className="my-4 absolute bg-slate-900 w-full z-50 rounded-md">
        {showDropdown &&
          options?.map((opt, i) => (
            <div
              role="button"
              className="flex items-start bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-600 p-2 cursor-pointer rounded-md"
              key={i}
              onClick={() => {
                onSelected(opt.value);
                setShowDropdown(false);
              }}
            >
              {opt.label}
            </div>
          ))}
      </div>
    </div>
  );
};
