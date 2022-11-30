// Problem1
// const square = {
//   length: 5,
//   area() {
//     return this.square * this.square;
//   },
//   perimeter() {
//     return 4 * this.square;
//   },
// };

function calcArea() {
  console.log(this);
  return this.length * this.length;
}

function calcPerimeter() {
  console.log(this);
  return 4 * this.length;
}

function newSquare(sideLength) {
  return {
    length: sideLength,
    area: calcArea,
    perimeter: calcPerimeter,
  };
}

const square = newSquare(4);
console.log(square.area());
console.log(square.perimeter());
