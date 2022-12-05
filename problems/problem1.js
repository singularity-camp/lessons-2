function hello() {
  console.log("Hello");
}

function hello2() {
  console.log("Hello2");
  hello();
}

hello2();
