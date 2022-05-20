const container = document.querySelector(`#container`);
const slider = document.querySelector(`#range-slider`);
const rainbowButton = document.querySelector(`#rainbow-button`);
const replaceButton = document.querySelector(`#replace-button`);
const colorSelector = document.querySelector(`#color-selector`);
const buttons = document.querySelectorAll(`.buttons`);

let rainbowNumber = 0;
let number = 2;
let selectedColor = "#0084FF";

buttons.forEach((button) =>
button.addEventListener("click", () => {
  if (button.value == "ON") {
    button.style.backgroundColor = "";
    button.style.boxShadow = "inset 2px 1px 1px 1px black";
  } else {  
    button.style.boxShadow = "";  
  } }));




populateDots();

function getRainbowColor() {
  const rainbow = [
    `#9c27b0`,
    `#2196f3`,
    `#009688`,
    `#ffeb3b`,
    `#ff5722`,
    `#795548`,
    `#00c853`,
  ];

  rainbowNumber++;

  if (rainbowNumber == 7) {
    rainbowNumber = 0;
  }

  return rainbow[rainbowNumber];
}

//populates divs in the container div, adds listeners and color

function populateDots() {
  colorSelector.value = selectedColor;

  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  removeDots();

  for (let i = 0; i < number * number; i++) {
    const dot = document.createElement(`div`);
    dot.className = "dot";

    dot.addEventListener("mouseover", (e) => {
      if (dot.style.backgroundColor == "") {
        if (rainbowButton.value == "OFF") {
          dot.style.backgroundColor = selectedColor;
        } else {
          dot.style.backgroundColor = `${getRainbowColor()}`;
        }
      } else if (
        replaceButton.value == "OFF" &&
        dot.style.backgroundColor != ""
      ) {
        if (rainbowButton.value == "OFF") {
          dot.style.backgroundColor = selectedColor;
        } else {
          dot.style.backgroundColor = `${getRainbowColor()}`;
        }
      }
    });

    container.appendChild(dot);
  }
}

//DARKENING BY 10 percent
/* let brightnessValue = parseFloat(
          dot.style.filter.replace(/[^0-9.]/g, "", "")
        );

        dot.style.filter = `brightness(${value - 0.1})`; */

function toggleRainbow() {
  if (rainbowButton.value == "OFF") {
    rainbowButton.value = "ON";
  } else {
    rainbowButton.value = "OFF";
  }
}

function toggleReplace() {
  if (replaceButton.value == "OFF") {
    replaceButton.value = "ON";
  } else {
    replaceButton.value = "OFF";
  }
}

function setColor(newColor) {
  if (rainbowButton.value == "ON") {
    rainbowButton.value = "OFF";
    selectedColor = newColor;
  } else {
    selectedColor = newColor;
  }
}

function removeDots() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

function updateGridSize(value) {
  let gridSize = document.querySelector(`#grid-size`);
  gridSize.textContent = value;
  number = value;

  populateDots();
}

function resetDots() {
  populateDots();
}
