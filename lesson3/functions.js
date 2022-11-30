// const arrow = () => {
//   console.log("I am arrow!");
//   console.log(this);
// };
// arrow();

// const dog = {
//   name: "Bingo",
//   legs: 4,
//   speak: () => {
//     console.log(`${this.name} says: gaff, gaff`);
//   },
//   legsCounter: function () {
//     console.log("legsCounter this", this);
//     const counter = () => {
//       console.log(`${this.name} has ${this.legs} legs`);
//     };
//     const speak = function () {
//       console.log(`${this.name} says: gaff, gaff`);
//     };
//     return {
//       name: "Parrot",
//       legs: 2,
//       counter,
//       speak,
//     };
//   },
// };

// const counter = dog.legsCounter();
// counter();
//
// dog.legsCounter()();

// const cat = {
//   name: "Whisker",
//   legs: 4,
// };

// cat.speak = dog.speak;
// cat.speak();

// cat.legsCounter = dog.legsCounter;
// cat.legsCounter().counter();
// cat.legsCounter().speak();
