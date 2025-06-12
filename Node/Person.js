//person = learn() , walk() , eat()
//dancer = name , desig , groupname learn() , walk() , eat() , dancing()
//programer = name , designation companmy name learn() , walk() , eat() , coding()
//singer = name , desig , bandname learn() , walk() , eat() , singing() , playGuitar()

class Person {
    constructor(name) {
        this.name = name;
    }
    learn() {
        console.log(`${this.name} is learning`);
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}


class Dancer extends Person {
    constructor(name, designation, groupName) {
        super(name);
        this.designation = designation;
        this.groupName = groupName;
    }
    
    dancing() {
        console.log(`${this.name} is dancing in the group ${this.groupName}`);
    }
    learn() {
        super.learn();
        console.log(`${this.name} is learning dance moves`);
    }
    walk() {
        super.walk();
        console.log(`${this.name} is walking gracefully`);
    }
    eat() {
        super.eat();
        console.log(`${this.name} is eating healthy food for energy`);
    }
}

class Programer extends Person{
    constructor(name, designation, companyName) {
        super(name);
        this.designation = designation;
        this.companyName = companyName;
    }
    coding() {
        console.log(`${this.name} is coding at ${this.companyName}`);
    }
    learn() {
        super.learn();
        console.log(`${this.name} is learning new programming languages`);
    }
    walk() {
        super.walk();
        console.log(`${this.name} is walking to the office`);
    }
    eat() {
        super.eat();
        console.log(`${this.name} is eating lunch at the office`);
    }
}


class Singer extends Person {
    constructor(name, designation, bandName) {
        super(name);
        this.designation = designation;
        this.bandName = bandName;
    }
    
    singing() {
        console.log(`${this.name} is singing in the band ${this.bandName}`);
    }
    
    playGuitar() {
        console.log(`${this.name} is playing guitar`);
    }
    
    learn() {
        super.learn();
        console.log(`${this.name} is learning new songs`);
    }
    
    walk() {
        super.walk();
        console.log(`${this.name} is walking to the stage`);
    }
    
    eat() {
        super.eat();
        console.log(`${this.name} is eating before the performance`);
    }
}



const dancer = new Dancer("Alice", "Lead Dancer", "Dance Crew");
dancer.learn();
dancer.walk();
dancer.eat();
dancer.dancing();
const programmer = new Programer("Bob", "Software Engineer", "Tech Company");
programmer.learn();
programmer.walk();
programmer.eat();
programmer.coding();
const singer = new Singer("Charlie", "Vocalist", "Rock Band");
singer.learn();
singer.walk();
singer.eat();
singer.singing();