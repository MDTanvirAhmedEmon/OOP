// Building Block Of OOP

// 1. Inheritance
// 2. Encapsulation
// 3. Abstraction
// 4. Polymorphism

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    EatFood() {
        console.log(`${this.name} is eating food.`);
    }
}

const dog = new Animal('Dog', 5);
console.log(dog);

const cat = new Animal('Cat', 3);
console.log(cat.EatFood());

// ===================================================
// inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}

class Student extends Person { // Student class inherits from Person class ℹ️
    constructor(name, age, roll) {
        super(name, age);
        this.roll = roll;
    }
}
const student1 = new Student('Emon', 23, 101);
console.log(student1);
console.log(student1.getName());


// ===================================================
// polymorphism
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

const shapes = [new Shape(), new Circle(), new Rectangle()];

shapes.forEach(shape => {
    shape.draw();  // Polymorphism: same method name, different implementations ℹ️
});

// ===================================================
// another example of polymorphism
class PersonPoli {
    takeNap() {
        console.log('I am sleeping 8 hours')
    }
}

class KamlaStudent extends PersonPoli {
    takeNap() {
        console.log('I am sleeping 10 hours') // extends kore functional modify kora hoise tai same zinis extend korar sotteo vinno result dekhabe eitai polymorphism
    }
}

class Developer extends PersonPoli {
    takeNap() {
        console.log('I am sleeping 6 hours')
    }
}

function getNap(param) {
    param.takeNap()
}

const personPoli1 = new PersonPoli();
const students1 = new KamlaStudent();
const developer1 = new Developer();

getNap(personPoli1)
getNap(student1)
getNap(developer1)


// ===================================================
// abstraction
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    startEngine() {
        this._igniteFuel();
        this._turnOnElectricSystem();
        console.log(`${this.brand} engine started.`);
    }

    // Private methods to hide internal details (convention: underscore)
    _igniteFuel() {
        console.log('Fuel ignited.');
    }

    _turnOnElectricSystem() {
        console.log('Electric system turned on.');
    }
}

const myCar = new Car('Toyota');
myCar.startEngine();

// User calls startEngine(), but does NOT need to know the details of _igniteFuel or _turnOnElectricSystem
// This is abstraction: exposing only necessary parts and hiding complexity
// JavaScript doesn’t have built-in abstract keyword


//==================================================
// encapsulation
class BankAccount {
    #balance;  // Private property: #balance can ONLY be accessed inside this class
    // # is used to declare private fields in JavaScript
    // Constructor runs when creating a new BankAccount object
    // It sets the owner’s name and the initial balance
    constructor(owner, initialBalance) {
        this.owner = owner;      // public property - can be accessed outside
        this.#balance = initialBalance;  // private property - hidden from outside
    }

    // Public method to get the current balance
    // Outside code can call this to check balance safely
    getBalance() {
        return this.#balance;
    }

    // Public method to add money to the account
    // Checks that amount is positive before adding
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;  // update private balance safely
            console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
        } else {
            console.log('Invalid deposit amount.');
        }
    }

    // Public method to take money out of the account
    // Checks that amount is positive and not more than current balance
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;  // update private balance safely
            console.log(`Withdrew ${amount}. Remaining balance is ${this.#balance}.`);
        } else {
            console.log('Invalid withdraw amount or insufficient balance.');
        }
    }
}

// Create a new BankAccount for Alice with initial $1000
const myAccount = new BankAccount('Alice', 1000);

console.log(myAccount.owner);        // Prints: Alice
console.log(myAccount.getBalance()); // Prints: 1000

myAccount.deposit(500);              // Adds $500, balance is now 1500
myAccount.withdraw(300);             // Withdraws $300, balance is now 1200

console.log(myAccount.getBalance()); // Prints: 1200

// Trying to access #balance directly causes an error because it's private:
// console.log(myAccount.#balance);  // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class


// ================================================================
// ================================================================
// OOP Principles: Encapsulation & Abstraction
// ================================================================
// ================================================================

// 1. Encapsulation — Data Hiding & Access Control ℹ️
// ================================================================
// What it means:
// Encapsulation is about hiding the internal state (data) of an object and requiring all interaction to be performed through
// well-defined public methods.
// This protects the data from direct access and unintended modifications.

// How it works:

// Use private properties and private methods to restrict direct access.

// Provide public getter/setter methods or other functions to control how data is read or modified.

// It’s mainly about protecting the internal state and bundling data and methods together.

// Example:
// In your BankAccount class, the #balance is private (encapsulated), and you provide public methods like deposit() and withdraw()
// to modify it safely.

// 2. Abstraction — Hiding Complexity & Showing Only Essentials ℹ️
// ================================================================
// What it means:
// Abstraction is about hiding the complex implementation details and showing only the essential features or interfaces to the user.
// It focuses on what an object does rather than how it does it.

// How it works:

// Use abstract classes or interfaces that define what methods a subclass must implement without revealing how.

// Provide simple methods that hide the underlying complexity from the user.

// Example:
// In your Car and Bike classes that extend an abstract Vehicle, the startEngine() method is abstract — the user knows
// "they can start the engine," but doesn't need to know the internal engine details like igniting fuel or turning on electronics.