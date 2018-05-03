(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NeuralNetwork"] = factory();
	else
		root["NeuralNetwork"] = factory();
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

eval("module.exports = __webpack_require__(/*! ./neural-network.js */ \"./src/neural-network.js\").default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXVyYWxOZXR3b3JrL3NyYy9lbnRyeS5qcz9hMjNiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9uZXVyYWwtbmV0d29yay5qcycpLmRlZmF1bHQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/entry.js\n");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix; });\nclass Matrix {\n\t\t\tconstructor(n, m) {\n\t\t\t\t\t\tthis.n = n;\n\t\t\t\t\t\tthis.m = m;\n\t\t\t\t\t\tthis.data = new Array(n * m);\n\t\t\t\t\t\tthis.size = n * m;\n\n\t\t\t\t\t\t// By default, return an identity matrix\n\t\t\t\t\t\tfor (let x = 0; x < n; x++) {\n\t\t\t\t\t\t\t\t\tfor (let y = 0; y < m; y++) {\n\t\t\t\t\t\t\t\t\t\t\t\tif (x == y) this.setItem(x, y, 1);else this.setItem(x, y, 0);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\ttoArray() {\n\t\t\t\t\t\treturn this.data;\n\t\t\t}\n\n\t\t\ttranspose() {\n\t\t\t\t\t\tlet m = new Matrix(this.m, this.n);\n\n\t\t\t\t\t\tfor (let x = 0; x < this.n; x++) {\n\t\t\t\t\t\t\t\t\tfor (let y = 0; y < this.m; y++) {\n\t\t\t\t\t\t\t\t\t\t\t\tm.setItem(y, x, this.getItem(x, y));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn m;\n\t\t\t}\n\n\t\t\tstatic zero(n, m) {\n\t\t\t\t\t\tlet mat = new Matrix(n, m);\n\t\t\t\t\t\tfor (let i = 0; i < mat.data.length; i++) {\n\t\t\t\t\t\t\t\t\tmat.data[i] = 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn mat;\n\t\t\t}\n\t\t\tloadData(data) {\n\t\t\t\t\t\tif (data.length != this.data.length) {\n\t\t\t\t\t\t\t\t\tthrow new Error(\"Matrix data should be exactly \" + this.n * this.m);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfor (let i = 0; i < data.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.data[i] = data[i];\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tdisplay() {\n\t\t\t\t\t\tfor (let x = 0; x < this.n; x++) {\n\t\t\t\t\t\t\t\t\tfor (let y = 0; y < this.m; y++) {\n\t\t\t\t\t\t\t\t\t\t\t\tconsole.log(`(${x},${y}) =>`, this.getItem(x, y));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tsetItem(x, y, val) {\n\t\t\t\t\t\tif (this.m == 1) {\n\t\t\t\t\t\t\t\t\tlet idx = y + x;\n\t\t\t\t\t\t\t\t\tthis.data[idx] = val;\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthis.data[x + y * this.n] = val;\n\t\t\t}\n\n\t\t\tgetItem(x, y) {\n\t\t\t\t\t\treturn this.data[x + y * this.n];\n\t\t\t}\n\n\t\t\trandomize() {\n\t\t\t\t\t\tfor (let i = 0; i < this.data.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.data[i] = Math.random() * 2 - 1;\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tcopy() {\n\t\t\t\t\t\tlet n = new Matrix(this.n, this.m);\n\t\t\t\t\t\tfor (let i = 0; i < this.data.length; i++) {\n\t\t\t\t\t\t\t\t\tn.data[i] = this.data[i];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn n;\n\t\t\t}\n\n\t\t\tadd(num) {\n\t\t\t\t\t\tfor (let i = 0; i < this.data.length; i++) {\n\t\t\t\t\t\t\t\t\tthis.data[i] += num;\n\t\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tmul(other) {\n\t\t\t\t\t\tif (this.m != other.n) {\n\t\t\t\t\t\t\t\t\tthrow new Error(`Trying to multiply a (${this.n},${this.m}) matrix with a (${other.n},${other.m})`);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tlet res = Matrix.zero(other.m, this.n);\n\n\t\t\t\t\t\tfor (let i = 0; i < this.n; i++) {\n\t\t\t\t\t\t\t\t\tfor (let j = 0; j < other.m; j++) {\n\t\t\t\t\t\t\t\t\t\t\t\tlet sum = 0;\n\t\t\t\t\t\t\t\t\t\t\t\tfor (let k = 0; k < this.m; k++) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsum += this.getItem(i, k) * other.getItem(k, j);\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\tres.setItem(i, j, sum);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn res;\n\t\t\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF0cml4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV1cmFsTmV0d29yay9zcmMvbWF0cml4LmpzP2Q5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcbiAgICBjb25zdHJ1Y3RvcihuLG0pIHtcblx0dGhpcy5uID0gbjtcblx0dGhpcy5tID0gbTtcblx0dGhpcy5kYXRhID0gbmV3IEFycmF5KG4gKiBtKTtcblx0dGhpcy5zaXplID0gbiAqIG07XG5cblx0Ly8gQnkgZGVmYXVsdCwgcmV0dXJuIGFuIGlkZW50aXR5IG1hdHJpeFxuXHRmb3IoIGxldCB4ID0gMDsgeCA8IG47IHgrKyl7XG5cdCAgICBmb3IoIGxldCB5ID0gMDsgeSA8IG07IHkrKyl7XG5cdFx0aWYgKHggPT0geSlcblx0XHQgICAgdGhpcy5zZXRJdGVtKHgseSwxKTtcblx0XHRlbHNlXG5cdFx0ICAgIHRoaXMuc2V0SXRlbSh4LHksMCk7XG5cdCAgICB9XG5cdH1cbiAgICB9XG5cbiAgICB0b0FycmF5KCl7XG5cdHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKCl7XG5cdGxldCBtID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XG5cblx0Zm9yKGxldCB4ID0gMDsgeCA8IHRoaXMubjsgeCsrKXtcblx0ICAgIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLm07IHkrKyl7XG5cdFx0bS5zZXRJdGVtKHkseCx0aGlzLmdldEl0ZW0oeCx5KSk7XG5cdCAgICB9XG5cdH1cblx0cmV0dXJuIG07XG4gICAgfVxuXG4gICAgc3RhdGljIHplcm8obixtKXtcblx0bGV0IG1hdCA9IG5ldyBNYXRyaXgobixtKTtcblx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBtYXQuZGF0YS5sZW5ndGg7IGkrKyl7XG5cdCAgICBtYXQuZGF0YVtpXSA9IDA7XG5cdH1cblx0cmV0dXJuIG1hdDtcbiAgICB9XG4gICAgbG9hZERhdGEoZGF0YSl7XG5cdGlmIChkYXRhLmxlbmd0aCAhPSB0aGlzLmRhdGEubGVuZ3RoKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYXRyaXggZGF0YSBzaG91bGQgYmUgZXhhY3RseSBcIiArIHRoaXMubiAqIHRoaXMubSk7XG5cdH1cblx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcblx0ICAgIHRoaXMuZGF0YVtpXSA9IGRhdGFbaV07XG5cdH1cbiAgICB9XG5cbiAgICBkaXNwbGF5KCl7XG5cdGZvciggbGV0IHggPSAwOyB4IDwgdGhpcy5uOyB4Kyspe1xuXHQgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCB0aGlzLm07IHkrKyl7XG5cdFx0Y29uc29sZS5sb2coYCgke3h9LCR7eX0pID0+YCx0aGlzLmdldEl0ZW0oeCx5KSk7XG5cdCAgICB9XG5cdH1cbiAgICB9XG5cbiAgICBzZXRJdGVtKHgseSx2YWwpe1xuXHRpZiAodGhpcy5tID09IDEpIHtcblx0ICAgIGxldCBpZHggPSB5ICsgeDtcblx0ICAgIHRoaXMuZGF0YVtpZHhdID0gdmFsO1xuXHQgICAgcmV0dXJuO1xuXHR9XG5cdHRoaXMuZGF0YVt4ICsgeSAqIHRoaXMubl0gPSB2YWw7XG4gICAgfVxuXG4gICAgZ2V0SXRlbSh4LHkpe1xuXHRyZXR1cm4gdGhpcy5kYXRhW3ggKyB5ICogdGhpcy5uXTtcbiAgICB9XG5cbiAgICByYW5kb21pemUoKXtcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG5cdCAgICB0aGlzLmRhdGFbaV0gPSAoIE1hdGgucmFuZG9tKCkgKiAyICkgLSAxO1xuXHR9XG4gICAgfVxuXG4gICAgY29weSgpe1xuXHRsZXQgbiA9IG5ldyBNYXRyaXgodGhpcy5uLCB0aGlzLm0pO1xuXHRmb3IoIGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG5cdCAgICBuLmRhdGFbaV0gPSB0aGlzLmRhdGFbaV07XG5cdH1cblxuXHRyZXR1cm4gbjtcbiAgICB9XG5cbiAgICBhZGQobnVtKXtcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG5cdCAgICB0aGlzLmRhdGFbaV0gKz0gbnVtO1xuXHR9XG4gICAgfVxuXG4gICAgbXVsKG90aGVyKXtcblx0aWYgKHRoaXMubSAhPSBvdGhlci5uKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoYFRyeWluZyB0byBtdWx0aXBseSBhICgke3RoaXMubn0sJHt0aGlzLm19KSBtYXRyaXggd2l0aCBhICgke290aGVyLm59LCR7b3RoZXIubX0pYCk7XG5cdH1cblx0bGV0IHJlcyA9IE1hdHJpeC56ZXJvKG90aGVyLm0sIHRoaXMubik7XG5cblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubjsgaSsrKXtcblx0ICAgIGZvcihsZXQgaiA9IDA7IGogPCBvdGhlci5tOyBqKyspe1xuXHRcdGxldCBzdW0gPSAwO1xuXHRcdGZvcihsZXQgayA9IDA7IGsgPCB0aGlzLm07IGsrKyl7XG5cdFx0ICAgIHN1bSArPSB0aGlzLmdldEl0ZW0oaSxrKSAqIG90aGVyLmdldEl0ZW0oayxqKTtcblx0XHR9XG5cdFx0cmVzLnNldEl0ZW0oaSxqLHN1bSk7XG5cdCAgICB9XG5cdH1cblxuXG5cdHJldHVybiByZXM7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE3R0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/matrix.js\n");

/***/ }),

