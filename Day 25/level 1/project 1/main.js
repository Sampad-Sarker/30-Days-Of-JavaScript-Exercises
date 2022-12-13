//population calculation start
countries.sort((a, b) => b.population - a.population);
// console.log(countries);

let totalPopulation = 0;
countries.forEach((country) => (totalPopulation += country.population));
// console.log(totalPopulation);

const tenMostPopulatedCountries = countries.slice(0, 10);
// console.log(tenMostPopulatedCountries);

//population calculation end

//languages sorting start
let allLanguages = [];
//store all languages in allLanguages array
countries.forEach((country) => allLanguages.push(...country.languages));
// console.log(allLanguages);

//filter out unique languages and store them in uniqueLanguages array
let uniqueLanguages = allLanguages.filter(
  (language, index) => index === allLanguages.indexOf(language)
);
// console.log(uniqueLanguages);

//every single language and its number of usages
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

// console.log(languageInfos);

languageInfos.sort((a, b) => b.count - a.count);

const tenTopMostLanguages = languageInfos.slice(0, 10);
console.log(tenTopMostLanguages);
//languages sorting end

document.querySelector("#numberOfCountries").textContent = countries.length;

const populationButton = document.querySelector(".population");
const languagesButton = document.querySelector(".languages");
const graphTitle = document.querySelector(".graph-title");

const graphWrapper = document.querySelector(".graph-wrapper");
const graphs = document.querySelector(".graphs");

populationButton.addEventListener("click", () => {
  console.log("populationButton clicking");
  graphTitle.textContent = "";
  graphWrapper.textContent = "";
  graphTitle.textContent = "10 most populated countries in the world";

  const graphs = document.querySelector(".graphs");
  graphs.style.backgroundColor = "#eeeeee";
  graphs.style.boxShadow = "0px 0px 5px 2px #0000004a";
  graphs.style.padding = "1% 5%";

  for (const { name, population } of tenMostPopulatedCountries) {
    const divOfProperty = document.createElement("div");
    divOfProperty.setAttribute("class", "property");

    const propertyName = document.createElement("p");
    propertyName.setAttribute("class", "propertyName");
    propertyName.style.textAlign = "left";
    propertyName.innerHTML = `${name}`;

    const divOfBarGraph = document.createElement("div");
    divOfBarGraph.setAttribute("class", "bar-graph");

    const divOfGraph = document.createElement("div");
    divOfGraph.setAttribute("class", "graph");
    divOfGraph.style.display = "flex";
    divOfGraph.style.justifyContent = "flex-end";
    divOfGraph.style.alignItems = "center";

    divOfGraph.style.color = "#fff";
    divOfGraph.style.textAlign = "right";
    divOfGraph.style.backgroundColor = "orange";
    divOfGraph.style.height = "100%";
    const percentage = ((population / totalPopulation) * 100).toFixed(2);
    // divOfGraph.textContent = `${percentage}%`;
    divOfGraph.style.width = `${percentage}%`;

    const propertyNumber = document.createElement("p");
    propertyNumber.setAttribute("class", "propertyNumber");
    propertyNumber.innerHTML = `${population}`;

    divOfProperty.appendChild(propertyName);
    divOfProperty.appendChild(divOfBarGraph);
    divOfBarGraph.appendChild(divOfGraph);
    divOfProperty.appendChild(propertyNumber);

    graphWrapper.appendChild(divOfProperty);
  }
});

languagesButton.addEventListener("click", () => {
  console.log("languagesButton clicking");
  graphTitle.textContent = "";
  graphWrapper.textContent = "";
  graphTitle.textContent = "10 most spoken languages in the world";

  const graphs = document.querySelector(".graphs");
  graphs.style.backgroundColor = "#eeeeee";
  graphs.style.boxShadow = "0px 0px 5px 2px #0000004a";
  graphs.style.padding = "1% 5%";

  for (const { name, count } of tenTopMostLanguages) {
    const divOfProperty = document.createElement("div");
    divOfProperty.setAttribute("class", "property");

    const propertyName = document.createElement("p");
    propertyName.setAttribute("class", "propertyName");
    propertyName.style.textAlign = "left";
    propertyName.innerHTML = `${name}`;

    const divOfBarGraph = document.createElement("div");
    divOfBarGraph.setAttribute("class", "bar-graph");

    const divOfGraph = document.createElement("div");
    divOfGraph.setAttribute("class", "graph");
    divOfGraph.style.display = "flex";
    divOfGraph.style.justifyContent = "flex-end";
    divOfGraph.style.alignItems = "center";
    divOfGraph.style.color = "#fff";
    divOfGraph.style.textAlign = "right";
    divOfGraph.style.backgroundColor = "orange";
    divOfGraph.style.height = "100%";
    const percentage = count;
    // divOfGraph.textContent = `${percentage}%`;
    divOfGraph.style.width = `${percentage}%`;

    const propertyNumber = document.createElement("p");
    propertyNumber.setAttribute("class", "propertyNumber");
    propertyNumber.innerHTML = `${count}`;

    divOfProperty.appendChild(propertyName);
    divOfProperty.appendChild(divOfBarGraph);
    divOfBarGraph.appendChild(divOfGraph);
    divOfProperty.appendChild(propertyNumber);

    graphWrapper.appendChild(divOfProperty);
  }
});
