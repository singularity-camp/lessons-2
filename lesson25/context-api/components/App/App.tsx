// @ts-ignore
"use client";

import { UserContextProvider } from "@/context/UserContext/UserContext";
import Displayer from "@/components/Displayer";
import Form from "@/components/Form";

const App = () => {
  return (
    <UserContextProvider>
      <Displayer />
      <Form />
    </UserContextProvider>
  );
};

export default App;
