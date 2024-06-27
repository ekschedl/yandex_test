"use sctrict";
let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  if (index >= slides.length) {
    currentSlideIndex = slides.length - 1;
  } else if (index < 0) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex = index;
  }
  const offset = -currentSlideIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize the carousel
showSlide(currentSlideIndex);
