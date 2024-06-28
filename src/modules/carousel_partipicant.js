"use strict";

const carousel_participant = () => {
  console.log("carousel_participant 2");
  let currentSlideIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-participant-item");
    const slideNumber = document.querySelector(".slide-number");

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    slideNumber.textContent = `${index + 1}/${slides.length}`;

    currentSlideIndex = index;
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".carousel-participant-item");
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
    } else {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    const slides = document.querySelectorAll(".carousel-participant-item");
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
    } else {
      currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
  }

  // Инициализация первого слайда при загрузке страницы
  showSlide(currentSlideIndex);

  // Привязываем функции к кнопкам управления
  const prevButton = document.querySelector(
    ".carousel-control-participant.prev"
  );
  const nextButton = document.querySelector(
    ".carousel-control-participant.next"
  );

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
};

export default carousel_participant;
