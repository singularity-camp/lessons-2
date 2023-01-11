// f1() ➞ "hello"

// f2()() ➞ "edabit"

// f3()()() ➞ "user"

function f1() {
  return "hello";
}

function f2() {
  return () => "edabit";
}

function f3() {
  return () => () => "user";
}

funcSort([f2, f3, f1]); // [f1, f2, f3]

// funcSort([f1, f2, f3]); // [f1, f2, f3]
//
// funcSort([f2, "func"]); // ["func", f2]

function funcSort(fns) {
  const list = fns.map((fn) => ({
    fn,
    numCalls: 0,
  }));

  for (const item of list) {
    let numCalls = 0;
    let fn = item.fn;
    while (typeof fn === "function") {
      numCalls++;
      fn = fn();
    }

    item.numCalls = numCalls;
  }

  list.sort((a, b) => a.numCalls - b.numCalls);
  return list.map(({ fn }) => fn);
}
