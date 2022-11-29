//1. Explain the difference between forEach, map, filter, and reduce.
// do theoretical study

//2. Define a callback function before you use it in forEach, map, filter or reduce.
// do theoretical study

//3. Use forEach to console.log each country in the countries array.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

console.log(`forEach to console.log each country in the countries array :`);
countries.forEach((country) => console.log(country));

//4. Use forEach to console.log each name in the names array.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(`forEach to console.log each name in the names array :`);
names.forEach((name) => console.log(name));

//5. Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`forEach to console.log each number in the numbers array :`);

numbers.forEach((number) => console.log(number));

//6. Use map to create a new array by changing each country to uppercase in the countries array.

console.log(
  `changing each country to uppercase :`,
  countries.map((country) => country.toUpperCase())
);

//7. Use map to create an array of countries length from countries array.

console.log(
  `create an array of countries length :`,
  countries.map((country) => country.length)
);

//8. Use map to create a new array by changing each number to square in the numbers array
console.log(
  `each number to square :`,
  numbers.map((number) => number ** 2)
);

//9. Use map to change to each name to uppercase in the names array

console.log(
  `each name to uppercase :`,
  names.map((name) => name.toUpperCase())
);

//10. Use map to map the products array to its corresponding prices.

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  `products corresponding prices :`,
  products.map((product) => product.price)
);

//11. Use filter to filter out countries containing land.
console.log(
  `countries containing land :`,
  countries.filter((country) => {
    return country.includes("land") || country.includes("Land");
  })
);

//12. Use filter to filter out countries having six character.

console.log(
  `countries having six character :`,
  countries.filter((country) => country.length === 6)
);

//13. Use filter to filter out countries containing six letters and more in the country array.

console.log(
  `countries containing six letters and more :`,
  countries.filter((country) => country.length >= 6)
);

//14. Use filter to filter out country start with 'E'

console.log(
  `country start with 'E' :`,
  countries.filter((country) => country.startsWith("E"))
);

//15. Use filter to filter out only prices with values.

let productPrices = products.filter((product) => {
  // console.log(product);
  return product.price > 0;
});
console.log(`only prices with values :`);

for (const product of productPrices) {
  console.log(`${product.price}`);
}

//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (productArray) => {
  let stringItems = [];
  for (const product of productArray) {
    stringItems.push(product.product);
  }

  return stringItems;
};

console.log(`only with string items :`, getStringLists(products));

//17. Use reduce to sum all the numbers in the numbers array.

console.log(
  `sum all the numbers :`,
  numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0)
);

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let withoutLastCountries = [];
for (let i = 0; i < countries.length - 1; i++) {
  withoutLastCountries[i] = countries[i];
}

let allCountries = withoutLastCountries.reduce((accumulator, country) => {
  return accumulator + `${country}, `;
}, "Estonia, ");

console.log(
  `${allCountries} and ${
    countries[countries.length - 1]
  } are north European countries`
);

//19. Explain the difference between some and every
//do theoretical study

//20. Use some to check if some names' length greater than seven in names array

console.log(
  `check if some names' length greater than seven :`,
  names.some((name) => name.length > 7)
);

//21. Use every to check if all the countries contain the word land
console.log(
  `check if all the countries contain the word land :`,
  countries.every((country) => {
    return country.toLowerCase().includes("land");
  })
);

//22. Explain the difference between find and findIndex.
// do theoretical study

//23. Use find to find the first country containing only six letters in the countries array

console.log(
  `first country containing only six letters :`,
  countries.find((country) => country.length === 6)
);

//24. Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(
  `the index position of the first country containing only six letters :`,
  countries.findIndex((country) => country.length === 6)
);

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(
  `the index position of Norway :`,
  countries.findIndex((country) => country === "Norway")
);

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(
  `the index position of Russia if it doesn't exist you will get -1 :`,
  countries.findIndex((country) => country === "Russia")
);
