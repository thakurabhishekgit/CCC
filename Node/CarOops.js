class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    honk() {
        console.log(`${this.brand} ${this.model} says Beep!`);
    }

    static info() {
        console.log("Cars are fast vehicles.");
    }
}
class Truck {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    honk() {
        console.log(`${this.brand} ${this.model} says Honk!`);
    }

    static info() {
        console.log("Trucks are heavy-duty vehicles.");
    }
}

class VehicleFactory {
    static createVehicle(type, brand, model) {
        if (type === "car") {
            return new Car(brand, model);
        } else if (type === "truck") {
            return new Truck(brand, model);
        } else {
            throw new Error("Unknown vehicle type");
        }
    }
}


const car = VehicleFactory.createVehicle("car", "Toyota", "Supra");
car.honk(); 
Car.info();
const truck = VehicleFactory.createVehicle("truck", "Ashok", "leyland");
truck.honk();    
Truck.info(); 
const data = new Car("DataCar", "ModelX");
data.honk(); 
