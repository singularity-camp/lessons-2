// 1, 1, 2, 3, 5, 8,
function genFibonaci() {
  let a = 0;
  let b = 1;
  return function () {
    [a, b] = [b, a + b];
    return b;
  };
}

const fib = genFibonaci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
