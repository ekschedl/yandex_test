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

    // Создаем элемент span для стилизации totalItems
    const totalItemsSpan = document.createElement("span");
    totalItemsSpan.textContent = `${totalItems}`;
    totalItemsSpan.style.color = "rgba(49, 49, 49, 0.6)";

    // Обновляем содержимое slideNumber с учетом стилизации totalItems
    slideNumber.textContent = `${displayIndex}/`;
    slideNumber.appendChild(totalItemsSpan);

    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });

    updateButtonStates(); // Вызываем функцию обновления состояния кнопок
  };

  const updateButtonStates = () => {
    // Обновляем состояние кнопки prev
    if (currentIndex === 0) {
      prevButton.disabled = true;
      prevButton.querySelector("img").src = "/images/btn_disabled_left.png";
    } else {
      prevButton.disabled = false;
      prevButton.querySelector("img").src =
        "/images/carousel_button_left_black.png";
    }

    // Обновляем состояние кнопки next
    if (currentIndex === totalItems - 1) {
      nextButton.disabled = true;
      nextButton.querySelector("img").src = "/images/btn_disabled_right.png";
    } else {
      nextButton.disabled = false;
      nextButton.querySelector("img").src = "/images/carousel_button_right.png";
    }
  };

  const nextSlide = () => {
    currentIndex++;
    updateCarousel();

    if (currentIndex >= totalItems + 1) {
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
        currentIndex = totalItems;
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

  // Функция для обновления изображения кнопки при hover и disabled
  const updateButtonImage = (button, imageSrc) => {
    button.querySelector("img").src = imageSrc;
  };

  prevButton.addEventListener("mouseenter", () => {
    updateButtonImage(prevButton, "/images/btn_hover_left.png");
  });

  prevButton.addEventListener("mouseleave", () => {
    updateButtonImage(prevButton, "/images/carousel_button_left_black.png");
  });

  nextButton.addEventListener("mouseenter", () => {
    updateButtonImage(nextButton, "/images/btn_hover_right.png");
  });

  nextButton.addEventListener("mouseleave", () => {
    updateButtonImage(nextButton, "/images/carousel_button_right.png");
  });

  const startAutoplay = () => {
    setInterval(nextSlide, 4000);
  };

  let intervalId = startAutoplay();

  const stopAutoplay = () => {
    clearInterval(intervalId);
  };

  const sliderContainer = document.querySelector(".carousel-participant");
  sliderContainer.addEventListener("mouseenter", stopAutoplay);
  sliderContainer.addEventListener("mouseleave", startAutoplay);

  updateCarousel();
});
