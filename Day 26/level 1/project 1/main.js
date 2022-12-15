// console.log(countries);
document.querySelector("#number").textContent = countries.length;
const wrapper = document.querySelector(".wrapper");

const searchValue = document.querySelector("#search");

//default always display
countries.forEach((country) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.setAttribute("class", "countryName");
  p.textContent = country;
  div.appendChild(p);

  wrapper.appendChild(div);
});

const buttonOfStartingWord = document.querySelector("#startingWord");
const buttonOfAnyWord = document.querySelector("#anyWord");
const buttonOfSorting = document.querySelector("#sorting");
const info = document.querySelector("#info");
info.style.fontSize = "1.5rem";
info.style.color = "#fff";
info.style.fontWeight = "bold";

//starting word button
buttonOfStartingWord.addEventListener("click", () => {
  console.log("buttonOfStartingWord clicked");
  info.textContent = "";
  wrapper.textContent = "";
  const input = searchValue.value;
  // console.log(input);
  const value = input.toLowerCase();
  // const regEx = new RegExp(`^${input}`);
  const regEx = new RegExp(`^${value}`);

  let newCountries = [];
  if (!input) {
    info.textContent = "Plz search with any character or word";
  } else {
    for (const country of countries) {
      if (regEx.test(country.toLowerCase())) {
        newCountries.push(country.toLowerCase());
      }
    }
    info.innerHTML = `Countries starting with <span style= color:red;>${input}</span> are <span style= color:#05ff05;>${newCountries.length}</span>`;

    for (const country of newCountries) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.setAttribute("class", "countryName");
      p.textContent = country;
      div.appendChild(p);

      wrapper.appendChild(div);
    }
  }
});

//search with any word
buttonOfAnyWord.addEventListener("click", () => {
  console.log("buttonOfAnyWord clicked");
  info.textContent = "";
  wrapper.textContent = "";
  const input = searchValue.value;
  // console.log(input);
  const value = input.toLowerCase();
  // const regEx = new RegExp(`${input}`);
  const regEx = new RegExp(`${value}`);

  let newCountries = [];
  if (!input) {
    info.textContent = "Plz search with any character or word";
  } else {
    for (const country of countries) {
      if (regEx.test(country.toLowerCase())) {
        newCountries.push(country.toLowerCase());
      }
    }
    info.innerHTML = `Countries containing <span style= color:red;>${input}</span> are <span style= color:#05ff05;>${newCountries.length}</span>`;

    for (const country of newCountries) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.setAttribute("class", "countryName");
      p.textContent = country;
      div.appendChild(p);

      wrapper.appendChild(div);
    }
  }
});

//sorting button
let isSorted = true;
buttonOfSorting.addEventListener("click", () => {
  console.log("buttonOfSorting clicked");
  const allCountryNames = document.querySelectorAll(".countryName");
  // console.log(allCountryNames);
  let countryNames = [];
  for (const country of allCountryNames) {
    // console.log(country.textContent);
    countryNames.push(country.textContent);
  }

  // let isSorted = true;

  if (isSorted) {
    countryNames.sort().reverse();

    wrapper.textContent = "";
    for (const country of countryNames) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.setAttribute("class", "countryName");
      p.textContent = country;
      div.appendChild(p);

      wrapper.appendChild(div);

      isSorted = false;
    }
  } else {
    countryNames.sort();
    wrapper.textContent = "";
    for (const country of countryNames) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.setAttribute("class", "countryName");
      p.textContent = country;
      div.appendChild(p);

      wrapper.appendChild(div);

      isSorted = true;
    }
  }

  // console.log(sortedCountryNames);
});
