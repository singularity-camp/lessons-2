import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface IProps {
  onFilter: (search: string) => void;
}

function Search({ onFilter }: IProps) {
  const [search, setSearch] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    setSearch(currentTarget.value);
  }, []);

  useEffect(() => {
    onFilter(search);
  }, [onFilter, search]);

  return <input type="text" value={search} onChange={handleChange} />;
}

export default Search;
