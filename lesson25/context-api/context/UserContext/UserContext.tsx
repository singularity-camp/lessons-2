import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface IUserContextValue {
  name: null | string;
  age: null | number;
}

type TUserContextSetter = Dispatch<SetStateAction<IUserContextValue>>;

type TUserContext = [IUserContextValue, TUserContextSetter];

const UserContext = createContext<TUserContext>([
  { name: null, age: null },
  () => null,
]);

interface IUserContextProvider {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const userState = useState<IUserContextValue>({
    name: null,
    age: null,
  });

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

export default UserContext;
