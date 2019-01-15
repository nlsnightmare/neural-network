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

eval("module.exports = {\n    NeuralNetwork: __webpack_require__(/*! ./neural-network.js */ \"./src/neural-network.js\").default,\n    Matrix: __webpack_require__(/*! ./matrix.js */ \"./src/matrix.js\").default\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXVyYWxOZXR3b3JrLy4vc3JjL2VudHJ5LmpzPzdjZDYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgTmV1cmFsTmV0d29yazogcmVxdWlyZSgnLi9uZXVyYWwtbmV0d29yay5qcycpLmRlZmF1bHQsXG4gICAgTWF0cml4OiByZXF1aXJlKCcuL21hdHJpeC5qcycpLmRlZmF1bHRcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entry.js\n");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix; });\nclass Matrix {\n    constructor(n,m) {\n        this.n = n;\n        this.m = m;\n        this.data = new Array(n * m);\n        this.size = n * m;\n\n        // By default, return an identity matrix\n        for( let x = 0; x < n; x++){\n            for( let y = 0; y < m; y++){\n                if (x == y)\n                    this.setItem(x,y,1);\n                else\n                    this.setItem(x,y,0);\n            }\n        }\n    }\n\n    toArray(){\n        return this.data;\n    }\n\n    transpose(){\n        let m = new Matrix(this.m, this.n);\n\n        for(let x = 0; x < this.n; x++){\n            for(let y = 0; y < this.m; y++){\n                m.setItem(y,x,this.getItem(x,y));\n            }\n        }\n        return m;\n    }\n\n    static zero(n,m){\n        let mat = new Matrix(n,m);\n        for( let i = 0; i < mat.data.length; i++){\n            mat.data[i] = 0;\n        }\n        return mat;\n    }\n    loadData(data){\n        if (data.length != this.data.length) {\n            throw new Error(\"Matrix data should be exactly \" + this.n * this.m);\n        }\n        for( let i = 0; i < data.length; i++){\n            this.data[i] = data[i];\n        }\n    }\n\n    display(){\n        for( let x = 0; x < this.n; x++){\n            for( let y = 0; y < this.m; y++){\n                console.log(`(${x},${y}) =>`,this.getItem(x,y));\n            }\n        }\n    }\n\n    setItem(x,y,val){\n        if (this.m == 1) {\n            let idx = y + x;\n            this.data[idx] = val;\n            return;\n        }\n        this.data[x + y * this.n] = val;\n    }\n\n    getItem(x,y){\n        return this.data[x + y * this.n];\n    }\n\n    randomize(){\n        for(let i = 0; i < this.data.length; i++){\n            this.data[i] = ( Math.random() * 2 ) - 1;\n        }\n    }\n\n    copy(){\n        let n = new Matrix(this.n, this.m);\n        for( let i = 0; i < this.data.length; i++){\n            n.data[i] = this.data[i];\n        }\n\n        return n;\n    }\n\n    add(num){\n        for(let i = 0; i < this.data.length; i++){\n            this.data[i] += num;\n        }\n    }\n\n    mul(other){\n        if (this.m != other.n) {\n            throw new Error(`Trying to multiply a (${this.n},${this.m}) matrix with a (${other.n},${other.m})`);\n        }\n        let res = Matrix.zero(other.m, this.n);\n\n        for(let i = 0; i < this.n; i++){\n            for(let j = 0; j < other.m; j++){\n                let sum = 0;\n                for(let k = 0; k < this.m; k++){\n                    sum += this.getItem(i,k) * other.getItem(k,j);\n                }\n                res.setItem(i,j,sum);\n            }\n        }\n\n\n        return res;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF0cml4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV1cmFsTmV0d29yay8uL3NyYy9tYXRyaXguanM/MjdjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xuICAgIGNvbnN0cnVjdG9yKG4sbSkge1xuICAgICAgICB0aGlzLm4gPSBuO1xuICAgICAgICB0aGlzLm0gPSBtO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobiAqIG0pO1xuICAgICAgICB0aGlzLnNpemUgPSBuICogbTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0LCByZXR1cm4gYW4gaWRlbnRpdHkgbWF0cml4XG4gICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgbjsgeCsrKXtcbiAgICAgICAgICAgIGZvciggbGV0IHkgPSAwOyB5IDwgbTsgeSsrKXtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSB5KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW0oeCx5LDEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtKHgseSwwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvQXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoKXtcbiAgICAgICAgbGV0IG0gPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcblxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5uOyB4Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMubTsgeSsrKXtcbiAgICAgICAgICAgICAgICBtLnNldEl0ZW0oeSx4LHRoaXMuZ2V0SXRlbSh4LHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICBzdGF0aWMgemVybyhuLG0pe1xuICAgICAgICBsZXQgbWF0ID0gbmV3IE1hdHJpeChuLG0pO1xuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IG1hdC5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIG1hdC5kYXRhW2ldID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0O1xuICAgIH1cbiAgICBsb2FkRGF0YShkYXRhKXtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1hdHJpeCBkYXRhIHNob3VsZCBiZSBleGFjdGx5IFwiICsgdGhpcy5uICogdGhpcy5tKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gZGF0YVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXkoKXtcbiAgICAgICAgZm9yKCBsZXQgeCA9IDA7IHggPCB0aGlzLm47IHgrKyl7XG4gICAgICAgICAgICBmb3IoIGxldCB5ID0gMDsgeSA8IHRoaXMubTsgeSsrKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKCR7eH0sJHt5fSkgPT5gLHRoaXMuZ2V0SXRlbSh4LHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEl0ZW0oeCx5LHZhbCl7XG4gICAgICAgIGlmICh0aGlzLm0gPT0gMSkge1xuICAgICAgICAgICAgbGV0IGlkeCA9IHkgKyB4O1xuICAgICAgICAgICAgdGhpcy5kYXRhW2lkeF0gPSB2YWw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhW3ggKyB5ICogdGhpcy5uXSA9IHZhbDtcbiAgICB9XG5cbiAgICBnZXRJdGVtKHgseSl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbeCArIHkgKiB0aGlzLm5dO1xuICAgIH1cblxuICAgIHJhbmRvbWl6ZSgpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9ICggTWF0aC5yYW5kb20oKSAqIDIgKSAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3B5KCl7XG4gICAgICAgIGxldCBuID0gbmV3IE1hdHJpeCh0aGlzLm4sIHRoaXMubSk7XG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIG4uZGF0YVtpXSA9IHRoaXMuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cblxuICAgIGFkZChudW0pe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSArPSBudW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtdWwob3RoZXIpe1xuICAgICAgICBpZiAodGhpcy5tICE9IG90aGVyLm4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJ5aW5nIHRvIG11bHRpcGx5IGEgKCR7dGhpcy5ufSwke3RoaXMubX0pIG1hdHJpeCB3aXRoIGEgKCR7b3RoZXIubn0sJHtvdGhlci5tfSlgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzID0gTWF0cml4Lnplcm8ob3RoZXIubSwgdGhpcy5uKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5uOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG90aGVyLm07IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMDsgayA8IHRoaXMubTsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0SXRlbShpLGspICogb3RoZXIuZ2V0SXRlbShrLGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXMuc2V0SXRlbShpLGosc3VtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/matrix.js\n");

/***/ }),

