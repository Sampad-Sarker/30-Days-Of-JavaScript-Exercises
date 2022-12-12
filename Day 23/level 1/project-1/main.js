document.body.style.textAlign = "center";

//wrapper style start
let wrapper = document.querySelector(".wrapper");
wrapper.style.maxWidth = "50%";
wrapper.style.margin = "1rem auto";
wrapper.style.display = "grid";
wrapper.style.gridTemplateColumns = "repeat(6, 1fr)";
wrapper.style.justifyContent = "center";
wrapper.style.gap = "0.35rem";
//wrapper style end

//input and button
let inputOfNumber = document.querySelector("input");
inputOfNumber.style.border = "2px solid #21bf73";
inputOfNumber.style.padding = "0.5rem 1rem";
const p = document.querySelector("p");
const button = document.querySelector("button");
button.style.color = "#fff";
button.style.backgroundColor = "#21bf73";
button.style.border = "2px solid #21bf73";
button.style.padding = "0.5rem 1rem";

let numberRange;
button.addEventListener("click", () => {
  // alert('clicked')
  wrapper.textContent = ""; //reset old numbers
  const valueOfInput = inputOfNumber.value;
  // console.log(valueOfInput);
  p.style.color = "red";

  if (isNaN(valueOfInput)) {
    p.textContent = "input value must be a number";
    
  } else if (valueOfInput === "") {
    p.textContent = "Enter number value on the input field to generate numbers";
    
  } else {
    p.textContent = "";
    numberRange = valueOfInput;
    // console.log(`it is a number: ${numberRange}`);

    //number generates
    for (let i = 0; i < numberRange; i++) {
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

      //hover style
      div.addEventListener("mouseover", () => {
        div.style.cursor = "pointer";
        div.style.transform = "scale(1.1, 1.1)";
      });
      div.addEventListener("mouseleave", () => {
        div.style.transform = "scale(1, 1)";
      });
    }
  }
  inputOfNumber.value = ""; //reset input
});

//footer
const footer = document.createElement("footer");
const footerContent = document.createElement("p");

document.body.appendChild(footer);
footer.appendChild(footerContent);

const contentOfFooter = `developed with <span style= display:inline-block class="anime animate__animated animate__heartBeat animate__infinite">❤️</span> by <a href="https://github.com/Sampad-Sarker" target="_blank">SampadSarker</a>`;

footerContent.innerHTML = contentOfFooter;
