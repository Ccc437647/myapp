"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/news/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/news/index!./src/pages/news/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/news/index!./src/pages/news/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Act; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cross_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/cross-platform */ "./src/components/cross-platform/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Act() {
  // 监听用户下拉刷新的动作
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.usePullDownRefresh)(function () {
    // 业务逻辑 ...
    console.log('用户下拉刷新');
    // Taro.stopPullDownRefresh()   // 停止下拉刷新
  });

  // ScrollView区域 往上滚动加载
  var handleReachTop = function handleReachTop() {
    console.log('顶顶顶');
  };

  // ScrollView区域 往下滚动加载
  var handleReachBottom = function handleReachBottom() {
    console.log('底底底底');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u6D4B\u8BD5\u6EDA\u52A8\u52A0\u8F7D\u4EE5\u53CA\u4E0B\u62C9\u5237\u65B0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.ScrollView, {
        altClassName: "h-_240px_",
        scrollY: true,
        refresherEnabled: true,
        enableBackToTop: true,
        upperThreshold: 0,
        onScrollToLower: handleReachBottom,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
          altClassName: "h-_500px_  bg-slate-300",
          children: "123123"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
          altClassName: "h-_500px_ bg-slate-300",
          children: "123123"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
          altClassName: "h-_500px_ bg-slate-300",
          children: "123123"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
          altClassName: "h-_500px_ bg-slate-300",
          children: "123123"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
          altClassName: "h-_500px_ bg-slate-300",
          children: "123123"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_1__.View, {
      altClassName: "text-red-600",
      children: "---------------------------------------------------"
    })]
  });
}

/***/ }),

/***/ "./src/pages/news/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/news/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_news_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/news/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/news/index!./src/pages/news/index.tsx");


var config = {"navigationBarTitleText":"新闻页面","enablePullDownRefresh":true};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_news_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/news/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_news_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/news/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map