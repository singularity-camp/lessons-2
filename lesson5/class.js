class Animal {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }

  speak() {
    console.log(`${this.#getName()} says ${this.voice}`);
  }

  move(stepsNum) {
    console.log(`${this.#getName()} moves by ${stepsNum} step`);
  }

  belongsTo() {
    console.log(`${this.#getName()} belongs to ${this.owner}`);
  }

  #getName() {
    return this.name;
  }
}

class Cat extends Animal {
  constructor(name, owner, voice) {
    super(name, owner);
    this.voice = voice;
  }

  climb() {}
}

class Dog extends Animal {
  constructor(name, owner, voice) {
    super(name, owner);
    this.voice = voice;
  }

  guard() {}
}

const garfield = new Cat("Garfield", "John", "I hate Mondays");
const scoobydoo = new Dog("Scooby-Doo", "Shaggy", "Scooby-Doo Scooby-Doo");

// garfield.speak();
// garfield.move(3);
// garfield.belongsTo();
// scoobydoo.speak();
// scoobydoo.move(4);
// scoobydoo.belongsTo();

// const garfield = new Cat()

// name
// speak() Whisker says meow
// move(steps)
// owner
// belongsTo()

console.log(garfield instanceof Cat);
console.log(garfield instanceof Animal);
console.log(garfield instanceof Dog);
