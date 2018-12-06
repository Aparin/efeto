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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/start/tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/html/makeDOMelement.js":
/*!************************************!*\
  !*** ./src/html/makeDOMelement.js ***!
  \************************************/
/*! exports provided: mkNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mkNode\", function() { return mkNode; });\nconst mkNode = (data) => {\r\n    const {\r\n        tg,\r\n        style,\r\n        text,\r\n        html,\r\n        id,\r\n        url,\r\n        type,\r\n        toggle,\r\n        target,\r\n        controls,\r\n        expanded,\r\n        label\r\n    } = data;\r\n\r\n    const node = document.createElement(tg);\r\n    if (style) {\r\n        const classNames = style.split(' ');\r\n        classNames.forEach(function(item) {\r\n            node.classList.add(item);\r\n        });\r\n    }\r\n    if (text) { node.textContent = text; }\r\n    if (html) { node.innerHTML = html; }\r\n    if (id) { node.id = id; }\r\n    if (url) { node.href = url; }\r\n    if (type) { node.type = type }\r\n    if (toggle) { node.setAttribute('data-toggle', toggle) }\r\n    if (target) { node.setAttribute('data-target', target) }\r\n    if (controls) { node.setAttribute('aria-controls', controls) }\r\n    if (expanded) { node.setAttribute('aria-expanded', expanded) }\r\n    if (label) { node.setAttribute('aria-label', label) }\r\n    return node;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/html/makeDOMelement.js?");

/***/ }),

/***/ "./src/start/tests.js":
/*!****************************!*\
  !*** ./src/start/tests.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/makeDOMelement */ \"./src/html/makeDOMelement.js\");\n\r\n\r\ndescribe('makeDOMelement', function() {\r\n    it(`Проверка создания узла`, function() {\r\n        assert.equal(Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ tg: 'р' }).outerHTML, '<р></р>');\r\n        assert.equal(Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ style: 'red', tg: 'р' }).outerHTML, '<р class=\"red\"></р>');\r\n        assert.equal(Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ tg: 'р', text: 'Hi, world', style: 'red' }).outerHTML, '<р class=\"red\">Hi, world</р>');\r\n        assert.equal(Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ id: '5', tg: 'р', text: 'Hi, world', style: 'red' }).outerHTML, '<р class=\"red\" id=\"5\">Hi, world</р>');\r\n        assert.equal(Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ tg: 'р', style: 'red big', text: 'Hi, world', id: '5' }).outerHTML, '<р class=\"red big\" id=\"5\">Hi, world</р>');\r\n    });\r\n    it(`Проверка создания ссылки`, function() {\r\n        assert.equal(Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ tg: 'a', style: 'navbar-brand', text: 'EFETO.ru: веб под ключ', url: '#' }).outerHTML, '<a class=\"navbar-brand\" href=\"#\">EFETO.ru: веб под ключ</a>');\r\n    });\r\n    it(`Значок мобильного меню`, function() {\r\n        const html = Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({ tg: 'span', style: 'navbar-toggler-icon' }).outerHTML;\r\n        const toggle = Object(_html_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__[\"mkNode\"])({\r\n            tg: 'button',\r\n            style: 'navbar-toggler',\r\n            html: html,\r\n            url: '#',\r\n            type: 'button',\r\n            toggle: 'collapse',\r\n            target: '#navbarColor02',\r\n            controls: 'navbarColor02',\r\n            expanded: 'false',\r\n            label: 'Toggle navigation'\r\n        });\r\n\r\n        assert.equal(toggle.outerHTML, '<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>');\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/start/tests.js?");

/***/ })

/******/ });