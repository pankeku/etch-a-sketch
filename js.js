const container = document.querySelector(`.container`);
const slider = document.querySelector(`#range-slider`);
let rainbowNumber = 0;
let number = 2;

populateDots();

function rainbowColor() {
  const rainbow = [
    `148, 0, 211`,
    `75, 0, 130`,
    `0, 0, 255`,
    `0, 255, 0`,
    `255, 255, 0`,
    `255, 127, 0`,
    `255, 0 , 0`,
  ];

  rainbowNumber++;

  if (rainbowNumber == 7) {
    rainbowNumber = 0;
  }

  return rainbow[rainbowNumber];
}

//populates divs in the container div, adds listeners and color

function populateDots() {
    
  removeDots();

  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  for (let i = 0; i < number * number; i++) {
    const dot = document.createElement(`div`);
    dot.className = "dot";

    dot.addEventListener("mouseover", (e) => {
      dot.style.backgroundColor = `rgb(${rainbowColor()})`;
    });

    container.appendChild(dot);
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
