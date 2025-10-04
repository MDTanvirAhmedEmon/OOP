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
}

const dog = new Animal('Dog', 5);
console.log(dog);

const cat = new Animal('Cat', 3);
console.log(cat);