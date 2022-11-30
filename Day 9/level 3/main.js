//1. Use the countries information, in the data folder. Sort countries by name, by capital, by population


allCountries;
let countriesByName = allCountries.sort((a, b) => {
  let fa = a.name.common.toLowerCase(),
    fb = b.name.common.toLowerCase();
  if (fa < fb) {
    return -1; //ascending order
    // return 1; //descending order
  }

  if (fa > fb) {
    return 1; //ascending order
    //return -1; //descending order
  }
  return 0;
});

console.log(`Sort countries(ascending order) by name :`);
countriesByName.forEach((country, index) => {
  console.log(`${index + 1}. ${country.name.common}`)
});

let countriesByCapital = allCountries.sort((a, b) => {
  let fa = a.capital,
    fb = b.capital;
  if (fa < fb) {
    return -1; //ascending order
    // return 1; //descending order
  }

  if (fa > fb) {
    return 1; //ascending order
    //return -1; //descending order
  }
  return 0;
});
console.log(`Sort countries(ascending order) by capital :`);

countriesByCapital.forEach((country, index) => {
  console.log(`${index + 1}. name :${country.name.common} => capital :${country.capital}`);
  // console.table(country.name.common, country.capital);
});

let countriesByPopulation = allCountries.sort((a, b) => {
  let fa = a.population,
    fb = b.population;
  if (fa < fb) {
    return -1; //ascending order
    // return 1; //descending order
  }

  if (fa > fb) {
    return 1; //ascending order
    //return -1; //descending order
  }
  return 0;
});

console.log(`Sort countries(ascending order) by population :`);
countriesByPopulation.forEach((country, index) => {
  console.log(`${index + 1}. name :${country.name.common} 👉population :${country.population}`);
});

//2. Find the 10 most spoken languages:

const mostSpokenLanguages = (countries, numberOfLanguages) => {
  let languages = [];

  for (const country of countries) {
    if (country.languages) {
      let language = Object.values(country.languages).toString();
      // console.log(language);

      if (language.includes(",")) {
        let setOfLanguage = language.split(",");
        // console.log('setOfLanguage',setOfLanguage);

        for (const language of setOfLanguage) {
          languages.push(language);
        }
      } else {
        languages.push(language);
      }
    }
    // else {
    //   let language = "no specific language";
    //   console.log(language);
    // }
  }
  // console.log(languages);

  const uniqueLanguages = languages.filter(
    (language, index) => index === languages.indexOf(language)
  );

  // console.log(uniqueLanguages.sort());
  let languageInfos = [];
  for (const language of uniqueLanguages) {
    let everySingleLanguages = languages.filter(
      (eachLanguage) => eachLanguage === language
    );

    let everySingleLanguage = {
      country: everySingleLanguages[0],
      count: everySingleLanguages.length,
    };

    languageInfos.push(everySingleLanguage);
  }

  //sorting descending order
  const sorting = (a, b) => {
    let fa = a.count,
      fb = b.count;
    if (fa < fb) {
      // return -1; //ascending order
      return 1; //descending order
    }

    if (fa > fb) {
      // return 1; //ascending order
      return -1; //descending order
    }
    return 0;
  };

  languageInfos.sort(sorting);

  // console.log(`descending order :`,languageInfos.sort(sorting));

  // console.log(languageInfos.sort((a, b) => {
  //   let fa = a.count,
  //     fb = b.count;
  //   if (fa < fb) {
  //     return -1; //ascending order
  //     // return 1; //descending order
  //   }

  //   if (fa > fb) {
  //     return 1; //ascending order
  //     //return -1; //descending order
  //   }
  //   return 0;

  // }))

  // console.log(languageInfos.slice(0,10));

  return languageInfos.slice(0, numberOfLanguages);
};

console.log(
  `10 most spoken languages :`,
  mostSpokenLanguages(allCountries, 10)
);

console.log(`3 most spoken languages :`, mostSpokenLanguages(allCountries, 3));

