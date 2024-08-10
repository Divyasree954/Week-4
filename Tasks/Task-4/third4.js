let person = {
    name: "Divya sree",
    age: 18,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet();
