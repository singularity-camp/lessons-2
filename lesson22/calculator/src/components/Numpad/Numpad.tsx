const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface IProps {
  handleNumClick: (value: string) => void;
}

function Numpad(props: IProps) {
  return (
    <div>
      {numbers.map((value) => (
        <button
          key={value}
          onClick={() => props.handleNumClick(value.toString())}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Numpad;
