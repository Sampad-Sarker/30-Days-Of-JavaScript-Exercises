const numberOfCountries = document.querySelector("#numberOfCountries");
const searchNumber = document.querySelector(".searchNumber");
const search = document.querySelector("#search");
const countryName = document.querySelector("#countryName");
const capital = document.querySelector("#capital");
const populationID = document.querySelector("#population");

const arrowUpCountryName = document.querySelector(".arrowUpCountryName");
const arrowDownCountryName = document.querySelector(".arrowDownCountryName");
const arrowUpCapital = document.querySelector(".arrowUpCapital");
const arrowDownCapital = document.querySelector(".arrowDownCapital");
const arrowUpPopulation = document.querySelector(".arrowUpPopulation");
const arrowDownPopulation = document.querySelector(".arrowDownPopulation");

const countryWrapper = document.querySelector(".country-wrapper");
const population = document.querySelector(".population");
const languages = document.querySelector(".languages");
const graphTitle = document.querySelector(".graph-title");
const graphWrapper = document.querySelector(".graph-wrapper");

const url = "https://restcountries.com/v3.1/all";
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.length);
    return data;
  } catch (error) {
    console.log(error);
  }
};

let infos = [];
async function renderCountry() {
  let data = await fetchData();
  console.log(data);
  const countries = data;
  numberOfCountries.textContent = countries.length;

  // <div class="country">
  //   <div class="countryFlag">
  //     <img src="https://via.placeholder.com/150" alt="">
  //   </div>
  //   <div class="countryName">usa</div>
  //   <div class="countryInfo">
  //     <p class="countryCapital">capital:</p>
  //     <p class="countryLanguages">languages:</p>
  //     <p class="countryPopulation">population:</p>
  //   </div>
  // </div>

  for (const eachCountry of countries) {
    // console.log(eachCountry.languages);

    const country = document.createElement("div");
    country.setAttribute("class", "country");

    const countryFlag = document.createElement("div");
    countryFlag.setAttribute("class", "countryFlag");

    const img = document.createElement("img");
    img.src = `${eachCountry.flags.png}`;
    countryFlag.appendChild(img);

    const countryName = document.createElement("div");
    countryName.setAttribute("class", "countryName");

    countryName.textContent = `${eachCountry.name.common}`;

    const countryInfo = document.createElement("div");
    countryInfo.setAttribute("class", "countryInfo");

    const countryCapital = document.createElement("p");
    countryCapital.textContent = `capital: ${eachCountry.capital}`;
    const countryLanguages = document.createElement("p");
    if (!eachCountry.languages) {
      // console.log(eachCountry);
      countryLanguages.textContent = `languages: no particular language`;
    } else if (eachCountry.languages) {
      countryLanguages.textContent = `languages: ${Object.values(
        eachCountry.languages
      )}`;
    }
    const countryPopulation = document.createElement("p");
    countryPopulation.textContent = `population: ${eachCountry.population.toLocaleString(
      "en-US"
    )}`;

    countryInfo.appendChild(countryCapital);
    countryInfo.appendChild(countryLanguages);
    countryInfo.appendChild(countryPopulation);

    country.appendChild(countryFlag);
    country.appendChild(countryName);
    country.appendChild(countryInfo);

    countryWrapper.appendChild(country);

    if (eachCountry.languages) {
      infos.push({
        country: `${eachCountry.name.common}`,
        population: `${eachCountry.population}`,
        languages: Object.values(eachCountry.languages),
      });
    }
  }

  countryName.addEventListener("click", () => {
    console.log("name button clicked");

    countryWrapper.textContent = "";
    graphWrapper.textContent = "";
    graphTitle.textContent = "";

    infos = [];
    const input = search.value;
    console.log(input);
    search.value = "";

    const value = input.toLowerCase();
    // const regEx = new RegExp(`^${input}`);
    const regEx = new RegExp(`^${value}`); //starting
    let newCountries = [];
    if (!input) {
      searchNumber.textContent = "Plz search with any character or word";
    } else {
      for (const country of countries) {
        if (regEx.test(country.name.common.toLowerCase())) {
          newCountries.push(country);
        }
      }

      if (newCountries.length) {
        searchNumber.textContent = `${newCountries.length} country found`;
      } else if (newCountries.length > 1) {
        searchNumber.textContent = `${newCountries.length} countries found`;
      } else {
        searchNumber.textContent = "no country found";
      }

      for (const eachCountry of newCountries) {
        const country = document.createElement("div");
        country.setAttribute("class", "country");
        const countryFlag = document.createElement("div");
        countryFlag.setAttribute("class", "countryFlag");
        const img = document.createElement("img");
        img.src = `${eachCountry.flags.png}`;
        countryFlag.appendChild(img);
        const countryName = document.createElement("div");
        countryName.setAttribute("class", "countryName");
        countryName.textContent = `${eachCountry.name.common}`;
        const countryInfo = document.createElement("div");
        countryInfo.setAttribute("class", "countryInfo");
        const countryCapital = document.createElement("p");
        countryCapital.textContent = `capital: ${eachCountry.capital}`;
        const countryLanguages = document.createElement("p");
        if (!eachCountry.languages) {
          // console.log(eachCountry);
          countryLanguages.textContent = `languages: no particular language`;
        } else {
          countryLanguages.textContent = `languages: ${Object.values(
            eachCountry.languages
          )}`;
        }
        const countryPopulation = document.createElement("p");
        countryPopulation.textContent = `population: ${eachCountry.population.toLocaleString(
          "en-US"
        )}`;
        countryInfo.appendChild(countryCapital);
        countryInfo.appendChild(countryLanguages);
        countryInfo.appendChild(countryPopulation);
        country.appendChild(countryFlag);
        country.appendChild(countryName);
        country.appendChild(countryInfo);
        countryWrapper.appendChild(country);

        if (eachCountry.languages) {
          infos.push({
            country: `${eachCountry.name.common}`,
            population: `${eachCountry.population}`,
            languages: Object.values(eachCountry.languages),
          });
        }
      }
    }
  });

  capital.addEventListener("click", () => {
    console.log("capital button clicked");

    countryWrapper.textContent = "";
    graphWrapper.textContent = "";
    graphTitle.textContent = "";

    infos = [];
    const input = search.value;
    console.log(input);
    search.value = "";

    const value = input.toLowerCase();
    // const regEx = new RegExp(`^${input}`);
    const regEx = new RegExp(`^${value}`); //starting

    let newCountries = [];
    if (!input) {
      searchNumber.textContent = "Plz search with any character or word";
    } else {
      for (const country of countries) {
        if (country.capital) {
          country.capital.forEach((capital) => {
            if (regEx.test(capital.toLowerCase())) {
              newCountries.push(country);
            }
          });
        }
      }

      if (newCountries.length) {
        searchNumber.textContent = `${newCountries.length} country found`;
      } else if (newCountries.length > 1) {
        searchNumber.textContent = `${newCountries.length} countries found`;
      } else {
        searchNumber.textContent = "no country found";
      }

      for (const eachCountry of newCountries) {
        const country = document.createElement("div");
        country.setAttribute("class", "country");
        const countryFlag = document.createElement("div");
        countryFlag.setAttribute("class", "countryFlag");
        const img = document.createElement("img");
        img.src = `${eachCountry.flags.png}`;
        countryFlag.appendChild(img);
        const countryName = document.createElement("div");
        countryName.setAttribute("class", "countryName");
        countryName.textContent = `${eachCountry.name.common}`;
        const countryInfo = document.createElement("div");
        countryInfo.setAttribute("class", "countryInfo");
        const countryCapital = document.createElement("p");
        countryCapital.textContent = `capital: ${eachCountry.capital}`;
        const countryLanguages = document.createElement("p");
        if (!eachCountry.languages) {
          // console.log(eachCountry);
          countryLanguages.textContent = `languages: no particular language`;
        } else {
          countryLanguages.textContent = `languages: ${Object.values(
            eachCountry.languages
          )}`;
        }
        const countryPopulation = document.createElement("p");
        countryPopulation.textContent = `population: ${eachCountry.population.toLocaleString(
          "en-US"
        )}`;
        countryInfo.appendChild(countryCapital);
        countryInfo.appendChild(countryLanguages);
        countryInfo.appendChild(countryPopulation);
        country.appendChild(countryFlag);
        country.appendChild(countryName);
        country.appendChild(countryInfo);
        countryWrapper.appendChild(country);

        if (eachCountry.languages) {
          infos.push({
            country: `${eachCountry.name.common}`,
            population: `${eachCountry.population}`,
            languages: Object.values(eachCountry.languages),
          });
        }
      }
    }
  });

  populationID.addEventListener("click", () => {
    console.log("population button clicked");
    countryWrapper.textContent = "";
    graphWrapper.textContent = "";
    graphTitle.textContent = "";

    infos = [];

    const input = search.value;
    console.log(input);
    search.value = "";

    if (isNaN(input)) {
      searchNumber.textContent = `it is not a number`;
      console.log(" input not a number");
    } else if (!isNaN(input)) {
      console.log(" input is a number");
      searchNumber.textContent = "";
      // let newCountries = [];

      for (const eachCountry of countries) {
        if (eachCountry.population) {
          // console.log("country: ", country.flags.png, country.population);
          // console.log("in if population exists.....");
          // console.log("input val", typeof input);

          if (eachCountry.population === Number(input)) {
            // console.log("input val>>>", input);
            // console.log("in population >>", eachCountry);

            const country = document.createElement("div");
            country.setAttribute("class", "country");
            const countryFlag = document.createElement("div");
            countryFlag.setAttribute("class", "countryFlag");
            const img = document.createElement("img");
            img.src = `${eachCountry.flags.svg}`;
            countryFlag.appendChild(img);
            const countryName = document.createElement("div");
            countryName.setAttribute("class", "countryName");
            countryName.textContent = `${eachCountry.name.common}`;
            const countryInfo = document.createElement("div");
            countryInfo.setAttribute("class", "countryInfo");
            const countryCapital = document.createElement("p");
            countryCapital.textContent = `capital: ${eachCountry.capital}`;
            const countryLanguages = document.createElement("p");
            if (!eachCountry.languages) {
              // console.log(eachCountry);
              countryLanguages.textContent = `languages: no particular language`;
            } else {
              countryLanguages.textContent = `languages: ${Object.values(
                eachCountry.languages
              )}`;
            }
            const countryPopulation = document.createElement("p");
            countryPopulation.textContent = `population: ${eachCountry.population.toLocaleString(
              "en-US"
            )}`;
            countryInfo.appendChild(countryCapital);
            countryInfo.appendChild(countryLanguages);
            countryInfo.appendChild(countryPopulation);
            country.appendChild(countryFlag);
            country.appendChild(countryName);
            country.appendChild(countryInfo);

            console.log(country);
            countryWrapper.appendChild(country);

            if (eachCountry.languages) {
              infos.push({
                country: `${eachCountry.name.common}`,
                population: `${eachCountry.population}`,
                languages: Object.values(eachCountry.languages),
              });
            }
          }
        }
      }
    }
  });
}

