class UrlСonstructor {
  constructor(url) {
    this.url = url;
    this.params = {};
  }

  construct() {
    const paramsArr = [];
    for (const [key, value] of Object.entries(this.params)) {
      const paramsStr = `${key}=${value}`;
      paramsArr.push(paramsStr);
    }

    if (paramsArr.length > 0) {
      return `${this.url}?${paramsArr.join("&")}`;
    } else {
      return this.url;
    }
  }

  removeAll() {
    this.params = {};
    return this.url;
  }
}

let constructor = new UrlСonstructor("https://jmart.kz/products");
constructor.params.category_id = 2879;
constructor.params.hello = "World";
constructor.params.isHero = false;

console.log(constructor.construct()); //https://jmart.kz/products?category_id=2879&hello=World&isHero=false

constructor = new UrlСonstructor("https://jmart.kz/products?category_id=2879");
console.log(constructor.params.category_id); //2879
console.log(constructor.params.hello); // "World";
console.log(constructor.params.test); //undefined

console.log(constructor.removeAll()); // https://jmart.kz/products
console.log(constructor.construct()); // https://jmart.kz/products
