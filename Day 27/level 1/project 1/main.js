// console.log(asabenehChallenges2020);
const { keywords, author } = asabenehChallenges2020;

const { firstName, lastName, titles } = author;

document.querySelector("h1").textContent = `${firstName} ${lastName}`;

const bio = document.querySelector(".bio");
// bio.textContent = `${author.bio}`;
bio.innerHTML = `<p>I am an educator, developer, motivator and content creator.I love educating people and creating educational material.In January 2019, I also created a teaching material <span class="bold">JavaScript For Everyone</span>.In December 2019,I created <span class="bold">30Days Of Python</span> challenge and January 2020 <span class="bold">30 Days of JavaScript</span> challenge.</p>`;

// titles.forEach((titles) => {
//   const [icon, titleName] = titles;
//   console.log(icon, titleName);
// });

const animation = document.querySelector(".animation");
const iconImg = document.querySelector(".icon");
const title = document.querySelector(".title");
let indexOfTitles = 0;
setInterval(() => {
  const [icon, titleName] = titles[indexOfTitles];
  iconImg.textContent = ``;
  title.textContent = ``;

  iconImg.textContent = `${icon}`;
  title.textContent = ` ${titleName}`;
  // title.style.animationDuration = "1980ms";
  title.style.animationDuration = "2050ms";

  ++indexOfTitles;

  if (indexOfTitles === titles.length) {
    indexOfTitles = 0;
  }
}, 2500);

colors = [
  "OrangeRed",
  "green",
  "RoyalBlue",
  "indigo",
  "GoldenRod",
  "MediumAquaMarine",
  "gold",
];
const skill = document.querySelector("#skill");
skill.style.fontSize = "2.5rem";
skill.style.fontWeight = "900";
let indexOfKeywords = 0;
let indexOfColors = 0;
setInterval(() => {
  skill.textContent = `${keywords[indexOfKeywords]}`;
  ++indexOfKeywords;
  if (indexOfKeywords === keywords.length) {
    indexOfKeywords = 0;
  }

  skill.style.color = colors[indexOfColors];
  ++indexOfColors;
  if (indexOfColors === colors.length) {
    indexOfColors = 0;
  }
}, 1500);
