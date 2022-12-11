document.body.style.textAlign = "center";

//wrapper style start
const wrapper = document.querySelector(".wrapper");
wrapper.style.maxWidth = "50%";
wrapper.style.margin = "auto";
wrapper.style.display = "grid";
wrapper.style.gridTemplateColumns = "repeat(6, 1fr)";
wrapper.style.justifyContent = "center";
wrapper.style.gap = "0.35rem";

//wrapper style end

for (let i = 0; i <= 100; i++) {
  let div = document.createElement("div");
  // div.className = `class-${i}`;
  div.textContent = `${i}`;

  div.style.display = "inline-block";
  div.style.padding = "15px";
  div.style.fontSize = "2.5rem";
  div.style.color = "#fff";

  if (i % 2 === 0) {
    div.style.backgroundColor = "#21bf73"; //green
  } else if (i % 2 !== 0) {
    div.style.backgroundColor = "#fddb3a"; //yellow
  }

  //prime number identify start
  let prime = false;
  if (i === 2) {
    prime = true;
  } else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      } else {
        prime = true;
      }
    }
  }

  if (prime) {
    div.style.backgroundColor = "#fd5e53"; //red
  }
  //prime number identify end

  wrapper.appendChild(div);

  //   console.log(div);

  //hover style
  div.addEventListener("mouseover", () => {
    div.style.cursor = "pointer";
    div.style.transform = "scale(1.1, 1.1)";
  });
  div.addEventListener("mouseleave", () => {
    div.style.transform = "scale(1, 1)";
  });
}

//footer
const footer = document.createElement("footer");
const footerContent = document.createElement("p");

document.body.appendChild(footer);
footer.appendChild(footerContent);

const contentOfFooter = `developed with <span style= display:inline-block class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>`;

footerContent.innerHTML = contentOfFooter;
