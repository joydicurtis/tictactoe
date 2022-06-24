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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"70a7f4bb032c69777d9f543f2b7bf8e1.wav\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/sounds/step.wav?");

/***/ }),

/***/ "./src/assets/sounds/win.wav":
/*!***********************************!*\
  !*** ./src/assets/sounds/win.wav ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1213d43917d866cb5f52c7021e5701f2.wav\");\n\n//# sourceURL=webpack://cat-fish-toe/./src/assets/sounds/win.wav?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_sounds_win_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sounds/win.wav */ \"./src/assets/sounds/win.wav\");\n/* harmony import */ var _assets_sounds_step_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sounds/step.wav */ \"./src/assets/sounds/step.wav\");\n\n \n\n\nlet player = 'X';\nlet player2 = 'O';\nlet resetButton = document.getElementById('resetButton');\nlet newButton = document.getElementById('newButton');\nlet muteButton = document.getElementById('muteButton');\nlet field;\nlet fields = document.getElementById('board');\nlet winMessage = document.getElementById('message');\nlet winner = document.getElementById('winner');\nlet x = document.getElementById('playerX');\nlet o = document.getElementById('playerO');\nlet playerClass;\nlet playerClass2;\nlet arr = [];\nlet count = 0;\nconst comb = [\n  [0, 4, 8], [2, 4, 6], [3, 4, 5],\n  [1, 4, 7], [0, 1, 2], [6, 7, 8],\n  [0, 3, 6], [2, 5, 8]\n];\nlet stepAudio;\nlet winAudio;\nstepAudio = document.createElement(\"audio\");\nwinAudio = document.createElement(\"audio\");\nwinAudio.src = _assets_sounds_win_wav__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nstepAudio.src = _assets_sounds_step_wav__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nstepAudio.muted = false;\nwinAudio.muted = false;\nclass TicTacToe {\n  constructor() {\n    this.turn = Math.floor(Math.random() * 2);\n    this.turnCount = 0;\n    resetButton.addEventListener('click', () => { \n      this.resetGame();\n    });\n    newButton.addEventListener('click', () => { \n      this.resetGame();\n    })\n    muteButton.addEventListener('click', () => { \n      this.muteSound();\n    })\n    x.addEventListener('click', e => { \n      this.choosePlayer(e);\n    })\n    o.addEventListener('click', e => { \n      this.choosePlayer(e);\n    })\n    this.arrayFields = [];\n    this.resetGame(); \n  }\n\n  initGame() {\n    for (let i=0; i<9; i++) {\n      let field = document.createElement('div');\n      field.classList.add('field board__item');\n      field.setAttribute('field-id', i);\n      field.addEventListener('click', this.playerMove());\n      fields.appendChild(field);\n      fields.appendChild(stepAudio);\n      fields.appendChild(winAudio);\n      this.arrayFields.push(field);\n    }\n    this.field = document.getElementsByClassName('board__item');\n    this.turn = Math.floor(Math.random() * 2);\n    if (this.turn === 1) {\n      this.playerTwoMove();\n    }\n    count = 0;\n  };\n\n  muteSound() {\n    stepAudio.muted = !stepAudio.muted;\n    winAudio.muted = !winAudio.muted;\n  }\n\n  resetGame() {\n    this.board = [...Array(9).keys()];\n    this.turnCount = 0;\n    fields.innerHTML='';\n    this.arrayFields = [];\n    winner.classList.add('hidden');\n    winMessage.classList.remove('player', 'ai', 'draw');\n    fields.classList.remove('hasWinner');\n    start.classList.remove('hasHero');\n    start.classList.remove('hidden');\n    o.classList.remove('hero');\n    x.classList.remove('hero');\n    winMessage.innerText = '';\n    this.choosePlayer();\n  }\n\n  playerMove() {\n    return (e) => {\n      this.turnCount += 1;\n      let id = e.target.getAttribute('field-id');\n      if (!(this.winCheck(this.board, player) || this.winCheck(this.board, player2))) {\n        if ((this.board[+id]!==player2)&&(this.board[+id]!==player)) {\n          this.board[+id] = player;\n          stepAudio.play();\n          this.arrayFields[+id].classList.add(playerClass);\n          const emptyFields = this.getEmptyFields(this.board);\n          if (emptyFields.length===0) {\n            winMessage.innerText = 'Draw!';\n            winMessage.classList.add('draw');\n            winner.classList.remove('hidden');\n            return\n          }\n          if (this.winCheck(this.board, player)) {\n            for (let i=0; i<field.length; i++) {\n              field[i].removeEventListener('click', this.playerMove());\n            }\n            this.pickFields(this.board, player);\n            setTimeout(() => {\n              winMessage.innerText = 'You Win!';\n              winner.classList.remove('hidden');\n            }, 500);\n            return;\n          }\n          this.playerTwoMove(); \n        }\n      }\n    }\n  }\n  playerTwoMove() {\n    this.turnCount +=1;\n    let bestMove = this.minimax(this.board, player2);\n    this.board[bestMove.idx] = player2;\n    stepAudio.play();\n    this.arrayFields[bestMove.idx].classList.add(playerClass2);\n    if (this.winCheck(this.board, player2)) {\n      for (let i=0; i<this.field.length; i++) {\n        this.field[i].removeEventListener('click', this.playerMove());\n      }\n      this.pickFields(this.board, player2);\n      setTimeout(() => {\n        winMessage.innerText = 'PC Wins!';\n        winner.classList.remove('hidden');\n      }, 500);\n      return\n    }\n    const emptyFields = this.getEmptyFields(this.board);\n    if (emptyFields.length===0) {\n      winMessage.innerText = 'Draw!';\n      winner.classList.remove('hidden');\n      return\n    }\n  }\n\n  choosePlayer(e) {\n    if (e) {\n      start.classList.add('hasHero');\n      if (e.target.id === 'playerO') {\n        player = 'O';\n        player2 = 'X';\n        playerClass2 = 'cat';\n        playerClass = 'fish';\n        x.classList.remove('hero');\n        o.classList.add('hero');\n      }\n      else {\n        player = 'X';\n        player2 = 'O';\n        playerClass2 = 'fish';\n        playerClass = 'cat';\n        o.classList.remove('hero');\n        x.classList.add('hero');\n      }\n      setTimeout(() => {\n        this.initGame();\n        start.classList.add('hidden');\n      }, 300);\n    }\n  }\n\n  pickFields(board, someplayer) {\n    let arr;\n    for(let i=0; i<comb.length; i++) {\n      if (board[comb[i][0]]===someplayer && board[comb[i][1]]===someplayer && board[comb[i][2]]===someplayer) {\n        winAudio.play();\n        arr = comb[i];\n        fields.classList.add('hasWinner');\n        for (let j=0; j<arr.length; j++) {\n          this.arrayFields[arr[j]].classList.add('win', 'win-'+j);\n        }      \n      }\n    }\n  }\n\n  winCheck(board, someplayer) {\n    for (let i = 0; i<comb.length; i++) {\n      if (board[comb[i][0]]===someplayer && board[comb[i][1]]===someplayer && board[comb[i][2]]===someplayer) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  minimax(board, someplayer) {\n    const emptyFields = this.getEmptyFields(board);\n    if (this.winCheck(board, player)) {\n      return {\n        score: -1\n      }\n    }\n    else if (this.winCheck(board, player2)) {\n      return {\n        score: 1\n      }\n    }\n    else if (emptyFields.length === 0) {\n      return {\n        score: 0\n      }\n    }\n    let moves = [];\n    for (let i=0; i<emptyFields.length; i++) {\n      let move = {};\n      board[emptyFields[i]] = someplayer;\n      move.idx = emptyFields[i];\n      if (someplayer === player) {\n        const step = this.minimax(board, player2);\n        move.score = step.score;\n      }\n      if (someplayer === player2) {\n        const step = this.minimax(board, player);\n        move.score = step.score;\n      }\n      board[emptyFields[i]] = move.idx;\n      moves.push(move);\n    }\n    let bestMove = null;\n    if (someplayer === player2) {\n      let bestScore = -Infinity;\n      for (let i=0; i<moves.length; i++) {\n        if (moves[i].score>bestScore) {\n          bestScore = moves[i].score;\n          bestMove = i;\n        }\n      }\n    } \n    else {\n      let bestScore = Infinity;\n      for (let i=0; i<moves.length; i++) {\n        if (moves[i].score<bestScore) {\n          bestScore = moves[i].score;\n          bestMove = i;\n        }\n      }\n    }\n    return moves[bestMove];\n  }\n\n  getEmptyFields(board) {\n    return board.filter(f => f !== player && f !== player2)\n  }\n}\n\nnew TicTacToe();\n\n//# sourceURL=webpack://cat-fish-toe/./src/app.js?");

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