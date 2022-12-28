import form from "./forms.js";

// console.log("I am js");

// function handleClickRoot() {
//   console.log("I am clicked root");
//   if (this.textContent === "I am old groot") {
//     this.textContent = "I am new groot";
//   } else {
//     this.textContent = "I am old groot";
//   }
// }
//
// function onLoad() {
//   const rootEl = document.getElementById("root");
//   // console.log(rootEl.innerHTML);
//   // rootEl.textContent = "I am new groot";
//
//   // document.addEventListener(
//   //   "click",
//   //   () => {
//   //     console.log("I am clicked document");
//   //   },
//   //   true
//   // );
//   // rootEl.addEventListener("click", handleClickRoot, true);
// }
//
// function handleClick(event) {
//   const rootEl = document.getElementById("root");
//   if (!rootEl.contains(event.target)) {
//     console.log("click outside");
//   }
// }

// document.addEventListener("click", handleClick);

function onLoad() {
  form();
}

window.addEventListener("load", onLoad);
