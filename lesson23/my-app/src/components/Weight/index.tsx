import usePropertyNumber from "@/hooks/usePropertyNumber";

const Weight = () => {
  const [value, changeHandler] = usePropertyNumber();

  return (
    <input name="weight" type="number" value={value} onChange={changeHandler} />
  );
};

export default Weight;
