/*
1. Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/

const characterSet = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let randomCharacters = ``;
let numberOfCharacters = parseInt(Math.random() * characterSet.length);
// console.log(`numberOfCharacters`, numberOfCharacters)
for (let i = 0; i <= numberOfCharacters; i++) {
  let randomIndexPosition = parseInt(Math.random() * characterSet.length);

  randomCharacters += characterSet[randomIndexPosition];
}

console.log(
  `generate any number of characters random id :\n`,
  randomCharacters
);

// Write a script which generates a random hexadecimal number.

const hexadecimalNumbersSet = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
];
let randomHexNumbers = `#`;

for (let i = 0; 6 >= randomHexNumbers.length; i++) {
  let randomPosition = parseInt(Math.random() * hexadecimalNumbersSet.length);

  randomHexNumbers += hexadecimalNumbersSet[randomPosition];
}

console.log(`generates a random hexadecimal number :\n`, randomHexNumbers);

//3. Write a script which generates a random rgb color number.

let redRandomColorNumber = parseInt(Math.random() * 256);
let greenRandomColorNumber = parseInt(Math.random() * 256);
let blueRandomColorNumber = parseInt(Math.random() * 256);

console.log(
  `a random rgb color number :\nrgb(${redRandomColorNumber},${greenRandomColorNumber},${blueRandomColorNumber})`
);

/*
4. Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let upperCaseNames = [];

countries.forEach((country) => upperCaseNames.push(country.toUpperCase()));
console.log(`Countries' Name`, upperCaseNames);

//5. Using the above countries array, create an array for countries length'.

let lengths = [];
countries.forEach((country) => lengths.push(country.length)); //countries array from 4.number question
console.log(`an array for countries length`, lengths);

/*
6. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

let countryInfo = [];

countries.forEach((country) => {
  //countries array from 4.number question
  countryInfo.push([
    country,
    country.slice(0, 3).toLocaleUpperCase(),
    country.length,
  ]);
});

console.log(`create the array of arrays:`, countryInfo);

//7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let countryWithLand = countries.filter((country) => country.includes("land")); //countries array from 4.number question

if (countryWithLand.length > 0) {
  console.log(
    `country or countries containing the word 'land'`,
    countryWithLand
  );
} else {
  console.log("All these countries are without land");
}

//8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let countriesEndsWith = countries.filter((country) => country.endsWith(`ia`)); //countries array from 4.number question

let countriesWithOutEndsWith = countries.filter(
  (country) => !country.endsWith(`ia`)
); //countries array from 4.number question

// console.log(countriesEndsWith)
// console.log(countriesWithOutEndsWith)

if (countriesEndsWith.length > 0) {
  console.log(`countries ends with 'ai' :`, countriesEndsWith);
} else {
  console.log(
    `there is no country containing the word 'ai' :`,
    countriesWithOutEndsWith
  );
}

//9. Using the above countries array, find the country containing the biggest number of characters.

let characterLength = [];

countries.forEach((country) => characterLength.push(country.length)); //countries array from 4.number question

// console.log(characterLength)
// console.log(Math.max(...characterLength))

const biggestNumberOfCharacters =
  characterLength.sort()[characterLength.length - 1];

countries.forEach((country) => {
  if (country.length === biggestNumberOfCharacters) {
    console.log(
      `country containing the biggest number of characters :`,
      country
    );
  }
});

//10. Using the above countries array, find the country containing only 5 characters.

let lengthOfCharacters = [];
countries.forEach((country) => lengthOfCharacters.push(country.length)); //countries array from 4.number question

let only5Characters = lengthOfCharacters.filter((length) => length === 5);

// console.log(only5Characters)

let only5CharactersCountries = countries.filter(
  (country) => country.length === 5
);

console.log(`country containing only 5 characters :`, only5CharactersCountries);

//11 .Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let lengthsOfChar = [];

webTechs.forEach((webTech) => lengthsOfChar.push(webTech.length));

const longestWord = lengthsOfChar.sort((a, b) => a - b)[
  lengthsOfChar.length - 1
];

let longestWordInWebTechs = webTechs.filter(
  (webTech) => webTech.length === longestWord
);

console.log(`webTech`, webTechs);
console.log(`longest word in the webTechs array : ${longestWordInWebTechs}`);

/*
12. Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/

let webTechsWithLength = [];

webTechs.forEach((webTech) =>
  webTechsWithLength.push([webTech, webTech.length])
);

console.log(`create the array of arrays :`, webTechsWithLength);

//13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ["MongoDB", "Express", "React", "Node"];

let mernString = ``;

mernStack.forEach((tech) => (mernString += tech.slice(0, 1)));

console.log(
  `Create the acronym MERN by using the array mernStack :`,
  mernString
);

//14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const websiteTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

console.log(`print out the items :`);
for (const tech of websiteTechs) {
  console.log(tech);
}

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method

const fruits = ["banana", "orange", "mango", "lemon"];
let reversedArray = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedArray.push(fruits[i]);
}
console.log(`original array :`, fruits);
console.log(
  `reverse the order using loop without using a reverse method :`,
  reversedArray
);

// Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

console.log(`Print all the elements of array :`)
fullStack.forEach(techs => techs.forEach(tech => console.log(tech)))

