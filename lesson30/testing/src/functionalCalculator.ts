type Action = "add" | "subtract" | "multiply" | "divide";

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function calculator(a: number, b: number, action: Action) {
  switch (action) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    default:
      return 0;
  }
}

export default calculator;
