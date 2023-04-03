import styles from "./page.module.css";
import Server from "@/components/Server";
import Client from "@/components/Client";

export default function Home() {
  return (
    <main className={styles.main}>
      <Server />
      <Client />
    </main>
  );
}
