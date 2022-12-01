//1. How many languages are there in the countries object file.
let languageString = "";

for (const country of countries) {
  // console.log(country.languages);
  let language = country.languages.toString();
  languageString += "," + language;
}

// console.log(languageString);
const allLanguage = languageString.slice(1).split(","); // slice(1) to remove first ',' and split(',') to convert an array based on ','

// console.log(allLanguage);
const allUniqueLanguage = new Set(allLanguage);
// console.log('all Unique Language',allUniqueLanguage);
console.log(`Number of languages :`, allUniqueLanguage.size);

//2. Use the countries data to find the 10 most spoken languages

const mostSpokenLanguages = (countries, numberOfLanguages) => {
  let allLanguages = [];
  for (const country of countries) {
    let languages = country.languages;
        // allLanguages.push(languages)

        if (languages.length >= 1) {
            for (const language of languages) {
                allLanguages.push(language);
            }
        }
    }

    //   console.log(`all Languages`, allLanguages);

    let allUniqueLanguages = allLanguages.filter(
        (language, index) => index === allLanguages.indexOf(language)
    );

    // console.log(`all Unique Languages`, allUniqueLanguages);

    let languageInfos = [];
    for (const language of allUniqueLanguages) {
        let eachLanguage = allLanguages.filter(
        (eachLanguage) => eachLanguage === language
        );

        // console.log(`each Language `,eachLanguage);

        let obj = {
        [language]: eachLanguage.length,
        // count : eachLanguage.length
        };

        languageInfos.push(obj);
    }

    // console.log(`language Infos`, languageInfos);

 

    let countWithIndexPositionObjects = [];
    for (const language of allUniqueLanguage) {
        languageInfos.forEach((eachLanguage, index) => {
        if (eachLanguage[language]) {
            // console.log(`language: ${language}, index: ${index}`);
            // console.log(`num :`,eachLanguage[language]);

            let obj = {
            name: language,
            count: eachLanguage[language],
            indexPosition: index,
            };

            countWithIndexPositionObjects.push(obj);
        }
        });
    }

    // console.log(countWithIndexPositionObjects);

    //descending order
    countWithIndexPositionObjects.sort((a, b) => {
        let fa = a.count,
        fb = b.count;

        if (fa > fb) return -1;
        if (fa < fb) return 1;

        return 0;
    });

    // console.log(`descending order `,countWithIndexPositionObjects);

    let finalLanguagesWithCount = [];

    for (const eachObj of countWithIndexPositionObjects) {
        finalLanguagesWithCount.push(languageInfos[eachObj.indexPosition]);
    }

    return finalLanguagesWithCount.slice(0, numberOfLanguages);
};


console.log(`10 most spoken languages :`, mostSpokenLanguages(countries,10));

console.log(`3 most spoken languages :`, mostSpokenLanguages(countries,3));
