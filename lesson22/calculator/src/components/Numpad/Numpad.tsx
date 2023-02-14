const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Numpad() {
  return (
    <div>
      {numbers.map((value) => (
        <button key={value}>{value}</button>
      ))}
    </div>
  );
}

export default Numpad;