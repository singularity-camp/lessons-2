const arr = [1, 2, 3];

arr.some((v) => v % 2 == 0); // true
arr.every((v) => v % 2 == 0); // false

function every(arr, fn) {}

function some(arr, fn) {}

console.log(some([1, 2, 3], (v) => v % 2 == 0)); // true
console.log(every([1, 2, 3], (v) => v % 2 == 0)); // false
console.log(every([1, 3, 5, 7], (v) => v % 2 == 1)); // false
