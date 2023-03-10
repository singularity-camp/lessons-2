"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <Counter />
      </main>
    </Provider>
  );
}
