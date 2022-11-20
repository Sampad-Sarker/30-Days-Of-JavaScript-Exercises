// 1. Read the cats api and find the average weight of cat in metric unit.

const url = "https://api.thecatapi.com/v1/breeds";

const fetchCatData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data)
    let totalMinWeight = 0,
      totalMaxWeight = 0;
    let minWeight = [],
      maxWeight = [];

    for (const cat of data) {
      totalMinWeight += Number(cat.weight.metric.slice(0, 1));
      minWeight.push(cat.weight.metric.slice(0, 1));

      // console.log(Number(cat.weight.metric.slice(0,1)))

      totalMaxWeight += Number(
        cat.weight.metric.slice(
          cat.weight.metric.length - 1,
          cat.weight.metric.length
        )
      )
      maxWeight.push(
        cat.weight.metric.slice(
          cat.weight.metric.length - 1,
          cat.weight.metric.length
        )
      );
    }
    // console.log(totalMinWeight);
    // console.log(minWeight.length);

    const averageMinWeight = totalMinWeight / minWeight.length;
    console.log(`average Minimum Weight : ${averageMinWeight.toFixed(2)}`);

    // console.log(totalMaxWeight);
    // console.log(maxWeight.length);

    const averageMaxWeight = totalMaxWeight / maxWeight.length;
    console.log(`average Maximum Weight : ${averageMaxWeight.toFixed(2)}`);
  } catch (error) {
    console.log(error);
  }
}

fetchCatData();

//2. Read the countries api and find out the 10 largest countries

const countriesUrl = "https://restcountries.com/v2/all";

const fetchCountryArea = async () => {
  try {
    const response = await fetch(countriesUrl);
    const data = await response.json();
    // console.log(data);

    let areas = [],
      top10LargestAreas = [];
    for (const country of data) {
      // console.log(`name: ${country.name}, area: ${country.area}`);

      areas.push(country.area);
    }
    // console.log(areas.sort((a,b) => b-a))
    // areas.sort((a,b) => b-a)
    // console.log(areas.slice(0,10))

    top10LargestAreas = [...areas.sort((a, b) => b - a).slice(0, 10)];

    // console.log(top10LargestAreas)
    console.log(`10 largest countries\n`)
    let numbering = 0;
    for (const country of data) {
      for (const item of top10LargestAreas) {
        if (country.area === item) {
          console.log(
            `${++numbering}. Country: ${country.name}, Area: ${country.area} square-km`
          )
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
fetchCountryArea();

//3. Read the countries api and count total number of languages in the world used as officials.

const allCountriesUrl = "https://restcountries.com/v2/all";

const fetchAllLanguages = async () => {
  try {
    const response = await fetch(allCountriesUrl);
    const data = await response.json();

    // console.log(data)

    allLanguage = [];
    for (const country of data) {
      // console.log(country.languages);
      for (const language of country.languages) {
        allLanguage.push(language.name);
      }
    }
    // console.log(`allLanguage : ${allLanguage.sort()}`);
    // for sorting the order
    // allLanguage.sort()
    const uniqueLanguages = [...new Set(allLanguage)];

    console.log(
      `Total number of languages in the world used as officials is ${uniqueLanguages.length}.\nHere is the list\n`
    )

    let numbering = 0
    for (const item of uniqueLanguages) {
      console.log(`${++numbering} : ${item}`)
    }
  } catch (error) {
    console.log(error)
  }
};

fetchAllLanguages()
