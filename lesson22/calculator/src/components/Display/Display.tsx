interface IProps {
  number: number;
}

function Display(props: IProps) {
  return <input readOnly value={props.number} type="number" />;
}

export default Display;