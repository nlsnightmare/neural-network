(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NlsNet"] = factory();
	else
		root["NlsNet"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n    NeuralNetwork: __webpack_require__(/*! ./neural-network.js */ \"./src/neural-network.js\").default,\n    Matrix: __webpack_require__(/*! ./matrix.js */ \"./src/matrix.js\").default\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ObHNOZXQvc3JjL2VudHJ5LmpzP2EyM2IiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgTmV1cmFsTmV0d29yazogcmVxdWlyZSgnLi9uZXVyYWwtbmV0d29yay5qcycpLmRlZmF1bHQsXG4gICAgTWF0cml4OiByZXF1aXJlKCcuL21hdHJpeC5qcycpLmRlZmF1bHRcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/entry.js\n");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix; });\nclass Matrix {\n\t\t\tconstructor(n, m) {\n\t\t\t\t\t\tthis.n = n;\n\t\t\t\t\t\tthis.m = m;\n\t\t\t\t\t\tthis.data = new Array(n * m);\n\t\t\t\t\t\tthis.size = n * m;\n\n\t\t\t\t\t\t// By default, return an identity matrix\n\t\t\t\t\t\tfor (let x = 0; x < n; x++) {\n\t\t\t\t\t\t\t\t\tfor (let y = 0; y < m; y++) {\n\t\t\t\t\t\t\t\t\t\t\t\tif (x == y) this.setItem(x, y, 1);else this.setItem(x, y, 0);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\ttoArray() {\n\t\t\t\t\t\treturn this.data;\n\t\t\t}\n\n\t\t\ttranspose() {\n\t\t\t\t\t\tlet m = new Matrix(this.m, this.n);\n\n\t\t\t\t\t\tfor (let x = 0; x < this.n; x++) {\n\t\t\t\t\t\t\t\t\tfor (let y = 0; y < this.m; y++) {\n\t\t\t\t\t\t\t\t\t\t\t\tm.setItem(y, x, this.getItem(x, y));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn m;\n\t\t\t}\n\n\t\t\tstatic zero(n, m) {\n\t\t\t\t\t\tlet mat = new Matrix(n, m);\n\t\t\t\t\t\tfor (let i = 0; i < mat.data.length; i++) {\n\t\t\t\t\t\t\t\t\tmat.data[i] = 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn mat;\n\t\t\t}\n\t\t\tloadData(data) {\n\t\t\t\t\t\tif (data.length != this.data.length) {\n\t\t\t\t\t\t\t\t\tthrow new Error(\"Matrix data should be exactly \" + this.n * this.m);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfor (let i = 0; i < data.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.data[i] = data[i];\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tdisplay() {\n\t\t\t\t\t\tfor (let x = 0; x < this.n; x++) {\n\t\t\t\t\t\t\t\t\tfor (let y = 0; y < this.m; y++) {\n\t\t\t\t\t\t\t\t\t\t\t\tconsole.log(`(${x},${y}) =>`, this.getItem(x, y));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tsetItem(x, y, val) {\n\t\t\t\t\t\tif (this.m == 1) {\n\t\t\t\t\t\t\t\t\tlet idx = y + x;\n\t\t\t\t\t\t\t\t\tthis.data[idx] = val;\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.data[x + y * this.n] = val;\n\t\t\t}\n\n\t\t\tgetItem(x, y) {\n\t\t\t\t\t\treturn this.data[x + y * this.n];\n\t\t\t}\n\n\t\t\trandomize() {\n\t\t\t\t\t\tfor (let i = 0; i < this.data.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.data[i] = Math.random() * 2 - 1;\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tcopy() {\n\t\t\t\t\t\tlet n = new Matrix(this.n, this.m);\n\t\t\t\t\t\tfor (let i = 0; i < this.data.length; i++) {\n\t\t\t\t\t\t\t\t\tn.data[i] = this.data[i];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn n;\n\t\t\t}\n\n\t\t\tadd(num) {\n\t\t\t\t\t\tfor (let i = 0; i < this.data.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.data[i] += num;\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tmul(other) {\n\t\t\t\t\t\tif (this.m != other.n) {\n\t\t\t\t\t\t\t\t\tthrow new Error(`Trying to multiply a (${this.n},${this.m}) matrix with a (${other.n},${other.m})`);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlet res = Matrix.zero(other.m, this.n);\n\n\t\t\t\t\t\tfor (let i = 0; i < this.n; i++) {\n\t\t\t\t\t\t\t\t\tfor (let j = 0; j < other.m; j++) {\n\t\t\t\t\t\t\t\t\t\t\t\tlet sum = 0;\n\t\t\t\t\t\t\t\t\t\t\t\tfor (let k = 0; k < this.m; k++) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsum += this.getItem(i, k) * other.getItem(k, j);\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\tres.setItem(i, j, sum);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn res;\n\t\t\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF0cml4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmxzTmV0L3NyYy9tYXRyaXguanM/ZDk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xuICAgIGNvbnN0cnVjdG9yKG4sbSkge1xuXHR0aGlzLm4gPSBuO1xuXHR0aGlzLm0gPSBtO1xuXHR0aGlzLmRhdGEgPSBuZXcgQXJyYXkobiAqIG0pO1xuXHR0aGlzLnNpemUgPSBuICogbTtcblxuXHQvLyBCeSBkZWZhdWx0LCByZXR1cm4gYW4gaWRlbnRpdHkgbWF0cml4XG5cdGZvciggbGV0IHggPSAwOyB4IDwgbjsgeCsrKXtcblx0ICAgIGZvciggbGV0IHkgPSAwOyB5IDwgbTsgeSsrKXtcblx0XHRpZiAoeCA9PSB5KVxuXHRcdCAgICB0aGlzLnNldEl0ZW0oeCx5LDEpO1xuXHRcdGVsc2Vcblx0XHQgICAgdGhpcy5zZXRJdGVtKHgseSwwKTtcblx0ICAgIH1cblx0fVxuICAgIH1cblxuICAgIHRvQXJyYXkoKXtcblx0cmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoKXtcblx0bGV0IG0gPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcblxuXHRmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5uOyB4Kyspe1xuXHQgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMubTsgeSsrKXtcblx0XHRtLnNldEl0ZW0oeSx4LHRoaXMuZ2V0SXRlbSh4LHkpKTtcblx0ICAgIH1cblx0fVxuXHRyZXR1cm4gbTtcbiAgICB9XG5cbiAgICBzdGF0aWMgemVybyhuLG0pe1xuXHRsZXQgbWF0ID0gbmV3IE1hdHJpeChuLG0pO1xuXHRmb3IoIGxldCBpID0gMDsgaSA8IG1hdC5kYXRhLmxlbmd0aDsgaSsrKXtcblx0ICAgIG1hdC5kYXRhW2ldID0gMDtcblx0fVxuXHRyZXR1cm4gbWF0O1xuICAgIH1cbiAgICBsb2FkRGF0YShkYXRhKXtcblx0aWYgKGRhdGEubGVuZ3RoICE9IHRoaXMuZGF0YS5sZW5ndGgpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcihcIk1hdHJpeCBkYXRhIHNob3VsZCBiZSBleGFjdGx5IFwiICsgdGhpcy5uICogdGhpcy5tKTtcblx0fVxuXHRmb3IoIGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuXHQgICAgdGhpcy5kYXRhW2ldID0gZGF0YVtpXTtcblx0fVxuICAgIH1cblxuICAgIGRpc3BsYXkoKXtcblx0Zm9yKCBsZXQgeCA9IDA7IHggPCB0aGlzLm47IHgrKyl7XG5cdCAgICBmb3IoIGxldCB5ID0gMDsgeSA8IHRoaXMubTsgeSsrKXtcblx0XHRjb25zb2xlLmxvZyhgKCR7eH0sJHt5fSkgPT5gLHRoaXMuZ2V0SXRlbSh4LHkpKTtcblx0ICAgIH1cblx0fVxuICAgIH1cblxuICAgIHNldEl0ZW0oeCx5LHZhbCl7XG5cdGlmICh0aGlzLm0gPT0gMSkge1xuXHQgICAgbGV0IGlkeCA9IHkgKyB4O1xuXHQgICAgdGhpcy5kYXRhW2lkeF0gPSB2YWw7XG5cdCAgICByZXR1cm47XG5cdH1cblx0dGhpcy5kYXRhW3ggKyB5ICogdGhpcy5uXSA9IHZhbDtcbiAgICB9XG5cbiAgICBnZXRJdGVtKHgseSl7XG5cdHJldHVybiB0aGlzLmRhdGFbeCArIHkgKiB0aGlzLm5dO1xuICAgIH1cblxuICAgIHJhbmRvbWl6ZSgpe1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcblx0ICAgIHRoaXMuZGF0YVtpXSA9ICggTWF0aC5yYW5kb20oKSAqIDIgKSAtIDE7XG5cdH1cbiAgICB9XG5cbiAgICBjb3B5KCl7XG5cdGxldCBuID0gbmV3IE1hdHJpeCh0aGlzLm4sIHRoaXMubSk7XG5cdGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcblx0ICAgIG4uZGF0YVtpXSA9IHRoaXMuZGF0YVtpXTtcblx0fVxuXG5cdHJldHVybiBuO1xuICAgIH1cblxuICAgIGFkZChudW0pe1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcblx0ICAgIHRoaXMuZGF0YVtpXSArPSBudW07XG5cdH1cbiAgICB9XG5cbiAgICBtdWwob3RoZXIpe1xuXHRpZiAodGhpcy5tICE9IG90aGVyLm4pIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcihgVHJ5aW5nIHRvIG11bHRpcGx5IGEgKCR7dGhpcy5ufSwke3RoaXMubX0pIG1hdHJpeCB3aXRoIGEgKCR7b3RoZXIubn0sJHtvdGhlci5tfSlgKTtcblx0fVxuXHRsZXQgcmVzID0gTWF0cml4Lnplcm8ob3RoZXIubSwgdGhpcy5uKTtcblxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5uOyBpKyspe1xuXHQgICAgZm9yKGxldCBqID0gMDsgaiA8IG90aGVyLm07IGorKyl7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0Zm9yKGxldCBrID0gMDsgayA8IHRoaXMubTsgaysrKXtcblx0XHQgICAgc3VtICs9IHRoaXMuZ2V0SXRlbShpLGspICogb3RoZXIuZ2V0SXRlbShrLGopO1xuXHRcdH1cblx0XHRyZXMuc2V0SXRlbShpLGosc3VtKTtcblx0ICAgIH1cblx0fVxuXG5cblx0cmV0dXJuIHJlcztcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTdHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/matrix.js\n");

/***/ }),