renderCountry();

const renderGraphs = async () => {
  let data = await fetchData();
  // console.log("all data >>>", data);
  const countries = data;

  let totalPopulation = 0;
  countries.forEach((country) => (totalPopulation += country.population));
  // console.log(totalPopulation.toLocaleString());

  // <div class="property">
  //   <p class="propertyName">propertyName</p>
  //   <div class="bar-graph">
  //     <div class="graph">bar</div>
  //   </div>
  //   <p class="propertyNumber">propertyNumber</p>
  // </div>

  const top10Statistics = () => {
    infos.sort((a, b) => b.population - a.population);

    infos.forEach((info) => {
      const property = document.createElement("div");
      property.setAttribute("class", "property");

      const propertyName = document.createElement("p");
      propertyName.setAttribute("class", "propertyName");
      propertyName.textContent = `${info.country}`;

      const barGraph = document.createElement("div");
      barGraph.setAttribute("class", "bar-graph");

      const graph = document.createElement("div");
      graph.setAttribute("class", "graph");
      graph.style.backgroundColor = "orange";
      const percentage = ((info.population / totalPopulation) * 100).toFixed(2);
      graph.style.width = `${percentage * 5.5}%`;
      graph.style.height = "100%";
      barGraph.appendChild(graph);
      // console.log(barGraph);

      const propertyNumber = document.createElement("p");
      propertyNumber.setAttribute("class", "propertyNumber");
      propertyNumber.textContent = `${Number(info.population).toLocaleString(
        "en-US"
      )}`;

      property.appendChild(propertyName);
      property.appendChild(barGraph);
      property.appendChild(propertyNumber);

      // console.log(property);

      graphWrapper.appendChild(property);
    });
  };

  // top10Statistics();

  population.addEventListener("click", () => {
    console.log("clicked");
    // graphTitle.textContent = "World Population";
    graphTitle.innerHTML = `Population of above ${infos.length} countries in the world`;

    graphWrapper.textContent = "";

    top10Statistics();
  });

  languages.addEventListener("click", () => {
    console.log("languages button clicked");

    console.log("infos >>>", infos);

    // graphTitle.textContent = "Languages of the World";
    graphTitle.innerHTML = `Languages of above ${infos.length} countries in the World`;

    graphWrapper.textContent = "";

    //store all languages in allLanguages array
    let allLanguages = [];

    // countries.forEach((country) => {
    //   if (country.languages) {
    //     allLanguages.push(...Object.values(country.languages));
    //   }
    // });

    infos.forEach((language) => {
      allLanguages.push(...language.languages);
    });

    // allLanguages = allLanguages.map((language) => language.toLowerCase());

    console.log(allLanguages);
    //filter out unique languages and store them in uniqueLanguages array
    let uniqueLanguages = allLanguages.filter(
      (language, index) => index === allLanguages.indexOf(language)
    );
    console.log(uniqueLanguages);

    let languageInfos = [];
    for (const eachUniqueLanguage of uniqueLanguages) {
      let count = 0;
      let info;
      for (const language of allLanguages) {
        if (eachUniqueLanguage === language) {
          ++count;
        }
      }

      info = {
        name: eachUniqueLanguage,
        count: count,
      };
      languageInfos.push(info);
    }

    languageInfos.sort((a, b) => b.count - a.count);

    let tenTopMostLanguages;
    if (languageInfos.length >= 55) {
      tenTopMostLanguages = languageInfos.slice(0, 10);
    }
    tenTopMostLanguages = languageInfos;

    // console.log(tenTopMostLanguages);
    //languages sorting end

    tenTopMostLanguages.forEach((language) => {
      const property = document.createElement("div");
      property.setAttribute("class", "property");

      const propertyName = document.createElement("p");
      propertyName.setAttribute("class", "propertyName");
      propertyName.textContent = `${language.name}`;

      const barGraph = document.createElement("div");
      barGraph.setAttribute("class", "bar-graph");

      const graph = document.createElement("div");
      graph.setAttribute("class", "graph");
      graph.style.backgroundColor = "orange";
      const percentage = language.count;
      graph.style.width = `${percentage}%`;
      graph.style.height = "100%";
      barGraph.appendChild(graph);
      // console.log(barGraph);

      const propertyNumber = document.createElement("p");
      propertyNumber.setAttribute("class", "propertyNumber");
      propertyNumber.textContent = `${language.count}`;

      property.appendChild(propertyName);
      property.appendChild(barGraph);
      property.appendChild(propertyNumber);

      // console.log(property);

      graphWrapper.appendChild(property);
    });
  });
};

renderGraphs();
