// Hoisting
// let age = 23;
// let isAdult = true;
//
// function updateUser(newAge) {
//   let isAdult = false;
//   age = 24;
//   console.log("inside updateUser", isAdult);
//
//   function helloWorld() {
//     console.log("isAdult", isAdult);
//     console.log("Hello World");
//   }
//
//   helloWorld();
// }
//
// console.log(sayName());
//
// function sayName() {
//   console.log("My name is ...");
//   return 42;
// }

// sayName();
// console.log("isAdult1", isAdult);
// updateUser();
// console.log("isAdult2", isAdult);

// var a3;
// console.log("a3", a3);
//
// let a1 = { name: "Alyam" }; // a1 = 0b23e344
// a1 = { name: "Miras" }; // a1 = 0b23e332
// const a2 = { name: "Aldiyar" };
// a2.name = "Kuandyk";
// a3 = "X";

// (function (name) {
//   console.log("Hello", name);
// })("Aldiyar");

function oldJSProblem() {
  var arr = [];
  // let's create 3 functions
  for (var i = 0; i < 3; i++) {
    // and store them in funcs
    (function (ind) {
      arr[ind] = function () {
        // each should log its value.
        console.log("My value:", ind);
      };
    })(i);
  }
  // arr[0] = function () {
  //     console.log("My value:", i);
  // }
  // arr[1] = function () {
  //     console.log("My value:", i);
  // }
  // arr[2] = function () {
  //     console.log("My value:", i);
  // }
  for (let j = 0; j < 3; j++) {
    // and now let's run each one to see
    arr[j]();
  }
}

oldJSProblem();
