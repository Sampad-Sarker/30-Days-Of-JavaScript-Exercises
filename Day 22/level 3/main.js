const allInfos = asabenehChallenges2020;
// console.log(allInfos);

document.body.style.textAlign = "center";
//wrapper class
document.body.appendChild(document.createElement("div"));
const mainDiv = document.querySelector("div");
mainDiv.setAttribute("class", "wrapper");

mainDiv.style.paddingInline = "20%";

//Title
document.querySelector(".wrapper").appendChild(document.createElement("h1"));
const challengeTitle = document.querySelector("h1");
challengeTitle.textContent = `${allInfos.challengeTitle} in `;
challengeTitle.appendChild(document.createElement("span"));
document.querySelector("span").setAttribute("id", "year");
const year = document.querySelector("#year");
year.textContent = `${allInfos.challengeYear}`;
year.style.fontSize = "4rem";

//Subtitle
document.querySelector(".wrapper").appendChild(document.createElement("h2"));
const challengeSubtitle = document.querySelector("h2");
// console.log(challengeSubtitle);
challengeSubtitle.textContent = `${allInfos.challengeSubtitle}`;

challengeSubtitle.style.fontSize = "1rem";
challengeSubtitle.style.textDecoration = "underline";

//dateTime
document.querySelector(".wrapper").appendChild(document.createElement("p"));
document.querySelector("p").setAttribute("id", "time");
const dateTimeShow = document.querySelector("#time");
// console.log(dateTimeShow);
dateTimeShow.style.display = "inline-block";
dateTimeShow.style.padding = "0.25rem 1rem";

