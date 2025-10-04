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

class Student extends Person {
    constructor(name, age, roll) {
        super(name, age);
        this.roll = roll;
    }
}
const student1 = new Student('Emon', 23, 101);
console.log(student1);
console.log(student1.getName());


// ===================================================
// Polymorphism
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
    shape.draw();  // Polymorphism: same method name, different implementations
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
// Abstraction
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