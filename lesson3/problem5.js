function print() {
  console.log(this.value);
  return this;
}

function add(num) {
  this.value.push(num);
  return this;
}

function remove(ind) {
  this.value.splice(ind, 1);
  return this;
}

function update(ind, num) {
  this.value[ind] = num;
  return this;
}

function numbers(arr) {
  return {
    value: arr,
    print,
    add,
    remove,
    update,
  };
}

numbers([1, 2, 3])
  .print() // [1, 2, 3]
  .add(9)
  .print() // [1, 2, 3, 9]
  .remove(2)
  .print() // [1, 2, 9]
  .update(1, 3)
  .print(); // [1, 3, 9]
