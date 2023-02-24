import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Person = {
  name: string;
  height: number;
  mass: number;
};

const Person = () => {
  const router = useRouter();
  const { id } = router.query;

  const [person, setPerson] = useState<Person | undefined>();

  useEffect(() => {
    async function makeRequest() {
      try {
        const res = await fetch(`/api/person`);
        const json = (await res.json()) as Person;

        setPerson(json);
      } catch (err) {
        console.error(err);
      }
    }

    makeRequest();
  }, []);

  return (
    <div>
      <p>{person?.name}</p>
      <p>{person?.height}</p>
      <p>{person?.mass}</p>
    </div>
  );
};

export default Person;
