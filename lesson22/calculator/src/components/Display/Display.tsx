interface IProps {
  value: string;
}

function Display(props: IProps) {
  return <input readOnly value={props.value} />;
}

export default Display;
