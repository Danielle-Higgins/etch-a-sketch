const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size");
const clearBtn = document.querySelector(".clear");
const rgbBtn = document.querySelector(".rgb-marker");
const blackBtn = document.querySelector(".black-marker");

let heldDown = false;
let rgbMarker = false;
let blackMarker = false;

function getRandomRgb() {
  return Math.floor(Math.random() * 255) + 1;
}

function getSqaures(size) {
  const numOfSqaures = size * size;
  for (let i = 0; i < numOfSqaures; i++) {
    const sqaure = document.createElement("div");
    sqaure.style.width = `calc(100% / ${size})`;
    gridContainer.appendChild(sqaure);
  }
}

getSqaures(16);

// drag mouse over the grid instead
gridContainer.addEventListener("mousedown", (e) => {
  if (e.target.matches(".grid-container div")) {
    if (rgbMarker) {
      e.target.style.backgroundColor = `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
    } else if (blackMarker) {
      e.target.style.backgroundColor = "black";
    } else {
      e.target.style.backgroundColor = "black";
    }
    heldDown = true;
  }

  const sqaures = e.currentTarget.querySelectorAll(".grid-container div");

  sqaures.forEach((sqaure) => {
    sqaure.addEventListener("mouseup", () => (heldDown = false));

    sqaure.addEventListener("mouseenter", (e) => {
      if (heldDown) {
        if (rgbMarker) {
          e.target.style.backgroundColor = `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
        } else if (blackMarker) {
          e.target.style.backgroundColor = "black";
        } else {
          e.target.style.backgroundColor = "black";
        }
      }
    });
  });
});

gridSizeBtn.addEventListener("click", () => {
  const userSize = +prompt("What size grid do you want?", 1);
  if (!userSize || userSize > 100) return;

  // clear the grid
  document.querySelector(".grid-container").replaceChildren();

  getSqaures(userSize);
});

clearBtn.addEventListener("click", () => {
  gridContainer.childNodes.forEach((div) => {
    div.style.backgroundColor = "";
  });
});

rgbBtn.addEventListener("click", () => {
  rgbMarker = true;
  blackMarker = false;
});

blackBtn.addEventListener("click", () => {
  blackMarker = true;
  rgbMarker = false;
});
