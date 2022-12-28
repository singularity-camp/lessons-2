// function sayMyName(timer, cb) {
//   console.log(`say my name! ${timer}`);
//   if (cb) {
//     cb();
//   }
// }

// setTimeout(sayMyName, 100, 100, function () {
//   setTimeout(sayMyName, 500, 500, function () {
//     setTimeout(sayMyName, 1000, 1000);
//   });
//   setTimeout(sayMyName, 500, 500, function () {
//     setTimeout(sayMyName, 1000, 1000);
//   });
// });

// setTimeout(sayMyName, 500, `async ${500}`);
// setTimeout(sayMyName, 0, `async ${0}`);
//
// console.log("Sync call 1");
//
// setTimeout(sayMyName, 200, `async ${200}`);
//
// console.log("Sync call 2");

// Promise
// 1. pending
// 2. settled
//      a. Resolved
//      b. Rejected

// let a = -1;
//
// const promise = new Promise((resolved, rejected) => {
//   if (a > 0) {
//     resolved("I am your father");
//   } else {
//     rejected(new Error("I am your error"));
//   }
// });
//
// promise
//   .then((res) => {
//     console.log("Success", res);
//   })
//   .catch((err) => {
//     console.log("Catch", err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// function amIAlive(live) {
//   // if (live) {
//   //   return new Promise((resolve, reject) => {
//   //     resolve();
//   //   });
//   // } else {
//   //   return new Promise((resolve, reject) => {
//   //     reject();
//   //   });
//   // }
//   return new Promise((resolve, reject) => {
//     if (live) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }
//
// const state = amIAlive(false);
//
// state
//   .then(() => {
//     console.log("Yes I am alive");
//   })
//   .catch(() => {
//     console.log("No!!!!!");
//   });

// const timer = setTimeoutPromisfied(() => {
//   console.log("log timeout");
// }, 1000);
//
// timer.then(() => {
//   console.log("Success timeout");
// });

// async/await

function amIAlive(live) {
  return new Promise((resolve, reject) => {
    if (live) {
      resolve();
    } else {
      reject();
    }
  });
}

// amIAlive(false)
//     .then(() => {
//         console.log("Yes I am alive");
//     })
//     .catch(() => {
//         console.log("No!!!!!");
//     });

// async function checkAlive() {
//   try {
//     const res = await amIAlive(false);
//     console.log("Yes I am alive");
//   } catch (err) {
//     console.log("No!!!!!");
//   } finally {
//     console.log("The end");
//   }
// }
//
// checkAlive();

function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

async function getPokemon() {
  try {
    //     const promisePickachu = fetchPokemon("pikachu");
    //     const promiseCharmander = fetchPokemon("charmander");

    //     const resPickachu = await promisePickachu;
    //     const resCharmander = await promiseCharmander;

    const [resPickachu, resCharmander] = await Promise.all([
      fetchPokemon("pikachu"),
      fetchPokemon("charmander"),
    ]);

    // const jsonPickachu = await resPickachu.json();
    // const jsonCharmander = await resCharmander.json();

    // console.log("jsonPickachu", jsonPickachu);
    // console.log("jsonChermander", jsonCharmander);
  } catch (e) {
    console.error("err", e);
  }
}

getPokemon();
