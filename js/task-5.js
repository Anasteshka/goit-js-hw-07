function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.body;
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onBtnClick);

function onBtnClick() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
