import { FormEvent, useCallback } from "react";

interface IProps {
  handleSubmit: (value: string) => void;
}

const Input = ({ handleSubmit }: IProps) => {
  const submitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { currentTarget } = event;
      const formData = new FormData(currentTarget);

      handleSubmit(formData.get("text") as string);
    },
    [handleSubmit]
  );

  return (
    <form data-testid="Input-form" onSubmit={submitHandler}>
      <input data-testid="Input-input" type="text" name="text" />
    </form>
  );
};

export default Input;
