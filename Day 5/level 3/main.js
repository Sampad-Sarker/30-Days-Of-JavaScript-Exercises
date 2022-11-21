/*
1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
*/

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(`Sort the array :`, ages.sort());
console.log(`min age:`, ages[0], `years`);
console.log(`max age:`, ages[ages.length - 1], `years`);

// Find the median age(one middle item or two middle items divided by two)
const median = ages.length / 2;

let deleteIndexPosition;
if (median % 2 === 0) {
  deleteIndexPosition = Math.floor(median - 1) + 1;
} else {
  deleteIndexPosition = Math.floor(median - 1) + 2;
}

// console.log(median-1,deleteIndexPosition)

console.log(
  `median age :`,
  `${ages.slice(Math.floor(median - 1), deleteIndexPosition)} years`
);

// Find the average age(all items divided by number of items)
let totalAge = 0;
ages.forEach((age) => (totalAge += age));

const averageAge = totalAge / ages.length;
console.log(`average age :`, averageAge, `years`);

// Find the range of the ages(max minus min)

const sortedAges = [...ages.sort()]; //copy the array

const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

console.log(`range of the ages : ${maxAge - minAge} years`);

// Compare the value of (min - average) and (max - average), use abs() method

console.log(
  `the value of (min - average) : ${Math.abs(minAge - averageAge).toFixed(2)}`
);

console.log(
  `the value of (max - average) : ${Math.abs(maxAge - averageAge).toFixed(2)}`
);

// Slice the first ten countries from the countries array
// console.log(countries)
const first10Countries = countries.slice(0, 10);
console.log(`first ten countries :`);
first10Countries.forEach((country, index) =>
  console.log(`${index + 1}. ${country}`)
);

//2. Find the middle country(ies) in the countries array
// console.log(countries)
const medianPoint = countries.length / 2;

let deletedIndexPosition;

if (medianPoint % 2 === 0) {
  deletedIndexPosition = Math.floor(medianPoint - 1) + 1;
} else {
  deletedIndexPosition = Math.floor(medianPoint - 1) + 2;
}

console.log(
  `middle country(ies) :`,
  `${countries.slice(Math.floor(medianPoint - 1), deletedIndexPosition)}`
);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const medianPointOfCountries = countries.length / 2;

console.log(`Divide the countries array into two equal arrays:`);
if (countries.length % 2 === 0) {
  console.log(`first half :`, countries.slice(0, medianPointOfCountries));
  console.log(
    `second half :`,
    countries.slice(medianPointOfCountries, countries.length)
  );
} else {
  console.log(`first half :`, countries.slice(0, medianPointOfCountries + 1));
  console.log(
    `second half :`,
    countries.slice(medianPointOfCountries + 1, countries.length)
  );
}
