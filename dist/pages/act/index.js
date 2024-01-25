"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/act/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/act/index!./src/pages/act/index.tsx":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/act/index!./src/pages/act/index.tsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Act; }
/* harmony export */ });
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cross_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cross-platform */ "./src/components/cross-platform/index.ts");
/* harmony import */ var _request_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request/user */ "./src/request/user.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);












function Act() {
  var _Taro$Current$router;
  // 获取页面路径
  var path = (_Taro$Current$router = (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().Current).router) === null || _Taro$Current$router === void 0 ? void 0 : _Taro$Current$router.path;
  // 用户信息
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      name: '309324904@qq.com',
      password: '123456',
      address: '',
      photoList: []
    }),
    _useState2 = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  // 页面切换 快速清空表单数据
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      // 清空表单数据
      setFormData({
        name: '',
        password: '',
        address: '',
        photoList: []
      });
    };
  }, [path]);

  // 修改姓名
  var nameChangeHandler = function nameChangeHandler(e) {
    setFormData((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, formData), {}, {
      name: e.detail.value
    }));
  };
  // 修改密码
  var passwordChangeHandler = function passwordChangeHandler(e) {
    setFormData((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, formData), {}, {
      password: e.detail.value
    }));
  };
  // 修改收货地址
  var addressChangeHandler = function addressChangeHandler(e) {
    setFormData((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, formData), {}, {
      address: e.detail.value
    }));
  };
  // 点击上传图片
  var chooseImage = /*#__PURE__*/function () {
    var _ref = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
      var _yield$Taro$chooseIma, tempFilePaths;
      return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().chooseImage({
              count: 6,
              // 默认9
              sizeType: ['original', 'compressed'],
              // 可以指定是原图还是压缩图
              sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机
            });
          case 2:
            _yield$Taro$chooseIma = _context.sent;
            tempFilePaths = _yield$Taro$chooseIma.tempFilePaths;
            setFormData(function (prevFormData) {
              return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, prevFormData), {}, {
                photoList: [].concat((0,E_code_myapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(prevFormData.photoList), (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(tempFilePaths))
              });
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function chooseImage() {
      return _ref.apply(this, arguments);
    };
  }();
  // 请求 - 用户登录
  var getLoginMsg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee2() {
    var _yield$apiLogin, code, result;
    return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,_request_user__WEBPACK_IMPORTED_MODULE_3__.apiLogin)(formData.name, formData.password);
        case 2:
          _yield$apiLogin = _context2.sent;
          code = _yield$apiLogin.code;
          result = _yield$apiLogin.result;
          if (!(code !== 200)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", console.log('账户密码错误'));
        case 7:
          // 存储token
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
            key: 'token',
            data: result.token
          });
          // 存储个人信息
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
            key: 'userInfo',
            data: result
          });
          // 跳转到个人中心
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
            url: '/pages/user/index'
          });
          // 清空表单数据
          setFormData({
            name: '',
            password: '',
            address: '',
            photoList: []
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [formData.name, formData.password]);

  // 信息提交 - 用户登录
  var submitForm = /*#__PURE__*/function () {
    var _ref3 = (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee3() {
      return (0,E_code_myapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            getLoginMsg();
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function submitForm() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
    altClassName: "min-h-full px-4 py-10",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Form, {
      altClassName: "",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
        altClassName: "flex flex-row flex-nowrap justify-around items-center mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Text, {
          altClassName: "w-20",
          children: "\u7528\u6237\u540D"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
          maxlength: 20,
          value: formData.name,
          onInput: nameChangeHandler,
          altClassName: "flex-1 border-solid border-2 border-r-slate-600 rounded-3xl pl-8 "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
        altClassName: "flex flex-row flex-nowrap justify-around items-center mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Text, {
          altClassName: "w-20",
          children: "\u5BC6\u7801"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "password",
          password: true,
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          maxlength: 16,
          value: formData.password,
          onInput: passwordChangeHandler,
          altClassName: "flex-1 border-solid border-2 border-r-slate-600 rounded-3xl pl-8 "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
        altClassName: "flex flex-row flex-nowrap justify-around items-center mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Text, {
          altClassName: "w-20",
          children: "\u6536\u8D27\u5730\u5740"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u5730\u5740",
          value: formData.address,
          onInput: addressChangeHandler,
          altClassName: "flex-1 border-solid border-2 border-r-slate-600 rounded-3xl pl-8 "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
        altClassName: "flex flex-row flex-nowrap justify-around items-center mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Text, {
          altClassName: "w-20",
          children: "\u4E0A\u4F20\u56FE\u7247"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
          altClassName: "flex-1  flex-row  flex-wrap flex",
          children: [formData.photoList.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
              altClassName: "  w-20 h-20 mb-0d5 mr-0d5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.Image, {
                altClassName: " w-20 h-20 bg-teal-300 ",
                src: item
              })
            }, index);
          }), formData.photoList.length < 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
            altClassName: "w-20 h-20 bg-red-600",
            onClick: chooseImage,
            children: "+"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cross_platform__WEBPACK_IMPORTED_MODULE_2__.View, {
        type: "submit",
        value: "\u63D0\u4EA4",
        onClick: submitForm,
        altClassName: "bg-yellow-300 rounded-3xl w-32 h-7 leading-7 text-center m-auto text-gray-900 ",
        children: "\u70B9\u51FB\u63D0\u4EA4"
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/act/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/act/index.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_act_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/act/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/act/index!./src/pages/act/index.tsx");


var config = {"navigationBarTitleText":"活动页面"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_act_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/act/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_act_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/act/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map