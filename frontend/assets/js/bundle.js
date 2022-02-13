/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A019-exercise/form-control.ts":
/*!*******************************************!*\
  !*** ./src/A019-exercise/form-control.ts ***!
  \*******************************************/
/***/ (() => {


const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
// Aqui o typescript faz a inferência automaticamente no parâmetro event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
});
function hideErrorMessages(form) {
    form
        .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
        .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
showErrorMessage(username, 'Preencher nome de usuário.');
hideErrorMessages(form);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./src/A019-exercise/exercise.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A019-exercise/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map