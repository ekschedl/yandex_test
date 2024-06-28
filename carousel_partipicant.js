"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-participant-item");
  const totalItems = items.length;

  const inner = document.querySelector(".carousel-participant-inner");

  const firstClone = items[0].cloneNode(true);
  const lastClone = items[totalItems - 1].cloneNode(true);

  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  inner.appendChild(firstClone);
  inner.insertBefore(lastClone, items[0]);

  const updateCarousel = () => {
    inner.style.transition = "transform 0.5s ease-in-out";
    inner.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

    const slideNumber = document.querySelector(".slide-number");
    let displayIndex =
      (((currentIndex % totalItems) + totalItems) % totalItems) + 1;
    slideNumber.textContent = `${displayIndex}/${totalItems}`;

    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  };

  const nextSlide = () => {
    currentIndex++;
    updateCarousel();

    if (currentIndex >= totalItems) {
      setTimeout(() => {
        inner.style.transition = "none";
        currentIndex = 0;
        inner.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
      }, 500);
    }
  };

  const prevSlide = () => {
    currentIndex--;
    updateCarousel();

    if (currentIndex < 0) {
      setTimeout(() => {
        inner.style.transition = "none";
        currentIndex = totalItems - 1;
        inner.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
      }, 500);
    }
  };

  const prevButton = document.querySelector(
    ".carousel-control-participant.prev"
  );
  const nextButton = document.querySelector(
    ".carousel-control-participant.next"
  );

  prevButton.addEventListener("click", () => {
    stopAutoplay();
    prevSlide();
  });

  nextButton.addEventListener("click", () => {
    stopAutoplay();
    nextSlide();
  });

  let intervalId;

  const startAutoplay = () => {
    intervalId = setInterval(nextSlide, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalId);
  };

  updateCarousel();
  startAutoplay();

  const sliderContainer = document.querySelector(".carousel-participant");
  sliderContainer.addEventListener("mouseenter", stopAutoplay);
  sliderContainer.addEventListener("mouseleave", startAutoplay);
});
