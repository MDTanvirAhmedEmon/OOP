
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
