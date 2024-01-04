function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", function () {
  const input = document.querySelector("input");
  const inputValue = parseInt(input.value);

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = "";
  }
});

function createBoxes(inputValue) {
  boxes.innerHTML = "";

  let boxSize = 30;

  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    boxSize += 10;
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
