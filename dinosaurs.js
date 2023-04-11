const dinosaur = {
  name: "Helena",
  species: "Brontosaurus",
  introduce: function () {
    console.log(`Hi! My name is Helena!`);
  },
};

const dinosaurTwo = {
  name: "Adrian",
  species: "Velociraptor",
  introduce: function () {
    console.log(`Hi! My name is Adrian!`);
  },
};

const dinosaurThree = {
  name: "Miriam",
  species: "Triceratops",
  introduce: function () {
    console.log(`Hi! My name is ${this.name}!`);
  },
};

// console.log(dinosaur.introduce());
dinosaur.introduce();

//inheritence
class tireceratops extends Dino {
  static extinct = false;
  constructor(name) {
    super(name, "Triceratops", "plants");
  }
  charge(enemy) {
    console.log(`The enrage ${this.species} charges at the ${enemy}`);
  }
}
