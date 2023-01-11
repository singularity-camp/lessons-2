function async1() {
  return Promise.resolve("1");
}

function async2() {
  return Promise.resolve("2");
}

function resolver(asyncFns) {
  asyncFns.forEach(async (fn) => {
    console.log(await fn());
  });

  // for (let i = 0; i < asyncFns.length; i++) {
  //   console.log(await asyncFns[i]());
  // }
}

resolver([async1, async2]);

function sum(a, b) {
  return a + b;
}

sum(null, undefined);
