document.body.style.textAlign = "center";
const header = document.querySelector("header");

const totalCountries = document.querySelector("#total-countries");
totalCountries.textContent = `total number of countries: ${countries.length}`;
totalCountries.style.textTransform = "capitalize";
const countriesContainer = document.querySelector(".countries-container");
countriesContainer.style.maxWidth = "70%";
countriesContainer.style.margin = "auto";

const countriesWrapper = document.querySelector(".countries-wrapper");
countriesWrapper.style.display = "grid";
countriesWrapper.style.gridTemplateColumns =
  "repeat(auto-fill,minmax(140px,1fr))";
countriesWrapper.style.gap = "0.7rem";
// countriesWrapper.style.justifyContent = "center";

for (let i = 0; i < countries.length; i++) {
  let div = document.createElement("div");
  div.textContent = `${countries[i].toUpperCase()}`;
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.fontWeight = "bold";
  div.style.padding = "50% 2%";
  div.style.boxShadow = "0px 0px 3px 1px gray";

  countriesWrapper.appendChild(div);

  //hover style
  div.addEventListener("mouseover", () => {
    div.style.cursor = "pointer";
    div.style.transform = "scale(1.05, 1.05)";
  });
  div.addEventListener("mouseleave", () => {
    div.style.transform = "scale(1, 1)";
  });
}

//footer
const footer = document.createElement("footer");
const footerContent = document.createElement("p");

document.querySelector(".countries-container").appendChild(footer);
footer.appendChild(footerContent);

const contentOfFooter = `developed with <span style= display:inline-block class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>`;

footerContent.innerHTML = contentOfFooter;
