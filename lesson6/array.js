// const arr = new Array(4).fill(undefined)
// console.log(arr)
// console.log(arr[2])
// console.log(arr.length)

// const arr = new Array(4)
// console.log(arr)
// console.log(Object.getOwnPropertyNames(Array.prototype))

// let a = [1, 2, 3]
// let b = a
//
// a.push(4)
//
// console.log(a)
// console.log(b)

// let arr = [1, 2, 3, 4, 5]

// arr.push(4, 5, 6)
// console.log(arr)

// arr.pop()
// arr.pop()
// console.log(arr)

// arr.shift()
// arr.shift()
// console.log(arr)

// arr.unshift(-1, -2, 8)
// console.log(arr)

// arr.splice(2)
// console.log(arr)

// arr.splice(2, 2)
// console.log(arr)

// arr.splice(2, 2, 4, 8, 13)
// console.log(arr)

// let a = [4, 5, 6]
// let b = a.concat([4, 5, 6])
// let b = [...a, 4, 5, 6]

// let b = a.map((v, i, arr) => {
//     return v + i
// })
// console.log(b)

// let b = a.forEach((v, i, arr) => {
//     console.log(v)
//     console.log(i)
// })
// console.log(b)

// let b = a.filter((v, i, arr) => v % 2 === 0)
// let b = a.filter((v, i, arr) => v > 5)
// console.log(b)

// let a = [4, 1, 17, 0, 5, 25, 6]
// let b = a.sort((a, b) => b - a)
// console.log(b)

// const users = [
//     {name: "Harry", points: 150, house: "Griffindor"},
//     {name: "Goyle", points: -30, house: "Slytherin"},
//     {name: "Ron", points: 10, house: "Griffindor"},
//     {name: "Hermione", points: 50, house: "Griffindor"},
//     {name: "Malfoy", points: 20, house: "Slytherin"}
// ]

// const sorted = users.sort((user1, user2) => {
//     if (user1.house !== user2.house) {
//         if (user1.house === "Griffindor") {
//             return -1
//         } else {
//             return 1
//         }
//     } else {
//         return user2.points - user1.points
//     }
// })

// const arr = [4, 5, 6, 7];

// const users = [
//     {name: "Harry", points: 150, house: "Griffindor"},
//     {name: "Goyle", points: -30, house: "Slytherin"},
//     {name: "Ron", points: 10, house: "Griffindor"},
//     {name: "Hermione", points: 50, house: "Griffindor"},
//     {name: "Malfoy", points: 20, house: "Slytherin"}
// ]
//
// const found = users.find(v => v.points === 50)
// const indexOfRon = users.findIndex(v => v.name === "Ron")
//
// console.log(found)
// console.log(indexOfRon)
//
// // console.log(arr.indexOf(7))
// console.log(users.indexOf(users[2]))

// const arr1 = [1, 2, 3]
// const arr2 = [...arr1, 4, 5, 6] // [1, 2, 3, 4, 5, 6]
//
// const [a, b, ...restArr] = arr2
//
// console.log(restArr)
// console.log(a, b)

// let val1 = "Dog";
// let val2 = "Cat";
//
// console.log(val1);
// console.log(val2);
//
// [val1, val2] = [val2, val1];
//
// console.log(val1);
// console.log(val2);

    // const users = [
    //     {name: "Harry", points: 150, house: "Griffindor"},
    //     {name: "Goyle", points: -30, house: "Slytherin"},
    //     {name: "Ron", points: 10, house: "Griffindor"},
    //     {name: "Hermione", points: 50, house: "Griffindor"},
    //     {name: "Malfoy", points: 20, house: "Slytherin"}
    // ]
    //
    // const sum = users.reduce((prevResult, user, i, arr) => {
    //     if (user.points < 0) {
    //         return prevResult
    //     } else {
    //         return prevResult + user.points
    //     }
    // }, 0)
    //
    // console.log(sum)