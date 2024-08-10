class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    printDetails() {
        console.log(`Animal: ${this.name} (${this.species})`);
    }
}

let myAnimal = new Animal("Elephant", "Elephas maximus");
myAnimal.printDetails();
