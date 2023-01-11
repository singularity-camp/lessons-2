// console.log(lambdaDepth(0)); // "edabit"
console.log(lambdaDepth(1)()); // "edabit"
// console.log(lambdaDepth(2)()()); // "edabit"
// console.log(typeof lambdaDepth(2)()); // "function"

function lambdaDepth(depth) {
  // if (depth > 0) {
  //   return () => lambdaDepth(depth - 1);
  // }
  // return "edabit";

  let result = "edabit";

  for (let i = depth; i > 0; i--) {
    console.log(result);
    result = function () {
      return result;
    };
  }

  // if (typeof result === "function") {
  //   const newR = result;
  //   console.log(depth);
  //   console.log(newR());
  //   console.log(newR()());
  // }

  return result;
}
