"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-participant-item");
  const totalItems = items.length;
  const inner = document.querySelector(".carousel-participant-inner");
  const slideWidth = items[0].getBoundingClientRect().width;

  let currentIndex = 0;
  let intervalId = null; // Переменная для хранения ID интервала

  // Функция для обновления карусели
  const updateCarousel = () => {
    currentIndex = (currentIndex + totalItems) % totalItems;

    inner.style.transition = "transform 0.5s ease-in-out";
    inner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    const slideNumber = document.querySelector(".slide-number");
    const currentIndexElement = slideNumber.querySelector(".current-index");
    const totalItemsElement = slideNumber.querySelector(".total-items");

    if (currentIndexElement && totalItemsElement) {
      currentIndexElement.textContent = currentIndex + 1;
      totalItemsElement.textContent = totalItems;
    }

    // Изменяем стиль текста currentIndex + 1 на желтый цвет

    slideNumber.innerHTML = `${
      currentIndex + 1
    }<span style="color: rgba(49, 49, 49, 0.6);">/${totalItems}</span>`;

    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  };

  // Переключение на следующий слайд
  const nextSlide = () => {
    currentIndex++;
    updateCarousel();
  };

  // Переключение на предыдущий слайд
  const prevSlide = () => {
    currentIndex--;
    updateCarousel();
  };

  // Находим кнопки управления каруселью
  const prevButton = document.querySelector(
    ".carousel-control-participant.prev"
  );
  const nextButton = document.querySelector(
    ".carousel-control-participant.next"
  );

  // Переключение на предыдущий слайд при клике
  prevButton.addEventListener("click", () => {
    currentIndex--;
    updateCarousel();
    stopAutoScroll(); // Остановка автопрокрутки при клике на кнопку
  });

  // Переключение на следующий слайд при клике
  nextButton.addEventListener("click", () => {
    currentIndex++;
    updateCarousel();
    stopAutoScroll(); // Остановка автопрокрутки при клике на кнопку
  });

  // Функция для запуска автопрокрутки
  const startAutoScroll = () => {
    intervalId = setInterval(() => {
      currentIndex++;
      updateCarousel();
    }, 4000);
  };

  // Функция для остановки автопрокрутки
  const stopAutoScroll = () => {
    clearInterval(intervalId);
  };

  // Автоматический запуск автопрокрутки при загрузке страницы
  startAutoScroll();

  // Остановка автопрокрутки при наведении на карусель
  const sliderContainer = document.querySelector(".carousel-participant");
  sliderContainer.addEventListener("mouseenter", () => {
    stopAutoScroll();
  });

  // Возобновление автопрокрутки при уходе курсора с карусели
  sliderContainer.addEventListener("mouseleave", () => {
    startAutoScroll();
  });

  // Инициализация карусели
  updateCarousel();
});
