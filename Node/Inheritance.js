class Vehicle {
    constructor(type , brand , model) {
        this.type = type;
        this.brand = brand;
        this.model = model;
    }
    getData() {
        return `Type: ${this.type}, Brand: ${this.brand}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, price) {
        super("Car", brand, model);
        this.price = price;
    }

    

    getData() {
        return `${super.getData()}, Price: ${this.price}`;
    }
}

class Truck extends Vehicle {
    constructor(brand, model) {
        super("Truck", brand, model);
    }

    honk() {
        console.log(`${this.brand} ${this.model} says Honk!`);
    }
}

const car = new Car("Toyota", "Supra", 3456789);
console.log(car.getData()); 
const truck = new Truck("Ford", "F-150" );
console.log(truck.getData()); 