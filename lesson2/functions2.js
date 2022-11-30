// Context
// this

// //  function definition
// function hello1(name) {
//   console.log(`Hello ${name}!`);
// }
//
// hello1("Harry Potter");
//
// // arrow function
// const hello2 = (name) => {
//   console.log(`Hello ${name}!`);
// };
//
// hello2("Harry Potter");

// const user = {
//   name: "Harry",
//   lastName: "Potter",
//   getFullName: function () {
//     console.log(this);
//     return `${this.name} ${this.lastName}`;
//   },
// };
//
// console.log("full name", user.getFullName());

// const pawn1 = {
//   piece: "pawn",
//   color: "white",
//   x: 2,
//   y: 1,
//   remove: function () {},
// };
//
// const pawn2 = {
//   piece: "pawn",
//   color: "black",
//   x: 3,
//   y: 2,
//   remove: function () {},
// };
//
// pawn2.remove();
//
// console.log("pawn1: ", pawn1);
// console.log("pawn2: ", pawn2);

// const user1 = {
//   name: "Harry",
//   lastName: "Potter",
// };
//
// const user2 = {
//   name: "Ron",
//   lastName: "Weasley",
// };
//
// function fullName() {
//   console.log(`${this.name} ${this.lastName}`);
// }
//
// fullName()

// user1.fullName = fullName;
// user2.fullName = fullName;
//
// user1.fullName();
// user2.fullName();

// fullName.call(user1);
// fullName.apply(user2);

// const user1FullName = fullName.bind(user1);
// const user2FullName = fullName.bind(user2);
// user1FullName();
// user2FullName();

// const dog = {
//   name: "Bingo",
//   legs: 4,
//   speak: function () {
//     console.log(`${this.name} says: gaff, gaff`);
//   },
//   legsCounter() {
//     const _self = this;
//     return function counter() {
//       console.log(`${_self.name} has ${_self.legs} legs`);
//     };
//   },
// };
//
// const cat = {
//   name: "Whisker",
//   legs: 4,
// };

// const speak = dog.speak;
// dog.speak();
// cat.speak = dog.speak;
// cat.speak();
// speak();

// const countLegs = dog.legsCounter();
// countLegs();
// dog.legsCounter()();
// cat.counter = dog.legsCounter();
//
// cat.counter();

// const pawn1 = {
//   piece: "pawn",
//   color: "white",
//   x: 2,
//   y: 1,
//   remove: function () {},
//   sayName: () => {
//     console.log(this);
//   },
// };

// console.log(pawn1.sayName());
