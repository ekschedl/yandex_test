"use strict";

console.log("carousel_stages 4");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function updateCarousel() {
  const inner = document.querySelector(".carousel-inner");
  inner.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function currentSlide(index) {
  currentIndex = index;
  updateCarousel();
}

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});

return {
  prevSlide,
  nextSlide,
  currentSlide,
};
