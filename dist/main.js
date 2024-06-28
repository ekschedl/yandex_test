/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_carousel_partipicant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel_partipicant */ \"./src/modules/carousel_partipicant.js\");\n/* harmony import */ var _modules_carousel_stages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel_stages */ \"./src/modules/carousel_stages.js\");\n\n\n\n(0,_modules_carousel_partipicant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_carousel_stages__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://yandex_test/./src/index.js?");

/***/ }),

/***/ "./src/modules/carousel_partipicant.js":
/*!*********************************************!*\
  !*** ./src/modules/carousel_partipicant.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst carousel_partipicant = () => {\n  let currentSlideIndex = 0; // Переменная для хранения текущего индекса слайда\n  console.log(\"1\");\n  function showSlide(index) {\n    const slides = document.querySelectorAll(\".carousel-participant-item\");\n    const slideNumber = document.querySelector(\".slide-number\");\n\n    // Скрываем все слайды\n    slides.forEach((slide) => {\n      slide.classList.remove(\"active\");\n    });\n\n    // Показываем нужный слайд\n    slides[index].classList.add(\"active\");\n\n    // Обновляем номер текущего слайда\n    slideNumber.textContent = `${index + 1}/${slides.length}`;\n\n    // Обновляем текущий индекс слайда\n    currentSlideIndex = index;\n  }\n\n  function nextSlide() {\n    const slides = document.querySelectorAll(\".carousel-participant-item\");\n    if (currentSlideIndex < slides.length - 1) {\n      currentSlideIndex++;\n    } else {\n      currentSlideIndex = 0; // Зацикливаем карусель\n    }\n    showSlide(currentSlideIndex);\n  }\n\n  function prevSlide() {\n    const slides = document.querySelectorAll(\".carousel-participant-item\");\n    if (currentSlideIndex > 0) {\n      currentSlideIndex--;\n    } else {\n      currentSlideIndex = slides.length - 1; // Зацикливаем карусель\n    }\n    showSlide(currentSlideIndex);\n  }\n\n  // Инициализация первого слайда при загрузке страницы\n  showSlide(currentSlideIndex);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel_partipicant);\n\n\n//# sourceURL=webpack://yandex_test/./src/modules/carousel_partipicant.js?");

/***/ }),

/***/ "./src/modules/carousel_stages.js":
/*!****************************************!*\
  !*** ./src/modules/carousel_stages.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst carousel_stages = () => {\n  console.log(\"test3\");\n  let currentIndex = 0;\n  const items = document.querySelectorAll(\".carousel-item\");\n  const totalItems = items.length;\n\n  function updateCarousel() {\n    const inner = document.querySelector(\".carousel-inner\");\n    inner.style.transform = `translateX(-${currentIndex * 100}%)`;\n\n    document.querySelectorAll(\".dot\").forEach((dot, index) => {\n      dot.classList.toggle(\"active\", index === currentIndex);\n    });\n  }\n\n  function prevSlide() {\n    if (currentIndex > 0) {\n      currentIndex--;\n      updateCarousel();\n    }\n  }\n\n  function nextSlide() {\n    if (currentIndex < totalItems - 1) {\n      currentIndex++;\n      updateCarousel();\n    }\n  }\n\n  function currentSlide(index) {\n    currentIndex = index;\n    updateCarousel();\n  }\n\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    updateCarousel();\n  });\n\n  return {\n    prevSlide,\n    nextSlide,\n    currentSlide,\n  };\n};\n\nconst carousel = carousel_stages();\n\nconst prevButton = document.getElementById(\"prevBtn\");\nconst nextButton = document.getElementById(\"nextBtn\");\n\nprevButton.addEventListener(\"click\", () => {\n  carousel.prevSlide();\n});\n\nnextButton.addEventListener(\"click\", () => {\n  carousel.nextSlide();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel_stages);\n\n\n//# sourceURL=webpack://yandex_test/./src/modules/carousel_stages.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;