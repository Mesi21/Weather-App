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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./../images/background.png */ \"./src/images/background.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"*, *:before, *:after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n  }\\n\\nbody {\\n  margin: 0px;\\n  padding: 0px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 1.8rem;\\n}\\n\\n#input {\\n  width: 50%;\\n  margin: 50px auto 0px;\\n  border-radius: 20px;\\n  background: rgb(167,179,166);\\n  background: -moz-linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n  background: -webkit-linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n  background: linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n }\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  width: 80%;\\n  margin: 3rem auto;\\n  padding: 30px;\\n  text-align: center;\\n}\\n\\n#city {\\n  border-radius: 8px;\\n  height: 30px;\\n  padding: 10px 30px;\\n  font-size: 2rem;\\n  text-align: center;\\n}\\n\\n#cels {\\n  padding-right: 5px;\\n}\\n\\n#fahr {\\n  padding-left: 5px;\\n}\\n\\n#btn {\\n  box-shadow: 0px 10px 14px -7px #276873;\\n\\tbackground:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\\n  background-color:#599bb3;\\n  border: 0px;\\n\\tborder-radius:8px;\\n\\tdisplay:inline-block;\\n\\tcursor:pointer;\\n\\tcolor:#ffffff;\\n\\tfont-family:Arial;\\n\\tfont-size:20px;\\n\\tfont-weight:bold;\\n\\tpadding:13px 32px;\\n\\ttext-decoration:none;\\n\\ttext-shadow:0px 1px 0px #3d768a;\\n}\\n\\ndiv {\\n  margin: 0px;\\n  padding: 15px 0px; \\n  text-align: center;\\n}\\n\\nh3 {\\n  padding: 0px 10px;\\n  font-weight: 300;\\n  letter-spacing: 0.4rem;\\n  font-size: smaller;\\n}\\n\\nh4 {\\n  margin: 0px;\\n  padding: 0px;\\n  color: #3d768a;\\n  font-size: small;\\n  font-weight: 700;\\n}\\n\\n#upper {\\n  height: 8rem;\\n  width: 100%;\\n  padding: 0px 0px;\\n  box-shadow: 0px 10px 14px -7px #276873;\\n\\tbackground:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\\n  background-color:#599bb3;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-size: smaller;\\n  border-radius: 2px;\\n  color: #fff;\\n}\\n\\n.col {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.row {\\n  margin: 0px auto;\\n  display: flex;\\n  flex-direction: row;\\n  width: 90%;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nhr {\\n  border: 1px solid #3d768a;\\n  height: 50px;\\n}\\n\\n::-webkit-input-placeholder {\\n  color: #c9cdcf;\\n  font-size: 1rem;\\n}\\n:-ms-input-placeholder { \\n  color: #c9cdcf;\\n  font-size: 1rem;\\n}\\n::placeholder {\\n  color: #c9cdcf;\\n  font-size: 1rem;\\n}\\n\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n}\\n\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  border: 1px solid #3d768a;\\n  background-color: #fff;\\n  -webkit-transition: 0.5s;\\n  transition: 0.5s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: #3d768a;\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #3d768a;\\n}\\n\\ninput:checked + .slider:before {\\n  -webkit-transform: translateX(20px);\\n  -ms-transform: translateX(20px);\\n  transform: translateX(20px);\\n  background-color: #fff;\\n}\\n\\n.slider.round {\\n  border-radius: 35px;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}\\n\\n#info {\\n  width: 95%;\\n  margin: 0px auto; \\n}\\n\\n#temp {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#grades, #unit, #searched, #degree {\\n  text-align: center;\\n  font-size: 4rem;\\n  font-weight: 900;\\n}\\n\\n#icon {\\n  margin: 0px;\\n  padding: 0px;\\n  text-align: center;\\n}\\n\\n#img{\\n  margin: 0px auto;\\n  padding: 0px;\\n  height: 50px;\\n  width: 50px;\\n}\\n\\n#toggle {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0px;\\n  margin: 0px;\\n}\\n\\n@media (max-width: 576px){ \\n  body{\\n      margin: 0px;\\n      padding: 0px;\\n      background: #276873;\\n  }\\n  #input {\\n    width: 90%;\\n    margin: 20px auto;\\n    border-radius: 20px;\\n    background: rgb(167,179,166);\\n    background: -moz-linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n    background: -webkit-linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n    background: linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n   }\\n  \\n  form {\\n    display: flex;\\n    flex-direction: column;\\n    width: 80%;\\n    margin: 3rem auto;\\n    padding: 30px;\\n    text-align: center;\\n  }\\n  \\n  #city {\\n    border-radius: 8px;\\n    height: 30px;\\n    padding: 10px 30px;\\n    font-size: 2rem;\\n    text-align: center;\\n  }\\n  \\n  #descript {\\n    font-size: 0.9rem;\\n  }\\n\\n  #btn {\\n    box-shadow: 0px 10px 14px -7px #276873;\\n    background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\\n    background-color:#599bb3;\\n    border: 0px;\\n    border-radius:8px;\\n    display:inline-block;\\n    cursor:pointer;\\n    color:#ffffff;\\n    font-family:Arial;\\n    font-size:20px;\\n    font-weight:bold;\\n    padding:13px 32px;\\n    text-decoration:none;\\n    text-shadow:0px 1px 0px #3d768a;\\n  }\\n  \\n  div {\\n    margin: 0px;\\n    padding: 15px 0px; \\n    text-align: center;\\n  }\\n  \\n  h2 {\\n    display: none;\\n  }\\n\\n  h3 {\\n    padding: 0px 10px;\\n    font-weight: 300;\\n    letter-spacing: 0.3rem;\\n    font-size: smaller;\\n  }\\n  \\n  h4 {\\n    margin: 0px;\\n    padding: 0px;\\n    color: #000000;\\n    font-size: small;\\n    font-weight: 500;\\n  }\\n  \\n  #upper {\\n    height: 8rem;\\n    width: 100%;\\n    padding: 0px ;\\n    box-shadow: 0px 10px 14px -7px #276873;\\n    background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\\n    background-color:#599bb3;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    font-size: smaller;\\n    border-radius: 2px;\\n    color: #fff;\\n  }\\n  \\n  .col {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  \\n  .row {\\n    margin: 0px auto;\\n    display: flex;\\n    flex-direction: row;\\n    width: 90%;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  \\n  hr {\\n    border: 1px solid #3d768a;\\n    height: 50px;\\n  }\\n\\n  #info {\\n    width: 95%;\\n    margin: 0px auto; \\n  }\\n\\n  #img{\\n    margin: 0px auto;\\n    padding: 0px;\\n    height: 70px;\\n    width: 70px;\\n  }\\n}\\n\\n@media (min-width: 576px) and (max-width: 992px) {\\n  body{\\n    margin: 0px;\\n    padding: 0px;\\n    background: #276873;\\n  }\\n\\n  #input {\\n    width: 90%;\\n    margin: 20px auto;\\n    border-radius: 20px;\\n    background: rgb(167,179,166);\\n    background: -moz-linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n    background: -webkit-linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n    background: linear-gradient(118deg, rgba(167,179,166,1) 0%, rgba(222,222,222,1) 46%, rgba(157,157,157,1) 100%);\\n  }\\n\\n  form {\\n    display: flex;\\n    flex-direction: column;\\n    width: 80%;\\n    margin: 3rem auto;\\n    padding: 30px;\\n    text-align: center;\\n  }\\n\\n  #city {\\n    border-radius: 8px;\\n    height: 30px;\\n    padding: 10px 30px;\\n    font-size: 2rem;\\n    text-align: center;\\n  }\\n\\n  #descript {\\n    font-size: 0.9rem;\\n  }\\n\\n  #btn {\\n    box-shadow: 0px 10px 14px -7px #276873;\\n    background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\\n    background-color:#599bb3;\\n    border: 0px;\\n    border-radius:8px;\\n    display:inline-block;\\n    cursor:pointer;\\n    color:#ffffff;\\n    font-family:Arial;\\n    font-size:20px;\\n    font-weight:bold;\\n    padding:13px 32px;\\n    text-decoration:none;\\n    text-shadow:0px 1px 0px #3d768a;\\n  }\\n\\n  div {\\n    margin: 0px;\\n    padding: 15px 0px; \\n    text-align: center;\\n  }\\n\\n  h3 {\\n    padding: 0px 10px;\\n    font-weight: 300;\\n    letter-spacing: 0.4rem;\\n    font-size: smaller;\\n  }\\n  \\n  h4 {\\n    margin: 0px;\\n    padding: 0px;\\n    color: #3d768a;\\n    font-size: small;\\n    font-weight: 700;\\n  }\\n\\n  #upper {\\n    height: 8rem;\\n    width: 100%;\\n    padding: 0px ;\\n    box-shadow: 0px 10px 14px -7px #276873;\\n    background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\\n    background-color:#599bb3;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    font-size: smaller;\\n    border-radius: 2px;\\n    color: #fff;\\n  }\\n\\n  .col {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .row {\\n    margin: 0px auto;\\n    display: flex;\\n    flex-direction: row;\\n    width: 90%;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  hr {\\n    border: 1px solid #3d768a;\\n    height: 70px;\\n  }\\n\\n  #info {\\n    width: 95%;\\n    margin: 0px auto; \\n  }\\n\\n  #img{\\n    margin: 0px auto;\\n    padding: 0px;\\n    height: 100px;\\n    width: 100px;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\nconst unit = (swBtn) => {\n    let unit;\n    if(swBtn.checked === true) {\n        unit = 'imperial';\n    } else {\n        unit = 'metric';\n    }\n    return unit;\n};\n\nconst getInfo = async (nameOfCity) => {\n    try {\n        // eslint-disable-next-line no-undef\n        const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&units=${unit(_elements__WEBPACK_IMPORTED_MODULE_0__[\"swithcBtn\"])}&appid=${\"3c0b4d345113267fbfde2bf609755e17\"}`);\n        const data = await result.json();\n        initFunc(data);\n    } \n    catch(error) {\n        console.log(error);\n    }    \n};\n\nconst initFunc = (result) => {\n    console.log(result);\n    console.log(unit(_elements__WEBPACK_IMPORTED_MODULE_0__[\"swithcBtn\"]));\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"searched\"].innerHTML = result.name;\n    const currentTemp = toggleCelsToFahr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"swithcBtn\"], result).temp;\n    const minimum = toggleCelsToFahr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"swithcBtn\"], result).min;\n    const maximum = toggleCelsToFahr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"swithcBtn\"], result).max;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"displayGrade\"].innerHTML = currentTemp;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"img\"].src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"description\"].innerHTML = result.weather[0].description;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"minTemp\"].innerHTML = minimum;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"maxTemp\"].innerHTML = maximum;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"press\"].innerHTML = result.main.pressure;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"humid\"].innerHTML = result.main.humidity;\n};\n    \nconst toggleCelsToFahr = (swBtn, result) => {\n    let temp, min, max; \n    if(swBtn.checked === true) {\n        temp = Math.floor(result.main.temp);\n        min = Math.floor(result.main.temp_min).toString() + '°F';\n        max = Math.floor(result.main.temp_max.toString()) + '°F';\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"displayUnit\"].innerText = 'F';\n        \n    } else {\n        temp = Math.floor(result.main.temp);\n        min = Math.floor(result.main.temp_min).toString() + '°C';\n        max = Math.floor(result.main.temp_max.toString()) + '°C';\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"displayUnit\"].innerText = 'C';\n    }\n    return { temp, min, max, displayUnit: _elements__WEBPACK_IMPORTED_MODULE_0__[\"displayUnit\"] };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInfo);\n\n\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: submitBtn, searched, img, displayGrade, displayUnit, description, minTemp, maxTemp, swithcBtn, press, humid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitBtn\", function() { return submitBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searched\", function() { return searched; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"img\", function() { return img; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayGrade\", function() { return displayGrade; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayUnit\", function() { return displayUnit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"description\", function() { return description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minTemp\", function() { return minTemp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxTemp\", function() { return maxTemp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swithcBtn\", function() { return swithcBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"press\", function() { return press; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"humid\", function() { return humid; });\nconst submitBtn = document.getElementById(\"btn\");\nconst searched = document.getElementById(\"searched\");\nconst img = document.getElementById(\"img\"); \nconst displayGrade = document.getElementById(\"grades\");\nconst displayUnit = document.getElementById(\"unit\");\nconst description = document.getElementById(\"descript\");\nconst minTemp = document.getElementById(\"tempMin\");\nconst maxTemp = document.getElementById(\"tempMax\");\nconst swithcBtn = document.getElementById('chk');\nconst press = document.getElementById(\"pressure\");\nconst humid = document.getElementById(\"humidity\");\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"images/background.png\");\n\n//# sourceURL=webpack:///./src/images/background.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\n\nconst dateGen = () => {\n    const currentDate = document.getElementById('date');\n    const fullDate = new Date();\n    const month = fullDate.getMonth() + 1;\n    const day = fullDate.getDate();\n    const year = fullDate.getFullYear();\n    currentDate.innerHTML = month + '/' + day + '/' + year;\n    return currentDate;\n}\ndateGen();\n\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"submitBtn\"].addEventListener('click', () => {\n    const nameOfCity = document.getElementById('city').value;\n    if(nameOfCity) {\n        Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(nameOfCity);\n    }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style/style.css?");

/***/ })

/******/ });