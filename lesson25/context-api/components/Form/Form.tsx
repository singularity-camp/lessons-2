// @ts-ignore
"use client";

import InputName from "@/components/InputName";
import InputAge from "@/components/InputAge";

const Form = () => {
  return (
    <form>
      <InputName />
      <InputAge />
      <button>Submit</button>
    </form>
  );
};

export default Form;
