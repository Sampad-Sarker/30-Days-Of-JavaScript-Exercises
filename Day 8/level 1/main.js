//1. Create an empty object called dog
let dog = {};

console.log(`an empty object :`, dog);

//2. Print the the dog object on the console
console.log(`Print the the dog object on the console :`, dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog = {
  name: "Spike",
  legs: 4,
  color: "brown",
  age: 5,
  bark: function () {
    return `woof woof`;
  },
};

console.log(`Add name, legs, color, age and bark properties :`, dog);

//4. Get name, legs, color, age and bark value from the dog object

console.log(
  `get values from dog object :\nname : ${dog.name}\nlegs : ${
    dog.legs
  }\ncolor : ${dog.color}\nage : ${dog.age}\nbark : ${dog.bark()}`
);

//4. Set new properties the dog object: breed, getDogInfo

dog.breed = 'Bulldog'
dog.getDogInfo = function () {
    let statement = `${this.name} is a ${this.age} years old ${this.breed}`
    return statement
}

console.log(`Set new properties to object\nbreed: ${dog.breed}\ngetDogInfo: ${dog.getDogInfo()} `);


