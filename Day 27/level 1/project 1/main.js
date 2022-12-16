// console.log(asabenehChallenges2020);
//destructuring
const { keywords, author } = asabenehChallenges2020;

//again destructuring
const { firstName, lastName, titles } = author;

//header
document.querySelector("h1").textContent = `${firstName} ${lastName}`;

// titles.forEach((titles) => {
//   const [icon, titleName] = titles;
//   console.log(icon, titleName);
// });

//animation
const animation = document.querySelector(".animation");
const iconImg = document.querySelector(".icon");
const title = document.querySelector(".title");

let indexOfTitles = 0; //initial index of titles
//animate after every 2500ms
setInterval(() => {
  const [icon, titleName] = titles[indexOfTitles];

  iconImg.textContent = `${icon}`;
  title.textContent = ` ${titleName}`;
  // title.style.animationDuration = "1980ms";
  // title.style.animationDuration = "2050ms";
  title.style.animationDuration = "2490ms";

  ++indexOfTitles; //increment

  //repeat from beginning
  if (indexOfTitles === titles.length) {
    indexOfTitles = 0;
  }
}, 2500);

//bio
const bio = document.querySelector(".bio");
// bio.textContent = `${author.bio}`;
bio.innerHTML = `<p>I am an educator, developer, motivator and content creator.I love educating people and creating educational material.In January 2019, I also created a teaching material <span class="bold">JavaScript For Everyone</span>.In December 2019,I created <span class="bold">30Days Of Python</span> challenge and January 2020 <span class="bold">30 Days of JavaScript</span> challenge.</p>`;

//color list
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

let indexOfKeywords = 0; //first index of keywords
let indexOfColors = 0; //first index of colors

//animate after every 2500ms
setInterval(() => {
  skill.textContent = `${keywords[indexOfKeywords]}`;
  skill.style.animationDuration = "2400ms";

  ++indexOfKeywords;
  //repeat from beginning
  if (indexOfKeywords === keywords.length) {
    indexOfKeywords = 0;
  }

  //text color
  skill.style.color = colors[indexOfColors];
  ++indexOfColors;
  //repeat from beginning
  if (indexOfColors === colors.length) {
    indexOfColors = 0;
  }
}, 2500);