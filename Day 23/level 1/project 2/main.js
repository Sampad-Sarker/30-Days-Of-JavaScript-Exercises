//body style start
document.body.style.boxSizing = "border-box";
document.body.style.margin = "0";
document.body.style.textAlign = "center";
document.body.style.fontSize = "3rem";
document.body.style.fontWeight = "600";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.gap = "2rem";
//body style  end

//all p tags style start
const allParagraph = document.querySelectorAll("p");
allParagraph.forEach((paragraph) => (paragraph.style.margin = "0"));
//all p tags style end

//keyboard class style start
const keyboard = document.querySelector(".keyboard");
// console.log(keyboard);
keyboard.style.padding = "0.5rem 8rem";
keyboard.style.boxShadow = "2px 3px 8px 1px #00000080";

const intro = document.querySelector("#intro");
// console.log(intro);
const keyParagraph = document.createElement("p");
keyboard.appendChild(keyParagraph);
keyParagraph.style.display = "none";
keyParagraph.style.marginBlock = "0";

keyParagraph.setAttribute("id", "key");
keyParagraph.textContent = "You pressed ";

const spanInParagraph = document.createElement("span");
spanInParagraph.setAttribute("id", "keyName");
keyParagraph.appendChild(spanInParagraph);

document.querySelector("span").style.color = "#21bf73";
//keyboard class style end

//keycode class style start
const divOfCode = document.createElement("div");
divOfCode.setAttribute("class", "keycode");
document.body.appendChild(divOfCode);
divOfCode.style.visibility = "hidden";

const pOfCode = document.createElement("p");
pOfCode.setAttribute("id", "code");

divOfCode.appendChild(pOfCode);

const keycode = document.querySelector(".keycode");

keycode.style.boxShadow = "0px 0px 4px 3px #00000040";
keycode.style.fontSize = "6rem";
keycode.style.width = "10rem";
keycode.style.height = "10rem";
keycode.style.display = "flex";
keycode.style.justifyContent = "center";
keycode.style.alignItems = "center";
keycode.style.color = "#21bf73";
//keycode class style end

const code = document.querySelector("#code");
const keyName = document.querySelector("#keyName");
document.body.addEventListener("keypress", (e) => {
  // console.log(e.keyCode);
  intro.textContent = "";
  keyParagraph.style.display = "block";
  keyName.textContent = e.key;

  divOfCode.style.visibility = "visible";
  code.textContent = e.keyCode;

  // console.log(e.key);
});

//footer
const footer = document.createElement("footer");
const footerContent = document.createElement("p");

document.body.appendChild(footer);
footer.appendChild(footerContent);
footerContent.style.fontSize = "1rem";

const contentOfFooter = `developed with <span style= display:inline-block class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>`;

footerContent.innerHTML = contentOfFooter;
