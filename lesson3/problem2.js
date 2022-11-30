function redundant(value) {
  return function () {
    return value;
  };
}

const someVariable = redundant("apple");
console.log(someVariable()); // apple

const what = redundant("pear");
console.log(what()); // pear

const f3 = redundant("");
console.log(f3()); // ""
