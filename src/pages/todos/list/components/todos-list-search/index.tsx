import { useContext, useEffect, useRef } from "react";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { TodosListContext } from "../../provider";
import { useDebounce } from "src/utils/useDebounce";
import { useWindowSize } from "src/utils/useWindowSize";

export const TodoListSearch = () => {
  const { handleFilter } = useContext(TodosListContext);
  const ref = useRef<HTMLInputElement>(null);
  const handleSearch = useDebounce<string>((value) => {
    handleFilter({ search: value });
  }, 500);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isMobile) return;
    ref.current?.focus();
  }, [isMobile]);

  return (
    <>
      <TextInput
        icon={HiSearch}
        placeholder="Search"
        className="mb-4"
        onChange={(e) => handleSearch(e.target.value)}
        ref={ref}
      />
    </>
  );
};
