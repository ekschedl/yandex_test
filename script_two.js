"use sctrict";
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".carousel-participant-item");
  const dots = document.querySelectorAll(".dot-participant");
  const slideNumber = document.querySelector(".slide-number");

  // Скрыть все слайды и сбросить активные точки
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Показать текущий слайд и активировать соответствующую точку
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  // Обновить номер текущего слайда в нижнем углу
  slideNumber.textContent = `${slideIndex + 1}/${slides.length}`;
}

function currentSlide(index) {
  slideIndex = index;
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (
    slideIndex >= document.querySelectorAll(".carousel-participant-item").length
  ) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex =
      document.querySelectorAll(".carousel-participant-item").length - 1;
  }
  showSlides();
}

// Автоматическое переключение слайдов каждые 3 секунды
setInterval(nextSlide, 3000);

// Показать первый слайд при загрузке страницы
showSlides();
