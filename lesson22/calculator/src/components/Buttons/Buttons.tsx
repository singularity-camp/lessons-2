import Numpad from "@/components/Numpad/Numpad";
import Actions from "@/components/Actions/Actions";
import { Operator, Equal } from "@/types";

interface IProps {
  handleNumClick: (value: string) => void;
  handleOperatorClick: (operator: Operator | Equal) => void;
}

function Buttons(props: IProps) {
  return (
    <>
      <Numpad handleNumClick={props.handleNumClick} />
      <Actions handleOperatorClick={props.handleOperatorClick} />
    </>
  );
}

export default Buttons;
