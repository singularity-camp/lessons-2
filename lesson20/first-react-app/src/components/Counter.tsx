import { Dispatch, SetStateAction } from "react";
import styles from "./Counter.module.css";

interface ICounter {
  setNumber: Dispatch<SetStateAction<number>>;
}

function Counter(props: ICounter) {
  return (
    <>
      <button
        className={styles.button}
        onClick={() => {
          props.setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        +
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.setNumber((prevNumber) => {
            if (prevNumber > 0) {
              return prevNumber - 1;
            } else {
              return 0;
            }
          });
        }}
      >
        -
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.setNumber(0);
        }}
      >
        reset
      </button>
    </>
  );
}

export default Counter;
