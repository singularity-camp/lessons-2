interface IAnimalChild {
  speak(): void;
}

interface IFetcheable {
  fetch(object: string): void;
}

interface ICuddles {
  cuddle(): void;
}

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  static getClassName() {
    return "Animal";
  }

  run(distance: number) {
    console.log(`${this.name} run ${distance} m`);
  }

  speak() {}
}

class Dog extends Animal implements IAnimalChild, IFetcheable {
  #tailWigling: boolean;

  constructor(name: string, tailWigling: boolean) {
    super(name);
    this.#tailWigling = tailWigling;
  }

  get tailWigling() {
    console.log("GETTING tailwing");
    return this.#tailWigling;
  }

  set tailWigling(value: boolean) {
    console.log("SETTING tailwing");
    this.#tailWigling = value;
  }

  speak() {
    console.log(`${this.name} says ${this.#getVoice()}`);
  }

  fetch(object: string) {
    console.log(`${this.name} fetches ${object}`);
    return true;
  }

  #getVoice() {
    return "bark";
  }
}

class Cat extends Animal implements IAnimalChild, ICuddles {
  #numberOfLives: number;

  constructor(name: string, numberOfLives: number) {
    super(name);
    this.#numberOfLives = numberOfLives;
  }

  speak() {
    console.log(`${this.name} says meow`);
  }

  cuddle() {
    console.log(`${this.name} cuddles owner`);
  }
}

class Human {
  constructor() {}
}

const scooby = new Dog("Scooby", true);
const garfield = new Cat("Garfield", 9);

// console.log("scooby", scooby);
// console.log("garfield", garfield);
//
// scooby.run(200);
// garfield.run(50);
//
// scooby.speak();
// garfield.speak();

// function speakAnimals(animals: Animal[]) {
//   for (const animal of animals) {
//     animal.speak();
//   }
// }
//
// speakAnimals([scooby, garfield]);

console.log(Animal.getClassName());

console.log("get scooby tailWigling", scooby.tailWigling);
console.log("set scooby tailWigling", (scooby.tailWigling = false));
console.log("get scooby tailWigling", scooby.tailWigling);