/***/ "./src/neural-network.js":
/*!*******************************!*\
  !*** ./src/neural-network.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NeuralNetwork; });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/matrix.js\");\n\n\nfunction relu(item) {\n\treturn Math.max(item / 10, item);\n}\n\nfunction softmax(arr) {\n\treturn arr.map(function (value, index) {\n\t\treturn Math.exp(value) / arr.map(function (y) {\n\t\t\treturn Math.exp(y);\n\t\t}).reduce(function (a, b) {\n\t\t\treturn a + b;\n\t\t});\n\t});\n}\n\nclass NeuralNetwork {\n\tconstructor(...args) {\n\t\tlet inputs, outputs, hidden;\n\t\tlet normalizeInput, normalizeOutput;\n\t\tif (typeof args[0] == 'object') {\n\t\t\tinputs = args[0].inputs;\n\t\t\thidden = args[0].hidden.slice(0);\n\t\t\toutputs = args[0].outputs;\n\t\t\tnormalizeInput = args[0].normalizeInput;\n\t\t\tnormalizeOutput = args[0].normalizeOutput;\n\t\t\thidden.push(outputs);\n\n\t\t\tthis.options = args[0];\n\t\t} else {\n\t\t\tinputs = args[0];\n\t\t\thidden = args[1];\n\t\t\toutputs = args[2];\n\n\t\t\tthis.options = {\n\t\t\t\tinputs: args[0],\n\t\t\t\thidden: [args[1]],\n\t\t\t\toutputs: args[2]\n\t\t\t};\n\t\t}\n\t\tthis.score = 0;\n\t\tthis.inputs = inputs;\n\t\tthis.outputs = outputs;\n\n\t\tthis.normalizeInput = normalizeInput !== undefined ? normalizeInput : true;\n\t\tthis.normalizeOutput = normalizeOutput !== undefined ? normalizeOutput : true;\n\n\t\tthis.layers = [];\n\n\t\tthis.layers.push(new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputs + 1, hidden[0]));\n\t\tfor (let i = 0; i < hidden.length; i++) {\n\t\t\tthis.layers.push(new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.layers[i].m + 1, hidden[i]));\n\t\t}\n\t\tthis.layers.forEach(l => l.randomize());\n\t}\n\n\tcompute(input) {\n\t\tlet inputs = input.slice(0);\n\n\t\tif (this.normalizeInput) {\n\t\t\tlet max = Math.max(...inputs);\n\t\t\tif (max == 0) {\n\t\t\t\tmax = 1;\n\t\t\t}\n\n\t\t\tinputs = inputs.map(v => v / max);\n\t\t}\n\t\tinputs.push(1); // Add the bias\n\n\n\t\tlet input_matrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, inputs.length);\n\t\tinput_matrix.data = inputs;\n\n\t\tlet res = input_matrix;\n\t\tlet i;\n\t\tfor (i = 0; i < this.layers.length - 1; i++) {\n\t\t\tlet layer = this.layers[i];\n\n\t\t\tres = res.mul(layer);\n\t\t\tres = res.transpose();\n\t\t\tres.data.push(1);\n\t\t\tres.m++;\n\t\t\t// res.data = res.data.map(relu);\n\t\t\tres.data = res.data.map(Math.tanh);\n\t\t}\n\n\t\tlet percentages;\n\t\tlet res2 = res.mul(this.layers[i]);\n\t\tif (this.normalizeOutput) {\n\t\t\tpercentages = softmax(res2.data);\n\t\t\ti = percentages.indexOf(Math.max(...percentages));\n\n\t\t\treturn {\n\t\t\t\tpercentages,\n\t\t\t\tmax: i\n\t\t\t};\n\t\t} else return res2.data.slice();\n\t}\n\n\tgetGenes() {\n\t\tlet genes = [];\n\t\tfor (let l of this.layers) {\n\t\t\tgenes = genes.concat(l.data);\n\t\t}\n\t\treturn genes;\n\t}\n\n\tsetGenes(genes) {\n\t\tfor (let l of this.layers) {\n\t\t\tl.data = genes.splice(0, l.size);\n\t\t}\n\t}\n\n\tcrossover(other, mutationRate) {\n\t\tlet g1 = this.getGenes();\n\t\tlet g2 = other.getGenes();\n\t\tif (g1.length != g2.length) {\n\t\t\tthrow new Error(\"Can't crossover between two networks of different size!\");\n\t\t}\n\n\t\tlet newGenes = [];\n\t\tfor (let i = 0; i < g1.length; i++) {\n\t\t\tif (Math.random() > 0.5) newGenes.push(g1[i]);else newGenes.push(g2[i]);\n\n\t\t\tif (Math.random() < mutationRate) {\n\t\t\t\tlet r = Math.random() * 2 - 1;\n\t\t\t\tif (Math.random() < 0.6) {\n\t\t\t\t\tnewGenes[i] = r;\n\t\t\t\t} else newGenes[i] += r * 0.1;\n\t\t\t}\n\t\t}\n\n\t\tlet nn = new NeuralNetwork(this.options);\n\t\tnn.setGenes(newGenes);\n\t\treturn nn;\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmV1cmFsLW5ldHdvcmsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXVyYWxOZXR3b3JrL3NyYy9uZXVyYWwtbmV0d29yay5qcz9kYWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xuXG5mdW5jdGlvbiByZWx1KGl0ZW0pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoaXRlbS8xMCxpdGVtKTtcbn1cblxuXG5cblxuZnVuY3Rpb24gc29mdG1heChhcnIpIHtcbiAgICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbih2YWx1ZSxpbmRleCkgeyBcblx0cmV0dXJuIE1hdGguZXhwKHZhbHVlKSAvXG5cdCAgICBhcnIubWFwKCBmdW5jdGlvbih5KXsgcmV0dXJuIE1hdGguZXhwKHkpOyB9ICkucmVkdWNlKCBmdW5jdGlvbihhLGIpeyByZXR1cm4gYStiOyB9KTtcbiAgICB9KTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXJhbE5ldHdvcmsge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3Mpe1xuXHRsZXQgaW5wdXRzLCBvdXRwdXRzLCBoaWRkZW47XG5cdGxldCBub3JtYWxpemVJbnB1dCwgbm9ybWFsaXplT3V0cHV0O1xuXHRpZiAodHlwZW9mIGFyZ3NbMF0gPT0gJ29iamVjdCcpIHtcblx0ICAgIGlucHV0cyA9IGFyZ3NbMF0uaW5wdXRzO1xuXHQgICAgaGlkZGVuID0gYXJnc1swXS5oaWRkZW4uc2xpY2UoMCk7XG5cdCAgICBvdXRwdXRzID0gYXJnc1swXS5vdXRwdXRzO1xuXHQgICAgbm9ybWFsaXplSW5wdXQgPSBhcmdzWzBdLm5vcm1hbGl6ZUlucHV0O1xuXHQgICAgbm9ybWFsaXplT3V0cHV0ID0gYXJnc1swXS5ub3JtYWxpemVPdXRwdXQ7XG5cdCAgICBoaWRkZW4ucHVzaChvdXRwdXRzKTtcblxuXHQgICAgdGhpcy5vcHRpb25zID0gYXJnc1swXTtcblx0fVxuXHRlbHNlIHtcblx0ICAgIGlucHV0cyA9IGFyZ3NbMF07XG5cdCAgICBoaWRkZW4gPSBhcmdzWzFdO1xuXHQgICAgb3V0cHV0cyA9IGFyZ3NbMl07XG5cblx0ICAgIHRoaXMub3B0aW9ucyA9IHtcblx0XHRpbnB1dHM6IGFyZ3NbMF0sXG5cdFx0aGlkZGVuOiBbYXJnc1sxXV0sXG5cdFx0b3V0cHV0czogYXJnc1syXVxuXHQgICAgfTtcblx0fVxuXHR0aGlzLnNjb3JlID0gMDtcblx0dGhpcy5pbnB1dHMgPSBpbnB1dHM7XG5cdHRoaXMub3V0cHV0cyA9IG91dHB1dHM7XG5cblx0dGhpcy5ub3JtYWxpemVJbnB1dCA9IG5vcm1hbGl6ZUlucHV0ICE9PSB1bmRlZmluZWQ/IG5vcm1hbGl6ZUlucHV0OnRydWU7XG5cdHRoaXMubm9ybWFsaXplT3V0cHV0ID0gbm9ybWFsaXplT3V0cHV0ICE9PSB1bmRlZmluZWQ/IG5vcm1hbGl6ZU91dHB1dDp0cnVlO1xuXG5cdHRoaXMubGF5ZXJzID0gW107XG5cblxuXHR0aGlzLmxheWVycy5wdXNoKG5ldyBNYXRyaXgoaW5wdXRzICsgMSwgaGlkZGVuWzBdKSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaGlkZGVuLmxlbmd0aDsgaSsrKSB7XG5cdCAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBNYXRyaXgodGhpcy5sYXllcnNbaV0ubSArIDEsIGhpZGRlbltpXSkpO1xuXHR9XG5cdHRoaXMubGF5ZXJzLmZvckVhY2goKGwpID0+IGwucmFuZG9taXplKCkpO1xuICAgIH1cblxuICAgIGNvbXB1dGUoaW5wdXQpe1xuXHRsZXQgaW5wdXRzID0gaW5wdXQuc2xpY2UoMCk7XG5cblx0aWYgKHRoaXMubm9ybWFsaXplSW5wdXQpIHtcblx0ICAgIGxldCBtYXggPSBNYXRoLm1heCguLi5pbnB1dHMpO1xuXHQgICAgaWYgKG1heCA9PSAwKSB7XG5cdFx0bWF4ID0gMTtcblx0ICAgIH1cblxuXHQgICAgaW5wdXRzID0gaW5wdXRzLm1hcCgodikgPT4gdiAvIG1heCk7XG5cdH1cblx0aW5wdXRzLnB1c2goMSk7IC8vIEFkZCB0aGUgYmlhc1xuXG5cblx0bGV0IGlucHV0X21hdHJpeCA9IG5ldyBNYXRyaXgoMSxpbnB1dHMubGVuZ3RoKTtcblx0aW5wdXRfbWF0cml4LmRhdGEgPSBpbnB1dHM7XG5cblxuXHRsZXQgcmVzID0gaW5wdXRfbWF0cml4O1xuXHRsZXQgaTtcblx0Zm9yIChpID0gMDsgaSA8IHRoaXMubGF5ZXJzLmxlbmd0aCAtIDE7IGkrKykge1xuXHQgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaV07XG5cdCAgICBcblx0ICAgIHJlcyA9IHJlcy5tdWwobGF5ZXIpO1xuXHQgICAgcmVzID0gcmVzLnRyYW5zcG9zZSgpO1xuXHQgICAgcmVzLmRhdGEucHVzaCgxKTtcblx0ICAgIHJlcy5tKys7XG5cdCAgICAvLyByZXMuZGF0YSA9IHJlcy5kYXRhLm1hcChyZWx1KTtcblx0ICAgIHJlcy5kYXRhID0gcmVzLmRhdGEubWFwKE1hdGgudGFuaCk7XG5cdH1cblxuXHRsZXQgcGVyY2VudGFnZXM7XG5cdGxldCByZXMyID0gcmVzLm11bCh0aGlzLmxheWVyc1tpXSk7XG5cdGlmICh0aGlzLm5vcm1hbGl6ZU91dHB1dCkgXG5cdHtcblx0ICAgIHBlcmNlbnRhZ2VzID0gc29mdG1heChyZXMyLmRhdGEpO1xuXHQgICAgaSA9IHBlcmNlbnRhZ2VzLmluZGV4T2YoTWF0aC5tYXgoLi4ucGVyY2VudGFnZXMpKTtcblxuXHQgICAgcmV0dXJuIHtcblx0XHRwZXJjZW50YWdlcyxcblx0XHRtYXg6IGlcblx0ICAgIH07XG5cdH1cblx0ZWxzZSBcblx0ICAgIHJldHVybiByZXMyLmRhdGEuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBnZXRHZW5lcygpe1xuXHRsZXQgZ2VuZXMgPSBbXTtcblx0Zm9yIChsZXQgbCBvZiB0aGlzLmxheWVycykge1xuXHQgICAgZ2VuZXMgPSBnZW5lcy5jb25jYXQobC5kYXRhKTtcblx0fVxuXHRyZXR1cm4gZ2VuZXM7XG4gICAgfVxuXG4gICAgc2V0R2VuZXMoZ2VuZXMpe1xuXHRmb3IgKGxldCBsIG9mIHRoaXMubGF5ZXJzKSB7XG5cdCAgICBsLmRhdGEgPSBnZW5lcy5zcGxpY2UoMCxsLnNpemUpO1xuXHR9XG4gICAgfVxuXG5cbiAgICBjcm9zc292ZXIob3RoZXIsbXV0YXRpb25SYXRlKXtcblx0bGV0IGcxID0gdGhpcy5nZXRHZW5lcygpO1xuXHRsZXQgZzIgPSBvdGhlci5nZXRHZW5lcygpO1xuXHRpZiAoZzEubGVuZ3RoICE9IGcyLmxlbmd0aCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgY3Jvc3NvdmVyIGJldHdlZW4gdHdvIG5ldHdvcmtzIG9mIGRpZmZlcmVudCBzaXplIVwiKTtcblx0fVxuXG5cdGxldCBuZXdHZW5lcyA9IFtdO1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgZzEubGVuZ3RoOyBpKyspe1xuXHQgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpXG5cdFx0bmV3R2VuZXMucHVzaChnMVtpXSk7XG5cdCAgICBlbHNlXG5cdFx0bmV3R2VuZXMucHVzaChnMltpXSk7XG5cblx0ICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgbXV0YXRpb25SYXRlKSB7XG5cdFx0bGV0IHIgPSBNYXRoLnJhbmRvbSgpKiAyIC0gMTtcblx0XHRpZiAoTWF0aC5yYW5kb20oKSA8IDAuNikge1xuXHRcdCAgICBuZXdHZW5lc1tpXSA9IHI7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHQgICAgbmV3R2VuZXNbaV0gKz0gciAqMC4xO1xuXHQgICAgfVxuXHR9XG5cblx0bGV0IG5uID0gbmV3IE5ldXJhbE5ldHdvcmsodGhpcy5vcHRpb25zKTtcblx0bm4uc2V0R2VuZXMobmV3R2VuZXMpO1xuXHRyZXR1cm4gbm47XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5JQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/neural-network.js\n");

/***/ })

/******/ });
});