/***/ "./src/neural-network.js":
/*!*******************************!*\
  !*** ./src/neural-network.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NeuralNetwork; });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/matrix.js\");\n\n\nfunction relu(item) {\n\t\t\treturn Math.max(item / 10, item);\n}\n\nfunction softmax(arr) {\n\t\t\treturn arr.map(function (value, index) {\n\t\t\t\t\t\treturn Math.exp(value) / arr.map(function (y) {\n\t\t\t\t\t\t\t\t\treturn Math.exp(y);\n\t\t\t\t\t\t}).reduce(function (a, b) {\n\t\t\t\t\t\t\t\t\treturn a + b;\n\t\t\t\t\t\t});\n\t\t\t});\n}\n\nclass NeuralNetwork {\n\t\t\tconstructor(...args) {\n\t\t\t\t\t\tlet inputs, outputs, hidden;\n\t\t\t\t\t\tlet normalizeInput, normalizeOutput;\n\t\t\t\t\t\tif (typeof args[0] == 'object') {\n\t\t\t\t\t\t\t\t\tinputs = args[0].inputs;\n\t\t\t\t\t\t\t\t\thidden = args[0].hidden.slice(0);\n\t\t\t\t\t\t\t\t\toutputs = args[0].outputs;\n\t\t\t\t\t\t\t\t\tnormalizeInput = args[0].normalizeInput;\n\t\t\t\t\t\t\t\t\tnormalizeOutput = args[0].normalizeOutput;\n\t\t\t\t\t\t\t\t\thidden.push(outputs);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tinputs = args[0];\n\t\t\t\t\t\t\t\t\thidden = args[1];\n\t\t\t\t\t\t\t\t\toutputs = args[2];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.score = 0;\n\t\t\t\t\t\tthis.inputs = inputs;\n\t\t\t\t\t\tthis.outputs = outputs;\n\n\t\t\t\t\t\tthis.normalizeInput = normalizeInput !== undefined ? normalizeInput : true;\n\t\t\t\t\t\tthis.normalizeOutput = normalizeOutput !== undefined ? normalizeOutput : true;\n\n\t\t\t\t\t\tthis.layers = [];\n\n\t\t\t\t\t\tthis.layers.push(new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputs + 1, hidden[0]));\n\t\t\t\t\t\tfor (let i = 1; i < hidden.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.layers.push(new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.layers[i - 1].m + 1, hidden[i - 1]));\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.layers.forEach(l => l.randomize());\n\t\t\t}\n\n\t\t\tcompute(input) {\n\t\t\t\t\t\tlet inputs = input.slice(0);\n\n\t\t\t\t\t\tif (this.normalizeInput) {\n\t\t\t\t\t\t\t\t\tlet max = Math.max(...inputs);\n\t\t\t\t\t\t\t\t\tif (max == 0) {\n\t\t\t\t\t\t\t\t\t\t\t\tmax = 1;\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\tinputs = inputs.map(v => v / max);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tinputs.push(1); // Add the bias\n\n\n\t\t\t\t\t\tlet input_matrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, inputs.length);\n\t\t\t\t\t\tinput_matrix.data = inputs;\n\n\t\t\t\t\t\tlet res;\n\t\t\t\t\t\tlet i;\n\t\t\t\t\t\tfor (i = 0; i < this.layers.length - 1; i++) {\n\t\t\t\t\t\t\t\t\tlet layer = this.layers[i];\n\n\t\t\t\t\t\t\t\t\tres = input_matrix.mul(layer);\n\t\t\t\t\t\t\t\t\tres = res.transpose();\n\t\t\t\t\t\t\t\t\tres.data.push(1);\n\t\t\t\t\t\t\t\t\tres.m++;\n\t\t\t\t\t\t\t\t\tres.data = res.data.map(relu);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tlet percentages;\n\t\t\t\t\t\tlet res2 = res.mul(this.layers[i]);\n\t\t\t\t\t\tif (this.normalizeOutput) {\n\t\t\t\t\t\t\t\t\tpercentages = softmax(res2.data);\n\t\t\t\t\t\t\t\t\ti = percentages.indexOf(Math.max(...percentages));\n\n\t\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\t\t\t\tpercentages,\n\t\t\t\t\t\t\t\t\t\t\t\tmax: i\n\t\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t} else return res2.data.slice();\n\t\t\t}\n\n\t\t\tgetGenes() {\n\t\t\t\t\t\tlet genes = [];\n\t\t\t\t\t\tfor (let l of this.layers) {\n\t\t\t\t\t\t\t\t\tgenes = genes.concat(l.data);\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn genes;\n\t\t\t}\n\n\t\t\tsetGenes(genes) {\n\t\t\t\t\t\tfor (let l of this.layers) {\n\t\t\t\t\t\t\t\t\tl.data = genes.splice(0, l.size);\n\t\t\t\t\t\t}\n\t\t\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmV1cmFsLW5ldHdvcmsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ObHNOZXQvc3JjL25ldXJhbC1uZXR3b3JrLmpzP2RhZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbmZ1bmN0aW9uIHJlbHUoaXRlbSkge1xuICAgIHJldHVybiBNYXRoLm1heChpdGVtLzEwLGl0ZW0pO1xufVxuXG5cbmZ1bmN0aW9uIHNvZnRtYXgoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24odmFsdWUsaW5kZXgpIHsgXG5cdHJldHVybiBNYXRoLmV4cCh2YWx1ZSkgL1xuXHQgICAgYXJyLm1hcCggZnVuY3Rpb24oeSl7IHJldHVybiBNYXRoLmV4cCh5KTsgfSApLnJlZHVjZSggZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGErYjsgfSk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1cmFsTmV0d29yayB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncyl7XG5cdGxldCBpbnB1dHMsIG91dHB1dHMsIGhpZGRlbjtcblx0bGV0IG5vcm1hbGl6ZUlucHV0LCBub3JtYWxpemVPdXRwdXQ7XG5cdGlmICh0eXBlb2YgYXJnc1swXSA9PSAnb2JqZWN0Jykge1xuXHQgICAgaW5wdXRzID0gYXJnc1swXS5pbnB1dHM7XG5cdCAgICBoaWRkZW4gPSBhcmdzWzBdLmhpZGRlbi5zbGljZSgwKTtcblx0ICAgIG91dHB1dHMgPSBhcmdzWzBdLm91dHB1dHM7XG5cdCAgICBub3JtYWxpemVJbnB1dCA9IGFyZ3NbMF0ubm9ybWFsaXplSW5wdXQ7XG5cdCAgICBub3JtYWxpemVPdXRwdXQgPSBhcmdzWzBdLm5vcm1hbGl6ZU91dHB1dDtcblx0ICAgIGhpZGRlbi5wdXNoKG91dHB1dHMpO1xuXHR9XG5cdGVsc2Uge1xuXHQgICAgaW5wdXRzID0gYXJnc1swXTtcblx0ICAgIGhpZGRlbiA9IGFyZ3NbMV07XG5cdCAgICBvdXRwdXRzID0gYXJnc1syXTtcblx0fVxuXHR0aGlzLnNjb3JlID0gMDtcblx0dGhpcy5pbnB1dHMgPSBpbnB1dHM7XG5cdHRoaXMub3V0cHV0cyA9IG91dHB1dHM7XG5cblx0dGhpcy5ub3JtYWxpemVJbnB1dCA9IG5vcm1hbGl6ZUlucHV0ICE9PSB1bmRlZmluZWQ/IG5vcm1hbGl6ZUlucHV0OnRydWU7XG5cdHRoaXMubm9ybWFsaXplT3V0cHV0ID0gbm9ybWFsaXplT3V0cHV0ICE9PSB1bmRlZmluZWQ/IG5vcm1hbGl6ZU91dHB1dDp0cnVlO1xuXG5cdHRoaXMubGF5ZXJzID0gW107XG5cblxuXHR0aGlzLmxheWVycy5wdXNoKG5ldyBNYXRyaXgoaW5wdXRzICsgMSwgaGlkZGVuWzBdKSk7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgaGlkZGVuLmxlbmd0aDsgaSsrKSB7XG5cdCAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBNYXRyaXgodGhpcy5sYXllcnNbaSAtIDFdLm0gKyAxLCBoaWRkZW5baSAtIDFdKSk7XG5cdH1cblx0dGhpcy5sYXllcnMuZm9yRWFjaCgobCkgPT4gbC5yYW5kb21pemUoKSk7XG4gICAgfVxuXG4gICAgY29tcHV0ZShpbnB1dCl7XG5cdGxldCBpbnB1dHMgPSBpbnB1dC5zbGljZSgwKTtcblxuXHRpZiAodGhpcy5ub3JtYWxpemVJbnB1dCkge1xuXHQgICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLmlucHV0cyk7XG5cdCAgICBpZiAobWF4ID09IDApIHtcblx0XHRtYXggPSAxO1xuXHQgICAgfVxuXG5cdCAgICBpbnB1dHMgPSBpbnB1dHMubWFwKCh2KSA9PiB2IC8gbWF4KTtcblx0fVxuXHRpbnB1dHMucHVzaCgxKTsgLy8gQWRkIHRoZSBiaWFzXG5cblxuXHRsZXQgaW5wdXRfbWF0cml4ID0gbmV3IE1hdHJpeCgxLGlucHV0cy5sZW5ndGgpO1xuXHRpbnB1dF9tYXRyaXguZGF0YSA9IGlucHV0cztcblxuXG5cdGxldCByZXM7XG5cdGxldCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdCAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVyc1tpXTtcblx0ICAgIFxuXHQgICAgcmVzID0gaW5wdXRfbWF0cml4Lm11bChsYXllcik7XG5cdCAgICByZXMgPSByZXMudHJhbnNwb3NlKCk7XG5cdCAgICByZXMuZGF0YS5wdXNoKDEpO1xuXHQgICAgcmVzLm0rKztcblx0ICAgIHJlcy5kYXRhID0gcmVzLmRhdGEubWFwKHJlbHUpO1xuXHR9XG5cblx0bGV0IHBlcmNlbnRhZ2VzO1xuXHRsZXQgcmVzMiA9IHJlcy5tdWwodGhpcy5sYXllcnNbaV0pO1xuXHRpZiAodGhpcy5ub3JtYWxpemVPdXRwdXQpIFxuXHR7XG5cdCAgICBwZXJjZW50YWdlcyA9IHNvZnRtYXgocmVzMi5kYXRhKTtcblx0ICAgIGkgPSBwZXJjZW50YWdlcy5pbmRleE9mKE1hdGgubWF4KC4uLnBlcmNlbnRhZ2VzKSk7XG5cblx0ICAgIHJldHVybiB7XG5cdFx0cGVyY2VudGFnZXMsXG5cdFx0bWF4OiBpXG5cdCAgICB9O1xuXHR9XG5cdGVsc2UgXG5cdCAgICByZXR1cm4gcmVzMi5kYXRhLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgZ2V0R2VuZXMoKXtcblx0bGV0IGdlbmVzID0gW107XG5cdGZvciAobGV0IGwgb2YgdGhpcy5sYXllcnMpIHtcblx0ICAgIGdlbmVzID0gZ2VuZXMuY29uY2F0KGwuZGF0YSk7XG5cdH1cblx0cmV0dXJuIGdlbmVzO1xuICAgIH1cblxuICAgIHNldEdlbmVzKGdlbmVzKXtcblx0Zm9yIChsZXQgbCBvZiB0aGlzLmxheWVycykge1xuXHQgICAgbC5kYXRhID0gZ2VuZXMuc3BsaWNlKDAsbC5zaXplKTtcblx0fVxuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1RkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/neural-network.js\n");

/***/ })

/******/ });
});