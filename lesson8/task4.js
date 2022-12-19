function sumArray(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  const [a, ...newArr] = arr;
  return a + sumArray(newArr);
}

console.log(sumArray([1, 2, 3])); // 6
// 1 + 2 + 3 = 6
