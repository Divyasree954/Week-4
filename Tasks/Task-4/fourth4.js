function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Car.prototype.printDetails = function() {
    console.log(`Car: ${this.make} ${this.model} (${this.year})`);
};
let myCar = new Car("Benz", "mercedes", 2024);
myCar.printDetails();
