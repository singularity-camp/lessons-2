import Numpad from "@/components/Numpad/Numpad";
import Actions from "@/components/Actions/Actions";

interface IProps {
  handleNumClick: (value: string) => void;
}

function Buttons(props: IProps) {
  return (
    <>
      <Numpad handleNumClick={props.handleNumClick} />
      <Actions />
    </>
  );
}

export default Buttons;
