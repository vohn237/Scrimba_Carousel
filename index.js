const slides = document.querySelectorAll("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  console.log("next");
}

function moveToPrevSlide() {
  console.log("prev");
}
