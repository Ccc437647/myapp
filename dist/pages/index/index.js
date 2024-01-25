"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _request_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request/user */ "./src/request/user.ts");
/* harmony import */ var _components_cross_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cross-platform */ "./src/components/cross-platform/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);









function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      weekday: '',
      time: ''
    }),
    _useState2 = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    dataTime = _useState2[0],
    setDateTime = _useState2[1];
  // 用户信息数据
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      account: 'This is RN project ~'
    }),
    _useState4 = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    userInfo = _useState4[0],
    setUserInfo = _useState4[1];
  // interface TimeResult {
  //   code: number;
  //   message: string;
  //   result: Result;
  // }

  // 页面跳转
  var routeGo = function routeGo() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: '/pages/news/index'
    });
  };

  // 请求 - 获取每日时间
  var getTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
    var _yield$apiGetTime, result;
    return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_request_user__WEBPACK_IMPORTED_MODULE_2__.apiGetTime)();
        case 2:
          _yield$apiGetTime = _context.sent;
          result = _yield$apiGetTime.result;
          setDateTime(result);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), []);

  // 请求 - 删除用户动态
  var delPersonDynamicList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee3() {
    var getUserInfo;
    return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          getUserInfo = /*#__PURE__*/function () {
            var _ref3 = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
              var _yield$Taro$getStorag, data, q;
              return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorage({
                      key: 'userInfo'
                    });
                  case 3:
                    _yield$Taro$getStorag = _context2.sent;
                    data = _yield$Taro$getStorag.data;
                    _context2.next = 7;
                    return (0,_request_user__WEBPACK_IMPORTED_MODULE_2__.apidelPersonDynamicList)(data.id);
                  case 7:
                    q = _context2.sent;
                    console.log('====================================');
                    console.log('q', q);
                    console.log('====================================');
                    _context2.next = 16;
                    break;
                  case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](0);
                    console.error('获取用户信息失败', _context2.t0);
                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[0, 13]]);
            }));
            return function getUserInfo() {
              return _ref3.apply(this, arguments);
            };
          }();
          getUserInfo();
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })), []);

  // 点击发送请求 - 获取每日时间
  var getNewsMessages = function getNewsMessages() {
    getTime();
  };

  // 点击发送请求 - 删除用户动态
  var useLogin = function useLogin() {
    delPersonDynamicList();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
    altClassName: "min-h-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
      altClassName: "items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
        altClassName: "text-sky-500",
        children: ["\u4ECA\u5929\u662F:", dataTime.weekday]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
        children: ["\u73B0\u5728\u65F6\u95F4\u4E3A:", dataTime.time]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
      altClassName: "h-20 leading-_5rem_ bg-slate-700 text-white",
      onClick: routeGo,
      children: "\u8DF3\u8F6C\u5230news\u9875\u9762"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
      altClassName: "h-20 leading-_5rem_ bg-slate-700 text-white",
      onClick: getNewsMessages,
      children: "\u70B9\u51FB\u83B7\u53D6\u6BCF\u65E5\u65F6\u95F4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
      altClassName: "h-20 leading-_5rem_ bg-slate-700 text-white",
      onClick: useLogin,
      children: "\u70B9\u51FB\u5220\u9664\u7528\u6237\u52A8\u6001"
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map