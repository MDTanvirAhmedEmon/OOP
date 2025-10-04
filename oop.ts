
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
