import { ChangeEvent, useCallback, useState } from "react";

const usePropertyNumber = (): [
  number,
  (e: ChangeEvent<HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(0);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    const number = currentTarget.valueAsNumber;

    if (number > -1 && number <= 500) {
      setValue(number);
    }
  }, []);

  return [value, changeHandler];
};

export default usePropertyNumber;
