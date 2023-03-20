interface IProps {
  value: string;
}

const Display = ({ value }: IProps) => {
  return <p data-testid="Display-p">{value}</p>;
};

export default Display;
