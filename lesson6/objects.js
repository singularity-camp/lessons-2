// const homer = { name: "Homer Simpson", role: "Father" };
// console.log(homer)

const obj1 = {name: "Bart"}
const obj2 = {age: 10, town: "Springfield", ...obj1, role: "sone"}
delete obj2.role

obj1.age = 12

const {age, ...restObj} = obj2

console.log(obj2)
console.log(age)
console.log(restObj)