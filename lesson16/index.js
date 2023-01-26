function submitHandler(e) {
  e.preventDefault();
  console.log(e);
}

function handleLoad() {
  const listCheckbox = document.getElementById("list-checkbox");

  const itemsCheckbox = document.getElementsByClassName("checkbox-item");

  let counter = 0;
  for (const itemCheckbox of itemsCheckbox) {
    itemCheckbox.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        counter++;
      } else {
        counter--;
      }

      if (counter === 0) {
        listCheckbox.indeterminate = false;
        listCheckbox.checked = false;
      } else if (counter === itemsCheckbox.length) {
        listCheckbox.indeterminate = false;
        listCheckbox.checked = true;
      } else {
        listCheckbox.indeterminate = true;
      }
    });
  }

  const form = document.getElementById("form");

  form.addEventListener("submit", submitHandler);

  console.log(listCheckbox);
}

window.addEventListener("load", handleLoad, { once: true });
