
class AnimalClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    EatFood() {
        console.log(`${this.name} is eating food.`);
    }
}

const Dog = new AnimalClass("Buddy", 3);
console.log(Dog);

const Cat = new AnimalClass("Whiskers", 2);
console.log(Cat);

// ===================================================
// shortcut way to create class in typescript using public keyword
class AnimalClass1 {
    constructor(public name: string, public age: number) {
    }
    EatFood() {
        console.log(`${this.name} is eating food.`);
    }
}

// ===================================================
// inheritance
class Person {
    constructor(public name: string, public age: number) {
    }
    Greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    roll: number;

    constructor(name: string, age: number, roll: number) {
        super(name, age);
        this.roll = roll;
    }
}
const student1 = new Student("Alice", 20, 101);
student1.Greet();

// ===================================================
// polymorphism
class Shape {
    draw(): void {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw(): void {
        console.log('Drawing a circle');
    }
}

class Rectangle extends Shape {
    draw(): void {
        console.log('Drawing a rectangle');
    }
}

const shapes: Shape[] = [new Shape(), new Circle(), new Rectangle()];

shapes.forEach(shape => {
    shape.draw();  // Polymorphism: same method name, different implementations
});

// ===================================================
// abstraction
class Car {
    constructor(public brand: string) { }

    startEngine(): void {
        this.igniteFuel();
        this.turnOnElectricSystem();
        console.log(`${this.brand} engine started.`);
    }

    // Private methods to hide internal details
    private igniteFuel(): void {
        console.log('Fuel ignited.');
    }

    private turnOnElectricSystem(): void {
        console.log('Electric system turned on.');
    }
}

const myCar = new Car('Toyota');
myCar.startEngine();

// The user calls startEngine() without knowing internal details of igniteFuel or turnOnElectricSystem
// This is abstraction: exposing only necessary parts and hiding complexity

// ================ Abstract class =================
// Abstract class: You cannot create an instance of this class directly.
// It’s meant to be a base class that other classes extend.
abstract class Vehicle {
    // The constructor assigns a brand to the vehicle (e.g., 'Toyota', 'Honda')
    constructor(public brand: string) {}

    // Abstract method: This method has no implementation here,
    // but every subclass *must* provide its own version of this method.
    // This enforces that subclasses implement startEngine().
    abstract startEngine(): void;

    // Concrete method: This method has implementation here,
    // so all subclasses will inherit it and can use it as-is.
    stopEnginee(): void {
        console.log(`${this.brand} engine stopped.`);
    }
}

// Car class inherits from Vehicle
// It must implement the abstract method startEngine()
class Car2 extends Vehicle {
    startEngine(): void {
        // Implementation specific to Car
        console.log(`${this.brand} engine started.`);
    }
}

// Bike class also inherits from Vehicle
// It provides its own implementation of startEngine()
class Bike extends Vehicle {
    startEngine(): void {
        // Implementation specific to Bike
        console.log(`${this.brand} bike engine started.`);
    }
}

// Creating an instance of Car with brand "Toyota"
const car = new Car2('Toyota');
car.startEngine();   // Outputs: "Toyota engine started."
car.stopEnginee();    // Outputs: "Toyota engine stopped."

// Creating an instance of Bike with brand "Honda"
const bike = new Bike('Honda');
bike.startEngine();  // Outputs: "Honda bike engine started."
bike.stopEnginee();   // Outputs: "Honda engine stopped."

// Trying to create an instance of Vehicle directly would cause an error,
// because Vehicle is abstract and incomplete (it has an abstract method).
// const vehicle = new Vehicle('Generic'); // ❌ Error: Cannot instantiate abstract class
