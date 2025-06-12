// class NameValid {
//     constructor(FirstName , LastName) {
//         this.FirstName = FirstName;
//         this.LastName = LastName;
//     }
//     fullName() {
//         return `${this.FirstName} ${this.LastName}`;
//     }
// }

// const person = new NameValid("Thakur", "Abhishek");
// console.log(person.fullName());


// //user input 
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your name: ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });


class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

    perimeter() {
        return 2 * (this.length + this.width);
    }
}

const rectangle = new Rectangle(5, 3);
console.log(`Area: ${rectangle.area()}`);
console.log(`Perimeter: ${rectangle.perimeter()}`);