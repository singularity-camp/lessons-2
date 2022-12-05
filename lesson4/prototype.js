class Character {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} has moved`);
  }

  rename(newName) {
    this.name = newName;
  }

  log() {
    console.log("Character log");
  }
}

class Archer extends Character {
  constructor(name) {
    super(name);
  }

  shootArrow() {}

  log() {
    console.log("Legolas log");
  }
}

class Soldier extends Character {
  constructor(name) {
    super(name);
  }

  swingSword() {}
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
  }

  castSpell() {}
}

const legolas = new Archer("Legolas");
const aragorn = new Soldier("Aragorn");
const gandalf = new Sorcerer("Gandalf");
console.log(legolas);
console.log(aragorn);
console.log(gandalf);

legolas.log();
