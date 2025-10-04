
class AnimalClass {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const Dog = new AnimalClass("Buddy", 3);
console.log(Dog);

const Cat = new AnimalClass("Whiskers", 2);
console.log(Cat);