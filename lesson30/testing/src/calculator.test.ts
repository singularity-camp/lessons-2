import Calculator from "./calculator";
import { fc, test as fastTest } from "@fast-check/jest";

describe("test calculator", () => {
  describe.only("test add", () => {
    fastTest.prop([fc.float(), fc.float()])(
      "should detect the substring",
      (a, b) => {
        const calculator = new Calculator(a);
        calculator.add(b);
        return calculator.value === a + b;
      }
    );

    test.each([
      { initialValue: 2, newValue: 3, result: 5 },
      {
        initialValue: -3,
        newValue: 0,
        result: -3,
      },
      { initialValue: 2, newValue: 3, result: 5 },
      { initialValue: 1, newValue: 9, result: 10 },
    ])(
      "should add numbers: $initialValue and $newValue, expected result: $result",
      ({ initialValue, newValue, result }) => {
        const calculator = new Calculator(initialValue);
        calculator.add(newValue);
        expect(calculator.value).toBe(result);
      }
    );
  });

  describe("test subtract", () => {
    test.each([
      { initialValue: 2, newValue: 3, result: -1 },
      {
        initialValue: -3,
        newValue: 0,
        result: -3,
      },
      { initialValue: 2, newValue: 3, result: -1 },
      { initialValue: 1, newValue: 9, result: -8 },
    ])(
      "should subtract numbers: $initialValue and $newValue, expected result: $result",
      ({ initialValue, newValue, result }) => {
        const calculator = new Calculator(initialValue);
        calculator.subtract(newValue);
        expect(calculator.value).toBe(result);
      }
    );
  });
});
