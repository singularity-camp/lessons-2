function getProperties(obj) {
  // const properties = [];
  // for (const key in obj) {
  //   properties.push(key);
  // }
  //
  // return properties;
  return Object.keys(obj);
}

const student = {
  id: 25,
  name: "David Rayy",
  class: 12,
  hello() {
    console.log("Hello");
  },
};

console.log(getProperties(student)); // ["id", "name", "class"]
