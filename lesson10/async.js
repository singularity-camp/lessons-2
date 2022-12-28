// const num = 10;
//
// const promise = new Promise((resolve, reject) => {
//   if (num > 5) {
//     resolve(num);
//   } else {
//     reject(new Error("You have new message!"));
//   }
//   // console.log("Hello I resolved promise!");
// });
//
// promise
//   .then((mes) => {
//     console.log("mes", mes);
//     return Promise.resolve(mes - 1);
//   })
//   .then((mes2) => {
//     console.log("mes2", mes2);
//     return mes2 - 1;
//   })
//   .finally(() => {
//     console.log("Finally!");
//   })
//   .catch((err) => {
//     console.log("err1", err);
//     return Promise.reject(new Error("from catch1"));
//   })
//   .catch((err2) => {
//     console.log("err2", err2);
//     return 0;
//   })
//   .then((mes3) => {
//     console.log("mes3", mes3);
//   });

// const user = {
//   name: "Bruce Wayne",
//   age: 41,
// };
//
// try {
//   console.log(user.name);
// } catch (err) {
//   console.log("user has no name");
// }
//
// try {
//   console.log(user.city.name);
// } catch(err) {
//     //
//     throw new Error("")
// }
//
// try {
//   console.log(user.age);
// } catch (err) {
//   console.log("user has no age");
// }

// const promise = newPromise(true);
//
// promise
//   .then((num) => {
//     console.log("then1", num);
//     return newPromise(true);
//   })
//   .then((num) => {
//     console.log("then2", num);
//     return newPromise(false);
//   })
//   .catch((err) => {
//     console.log("catch1", err);
//     return newPromise(false);
//   })
//   .catch((err) => {
//     console.log("catch2", err);
//     return newPromise(true);
//   })
//   .then((num) => {
//     console.log("then3", num);
//     return newPromise(true);
//   });

// async function callAsync() {
//   // try {
//   //   const promise = newPromise(true);
//   //   const res1 = await promise;
//   //   console.log("then1", res1);
//   //   const res2 = await newPromise(true);
//   //   console.log("then2", res2);
//   //   const res3 = await newPromise(false);
//   // } catch (err) {
//   //   console.log("catch1", err);
//   //   await newPromise(false);
//   // }
//
//   try {
//     try {
//       const promise = newPromise(true);
//       const res1 = await promise;
//       console.log("then1", res1);
//       const res2 = await newPromise(true);
//       console.log("then2", res2);
//       const res3 = await newPromise(false);
//     } catch (err) {
//       console.log("catch1", err);
//       await newPromise(false);
//     }
//   } catch (err) {
//     console.log("catch2", err);
//   }
//
//   console.log("then3");
//   newPromise(true);
// }

function newPromise(isResolved, service) {
  return new Promise((resolve, reject) => {
    if (isResolved) {
      resolve(service);
    } else {
      reject(new Error(service + " I am in trouble!"));
    }
  });
}

function getWeather(isResolved) {
  return newPromise(isResolved)
}

async function callOurServices() {
  try {
    const wPromise = newPromise(false, "weather");
    const prPromise = newPromise(true, "profile");
    const cPromise = newPromise(false, "currency");

    try {
      const wRes = await wPromise;
    } catch (e) {
      console.log("level 2 weather:", e)
    }

    const prRes = await prPromise;
    const cRes = await cPromise;
  } catch (e) {
    console.log("level 1:", e)
    await Promise.reject(e)
  }
}

callOurServices();
