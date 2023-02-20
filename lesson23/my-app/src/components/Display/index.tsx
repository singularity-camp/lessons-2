import { ChangeEvent, useCallback, useMemo, useState } from "react";
import styles from "./index.module.css";

const Text = ({ greetings }: { greetings: string }) => {
  return <p className={styles.green}> {greetings}</p>;
};

const Display = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const greetings = useMemo(() => `Hello ${submittedName}!`, [submittedName]);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    setName(currentTarget.value);
  }, []);

  const clickHandler = () => {
    setSubmittedName(name);
  };

  return (
    <>
      <input type="text" value={name} onChange={changeHandler} />
      <button onClick={clickHandler}>Greet!</button>
      <Text greetings={greetings} />
    </>
  );
};

export default Display;
