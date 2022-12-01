//1. create an empty set

const emptySet = new Set();

console.log(`an empty set : `, emptySet);

//2. Create a set containing 0 to 10 using loop

let numbers = new Set();

for (let i = 0; i < 10; i++){
    numbers.add(i);
}

console.log(`a set containing 0 to 10 :`,numbers);

//3. Remove an element from a set

const fruits = new Set(['apple', 'banana', 'orange', 'mango','jackfruit', 'pineapple', 'strawberry' ]);

console.log(`main set :`, fruits);
fruits.delete('apple') //delete apple
console.log(`main set, after delete :`, fruits);

// Clear a set
fruits.clear()
console.log(`main set, after clear :`, fruits);


// Create a set of 5 string elements from array

const stringArray = ['one', 'two', 'three', 'four', 'five']

let stringNumbers = new Set()

for (const item of stringArray){
    stringNumbers.add(item)
}

console.log(`set of 5 string elements from array :`, stringNumbers);

// Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway']
let mapOfCountries = new Map()
for (const country of countries) {
    mapOfCountries.set(country, country.length)
}

console.log(`a map of countries and number of characters of a country :`,mapOfCountries);




