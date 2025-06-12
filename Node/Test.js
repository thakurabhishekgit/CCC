class NameValid {
    constructor(FirstName , LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
    fullName() {
        return `${this.FirstName} ${this.LastName}`;
    }
}

const person = new NameValid("Thakur", "Abhishek");
console.log(person.fullName());