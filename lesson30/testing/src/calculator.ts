class Calculator {
  value: number;

  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  add(newValue: number) {
    this.value += newValue;
    return this;
  }

  subtract(newValue: number) {
    this.value -= newValue;
    return this;
  }

  multiply(newValue: number) {
    this.value *= newValue;
    return this;
  }

  divide(newValue: number) {
    this.value /= newValue;
    return this;
  }

  clean() {
    this.value = 0;
    return this;
  }
}

export default Calculator;
