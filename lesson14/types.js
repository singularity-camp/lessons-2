"use strict";
// function sum(a: number, b: number) {
//   return a + b;
// }
//
// console.log(sum(3, 2));
//
// let b: boolean = true;
// b = false;
//
// let s: string | number = "";
//
// let n = null;
// type User = {
//   name: string;
//   school: string;
//   age: number;
//   height?: number;
// };
//
// const user: User = {
//   name: "Harry",
//   school: "Hogwards",
//   age: 13,
//   height: undefined,
// };
// type Func = () => Func | string;
//
// function funcSort(fns: Func[]) {
//   const list = fns.map((fn) => ({
//     fn,
//     numCalls: 0,
//   }));
//
//   for (const item of list) {
//     let numCalls = 0;
//     let fn: Func | string = item.fn;
//     while (typeof fn === "function") {
//       numCalls++;
//       fn = fn();
//     }
//
//     item.numCalls = numCalls;
//   }
//
//   list.sort((a, b) => a.numCalls - b.numCalls);
//   return list.map(({ fn }) => fn);
// }
// type Item = unknown;
// type Callback = (a: Item) => boolean;
//
// function filter(arr: Item[], cb: Callback) {
//   const newArr: Item[] = [];
//
//   for (const a of arr) {
//     if (cb(a)) {
//       newArr.push(a);
//     }
//   }
//
//   console.log(newArr);
//
//   return newArr;
// }
// type Warrior = {
//   name: string;
//   damage: number;
// };
//
// type Archer = {
//   name: string;
//   range: number;
// };
//
// type UnionChar = Warrior & Archer;
//
// const char1: UnionChar = {
//   range: 10,
//   name: "Aragorn",
//   damage: 14,
// };
//
// function callName(char: UnionChar) {
//   console.log(char.name);
//
//   // if ("damage" in char) {
//   console.log(char.damage);
//   // }
//
//   // if ("range" in char) {
//   console.log(char.range);
//   // }
// }
// type Warrior = {
//   type: "warrior" | "barbarian" | "wielder";
//   name: string;
//   damage: number;
// };
//
// type Archer = {
//   type: "archer";
//   name: string;
//   range: number;
// };
//
// const char1: Archer = {
//   type: "archer",
//   name: "Legolas",
//   range: 13,
// };
