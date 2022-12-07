document.querySelector(".wrapper").style.textAlign = "center";

const year = document.querySelector("#year");
year.style.fontSize = "3rem";

const dateTime = () => {
  let dateWithoutSecond = new Date();

  time.textContent = dateWithoutSecond.toLocaleTimeString([], {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
const changeColor = () => {
  const colors = [
    "blue",
    "DeepPink",
    `Chocolate`,
    "Coral",
    "Crimson",
    "DarkMagenta",
    "DarkOrange",
    "DarkSlateBlue",
    "Indigo",
    "LimeGreen",
    "Maroon",
    "OrangeRed",
    "RebeccaPurple",
    "Violet",
  ];

  year.style.color = colors[parseInt(Math.random() * colors.length)];

  dateTime();

  time.style.color = colors[parseInt(Math.random() * colors.length)];

  time.style.backgroundColor =
    colors[parseInt(Math.random() * (colors.length / 2))];
};

setInterval(changeColor, 1000);

// subheading h2 style start
const subHeading = document.querySelector("h2");
subHeading.style.fontWeight = "200";
subHeading.style.fontSize = "1rem";
subHeading.style.textDecoration = "underline";
// subheading h2 style end

//date-time style start
document.querySelector("p").setAttribute("id", "time");
const time = document.querySelector("#time");
time.style.display = "inline-block";
time.style.padding = "10px";
//date-time style end

//ul style start
document.querySelector("ul").style.listStyle = "none";
document.querySelector("ul").style.padding = "0";
document.querySelector("ul").style.margin = "0 25%";
//ul style end

//list item style start
const lists = document.querySelectorAll("li");

lists.forEach((list, index) => {
  console.log(list.textContent);
  let listSentence = list.textContent.toLocaleLowerCase();
  if (listSentence.includes("done")) {
    list.style.backgroundColor = "green";
  } else if (listSentence.includes("ongoing")) {
    list.style.backgroundColor = "yellow";
  } else if (listSentence.includes("coming")) {
    list.style.backgroundColor = "red";
  }
  list.style.textAlign = "left";
  list.style.padding = "5px 0 5px 15px";
  list.style.margin = "2px";
});