const dateTime = () => {
  let dateWithoutSecond = new Date();

  dateTimeShow.textContent = dateWithoutSecond.toLocaleTimeString([], {
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
    "Crimson",
    "black",
    "blue",
    "DeepPink",
    `Chocolate`,
    "Coral",
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

  dateTimeShow.style.color = colors[parseInt(Math.random() * colors.length)];

  dateTimeShow.style.backgroundColor =
    colors[parseInt(Math.random() * (colors.length / 8))];
};

setInterval(changeColor, 1000);

//ul
document.querySelector(".wrapper").appendChild(document.createElement("ul"));
document.querySelector("ul").setAttribute("class", "challenges");

const challengesUl = document.querySelector(".challenges");
// console.log(challengesUl);
challengesUl.style.listStyle = "none";
challengesUl.style.padding = "0";

const challengeLists = allInfos.challenges;

challengeLists.forEach(({ name, topics, status }, index) => {
  const li = document.createElement("li");
  li.setAttribute("id", `id-${index + 1}`);
  li.style.color = "#000";
  li.style.padding = "0.5rem";
  li.style.display = "flex";
  li.style.flexWrap = "wrap";
  li.style.justifyContent = "space-between";
  //   li.style.rowGap = "0.5rem ";
  li.style.margin = "0.5rem 0rem";
  li.style.fontSize = "1.5rem";

  const divOfFullChallengeName = document.createElement("div");
  li.appendChild(divOfFullChallengeName);
  // li.textContent = `${name}`
  //   divOfFullChallengeName.style.display = "inline-block";
  divOfFullChallengeName.textContent = name;
  divOfFullChallengeName.style.textDecoration = "underline";

  // const divOfChallengeName = document.createElement("div");
  // li.appendChild(divOfChallengeName);
  //   divOfChallengeName.style.display = "inline-block";
  // divOfChallengeName.textContent = name.slice(10);

  const details = document.createElement("details");
  // console.log(details);
  li.appendChild(details);
  // divOfChallengeName.appendChild(details);

  const summary = document.createElement("summary");
  details.appendChild(summary);

  summary.textContent = name.slice(11);

  const topicUl = document.createElement("ul");
  topicUl.style.listStyle = "none";
  topicUl.style.textAlign = "left";
  let topicList;
  for (const topic of topics) {
    // summery.textContent = topic
    topicList = document.createElement("li");
    topicUl.appendChild(topicList);
    topicList.textContent = topic;
  }
  details.appendChild(topicUl);

  const divOfChallengeStatus = document.createElement("div");
  li.appendChild(divOfChallengeStatus);
  //   divOfChallengeStatus.style.display = "inline-block";
  divOfChallengeStatus.textContent = status;

  if (status === "Done") {
    li.style.backgroundColor = "#21bf73"; //green
  } else if (status === "Ongoing") {
    li.style.backgroundColor = "#fddb3a"; //yellow
  } else {
    li.style.backgroundColor = "#fd5e53"; //red
  }

  challengesUl.appendChild(li);
});
//ul end

//author full name
document.querySelector(".wrapper").appendChild(document.createElement("h1"));
document.querySelectorAll("h1")[1].setAttribute("class", "author");
const author = document.querySelector(".author");
author.textContent = `${allInfos.author.firstName} ${allInfos.author.lastName}`;
//social links
const socialLinksUl = document.createElement("ul");
socialLinksUl.setAttribute("class", "socialLinks");

document.querySelector(".wrapper").appendChild(socialLinksUl);
socialLinksUl.style.listStyle = "none";
socialLinksUl.style.display = "flex";
socialLinksUl.style.justifyContent = "center";
socialLinksUl.style.gap = "0 1rem";

socialLinksUl.style.fontSize = "2rem";

const socialLinks = allInfos.author.socialLinks;
// console.log(socialLinks);

for (const { fontawesomeIcon, url } of socialLinks) {
  // console.log(fontawesomeIcon);
  const socialLinksList = document.createElement("li");
  socialLinksUl.appendChild(socialLinksList);

  const anchor = document.createElement("a");
  socialLinksList.appendChild(anchor);
  anchor.href = url;
  anchor.target = "_blank";
  anchor.style.color = "black";

  anchor.innerHTML = fontawesomeIcon;
}
//bio
const bio = document.createElement("p");
bio.setAttribute("class", "bio");
document.querySelector(".wrapper").appendChild(bio);

bio.textContent = allInfos.author.bio;
bio.style.textAlign = "center";

//author information
const authorInfos = document.createElement("div");
authorInfos.setAttribute("class", "authorInfos");
authorInfos.style.display = "flex";
authorInfos.style.flexWrap = "wrap";
authorInfos.style.justifyContent = "space-between";
authorInfos.style.flexDirection = "row";

document.querySelector(".wrapper").appendChild(authorInfos);

const divOfTitles = document.createElement("div");
const divOfSkills = document.createElement("div");
const divOfQualifications = document.createElement("div");

authorInfos.appendChild(divOfTitles);
authorInfos.appendChild(divOfSkills);
authorInfos.appendChild(divOfQualifications);

const titlesTitle = document.createElement("p");
const skillsTitle = document.createElement("p");
const qualificationsTitle = document.createElement("p");

titlesTitle.style.textAlign = "left";
skillsTitle.style.textAlign = "left";
qualificationsTitle.style.textAlign = "left";

titlesTitle.style.fontWeight = "bold";
skillsTitle.style.fontWeight = "bold";
qualificationsTitle.style.fontWeight = "bold";

divOfTitles.appendChild(titlesTitle);
divOfSkills.appendChild(skillsTitle);
divOfQualifications.appendChild(qualificationsTitle);

titlesTitle.textContent = "Titles";
skillsTitle.textContent = "Skills";
qualificationsTitle.textContent = "Qualifications";

const titlesUl = document.createElement("ul");
const skillsUl = document.createElement("ul");
const qualificationsUl = document.createElement("ul");

titlesUl.style.listStyle = "none";
skillsUl.style.listStyle = "none";
qualificationsUl.style.listStyle = "none";

titlesUl.style.padding = "0";
skillsUl.style.padding = "0";
qualificationsUl.style.padding = "0";

titlesUl.style.textAlign = "left";
skillsUl.style.textAlign = "left";
qualificationsUl.style.textAlign = "left";

divOfTitles.appendChild(titlesUl);
divOfSkills.appendChild(skillsUl);
divOfQualifications.appendChild(qualificationsUl);

const titles = allInfos.author.titles;
const skills = allInfos.author.skills;
const qualifications = allInfos.author.qualifications;

for (const [icon, title] of titles) {
  // console.log(icon, title);
  const li = document.createElement("li");
  titlesUl.appendChild(li);
  li.innerHTML = `${icon} ${title}`;
}

for (const skill of skills) {
  const li = document.createElement("li");
  skillsUl.appendChild(li);
  li.textContent = `✅ ${skill}`;
}

for (const qualification of qualifications) {
  const li = document.createElement("li");
  qualificationsUl.appendChild(li);
  li.textContent = `👨‍🎓 ${qualification}`;
}

//keyword
const keywords = allInfos.keywords;
const keyword = document.createElement("div");
keyword.setAttribute("class", "keyword");
document.querySelector(".wrapper").appendChild(keyword);

const keywordsTitle = document.createElement("p");
keywordsTitle.setAttribute("class", "keywordsTitle");
keywordsTitle.textContent = "Keywords";
keywordsTitle.style.textAlign = "left";
keywordsTitle.style.fontSize = "1.5rem";
keywordsTitle.style.fontWeight = "900";

document.querySelector(".keyword").appendChild(keywordsTitle);

const keywordsUl = document.createElement("ul");
keywordsUl.style.listStyle = "none";
keywordsUl.style.padding = "0";
keywordsUl.style.display = "flex";
// keywordsUl.style.justifyContent = "space-around";

keywordsUl.style.flexWrap = "wrap";
keywordsUl.style.gap = "0.5rem 1rem";

keyword.appendChild(keywordsUl);

for (const keyword of keywords) {
  // console.log(keyword);
  const keywordsList = document.createElement("li");
  keywordsUl.appendChild(keywordsList);
  keywordsList.textContent = `#${keyword}`;
  keywordsList.style.fontWeight = "900";
  keywordsList.style.borderRadius = "100px";

  keywordsList.style.padding = "0.25rem 1rem";

  const colors = [
    "Crimson",

    "blue",
    "DeepPink",
    `Chocolate`,
    "Coral",
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

  keywordsList.style.color = "black";
  keywordsList.style.backgroundColor =
    colors[parseInt(Math.random() * colors.length)];

  //hover style
  keywordsList.addEventListener("mouseover", () => {
    keywordsList.style.cursor = "default";
    keywordsList.style.transform = "scale(1.05, 1.05)";
  });
  keywordsList.addEventListener("mouseleave", () => {
    keywordsList.style.transform = "scale(1, 1)";
  });
}

//footer
const footer = document.createElement("footer");
const footerContent = document.createElement("p");

document.querySelector(".wrapper").appendChild(footer);
footer.appendChild(footerContent);

const contentOfFooter = `developed with <span style= display:inline-block class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>`;

footerContent.innerHTML = contentOfFooter;
