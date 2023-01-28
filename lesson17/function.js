// function sum(...args) {
//   console.log(args);
// }
//
// const arr = [1, 2, 3, 4];
//
// sum(...arr);

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
//
// arr1.push(...arr2);
// console.log(arr1);

// const user = {
//   name: "Harry Potter",
//   age: 18,
//   prevSchool: "Hogwarts",
//   friends: ["Ron", "Hermione"],
// };
//
// const { age, name, ...restData } = user;
//
// console.log(restData);

// const arr1 = [1, 2, 3];
//
// const [firstNum, secondNum, ...restNums] = arr1;

// let a = "Hello";
// let b = "Hola!";
//
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
//
// const cat = {
//   name: "Whisker",
//   call() {
//     console.log(this);
//   },
// };
//
// const dog = {
//   name: "Bingo",
// };
//
// const mouse = {
//   name: "Bingo",
// };
//
// const animalCall = cat.call.bind(dog);
// const mouseCall = cat.call.bind(mouse);
//
// animalCall();

// function greetings() {
//   const hello = "Hello";
//
//   function greetingsName(name) {
//     console.log(`${hello} ${name}!`);
//   }
//
//   return greetingsName;
// }
//
// const sayHello = greetings();
// sayHello("John");
// sayHello("Lucius");

// function fib() {
//   let a = 0;
//   let b = 1;
//
//   function next() {
//     [a, b] = [b, a + b];
//     console.log(b);
//   }
//
//   return next;
// }
//
// const next = fib();
// for (let i = 0; i < 10; i++) {
//   next();
// }
