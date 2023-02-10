import { ChangeEvent, useCallback, useState } from "react";

interface IProps {
  onFilter: (search: string) => void;
}

function Search({ onFilter }: IProps) {
  const [search, setSearch] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { currentTarget } = e;
      setSearch(currentTarget.value);
      onFilter(currentTarget.value);
    },
    [onFilter]
  );

  return <input type="text" value={search} onChange={handleChange} />;
}

export default Search;
