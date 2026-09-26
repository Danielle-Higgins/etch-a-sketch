// function calls
getSqaures(16);

function getSqaures(size) {
  const numOfSqaures = size * size;
  for (let i = 0; i < numOfSqaures; i++) {
    const sqaure = document.createElement("div");
    sqaure.style.width = `calc(100% / ${size})`;
    document.querySelector(".grid-container").appendChild(sqaure);
  }
}

const sqaures = document.querySelectorAll(".grid-container div");
let heldDown = false;

// drag mouse over the grid instead
sqaures.forEach((sqaure) => {
  sqaure.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = "black";
    heldDown = true;
  });

  sqaure.addEventListener("mouseup", () => (heldDown = false));

  sqaure.addEventListener("mouseenter", (e) => {
    if (heldDown) {
      e.target.style.backgroundColor = "black";
    }
  });
});
