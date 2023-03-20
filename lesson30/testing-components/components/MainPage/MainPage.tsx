import { Fragment, useState } from "react";
import Input from "@/components/Input";
import Display from "@/components/Display";

const MainPage = () => {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <Input handleSubmit={setValue} />
      <Display value={value} />
    </Fragment>
  );
};

export default MainPage;
