// Copy countries array(Avoid mutation)
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

let copiedCountries = [];

for (const country of countries) {
  copiedCountries.push(country);
}

console.log(`Copied countries array :`, copiedCountries);

//2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

let unsortedCountries = [];

for (let i = 0; i < countries.length; i++) {
  unsortedCountries[i] = countries[i];
}

const sortedCountries = unsortedCountries.sort();

console.log(`sortedCountries`, sortedCountries);

//3. Sort the webTechs array and mernStack array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(`sorted WebTechs :`, webTechs.sort());
console.log(`sorted mernStack :`, mernStack.sort());

//4. Extract all the countries contain the word 'land' from the countries array and print it as array

let countriesWithLand = [];

countries.forEach((country) => {
  if (country.includes(`land`)) {
    countriesWithLand.push(country);
  }
});

console.log(`all the countries contain the word 'land' :`, countriesWithLand);

//5. Find the country containing the hightest number of characters in the countries array
let lengths = [];
for (const country of countries) {
  lengths.push(country.length);
}
// console.log(lengths)
const hightestLength = Math.max(...lengths);

let hightestCharacters = [];
for (const country of countries) {
  if (country.length === hightestLength) {
    // console.log(country);
    hightestCharacters.push(country);
  }
}

console.log(
  `hightest number of characters in the countries : ${hightestCharacters}`
);

//6. Extract all the countries contain the word 'land' from the countries array and print it as array

// same as 4. number question

//7. Extract all the countries containing only four characters from the countries array and print it as array
let countriesWithFourCharacters = [];

for (const country of countries) {
  if (country.length === 4) countriesWithFourCharacters.push(country);
}

console.log(
  `countries containing only four characters :`,
  countriesWithFourCharacters
);

//8. Extract all the countries containing two or more words from the countries array and print it as array

let countriesWithWords = [];

for (const country of countries) {
  if (country.includes(" ")) {
    countriesWithWords.push(country);
  }
}

console.log(
  `all the countries containing two or more words :`,
  countriesWithWords
);


//9. Reverse the countries array and capitalize each country and stored it as an array

const reversedCountries = countries.reverse()

let reversedCountriesWithCapitalized = []

for (const country of reversedCountries) {

  reversedCountriesWithCapitalized.push(country.toUpperCase())
}

console.log(`Reverse the countries array and capitalize each country :`,reversedCountriesWithCapitalized);
