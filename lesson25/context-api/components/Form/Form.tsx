// @ts-ignore
"use client";

import { FormEvent, useCallback, useContext } from "react";
import InputName from "@/components/InputName";
import InputAge from "@/components/InputAge";
import UserContext from "@/context/UserContext/UserContext";

const Form = () => {
  const [_, setUser] = useContext(UserContext);

  const submitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const obj = Object.fromEntries(formData) as unknown as {
        userName: string;
        userAge: string;
      };
      setUser({ name: obj.userName || null, age: Number(obj.userAge) || null });
    },
    [setUser]
  );

  return (
    <form onSubmit={submitHandler}>
      <InputName />
      <InputAge />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
