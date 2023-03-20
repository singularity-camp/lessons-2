import calculator from "./functionalCalculator";

describe.skip("test functional calculator", () => {
  test("test add", () => {
    expect(calculator(3, 4, "add")).toBe(7);
  });
  test("test mock add", () => {
    expect(calculator(3, 4, "add")).toBe(7);
  });

  // test("test mock", () => {
  //   const mock = jest.fn().mockReturnValue(0);
  //   calculator(3, 4, mock);
  //
  //   expect(mock).toBeCalledWith(3, 4);
  //   expect(mock).toHaveReturnedWith(0);
  // });
});
