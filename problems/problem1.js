function call(num, fn) {
  function recurse(i, max, fn) {
    if (i < max) {
      fn();
      recurse(i + 1, max, fn);
    }
  }

  recurse(0, num, fn);
}

function Gandalf() {
  console.log("You shall not pass!");
}

call(3, Gandalf);
// You shall not pass!
// You shall not pass!
// You shall not pass!

call(1, function run() {
  console.log("Fly, you fools!");
});
// Fly, you fools!
