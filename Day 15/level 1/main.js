//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name, age, color,legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    animalInfo(){
        return `${this.name} has ${this.legs} legs, ${this.color} color and ${this.age} years old`
    }
    
}

const obj = new Animal('jerry', 5, 'black', 4)
console.log(`Animal class :\n`,obj.animalInfo());


//2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(name, age, color,legs, type){
        super(name, age, color,legs)
        this.type = type
    }

    dogInfo() {
        return `${this.name} is a ${this.age} years old ${this.type}`
    }
}

class Cat extends Animal {
    constructor(name, age, color,legs, type){
        super(name, age, color,legs)

        this.type = type
    }

    catInfo() {
        return `${this.name} is a ${this.age} years old ${this.type}`
    }

}

const dog = new Dog('Spike', 5, 'brown', 4, 'dog')
const cat = new Cat('Tom', 5, 'black', 4, 'cat')

console.log(`child class Dog :\n`,dog.dogInfo());
console.log(`child class Cat :\n`,cat.catInfo());