/***/ "./src/neural-network.js":
/*!*******************************!*\
  !*** ./src/neural-network.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NeuralNetwork; });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/matrix.js\");\n\n\nfunction relu(item) {\n    return Math.max(item/10,item);\n}\n\n\n\n\nfunction softmax(arr) {\n    return arr.map(function(value,index) { \n        return Math.exp(value) /\n            arr.map( function(y){ return Math.exp(y); } ).reduce( function(a,b){ return a+b; });\n    });\n}\n\n\n\nclass NeuralNetwork {\n    constructor(...args){\n        let inputs, outputs, hidden;\n        let normalizeInput, normalizeOutput;\n        if (typeof args[0] == 'object') {\n            inputs = args[0].inputs;\n            hidden = args[0].hidden.slice(0);\n            outputs = args[0].outputs;\n            normalizeInput = args[0].normalizeInput;\n            normalizeOutput = args[0].normalizeOutput;\n            hidden.push(outputs);\n\n            this.options = args[0];\n        }\n        else {\n            inputs = args[0];\n            hidden = args[1];\n            outputs = args[2];\n\n            this.options = {\n                inputs: args[0],\n                hidden: [args[1]],\n                outputs: args[2]\n            };\n        }\n        this.score = 0;\n        this.inputs = inputs;\n        this.outputs = outputs;\n\n        this.normalizeInput = normalizeInput !== undefined? normalizeInput:true;\n        this.normalizeOutput = normalizeOutput !== undefined? normalizeOutput:true;\n\n        this.layers = [];\n\n\n        this.layers.push(new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputs + 1, hidden[0]));\n        for (let i = 0; i < hidden.length; i++) {\n            this.layers.push(new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.layers[i].m + 1, hidden[i]));\n        }\n        this.layers.forEach((l) => l.randomize());\n    }\n\n    compute(input){\n        let inputs = input.slice(0);\n\n        if (this.normalizeInput) {\n            let max = Math.max(...inputs);\n            if (max == 0) {\n                max = 1;\n            }\n\n            inputs = inputs.map((v) => v / max);\n        }\n        inputs.push(1); // Add the bias\n\n\n        let input_matrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1,inputs.length);\n        input_matrix.data = inputs;\n\n\n        let res = input_matrix;\n        let i;\n        for (i = 0; i < this.layers.length - 1; i++) {\n            let layer = this.layers[i];\n\n            res = res.mul(layer);\n            res = res.transpose();\n            res.data.push(1);\n            res.m++;\n            // res.data = res.data.map(relu);\n            res.data = res.data.map(Math.tanh);\n        }\n\n        let percentages;\n        let res2 = res.mul(this.layers[i]);\n        if (this.normalizeOutput) \n        {\n            percentages = softmax(res2.data);\n            i = percentages.indexOf(Math.max(...percentages));\n\n            return {\n                percentages,\n                max: i\n            };\n        }\n        else \n            return res2.data.slice();\n    }\n\n    getGenes(){\n        let genes = [];\n        for (let l of this.layers) {\n            genes = genes.concat(l.data);\n        }\n        return genes;\n    }\n\n    setGenes(genes){\n        for (let l of this.layers) {\n            l.data = genes.splice(0,l.size);\n        }\n    }\n\n\n    crossover(other,mutationRate){\n        let g1 = this.getGenes();\n        let g2 = other.getGenes();\n        if (g1.length != g2.length) {\n            throw new Error(\"Can't crossover between two networks of different size!\");\n        }\n\n        let newGenes = [];\n        for(let i = 0; i < g1.length; i++){\n            if (Math.random() > 0.5)\n                newGenes.push(g1[i]);\n            else\n                newGenes.push(g2[i]);\n\n            if (Math.random() < mutationRate) {\n                let r = Math.random()* 2 - 1;\n                if (Math.random() < 0.6) {\n                    newGenes[i] = r;\n                }\n                else\n                    newGenes[i] += r *0.1;\n            }\n        }\n\n        let nn = new NeuralNetwork(this.options);\n        nn.setGenes(newGenes);\n        return nn;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmV1cmFsLW5ldHdvcmsuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXVyYWxOZXR3b3JrLy4vc3JjL25ldXJhbC1uZXR3b3JrLmpzPzlkNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbmZ1bmN0aW9uIHJlbHUoaXRlbSkge1xuICAgIHJldHVybiBNYXRoLm1heChpdGVtLzEwLGl0ZW0pO1xufVxuXG5cblxuXG5mdW5jdGlvbiBzb2Z0bWF4KGFycikge1xuICAgIHJldHVybiBhcnIubWFwKGZ1bmN0aW9uKHZhbHVlLGluZGV4KSB7IFxuICAgICAgICByZXR1cm4gTWF0aC5leHAodmFsdWUpIC9cbiAgICAgICAgICAgIGFyci5tYXAoIGZ1bmN0aW9uKHkpeyByZXR1cm4gTWF0aC5leHAoeSk7IH0gKS5yZWR1Y2UoIGZ1bmN0aW9uKGEsYil7IHJldHVybiBhK2I7IH0pO1xuICAgIH0pO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1cmFsTmV0d29yayB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncyl7XG4gICAgICAgIGxldCBpbnB1dHMsIG91dHB1dHMsIGhpZGRlbjtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZUlucHV0LCBub3JtYWxpemVPdXRwdXQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5wdXRzID0gYXJnc1swXS5pbnB1dHM7XG4gICAgICAgICAgICBoaWRkZW4gPSBhcmdzWzBdLmhpZGRlbi5zbGljZSgwKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBhcmdzWzBdLm91dHB1dHM7XG4gICAgICAgICAgICBub3JtYWxpemVJbnB1dCA9IGFyZ3NbMF0ubm9ybWFsaXplSW5wdXQ7XG4gICAgICAgICAgICBub3JtYWxpemVPdXRwdXQgPSBhcmdzWzBdLm5vcm1hbGl6ZU91dHB1dDtcbiAgICAgICAgICAgIGhpZGRlbi5wdXNoKG91dHB1dHMpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBhcmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5wdXRzID0gYXJnc1swXTtcbiAgICAgICAgICAgIGhpZGRlbiA9IGFyZ3NbMV07XG4gICAgICAgICAgICBvdXRwdXRzID0gYXJnc1syXTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGlucHV0czogYXJnc1swXSxcbiAgICAgICAgICAgICAgICBoaWRkZW46IFthcmdzWzFdXSxcbiAgICAgICAgICAgICAgICBvdXRwdXRzOiBhcmdzWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcbiAgICAgICAgdGhpcy5vdXRwdXRzID0gb3V0cHV0cztcblxuICAgICAgICB0aGlzLm5vcm1hbGl6ZUlucHV0ID0gbm9ybWFsaXplSW5wdXQgIT09IHVuZGVmaW5lZD8gbm9ybWFsaXplSW5wdXQ6dHJ1ZTtcbiAgICAgICAgdGhpcy5ub3JtYWxpemVPdXRwdXQgPSBub3JtYWxpemVPdXRwdXQgIT09IHVuZGVmaW5lZD8gbm9ybWFsaXplT3V0cHV0OnRydWU7XG5cbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcblxuXG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IE1hdHJpeChpbnB1dHMgKyAxLCBoaWRkZW5bMF0pKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWRkZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IE1hdHJpeCh0aGlzLmxheWVyc1tpXS5tICsgMSwgaGlkZGVuW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaCgobCkgPT4gbC5yYW5kb21pemUoKSk7XG4gICAgfVxuXG4gICAgY29tcHV0ZShpbnB1dCl7XG4gICAgICAgIGxldCBpbnB1dHMgPSBpbnB1dC5zbGljZSgwKTtcblxuICAgICAgICBpZiAodGhpcy5ub3JtYWxpemVJbnB1dCkge1xuICAgICAgICAgICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLmlucHV0cyk7XG4gICAgICAgICAgICBpZiAobWF4ID09IDApIHtcbiAgICAgICAgICAgICAgICBtYXggPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dHMgPSBpbnB1dHMubWFwKCh2KSA9PiB2IC8gbWF4KTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHMucHVzaCgxKTsgLy8gQWRkIHRoZSBiaWFzXG5cblxuICAgICAgICBsZXQgaW5wdXRfbWF0cml4ID0gbmV3IE1hdHJpeCgxLGlucHV0cy5sZW5ndGgpO1xuICAgICAgICBpbnB1dF9tYXRyaXguZGF0YSA9IGlucHV0cztcblxuXG4gICAgICAgIGxldCByZXMgPSBpbnB1dF9tYXRyaXg7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVyc1tpXTtcblxuICAgICAgICAgICAgcmVzID0gcmVzLm11bChsYXllcik7XG4gICAgICAgICAgICByZXMgPSByZXMudHJhbnNwb3NlKCk7XG4gICAgICAgICAgICByZXMuZGF0YS5wdXNoKDEpO1xuICAgICAgICAgICAgcmVzLm0rKztcbiAgICAgICAgICAgIC8vIHJlcy5kYXRhID0gcmVzLmRhdGEubWFwKHJlbHUpO1xuICAgICAgICAgICAgcmVzLmRhdGEgPSByZXMuZGF0YS5tYXAoTWF0aC50YW5oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwZXJjZW50YWdlcztcbiAgICAgICAgbGV0IHJlczIgPSByZXMubXVsKHRoaXMubGF5ZXJzW2ldKTtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplT3V0cHV0KSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGVyY2VudGFnZXMgPSBzb2Z0bWF4KHJlczIuZGF0YSk7XG4gICAgICAgICAgICBpID0gcGVyY2VudGFnZXMuaW5kZXhPZihNYXRoLm1heCguLi5wZXJjZW50YWdlcykpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VzLFxuICAgICAgICAgICAgICAgIG1heDogaVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgcmV0dXJuIHJlczIuZGF0YS5zbGljZSgpO1xuICAgIH1cblxuICAgIGdldEdlbmVzKCl7XG4gICAgICAgIGxldCBnZW5lcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBsIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBnZW5lcyA9IGdlbmVzLmNvbmNhdChsLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW5lcztcbiAgICB9XG5cbiAgICBzZXRHZW5lcyhnZW5lcyl7XG4gICAgICAgIGZvciAobGV0IGwgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGwuZGF0YSA9IGdlbmVzLnNwbGljZSgwLGwuc2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyb3Nzb3ZlcihvdGhlcixtdXRhdGlvblJhdGUpe1xuICAgICAgICBsZXQgZzEgPSB0aGlzLmdldEdlbmVzKCk7XG4gICAgICAgIGxldCBnMiA9IG90aGVyLmdldEdlbmVzKCk7XG4gICAgICAgIGlmIChnMS5sZW5ndGggIT0gZzIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBjcm9zc292ZXIgYmV0d2VlbiB0d28gbmV0d29ya3Mgb2YgZGlmZmVyZW50IHNpemUhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0dlbmVzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnMS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSlcbiAgICAgICAgICAgICAgICBuZXdHZW5lcy5wdXNoKGcxW2ldKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdHZW5lcy5wdXNoKGcyW2ldKTtcblxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBtdXRhdGlvblJhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkqIDIgLSAxO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC42KSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0dlbmVzW2ldID0gcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXdHZW5lc1tpXSArPSByICowLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm4gPSBuZXcgTmV1cmFsTmV0d29yayh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBubi5zZXRHZW5lcyhuZXdHZW5lcyk7XG4gICAgICAgIHJldHVybiBubjtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/neural-network.js\n");

/***/ })

/******/ });
});