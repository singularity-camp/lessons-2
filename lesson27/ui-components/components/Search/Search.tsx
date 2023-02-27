import { Input } from "@chakra-ui/input";
import { FormEvent, useCallback } from "react";

interface IProps {
  onSearch: (search: string) => void;
}

const Search = ({ onSearch }: IProps) => {
  const submitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      onSearch(formData.get("search") as string);
    },
    [onSearch]
  );

  return (
    <form onSubmit={submitHandler}>
      <Input name="search" placeholder="Basic usage" />
    </form>
  );
};

export default Search;
