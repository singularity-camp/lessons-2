class UrlСonstructor {
  constructor(url) {
    this._url = url;
    this.params = {};

    this.#parseParams();
  }

  #parseParams() {
    // https://google.com?name=Homer&role=father&location=Springfield
    const decoded = decodeURI(this._url);
    const slices = decodeURI.split("?"); // ["https://google.com", name=Homer&role=father&location=Springfield]
    this._url = slices[0];
    let paramsStr = slices[1];

    const paramsStrs = paramsStr.split("&"); // ["name=Homer", "role=father", "location=Springfield"]

    for (const str of paramsStrs) {
      const [key, value] = str.split("=");
      this.params[key] = value;
    }
  }

  #stringifyParams() {
    let query = "";

    // {name: "Dali", occupation: "Painter", age: 40}
    // Object.entries(this.params): [["name", "Dali"], ["occupation", "Painter"], ["age", 40]]
    for (const [key, value] of Object.entries(this.params)) {
      query += `&${key}=${value}`; // name=value, &name=Dali&occupation=Painter&age=40
    }
    query = query.slice(1);

    return query;
  }

  removeAll() {
    this.params = {};
    return this.construct();
  }

  construct() {
    const query = this.#stringifyParams();

    if (query !== "") {
      return encodeURI(`${this._url}?${query}`);
    } else {
      return encodeURI(this._url);
    }
  }
}

// let con = new UrlСonstructor("https://jmart.kz/products");
// con.params.category_id = 2879;
//
// con.construct(); //https://jmart.kz/products?category_id=2879
//
// con.params.hello = "World" // this.params = {..., hello: "World"}
// con.construct(); // https://jmart.kz/products?hello=World&category_id=2879
//
// console.log(con.params); // {hello: "World", category_id: 2879}
//
// con.removeAll(); // https://jmart.kz/products
// con.construct(); // https://jmart.kz/products
//
// console.log(con.params); // {}

// con = new UrlСonstructor("https://jmart.kz/products?category_id=2879");
// con.params.category_id; //2879
// con.params.test; //undefined
//
// con.removeAll(); // https://jmart.kz/products
// con.construct(); // https://jmart.kz/products

// const urlC = new UrlСonstructor("https://google.com");
// console.log(urlC.params) // {}
// urlC.params.name = "Dali"
// urlC.params.occupation = "Painter"
//
// console.log("params", urlC.params) // {name: "Dali", occupation: "Painter"}
// console.log("call construct", urlC.construct()) // https://google.com?name=Dali&occupation=Painter
// console.log("call removeAll", urlC.removeAll()) // https://google.com
// console.log("params", urlC.params) // {}

const urlC2 = new UrlСonstructor(
  "https://google.com?name=Homer&role=father&location=Springfield"
);

console.log("params", urlC2.params); // {name: "Homer", role: "father", location: "Springfield"}
console.log("call construct", urlC2.construct()); // https://google.com?name=Homer&role=father&location=Springfield
urlC2.params.name = "Bart";
urlC2.params.role = "son";
urlC2.params.catchPhrase = "Oh caramba!";
console.log("params", urlC2.params); // {name: "Bart", role: "son", location: "Springfield", catchPhrase: "Oh caramba!"}
console.log("call construct", urlC2.construct()); // https://google.com?name=Bart&role=son&location=Springfield
console.log("params", urlC2.params); // {}
console.log("call removeAll", urlC2.removeAll()); // https://google.com


