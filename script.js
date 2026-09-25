const gridContainer = document.querySelector(".grid-container");

function getSqaures(size) {
  const numOfSqaures = size * size;
  for (let i = 0; i < numOfSqaures; i++) {
    const sqaure = document.createElement("div");
    sqaure.style.width = `calc(100% / ${size})`;
    gridContainer.appendChild(sqaure);
  }
}

getSqaures(4);
