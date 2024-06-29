"use strict";

console.log("carousel_stages 4");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

// Функция для обновления отображения карусели
function updateCarousel() {
  const inner = document.querySelector(".carousel-inner");
  inner.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Подсветка активной точки
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // Управление видимостью и изображениями кнопок prev и next
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalItems - 1;

  // Обработчики событий для изменения изображений при hover
  updateButtonOnHover(
    prevButton,
    "/images/carousel_button_left_default.png",
    "/images/btn_hover_left.png"
  );
  updateButtonOnHover(
    nextButton,
    "/images/carousel_button_right_default.png",
    "/images/btn_hover_right.png"
  );

  // Установка изображений при disabled
  prevButton.querySelector("img").src = prevButton.disabled
    ? "/images/btn_disabled_left.png"
    : "/images/carousel_button_left_default.png";
  nextButton.querySelector("img").src = nextButton.disabled
    ? "/images/btn_disabled_right.png"
    : "/images/carousel_button_right_default.png";
}

// Функция для переключения к предыдущему слайду
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Функция для переключения к следующему слайду
function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
}

// Функция для перехода к конкретному слайду по индексу
function goToSlide(index) {
  if (index >= 0 && index < totalItems) {
    currentIndex = index;
    updateCarousel();
  }
}

// Функция для обновления изображения кнопки при hover
function updateButtonOnHover(button, defaultImg, hoverImg) {
  button.addEventListener("mouseenter", () => {
    if (!button.disabled) {
      button.querySelector("img").src = hoverImg;
    }
  });

  button.addEventListener("mouseleave", () => {
    if (!button.disabled) {
      button.querySelector("img").src = defaultImg;
    }
  });
}

// Обработчики событий для кнопок prev и next
document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

// Обработчики событий для точек
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

// Инициализация карусели
document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});

// console.log("carousel_stages 4");

// let currentIndex = 0;
// const items = document.querySelectorAll(".carousel-item");
// const totalItems = items.length;

// // Функция для обновления отображения карусели
// function updateCarousel() {
//   const inner = document.querySelector(".carousel-inner");
//   inner.style.transform = `translateX(-${currentIndex * 100}%)`;

//   // Подсветка активной точки
//   const dots = document.querySelectorAll(".dot");
//   console.log(dots);
//   dots.forEach((dot, index) => {
//     if (index === currentIndex) {
//       dot.classList.add("active");
//     } else {
//       dot.classList.remove("active");
//     }
//   });

//   // Управление видимостью кнопок prev и next
//   const prevButton = document.getElementById("prevBtn");
//   const nextButton = document.getElementById("nextBtn");
//   prevButton.disabled = currentIndex === 0;
//   nextButton.disabled = currentIndex === totalItems - 1;
// }

// // Функция для переключения к предыдущему слайду
// function prevSlide() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel();
//   }
// }

// // Функция для переключения к следующему слайду
// function nextSlide() {
//   if (currentIndex < totalItems - 1) {
//     currentIndex++;
//     updateCarousel();
//   }
// }

// // Функция для перехода к конкретному слайду по индексу
// function goToSlide(index) {
//   if (index >= 0 && index < totalItems) {
//     currentIndex = index;
//     updateCarousel();
//   }
// }

// // Обработчики событий для кнопок prev и next
// document.getElementById("prevBtn").addEventListener("click", prevSlide);
// document.getElementById("nextBtn").addEventListener("click", nextSlide);

// // Обработчики событий для точек
// document.querySelectorAll(".dot").forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     goToSlide(index);
//   });
// });

// // Инициализация карусели
// document.addEventListener("DOMContentLoaded", () => {
//   updateCarousel();
// });
