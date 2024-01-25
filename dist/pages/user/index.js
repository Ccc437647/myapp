"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/user/index!./src/pages/user/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/user/index!./src/pages/user/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_userAvatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/userAvatar.png */ "./src/static/userAvatar.png");
/* harmony import */ var _components_cross_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cross-platform */ "./src/components/cross-platform/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);











function User() {
  // 用户信息数据
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      account: 'This is RN project ~'
    }),
    _useState2 = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    userInfo = _useState2[0],
    setUserInfo = _useState2[1];
  var menuList = ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'];
  var env = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getEnv();
  // 设置单行省略号(  )
  var textEllipsis = env == 'WEAPP' ? 'whitespace-nowrap overflow-ellipsis truncate' : '';

  // 获取本地存储的 userInfo 数据
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var getUserInfo = /*#__PURE__*/function () {
      var _ref = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
        var _yield$Taro$getStorag, data;
        return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorage({
                key: 'userInfo'
              });
            case 3:
              _yield$Taro$getStorag = _context.sent;
              data = _yield$Taro$getStorag.data;
              setUserInfo(function (prevUserInfo) {
                return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, prevUserInfo), {}, {
                  account: data.account
                });
              });
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error('获取用户信息失败', _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));
      return function getUserInfo() {
        return _ref.apply(this, arguments);
      };
    }();
    getUserInfo();
  }, []); // 空依赖数组表示只在组件挂载时执行一次

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
    altClassName: "min-h-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
      altClassName: "relative bg-slate-400 h-36 flex flex-row  items-center p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.Image, {
        altClassName: "rounded-full w-24 h-24",
        src: _static_userAvatar_png__WEBPACK_IMPORTED_MODULE_2__
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
        altClassName: "text-cyan-300 ml-4 max-w-48   text-xl  ".concat(textEllipsis),
        numberOfLines: 1,
        ellipsizeMode: "tail",
        children: userInfo.account
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
        altClassName: "absolute top-6 right-10 text-red-600 text-2xl",
        children: "\u8BBE\u7F6E"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
      altClassName: "",
      children: menuList.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_3__.View, {
          altClassName: " bg-amber-200 h-20  leading-_5rem_ text-center mb-4",
          children: item
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/user/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/user/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_user_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/user/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/user/index!./src/pages/user/index.tsx");


var config = {"navigationBarTitleText":"个人中心"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_user_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/user/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_user_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/static/userAvatar.png":
/*!***********************************!*\
  !*** ./src/static/userAvatar.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/userAvatar.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/user/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map