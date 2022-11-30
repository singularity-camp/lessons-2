// function helloWorld(name) {
//   console.log(`Hello ${name}!`);
// }
//
// helloWorld("Talgat");

// function sum(a, b) {
//   return a + b;
// }
//
// console.log(sum(1, 2)); // 3
// console.log(sum(3, 5)); // 8

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
//
// let addTo2 = sum(2);
//
// console.log(addTo2(3)); // 5
// console.log(addTo2(5)); // 7
// console.log(sum(3)(6)); // 9

// function count(a) {
//   console.log(a);
//   if (a > 0) {
//     a--;
//     count(a);
//   }
// }
//
// count(3); // 3, 2, 1
// count(5); // 5, 4, 3, 2, 1

// function getUser(name, age) {
//   return { name, age };
// }
//
// console.log(getUser("Harry Potter", 12).name); // Harry Potter
// console.log(getUser("Gandalf", 102).name); // Gandalf
// console.log(getUser("Sherlock", 43).age); // 43

// function getUser(firstName, lastName) {
//   return {
//     getFullName() {
//       return `${firstName} ${lastName}`;
//     },
//   };
// }
//
// console.log(getUser("Harry", "Potter").getFullName()); // Harry Potter
// console.log(getUser("Sherlock", "Holmes").getFullName()); // Sherlock Holmes

// multiply2Max(1)(2)(3); // 2
// multiply2Max(4)(4)(1); // 4
// multiply2Max(3)(0)(5); // 0
