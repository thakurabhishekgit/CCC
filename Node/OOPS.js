class Dog {

    constructor(name) {
        this.name = name;
    }
    
    bark() {
        console.log(`${this.name} says Woof!`);
    }
    static info() {
        console.log("Dogs are loyal animals.");
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
    
    meow() {
        console.log(`${this.name} says Meow!`);
    }
    static info() {
        console.log("Cats are independent animals.");
    }
}

class AnimalFactory {
    static createAnimal(type, name) {
        if (type === "dog") {
            return new Dog(name);
        } else if (type === "cat") {
            return new Cat(name);
        } else {
            throw new Error("Unknown animal type");
        }
    }
}


// Example usage
const dog = AnimalFactory.createAnimal("dog", "Buddy");
dog.bark(); 
const cat = AnimalFactory.createAnimal("cat", "Whiskers");
cat.meow(); 

const data = new Dog("DataDog");
data.bark();

