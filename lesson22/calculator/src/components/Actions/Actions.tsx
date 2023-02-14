import { Operator, Equal } from "@/types";

interface IProps {
  handleOperatorClick: (operator: Operator | Equal) => void;
}

function Actions(props: IProps) {
  return (
    <div>
      <button onClick={() => props.handleOperatorClick("+")}>+</button>
      <button onClick={() => props.handleOperatorClick("-")}>-</button>
      <button onClick={() => props.handleOperatorClick("*")}>*</button>
      <button onClick={() => props.handleOperatorClick("/")}>/</button>
      <button onClick={() => props.handleOperatorClick("=")}>=</button>
    </div>
  );
}

export default Actions;
