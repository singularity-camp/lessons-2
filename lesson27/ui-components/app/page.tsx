"use client";
import { useCallback, useState } from "react";
import styles from "./page.module.css";
import Search from "@/components/Search";
import UserDetails, { IUser } from "@/components/UserDetails";
import fetchUser from "@/services/fetchUser";

export default function Home() {
  const [user, setUser] = useState<IUser>({
    fullName: "",
    email: "",
    avatarUrl: "",
  });

  const searchHandler = useCallback(async (search: string) => {
    const user = await fetchUser(search);

    setUser({
      fullName: user?.name || "",
      email: user?.email || "",
      avatarUrl: user?.avatar_url || "",
    });
  }, []);

  return (
    <main className={styles.main}>
      <Search onSearch={searchHandler} />
      <UserDetails {...user} />
    </main>
  );
}
