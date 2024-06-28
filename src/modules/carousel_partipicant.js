"use strict";

const carousel_partipicant = () => {
  let currentSlideIndex = 0; // Переменная для хранения текущего индекса слайда
  console.log("1");
  function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-participant-item");
    const slideNumber = document.querySelector(".slide-number");

    // Скрываем все слайды
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Показываем нужный слайд
    slides[index].classList.add("active");

    // Обновляем номер текущего слайда
    slideNumber.textContent = `${index + 1}/${slides.length}`;

    // Обновляем текущий индекс слайда
    currentSlideIndex = index;
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".carousel-participant-item");
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
    } else {
      currentSlideIndex = 0; // Зацикливаем карусель
    }
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    const slides = document.querySelectorAll(".carousel-participant-item");
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
    } else {
      currentSlideIndex = slides.length - 1; // Зацикливаем карусель
    }
    showSlide(currentSlideIndex);
  }

  // Инициализация первого слайда при загрузке страницы
  showSlide(currentSlideIndex);
};
export default carousel_partipicant;
