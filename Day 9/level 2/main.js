//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// let productWithPrices = products.filter((product) => product.price > 0);

console.log(
  `the total price of products :`,
  products
    .filter((product) => product.price > 0)
    .reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0)
);

//2. Find the sum of price of products using only reduce reduce(callback))

console.log(
  `the sum of price of products :`,
  products.reduce((accumulator, product) => {
    return accumulator + Number(product.price);
  }, 0)
);

//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).


const categorizeCountries = (countries) => {
  let categorizeCountries = countries.filter((country) => {
    return (
      country.toLowerCase().includes("land") ||
      country.toLowerCase().includes("ia") ||
      country.toLowerCase().includes("island") ||
      country.toLowerCase().includes("stan")
    );
  });

  return categorizeCountries;
};

console.log(
  `countries which have some common pattern (eg 'land', 'ia', 'island','stan') :`,
  categorizeCountries(onlyCountries)
);

//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const letterWithNumber = (countries) => {
  let firstLetters = countries.map((country) => {
    return country.charAt(0);
  });

  let objectOfLetters = [];
  for (let i = 0; i < firstLetters.length; i++) {
    let count = 0;
    for (let j = 0; j < firstLetters.length; j++) {
      if (firstLetters[i] === firstLetters[j]) {
        ++count;
      }
    }
    let letterInfo = {
      letter: firstLetters[i],
      numberOfTimesToUse: count,
    };

    objectOfLetters.push(letterInfo);
  }

  let uniqueLetterInfos = [
    ...new Map(
      objectOfLetters.map((letter) => [letter.letter, letter])
    ).values(),
  ];

  return uniqueLetterInfos;
};

// console.log(`return an array of objects, which is the letter and the number of times the letter use to start with a name of a country :`,letterWithNumber(countries));

console.log(
  `return an array of objects, which is the letter and the number of times the letter use to start with a name of a country :\n ${JSON.stringify(
    letterWithNumber(onlyCountries)
  )}`
);

//5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = () => {
  let firstTenCountries = onlyCountries.slice(0, 10) //using onlyCountries.js
  
  return firstTenCountries
};

console.log(`first Ten Countries :`,getFirstTenCountries());

//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

const getLastTenCountries = () => {

  let lastTenCountries = onlyCountries.slice(-11,-1)

  return lastTenCountries
}

console.log(`last ten countries :`,getLastTenCountries());


//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


const mostUsedLetterAsInitialOfCountries = () => {

  
  let initialLetters = []
  
  for (const country of onlyCountries) {
    initialLetters.push(country.charAt(0))
    
  }

  // console.log(initialLetters);

  const characters = "ABCDEFGHIJHIJKLMNOPQRSTUVWXYZ"
  let letterAndCount = []

  for (const character of characters) {
    
    let letterInfo = initialLetters.filter((letter)=>{
      

        return letter === character


      
    })
    // console.log('letter Info :',letterInfo);

    let letterInfoObject = {
      nameOfLetter: letterInfo[0],
      countOfLetter: letterInfo.length
    }

    letterAndCount.push(letterInfoObject)

  }

  // console.log(letterAndCount);

  const maximumUsedLetter = letterAndCount.sort((a,b) => b.countOfLetter - a.countOfLetter)

  // console.log(maximumUsedLetter[0]);
  const nameOfMaximumUsedLetter = maximumUsedLetter[0].nameOfLetter

  let mostUsedLetterAsInitial = onlyCountries.filter(country => country.startsWith(nameOfMaximumUsedLetter))


  // console.log(mostUsedLetterAsInitial);

  return {nameOfMaximumUsedLetter,mostUsedLetterAsInitial}

}

const countiesMostlyStaredWith = mostUsedLetterAsInitialOfCountries()
const theLetter = countiesMostlyStaredWith.nameOfMaximumUsedLetter
const timesOfUse = countiesMostlyStaredWith.mostUsedLetterAsInitial.length

const theCountries = countiesMostlyStaredWith.mostUsedLetterAsInitial

console.log(`The most used letter as initial for a country is: '${theLetter}' (${timesOfUse} times)\nand the list of the countries is:\n${theCountries}`)








