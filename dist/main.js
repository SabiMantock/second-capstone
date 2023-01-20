"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmovies"] = self["webpackChunkmovies"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.topnav {\\r\\n  background-color: #333;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 14px 16px;\\r\\n}\\r\\n\\r\\n.topnav a {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.topnav a.icon {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#myLinks a {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  height: 400px;\\r\\n}\\r\\n\\r\\n.image-wrapper {\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\n.des {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.likeBtn {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  padding: 10px 0;\\r\\n  cursor: pointer;\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.cBtn {\\r\\n  padding: 10px 20px;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background-color: #ddd;\\r\\n  color: #333;\\r\\n  transition: ease-in 200ms;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  min-height: 100%;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: 50px auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 80%;\\r\\n  border-radius: 20px;\\r\\n  overflow: auto;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n.form-cont {\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n#form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .topnav {\\r\\n    overflow: hidden;\\r\\n    background-color: #333;\\r\\n    position: relative;\\r\\n    padding: 0;\\r\\n  }\\r\\n\\r\\n  #myLinks {\\r\\n    padding: 50px 0;\\r\\n  }\\r\\n\\r\\n  .topnav #myLinks {\\r\\n    display: none;\\r\\n    position: fixed;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: #333;\\r\\n  }\\r\\n\\r\\n  .topnav a {\\r\\n    color: white;\\r\\n    padding: 14px 16px;\\r\\n    text-decoration: none;\\r\\n    text-align: center;\\r\\n    font-size: 17px;\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .topnav a.icon {\\r\\n    background: black;\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n  }\\r\\n\\r\\n  .topnav a:hover {\\r\\n    background-color: #ddd;\\r\\n    color: black;\\r\\n  }\\r\\n\\r\\n  #myLinks a {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .active {\\r\\n    background-color: #04aa6d;\\r\\n    color: white;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movies/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://movies/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movies/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movies/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movies/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movies/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movies/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movies/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movies/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movies/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COMMENTSURL\": () => (/* binding */ COMMENTSURL),\n/* harmony export */   \"DEETSURL\": () => (/* binding */ DEETSURL),\n/* harmony export */   \"LIKESURL\": () => (/* binding */ LIKESURL),\n/* harmony export */   \"MOVIESURL\": () => (/* binding */ MOVIESURL)\n/* harmony export */ });\nconst MOVIESURL = 'https://search.imdbot.workers.dev/?q=StarTrek';\n\nconst DEETSURL = 'https://search.imdbot.workers.dev/';\n\nconst LIKESURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jJIuvsLaYKV5GjXFfUpg/likes';\n\nconst COMMENTSURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jJIuvsLaYKV5GjXFfUpg/comments';\n\n\n\n\n//# sourceURL=webpack://movies/./src/config/constants.js?");

/***/ }),

