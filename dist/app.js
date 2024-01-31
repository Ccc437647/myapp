"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-4QFMHRZP_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-IFYECHNS_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_axios-miniprogram-adapter_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-GKRHZ5RF_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.ts":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });

function App(props) {
  return props.children;
}

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./app.ts */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);











var config = {"pages":["pages/index/index","pages/act/index","pages/user/index","pages/news/index"],"tabBar":{"custom":false,"color":"#000000","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/icon-home-hot.png","selectedIconPath":"static/icon-home-hot.png","text":"首页"},{"pagePath":"pages/act/index","iconPath":"static/icon-class-hot.png","selectedIconPath":"static/icon-class-hot.png","text":"活动"},{"pagePath":"pages/user/index","iconPath":"static/icon-user-hot.png","selectedIconPath":"static/icon-user-hot.png","text":"个人"}]},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_ts__WEBPACK_IMPORTED_MODULE_6__["default"], react__WEBPACK_IMPORTED_MODULE_4__, (react_dom__WEBPACK_IMPORTED_MODULE_5___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: 5,
  targetUnit: undefined
})


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map