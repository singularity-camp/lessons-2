"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./Form.module.css";

interface IForm {
  first: string;
  age: number;
  country: string;
}

const schema = z.object({
  first: z.string().min(1, { message: "Invalid first name" }),
  age: z.number().min(13, { message: "must be older than 13" }),
  country: z.enum(["KZ", "UZ"], {
    invalid_type_error: "Please select 'KZ' or 'UZ'",
  }),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(schema),
  });

  const [first, setFirst] = useState("");

  const onSubmit = useCallback((data: IForm) => {
    console.log("data", data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        value={first}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setFirst(event.currentTarget.value)
        }
        type="text"
        placeholder="first name controlled from react"
      />
      <input {...register("first")} type="text" placeholder="first name" />
      {!!errors.first && <p>{errors.first?.message}</p>}
      <input
        {...register("age", { valueAsNumber: true })}
        type="number"
        placeholder="age"
      />
      {!!errors.age && <p>{errors.age?.message}</p>}
      <input
        {...register("country")}
        type="text"
        placeholder="country: KZ, UZ"
      />
      {!!errors.country && <p>{errors.country?.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
