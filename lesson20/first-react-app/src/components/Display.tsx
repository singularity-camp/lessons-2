import styles from "./Counter.module.css";

interface IDisplay {
  number: number;
}

function Display(props: IDisplay) {
  return <span className={styles.number}>{props.number}</span>;
}

export default Display;
