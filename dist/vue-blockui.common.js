(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BlockUI"] = factory();
	else
		root["BlockUI"] = factory();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOlsiZyIsIkZ1bmN0aW9uIiwiZXZhbCIsImUiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NKLElBQUlJLE1BQUo7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJOLENBQWpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jeff/Documents/projects/private/openSource/vue-blockui/src/components/Test.vue'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__[\"install\"] = install;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Test_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Test_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Test_vue__);\n/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components_Test_vue__, \"default\")) __webpack_require__.d(__webpack_exports__, \"Test\", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Test_vue__[\"default\"]; });\n\n\n// Install the components\nfunction install(Vue) {\n  Vue.component('test', __WEBPACK_IMPORTED_MODULE_0__components_Test_vue__[\"default\"]);\n  /* -- Add more components here -- */\n}\n\n// Expose the components\n\n\n/* -- Plugin definition & Auto-install -- */\n/* You shouldn't have to modify the code below */\n\n// Plugin\nvar plugin = {\n  /* eslint-disable no-undef */\n  version: \"1.0.2\",\n  install: install\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\n\n// Auto-install\nvar GlobalVue = null;\nif (typeof window !== 'undefined') {\n  GlobalVue = window.Vue;\n} else if (typeof global !== 'undefined') {\n  GlobalVue = global.Vue;\n}\nif (GlobalVue) {\n  GlobalVue.use(plugin);\n}\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwicGx1Z2luIiwidmVyc2lvbiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNPLFNBQVNBLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzVCQSxNQUFJQyxTQUFKLENBQWMsTUFBZCxFQUFzQiw2REFBdEI7QUFDQTtBQUNEOztBQUVEO0FBQ0E7O0FBS0E7QUFDQTs7QUFFQTtBQUNBLElBQU1DLFNBQVM7QUFDYjtBQUNBQyxXQUFTLE9BRkk7QUFHYko7QUFIYSxDQUFmOztBQU1BLCtEQUFlRyxNQUFmOztBQUVBO0FBQ0EsSUFBSUUsWUFBWSxJQUFoQjtBQUNBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0QsY0FBWUMsT0FBT0wsR0FBbkI7QUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPTSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDRixjQUFZRSxPQUFPTixHQUFuQjtBQUNEO0FBQ0QsSUFBSUksU0FBSixFQUFlO0FBQ2JBLFlBQVVHLEdBQVYsQ0FBY0wsTUFBZDtBQUNELEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXN0IGZyb20gJy4vY29tcG9uZW50cy9UZXN0LnZ1ZSdcblxuLy8gSW5zdGFsbCB0aGUgY29tcG9uZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBWdWUuY29tcG9uZW50KCd0ZXN0JywgVGVzdClcbiAgLyogLS0gQWRkIG1vcmUgY29tcG9uZW50cyBoZXJlIC0tICovXG59XG5cbi8vIEV4cG9zZSB0aGUgY29tcG9uZW50c1xuZXhwb3J0IHtcbiAgVGVzdCxcbiAgLyogLS0gQWRkIG1vcmUgY29tcG9uZW50cyBoZXJlIC0tICovXG59XG5cbi8qIC0tIFBsdWdpbiBkZWZpbml0aW9uICYgQXV0by1pbnN0YWxsIC0tICovXG4vKiBZb3Ugc2hvdWxkbid0IGhhdmUgdG8gbW9kaWZ5IHRoZSBjb2RlIGJlbG93ICovXG5cbi8vIFBsdWdpblxuY29uc3QgcGx1Z2luID0ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICB2ZXJzaW9uOiBWRVJTSU9OLFxuICBpbnN0YWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuLy8gQXV0by1pbnN0YWxsXG5sZXQgR2xvYmFsVnVlID0gbnVsbFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWVcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgR2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZVxufVxuaWYgKEdsb2JhbFZ1ZSkge1xuICBHbG9iYWxWdWUudXNlKHBsdWdpbilcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});