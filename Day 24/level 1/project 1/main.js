document.body.style.backgroundImage = `url('images/galaxy.gif')`;
document.body.style.textAlign = "center";

const header = document.querySelector("h1");
header.style.color = "#fff";
header.style.fontFamily = "Montserrat";

let mass = document.querySelector("input");
const massValue = mass.value;
// console.log(mass.value);

const button = document.querySelector("button");
const img = document.querySelector("img");
const image = document.querySelector(".image");
const description = document.querySelector(".description");
const selectValue = document.querySelector("select").value;
// console.log(document.querySelector("select").value);

//planet and their gravity
const gravityOfPlanets = [
  { planet: "earth", gravity: 9.81 },
  { planet: "jupiter", gravity: 24.79 },
  { planet: "mars", gravity: 3.721 },
  { planet: "mercury", gravity: 3.7 },
  { planet: "moon", gravity: 1.62 },
  { planet: "neptune", gravity: 11.15 },
  { planet: "pluto", gravity: 0.62 },
  { planet: "saturn", gravity: 10.44 },
  { planet: "uranus", gravity: 8.87 },
  { planet: "venus", gravity: 8.87 },
];

button.addEventListener("click", () => {
  console.log("massValue =", mass.value);
  console.log("select value =", document.querySelector("select").value);

  if (
    mass.value.length === 0 &&
    document.querySelector("select").value === "none"
  ) {
    console.log(`Mass and planet is required`);
    // image.removeChild(img);
    image.textContent = "";
    const div = document.createElement("div");
    div.style.padding = "0.5rem 6rem";
    div.style.backgroundColor = "#21212150";
    const p = document.createElement("p");
    p.style.color = "#fff";
    p.textContent = `Mass and planet is required`;
    p.style.fontSize = "1.5rem";
    p.style.margin = "0";
    div.appendChild(p);
    image.appendChild(div);
  } else if (
    mass.value.length === 0 &&
    document.querySelector("select").value !== "none"
  ) {
    console.log(`Mass is required`);
    // image.removeChild(img);
    image.textContent = "";
    const div = document.createElement("div");
    div.style.padding = "0.5rem 6rem";
    div.style.backgroundColor = "#21212150";
    const p = document.createElement("p");
    p.style.color = "#fff";
    p.textContent = `Mass is required`;
    p.style.fontSize = "1.5rem";
    p.style.margin = "0";
    div.appendChild(p);
    image.appendChild(div);
  } else if (
    mass.value.length > 0 &&
    document.querySelector("select").value === "none"
  ) {
    console.log(`You did not choose a planet yet`);
    // image.removeChild(img);
    image.textContent = "";
    const div = document.createElement("div");
    div.style.padding = "0.5rem 6rem";
    div.style.backgroundColor = "#21212150";
    const p = document.createElement("p");
    p.style.color = "#fff";
    p.textContent = `You did not choose a planet yet`;
    p.style.fontSize = "1.5rem";
    p.style.margin = "0";
    div.appendChild(p);
    image.appendChild(div);
  } else if (mass.value.length > 0) {
    if (mass.value < 0) {
      console.log(`negative value of mass is not possible`);
      // image.removeChild(img);
      image.textContent = "";
      const div = document.createElement("div");
      div.style.padding = "0.5rem 6rem";
      div.style.backgroundColor = "#21212150";
      const p = document.createElement("p");
      p.style.color = "#fff";
      p.textContent = `negative value of mass is not possible`;
      p.style.fontSize = "1.5rem";
      p.style.margin = "0";
      div.appendChild(p);
      image.appendChild(div);
    }
  }

  if (
    mass.value.length > 0 &&
    document.querySelector("select").value !== "none"
  ) {
    if (mass.value > 0) {
      image.textContent = "";
      description.textContent = "";

      const selectValue = document.querySelector("select").value.toLowerCase();
      const planet = gravityOfPlanets.filter(
        (planet) => planet.planet === selectValue
      );
      img.src = `images/${selectValue}.png`;
      image.style.width = "45%";

      image.appendChild(img);

      const outerDiv = document.createElement("div");
      outerDiv.style.padding = "2rem 3rem";
      outerDiv.style.backgroundColor = "#21212150";
      outerDiv.style.display = "flex";
      outerDiv.style.flexDirection = "column";
      outerDiv.style.justifyContent = "center";
      outerDiv.style.gap = "1rem";

      const p = document.createElement("p");
      p.style.color = "#fff";
      // p.textContent = `The weight of the object on ${selectValue.toUpperCase()}`;
      p.innerHTML = `The weight of the object on <span style = font-weight:900;>${selectValue.toUpperCase()}</span>`;

      p.style.fontSize = "1rem";
      // p.style.fontWeight = "900";
      p.style.margin = "0";
      outerDiv.appendChild(p);
      const innerDiv = document.createElement("div");
      innerDiv.style.borderRadius = "100px";
      innerDiv.style.color = "#fff";
      innerDiv.style.backgroundColor = "#21212180";
      innerDiv.style.width = "6rem";
      innerDiv.style.height = "6rem";
      innerDiv.style.display = "flex";
      innerDiv.style.justifyContent = "center";
      innerDiv.style.alignItems = "center";
      innerDiv.style.margin = "auto";
      description.appendChild(outerDiv);

      // console.log("mass.value=", mass.value);
      // console.log("planet ==>", planet);
      innerDiv.textContent = `${(mass.value * planet[0].gravity).toFixed(2)} N`;
      innerDiv.style.fontWeight = "900";
      outerDiv.appendChild(innerDiv);
    }
  }

  mass.value = "";
  document.querySelector("select").value = "none";
});

//footer
const footer = document.createElement("footer");
const footerContent = document.createElement("p");

document.body.appendChild(footer);
footer.appendChild(footerContent);
// footerContent.style.fontSize = "1rem";

const contentOfFooter = `developed with <span style= display:inline-block class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>`;

footerContent.innerHTML = contentOfFooter;
footerContent.style.color = "#fff";
