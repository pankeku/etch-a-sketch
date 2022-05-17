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
    
    let counter = 0;

    dot.addEventListener("mouseover", (e) => {

      if (dot.style.backgroundColor == "") {
        dot.style.backgroundColor = `rgb(${rainbowColor()})`;
      } else {
          console.log("Already colored");
        const rgbArray = dot.style.backgroundColor.replace(/[^\d,]/g, '').split(",");
        dot.style.backgroundColor = darkenTenPercent(rgbArray);
        console.log(dot.style.backgroundColor);

      }  

      
    });

    container.appendChild(dot);
  }
}

function darkenTenPercent(RGB) {

    let R = RGB[0];
    let G = RGB[1];
    let B = RGB[2];

    R = Math.round(R - R * (10 / 100));
    console.log(R);
    G = Math.round(G - G * (10 / 100));
    console.log(G);
    B = Math.round(B - B * (10 / 100));
    console.log(B);

    let rgbToString = `rgb(${R.toString()}, ${G.toString()}, ${B.toString()})`;
    console.log(rgbToString);

    return rgbToString;
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


