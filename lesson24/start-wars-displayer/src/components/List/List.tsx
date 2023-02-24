import { useEffect, useState } from "react";
import Link from "next/link";

type Person = {
  name: string;
  height: number;
  mass: number;
};

type Data = {
  count: number;
  results: Person[];
};

const List = () => {
  const [list, setList] = useState<Person[]>([]);

  useEffect(() => {
    async function makeRequest() {
      try {
        const res = await fetch("/api/list");
        const json = (await res.json()) as Data;

        setList(json?.results);
      } catch (err) {
        console.error(err);
      }
    }

    makeRequest();
  }, []);

  return (
    <ul>
      {list.map((person, i) => (
        <li key={person.name}>
          <Link href={`/${i + 1}`}>{person.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
