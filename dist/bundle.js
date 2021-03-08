/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("var app = document.querySelector('#app');\nvar monsters = ['monster1', 'monster2', 'monster3', 'monster4', 'monster5', 'monster6', 'monster7', 'monster8', 'monster9', 'monster10', 'monster11', 'sock'];\n\nvar shuffle = function shuffle(array) {\n  var currentIndex = array.length;\n  var temporaryValue, randomIndex;\n\n  while (0 !== currentIndex) {\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n}; // Shuffle the monsters array\n\n\nshuffle(monsters);\napp.innerHTML = '<div class=\"row\">' + monsters.map(function (monster, index) {\n  var html = '<div class=\"grid\">' + \"<button data-monster-id=\\\"\".concat(index, \"\\\">\") + \"<img alt=\\\"\".concat(monster, \"\\\" src=\\\"images/door.svg\\\">\") + '</button>' + '</div>';\n  console.log(html);\n}).join('') + '</div>';\n\n//# sourceURL=webpack://startapp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;