//3. Use countries_data.js file create a function which create the ten most populated countries

const mostPopulatedCountries = (countries, numberOfCountry) => {
  const descendingSorting = (a, b) => {
    let fa = a.population,
      fb = b.population;

    if (fa > fb) return -1;
    if (fa < fb) return 1;

    return 0;
  };

  const copiedCountries = [...countries];

  copiedCountries.sort(descendingSorting);

  let countriesInfos = [];
  copiedCountries.forEach((country) => {
    let countryName = country.name.common;
    let population = country.population;

    let countryWithPopulation = {
      country: countryName,
      population: population,
    };

    countriesInfos.push(countryWithPopulation);
  });

  return countriesInfos.slice(0, numberOfCountry);
};

console.log(
  ` ten most populated countries :`,
  mostPopulatedCountries(allCountries, 10)
);

console.log(
  ` three most populated countries :`,
  mostPopulatedCountries(allCountries, 3)
);

//4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

let statistics;
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const countFunction = () => {
  return ages.length;
};
const sumFunction = () => {
  let sum = 0;
  for (const age of ages) {
    sum += age;
  }
  return sum;
};

const minFunction = () => {
  return Math.min(...ages);
};

const maxFunction = () => {
  return Math.max(...ages);
};

const rangeFunction = () => {
  return maxFunction() - minFunction();
};

const meanFunction = () => {
  return sumFunction() / countFunction();
};

const medianFunction = () => {
  ages.sort((a, b) => a - b); //sorting ascending order

  if (countFunction() % 2 !== 0) {
    let position = (countFunction() + 1) / 2;
    let median = ages[position - 1];
    return median;
  } else {
    let positionOne = countFunction() / 2;
    let positionTwo = positionOne + 1;

    let median = (ages[positionOne - 1] + ages[positionTwo - 1]) / 2;

    return median;
  }
};

const modeFunction = () => {
  const uniqueAges = [...new Set(ages)];
  let ageInfos = [];
  for (const age of uniqueAges) {
    let eachAge = ages.filter((eachAge) => eachAge === age);

    let eachAgeInfo = {
      mode: eachAge[0],
      count: eachAge.length,
    };

    ageInfos.push(eachAgeInfo);
  }

  const descendingSorting = (a, b) => {
    let fa = a.count,
      fb = b.count;

    if (fa > fb) return -1;
    if (fa < fb) return 1;
    return 0;
  };

  ageInfos.sort(descendingSorting);

  // ageInfos.sort((a,b)=>{
  //   let fa = a.count,
  //   fb = b.count

  //   if (fa > fb) return -1
  //   if (fa < fb) return 1
  //   return 0
  // })

  return ageInfos[0];
};

const varianceFunction = () => {
  let mean = meanFunction(),
    sum = 0;

  for (const age of ages) {
    sum += (age - mean) ** 2;
  }
  const variance = sum / countFunction();

  return variance;
};

const standardDeviationFunction = () => {
  let std = Math.sqrt(varianceFunction()).toFixed(2);
  return std;
};

const frequencyDistributionFunction = () => {
  const uniqueAges = [...new Set(ages)];
  let ageInfos = [];
  for (const age of uniqueAges) {
    let eachAge = ages.filter((eachAge) => eachAge === age);

    let eachAgeInfo = `(${eachAge[0]}, ${eachAge.length})`;

    ageInfos.push(eachAgeInfo);
  }

  return ageInfos;
};

statistics = {
  count: countFunction,
  sum: sumFunction,
  min: minFunction,
  max: maxFunction,
  range: rangeFunction,
  mean: meanFunction,
  median: medianFunction,
  mode: modeFunction,
  variance: varianceFunction,
  standardDeviation: standardDeviationFunction,
  frequencyDistribution: frequencyDistributionFunction,
};

// console.log(ages.sort()[0])
console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.variance()); // 17.5
console.log("Standard Deviation: ", statistics.standardDeviation()); // 4.2
console.log("Frequency Distribution: ", statistics.frequencyDistribution());