/***/ "./src/config/utils.js":
/*!*****************************!*\
  !*** ./src/config/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchLikes\": () => (/* binding */ fetchLikes),\n/* harmony export */   \"fetchMovieData\": () => (/* binding */ fetchMovieData),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"selectMovieDetails\": () => (/* binding */ selectMovieDetails)\n/* harmony export */ });\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/config/constants.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\nconst fetchMovieData = async () => {\r\n  const response = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MOVIESURL);\r\n  const data = await response.json();\r\n  const des = data.description;\r\n  return des;\r\n};\r\n\r\nconst fetchMovieDeets = async (id) => {\r\n  const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_1__.DEETSURL}?tt=${id}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst fetchLikes = async () => {\r\n  const response = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LIKESURL);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postLike = async (id) => {\r\n  const response = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LIKESURL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ item_id: id }),\r\n  });\r\n\r\n  const data = response.text();\r\n  const { result } = data;\r\n  return result;\r\n};\r\n\r\nconst postComment = async (comment) => {\r\n  const response = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMENTSURL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n    body: JSON.stringify(comment),\r\n  });\r\n  const data = response.json();\r\n  const { result } = data;\r\n  console.log(result,comment)\r\n  return result;\r\n};\r\n\r\nconst getComments =  async (id) => {\r\n  const response = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMENTSURL + `?item_id=${id}`,{\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n}\r\n\r\nconst selectMovieDetails = async (id) => {\r\n  const data = await fetchMovieDeets(id);\r\n  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://movies/./src/config/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst burger = document.querySelector('.burger-menu');\nconst icon = document.querySelector('.burger-menu > i');\n\nburger.addEventListener('click', () => {\n  const x = document.getElementById('myLinks');\n  if (x.style.display === 'block') {\n    x.style.display = 'none';\n    icon.classList.replace('fa-close', 'fa-bars');\n  } else {\n    x.style.display = 'block';\n    icon.classList.replace('fa-bars', 'fa-close');\n  }\n});\n\ndocument.addEventListener('DOMContentLoaded', _modules_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://movies/./src/index.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (data) => (data.length ? data.length : 0);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://movies/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/utils.js */ \"./src/config/utils.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst popup = document.querySelector('#myModal');\nconst popupContent = document.querySelector('.modal-content');\n\nconst renderCommments = (movie) => {\n  popupContent.innerHTML = '';\n  popupContent.innerHTML = `\n          <div class=\"popup\">\n            <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\"></i>\n            <div class=\"movie-data\">\n              <div class=\"image-wrapper\">\n                <img class=\"img\" src=\"${movie.short.image}\" alt=\"movie\"/>\n              </div>\n              <div>\n                <h3>${movie.short.name}</h3>\n                <p>${movie.short.description}\n              </div>\n              \n            </div>\n            <h3 class=\"comment-count\"></h3>\n            <ul class=\"comment-list\">\n            </ul>\n            <div class=\"form-cont\">\n              <h3>Add Comments</h3>\n              <form id='form' action=''>\n                <div class='input'>\n                  <input type=\"text\" placeholder=\"Name\" id='name'>\n                </div>\n                <div class='text'>\n                  <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\" placeholder=\"your comment here...\"></textarea>\n                </div>\n                <div>\n                  <button type=\"submit\" class=\"btn cBtn\">Comment</button>\n                </div>\n              </form>\n            </div>\n\n          </div>\n\n`;\n  popup.style.display = 'block';\n  const close = document.querySelector('.fa-times');\n  close.addEventListener('click', () => {\n    popup.style.display = 'none';\n  });\n\n  const form = document.getElementById('form');\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const name = document.getElementById('name').value;\n    const comment = document.getElementById('comment').value;\n    if (name !== '' || comment !== '') {\n      (0,_config_utils_js__WEBPACK_IMPORTED_MODULE_0__.postComment)({\n        item_id: movie.imdbId,\n        username: name,\n        comment,\n      });\n    }\n    form.reset();\n  });\n\n  // display comments\n  const commentList = document.querySelector('.comment-list');\n\n  const commentRender = async () => {\n    const comments = await (0,_config_utils_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movie.imdbId);\n    commentList.innerHTML = '';\n    const commentCount = document.querySelector('.comment-count');\n    commentCount.innerHTML += `Comments(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comments)})`;\n    comments.forEach(({ username, comment }) => {\n      commentList.innerHTML += `\n      <li>\n      ${username}: ${comment}\n      </li>\n      `;\n    });\n  };\n  commentRender();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCommments);\n\n//# sourceURL=webpack://movies/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/utils.js */ \"./src/config/utils.js\");\n/* harmony import */ var _assets_likeIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/likeIcon.png */ \"./src/assets/likeIcon.png\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n\n\n\n\nconst list = document.getElementById('list');\nconst movie = document.getElementById('movie');\n\nconst updateLikes = async () => {\n  const data = await (0,_config_utils_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)();\n  data.forEach((item) => {\n    const likeCount = document.getElementById(`count-${item.item_id}`);\n    if (likeCount) {\n      likeCount.innerHTML = `${item.likes}`;\n    }\n  });\n};\n\nconst render = async () => {\n  const data = await (0,_config_utils_js__WEBPACK_IMPORTED_MODULE_0__.fetchMovieData)();\n  movie.innerHTML += `(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data)})`;\n  (0,_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n  data.forEach(({ '#TITLE': title, '#IMG_POSTER': poster, '#IMDB_ID': id }) => {\n    list.innerHTML += `\n            <li id=${id} class=\"list\">\n                <div class='image-wrapper'>\n                    <img src=${poster} alt='movie' class=\"img\"/>\n                </div>\n                <div class=\"des\">\n                    <p>${title}</p>\n                    <div class='like'>\n                        <div class='likeBtn' id=like-${id}>\n                            <img src=${_assets_likeIcon_png__WEBPACK_IMPORTED_MODULE_1__} alt='like'/>\n                        </div>\n                        <p id=count-${id}></p>\n                    </div>\n                </div>\n                <div>\n                    <button type='button' class='btn'id=${id}> Comment </button>\n                </div>\n            </li>\n\n      `;\n  });\n\n  updateLikes();\n\n  const btn = document.querySelectorAll('.likeBtn');\n  btn.forEach((btn, index) => {\n    btn.addEventListener('click', async () => {\n      const id = data[index]['#IMDB_ID'];\n      await (0,_config_utils_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(id);\n      updateLikes();\n    });\n  });\n\n  const commentBtns = document.querySelectorAll('.btn');\n  commentBtns.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const id = btn.getAttribute('id');\n      (0,_config_utils_js__WEBPACK_IMPORTED_MODULE_0__.selectMovieDetails)(id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://movies/./src/modules/render.js?");

/***/ }),

/***/ "./src/assets/likeIcon.png":
/*!*********************************!*\
  !*** ./src/assets/likeIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ae0ec8388934fafd997.png\";\n\n//# sourceURL=webpack://movies/./src/assets/likeIcon.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);