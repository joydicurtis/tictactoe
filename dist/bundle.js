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

/***/ "./src/assets/sounds/step.wav":
/*!************************************!*\
  !*** ./src/assets/sounds/step.wav ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"186eb8e083ef587171ea677d2e74aa41.wav\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/sounds/step.wav?");

/***/ }),

/***/ "./src/assets/sounds/win.wav":
/*!***********************************!*\
  !*** ./src/assets/sounds/win.wav ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"18f9ca01dea2bb99e30c30dcc9939fc8.wav\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/sounds/win.wav?");

/***/ }),

/***/ "./src/assets/images/lanscape-bg.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/lanscape-bg.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/lanscape-bg.svg\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/images/lanscape-bg.svg?");

/***/ }),

/***/ "./src/assets/images/monster-1.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/monster-1.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/monster-1.svg\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/images/monster-1.svg?");

/***/ }),

/***/ "./src/assets/images/monster-2.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/monster-2.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/monster-2.svg\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/images/monster-2.svg?");

/***/ }),

/***/ "./src/scss/application.scss":
/*!***********************************!*\
  !*** ./src/scss/application.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cat-fish-toe/./src/scss/application.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_sounds_win_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sounds/win.wav */ \"./src/assets/sounds/win.wav\");\n/* harmony import */ var _assets_sounds_step_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sounds/step.wav */ \"./src/assets/sounds/step.wav\");\n/* harmony import */ var _assets_images_lanscape_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/lanscape-bg.svg */ \"./src/assets/images/lanscape-bg.svg\");\n/* harmony import */ var _assets_images_monster_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/monster-1.svg */ \"./src/assets/images/monster-1.svg\");\n/* harmony import */ var _assets_images_monster_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/monster-2.svg */ \"./src/assets/images/monster-2.svg\");\n\n \n\n\n\n\n\nconst comb = [\n  [0, 4, 8], [2, 4, 6], [3, 4, 5],\n  [1, 4, 7], [0, 1, 2], [6, 7, 8],\n  [0, 3, 6], [2, 5, 8]\n];\nclass TicTacToe {\n  constructor() {\n    this.huPlayer = {};\n    this.aiPlayer = {};\n    this.board = [];\n    this.turnCount = 0;\n\n    this.boardCheckboxes = document.getElementsByClassName('board__checkbox');\n    this.boardCells = document.querySelectorAll('.board__item');\n    this.monsterImg1 = '<img class=\"hero__img\" src=\"./images/monster-1.svg\" alt=\"monster-1\">';\n    this.monsterImg2 = '<img class=\"hero__img\" src=\"./images/monster-2.svg\" alt=\"monster-2\">';\n    this.dialogStart = document.getElementById('dialog-start');\n    this.dialogResult = document.getElementById('dialog-result');\n    this.winnerImg = document.getElementById('winner-img');\n    this.winMessage = document.getElementById('message');\n    \n    let x = document.getElementById('playerX');\n    let o = document.getElementById('playerO');\n    let startButton = document.getElementById('start-button');\n    let resetButton = document.getElementById('reset-button');\n    let reStartButton = document.getElementById('restart-button');\n    let muteButton = document.getElementById('mute-button');\n    \n    this.stepAudio = document.createElement(\"audio\");\n    this.winAudio = document.createElement(\"audio\");\n    this.winAudio.src = _assets_sounds_win_wav__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    this.stepAudio.src = _assets_sounds_step_wav__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    this.stepAudio.muted = false;\n    this.winAudio.muted = false;\n\n    x.addEventListener('click', e => { \n      this.chooseHero(e);\n    })\n    o.addEventListener('click', e => { \n      this.chooseHero(e);\n    })\n    startButton.addEventListener('click', () => {\n      this.startGame();\n    });\n    reStartButton.addEventListener('click', (e) => {\n      this.chooseHero(e)\n    });\n    resetButton.addEventListener('click', (e) => {\n      this.chooseHero(e)\n    });\n    muteButton.addEventListener('click', () => { \n      this.muteSound();\n    })\n    \n    for (let i=0; i<this.boardCheckboxes.length; i++) {\n      this.boardCheckboxes[i].addEventListener('click', this.huPlayerMove());\n    }\n  }\n\n  hide(item) {\n    item.classList.add('visually-hidden');\n  }\n\n  show(item) {\n    item.classList.remove('visually-hidden');\n  }\n\n  whoseTurn() {\n    return Math.floor(Math.random() * 2);\n  }\n\n  chooseHero(e) {\n    this.hide(this.dialogResult);\n    this.show(this.dialogStart);\n    if (e.target.id === 'playerO') {\n      this.huPlayer = { type: 'X', img: this.monsterImg2 };\n      this.aiPlayer = { type: 'O', img: this.monsterImg1 };\n    }\n    else {\n      this.huPlayer = { type: 'X', img: this.monsterImg1 };\n      this.aiPlayer = { type: 'O', img: this.monsterImg2 };\n    }\n    return this.huPlayer;\n  }\n\n  makeStep(firstPlayer, secondPlayer, id) {\n    const emptyFields = this.getEmptyFields();\n    console.log('empty fields', emptyFields);\n    if (emptyFields.length !== 0) {\n      if (!this.winCheck(this.board, secondPlayer.type)) {\n        let cell = document.querySelector('label[for=\"' + id + '\"]');\n        let checkbox = document.getElementById(id);\n        cell.innerHTML = firstPlayer.img;\n        checkbox.setAttribute('disabled', true);\n        this.board[+id] = firstPlayer.type;\n        this.stepAudio.play();\n      }\n      if (this.winCheck(this.board, firstPlayer.type)) {\n        for (let i=0; i<this.boardCheckboxes.length; i++) {\n          this.boardCheckboxes[i].setAttribute('disabled', true);\n        }\n        let message = { img: firstPlayer.img, text: firstPlayer.type === 'X' ? 'You Win!' : 'You Lose!' }\n        this.showResult(message);\n      }\n    }\n    else {\n      let message = { img: firstPlayer.img + secondPlayer.img, text: 'Draw!' };\n      this.showResult(message);\n    }\n  }\n\n  showResult(message) {\n    setTimeout(() => {\n      this.winnerImg.innerHTML = message.img;\n      this.winMessage.innerText = message.text;\n      this.winAudio.play();\n      this.show(this.dialogResult);\n    }, 1000); \n  }\n\n  huPlayerMove() {\n    return(e) => {\n      this.turnCount += 1;\n      let id = e.target.id;\n      this.makeStep(this.huPlayer, this.aiPlayer, id);\n      if (!this.winCheck(this.board, this.huPlayer.type)) {\n        this.aiPlayerMove();\n      }\n    }\n  }\n\n  aiPlayerMove() {\n    this.turnCount += 1;\n    let bestMove = this.minimax(this.board, this.aiPlayer.type);\n    this.makeStep(this.aiPlayer, this.huPlayer, bestMove.idx);\n    if (!(this.winCheck(this.board, this.huPlayer.type) || this.winCheck(this.board, this.aiPlayer.type))) {\n      this.huPlayerMove();\n    }\n  }\n  \n  startGame() {\n    this.hide(this.dialogResult);\n    this.turnCount = 0;\n    for (let i = 0; i < this.boardCheckboxes.length; i++) {\n      this.boardCheckboxes[i].checked = false;\n      this.boardCheckboxes[i].removeAttribute('disabled', false);\n      this.boardCells[i].innerHTML = '';\n    }\n    this.hide(this.dialogStart);\n    this.board = [...Array(9).keys()];\n    let turn = this.whoseTurn();\n    if (turn === 1) {\n      this.aiPlayerMove();\n    }\n  }\n\n  muteSound() {\n    this.stepAudio.muted = !this.stepAudio.muted;\n    this.winAudio.muted = !this.winAudio.muted;\n    if (this.stepAudio.muted) {\n      muteButton.innerHTML='<svg fill=\"currentColor\" class=\"button__icon\" viewBox=\"0 0 16 17\"><path d=\"m14.798 8.5.975-.974a.778.778 0 0 0 0-1.099l-.2-.2a.778.778 0 0 0-1.099 0l-.974.975-.974-.975a.778.778 0 0 0-1.099 0l-.199.2a.776.776 0 0 0 0 1.099l.974.974-.974.974a.772.772 0 0 0 0 1.099l.199.199a.776.776 0 0 0 1.099 0l.974-.974.974.974a.776.776 0 0 0 1.099 0l.2-.199a.776.776 0 0 0 0-1.099l-.975-.974ZM4.042 4.21A4.038 4.038 0 0 0 0 8.253a4.042 4.042 0 0 0 4.042 4.042h.832l4.726 4.21V0L4.874 4.21h-.832Z\"/></svg>';\n    }\n    else {\n      muteButton.innerHTML='<svg fill=\"currentColor\" class=\"button__icon\" viewBox=\"0 0 16 17\"><path d=\"M4.042 4.21A4.038 4.038 0 0 0 0 8.253a4.042 4.042 0 0 0 4.042 4.042h.832l4.726 4.21V0L4.874 4.21h-.832Zm7.072.506L16 3.2V.673l-4.886 4.043M16 9.726V6.778l-4.886 1.475L16 9.726Zm0 6.104v-2.525l-4.886-1.516L16 15.831Z\"/></svg>';\n    }\n  }\n\n  winCheck(board, player) {\n    for (let i = 0; i<comb.length; i++) {\n      if (board[comb[i][0]]===player && board[comb[i][1]]===player && board[comb[i][2]]===player) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  minimax(board, player) {\n    const emptyFields = this.getEmptyFields();\n    if (this.winCheck(board, this.huPlayer.type)) {\n      return {\n        score: -1\n      }\n    }\n    else if (this.winCheck(board, this.aiPlayer.type)) {\n      return {\n        score: 1\n      }\n    }\n    else if (emptyFields.length === 0) {\n      return {\n        score: 0\n      }\n    }\n    let moves = [];\n    for (let i=0; i<emptyFields.length; i++) {\n      \n      let move = {};\n      board[emptyFields[i]] = player;\n      move.idx = emptyFields[i];\n      if (player === this.huPlayer.type) {\n        const step = this.minimax(board, this.aiPlayer.type);\n        move.score = step.score;\n      }\n      if (player === this.aiPlayer.type) {\n        const step = this.minimax(board, this.huPlayer.type);\n        move.score = step.score;\n      }\n      board[emptyFields[i]] = move.idx;\n      moves.push(move);\n    }\n    let bestMove = null;\n    if (player === this.aiPlayer.type) {\n      let bestScore = -Infinity;\n      for (let i=0; i<moves.length; i++) {\n        if (moves[i].score>bestScore) {\n          bestScore = moves[i].score;\n          bestMove = i;\n        }\n      }\n    } \n    else {\n      let bestScore = Infinity;\n      for (let i=0; i<moves.length; i++) {\n        if (moves[i].score<bestScore) {\n          bestScore = moves[i].score;\n          bestMove = i;\n        }\n      }\n    }\n    return moves[bestMove];\n  }\n\n  getEmptyFields() {\n    return this.board.filter(f => f !== this.huPlayer.type && f !== this.aiPlayer.type)\n  }\n}\n\nnew TicTacToe();\n\n//# sourceURL=webpack://cat-fish-toe/./src/app.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/application.scss");
/******/ 	
/******/ })()
;