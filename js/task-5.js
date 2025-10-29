function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const bodyElement = document.body;

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyElement.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
