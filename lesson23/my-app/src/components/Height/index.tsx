import usePropertyNumber from "@/hooks/usePropertyNumber";

const Height = () => {
  const [value, changeHandler] = usePropertyNumber();

  return (
    <input name="height" type="number" value={value} onChange={changeHandler} />
  );
};

export default Height;
