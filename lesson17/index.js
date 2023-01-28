let l = 1;
const c = 2;
var v = 3;

init();

function init() {
  const a = "123";

  switch (a) {
    case "123": {
      const m = 42;
      console.log("123");
      break;
    }
    case "321": {
      const m = 43;
      console.log("321");
      break;
    }
    default:
      console.log("default");
  }
}
