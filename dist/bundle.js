/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resort__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__people__ = __webpack_require__(4);







const root = document.querySelector('#root');
root.appendChild(__WEBPACK_IMPORTED_MODULE_1__wrapper__["a" /* default */]);

// Task 1

Object(__WEBPACK_IMPORTED_MODULE_2__resort__["a" /* default */])();


// Task 2

Object(__WEBPACK_IMPORTED_MODULE_3__people__["a" /* default */])();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);


let wrapper = document.createElement('div');
wrapper.id = "wrapper";

let firsth2 = document.createElement('h2');
firsth2.innerText = "Задача 1";
wrapper.appendChild(firsth2);
let resortNumber = document.createElement('p');
resortNumber.id = "resortNumber";
wrapper.appendChild(resortNumber);
let resortName = document.createElement('p');
resortName.id = "resortName";
wrapper.appendChild(resortName);
let hr = document.createElement('hr');
wrapper.appendChild(hr);

let secondh2 = document.createElement('h2');
secondh2.innerText = "Задача 2";
wrapper.appendChild(secondh2);
let taba = document.createElement('p');
taba.id = "taba";
taba.innerText = "Taba - 6 мест";
wrapper.appendChild(taba);
let sharm = document.createElement('p');
sharm.id = "sharm";
sharm.innerText = "Sharm - 25 мест";
wrapper.appendChild(sharm);
let hurgada = document.createElement('p');
hurgada.id = "hurgada";
hurgada.innerText = "Hurgada - 15 мест";
wrapper.appendChild(hurgada);
wrapper.appendChild(hr);

/* harmony default export */ __webpack_exports__["a"] = (wrapper);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const chooseResort = function () {
	const resort = prompt('Введите число от 1 до 3', '1 - taba, 2 - sharm, 3 - hurgada');

	const resortNumber = document.getElementById('resortNumber');
	const resortName = document.getElementById('resortName');

	if (resort == 1) {
		resortNumber.innerHTML = 'Введено число - 1';
		resortName.innerHTML = 'Вы выбрали курорт - taba' ;
	}
	else if (resort == 2) {
		resortNumber.innerHTML = 'Введено число - 2';
		resortName.innerHTML = 'Вы выбрали курорт - sharm' ;
	}
	else if (resort == 3) {
		resortNumber.innerHTML = 'Введено число - 3';
		resortName.innerHTML = 'Вы выбрали курорт - hurgada' ;
	}
	else  {
		resortNumber.innerHTML = 'Такого числа нету';
		resortName.innerHTML = 'Такого курорта нету' ;
	}	
}




/* harmony default export */ __webpack_exports__["a"] = (chooseResort);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const choosePeopleResort = function () {

	const resortPeople = prompt('Введите число учасников группы', '');

	const taba = document.getElementById('taba');
	const sharm = document.getElementById('sharm');
	const hurgada = document.getElementById('hurgada');

	if ((resortPeople == null)||(resortPeople == '')) {
		alert('Вы передумали!');
	}
	else {
		if ((resortPeople >= 0) && (resortPeople%1==0)) {
			if (resortPeople<=25) {
				let sharmPeople = confirm('Согласны ли Вы быть в группе Sharm?');
				if (sharmPeople == true) {
					sharm.innerHTML = `Sharm - ${25-resortPeople} мест`;
				}
				else if (resortPeople<=15) {
					let hurgadaPeople = confirm('Согласны ли Вы быть в группе Hurgada?');
					if (hurgadaPeople == true) {
						hurgada.innerHTML = `Hurgada - ${15-resortPeople} мест`;
					}
					else if (resortPeople<=6) {
						let tabaPeople = confirm('Согласны ли Вы быть в группе Taba?');
						if (tabaPeople == true) {
							taba.innerHTML = `Taba - ${6-resortPeople} мест`;
						}
						else {
							alert('Вы передумали!');
						}
					}
					else {
						alert('Мест нету!');
					}
				}
				else {
					alert('Мест нету!');
				}
			}
			else {
				alert('Мест нету!');
			}
		}
		else {
			alert('Вы ввели ошибочное число!');
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (choosePeopleResort);

/***/ })
/******/ ]);