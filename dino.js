const dinosaurThree = {
  name: "Miriam",
  species: "Triceratops",
  introduce: function () {
    console.log(`Hi! My name is ${this.name}!`);
  },
};

class Dino {
  constructor(name, species, diet) {
    this.name = name;
    this.species = species;
    this.diet = diet;
  }
  introduce() {
    console.log(`Hi! My name is ${this.name}!`);
  }
}

const helena = new Dino("Helena", "Brontosaurus", "plants");
const x = new Dino("x", "T-Rex", "animals");
