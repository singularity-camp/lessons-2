function getPath(src, path) {
  const keys = path.split("."); // ["user", "name", "key", "age"]
  let value = src;
  for (const key of keys) {
    if (value[key]) {
      value = value[key];
    } else {
      return value;
    }
  }

  return value;
}

const src = { user: { name: "Harry Potter", age: 20 } };

console.log(getPath(src, "user.name.hello.what"));
