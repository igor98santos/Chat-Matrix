"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"30a5a40f32de958f\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction Titulo(props) {\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"8b2ce81144269f4e\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8b2ce81144269f4e\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900], \";\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Titulo;\n//component react\n//function HomePage() {\n// jsx\n//   return (\n//       <div>\n//          <GlobalStyle />\n//         <Titulo tag=\"h2\">Boa Vindas de volta!</Titulo>\n//         <h1></h1>\n//        <h2>Discord - Alura Matrix</h2>\n//           <style jsx>{'h1{color:red;}'}\n//            </style>\n//      </div>\n// )\n//}\n//export default HomePage\nfunction PaginaInicial() {\n    _s();\n    //const username = 'igor98santos';\n    /* essa variavel é a responsavel por setar o valor na linha 109 a 133 */ var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_3___default().useState('igor98santos'), 2), username = ref[0], setusername = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_4__.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: username,\n                                    onChange: function onChange(event) {\n                                        console.log('usuario digitou', event.target.value);\n                                        //onde ta o valor\n                                        var valor = event.target.value;\n                                        //Trocar o valor da variavel\n                                        //através do react e avise que presisa\n                                        setusername(valor);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                                    lineNumber: 172,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                            lineNumber: 150,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Chat Matrix\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PaginaInicial, \"BxOPnonRAmpX0/A8MTODqz4pnV0=\");\n_c2 = PaginaInicial;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Titulo\");\n$RefreshReg$(_c2, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBRSxDQUFDO2dDQUNQQyxTQUFTLEVBQUUsQ0FBTzs0QkFDdEIsQ0FBQzs7NEdBRUE1RCx1REFBSztvQ0FDRmdCLFVBQVUsRUFBRSxDQUFDO3dDQUNUZSxZQUFZLEVBQUUsQ0FBSzt3Q0FDbkJNLFlBQVksRUFBRSxDQUFNO29DQUN4QixDQUFDO29DQUNEd0IsR0FBRyxFQUFHLENBQW1CLHFCQUFXLE1BQUksQ0FBYi9DLFFBQVEsRUFBQyxDQUFJOzs7Ozs7NEdBRTNDaEIsc0RBQUk7b0NBQ0R3QyxPQUFPLEVBQUMsQ0FBTztvQ0FDZnRCLFVBQVUsRUFBRSxDQUFDO3dDQUNUdUIsS0FBSyxFQUFFckMsb0VBQW9DO3dDQUMzQ2tCLGVBQWUsRUFBRWxCLG9FQUFvQzt3Q0FDckQ4QixPQUFPLEVBQUUsQ0FBVTt3Q0FDbkJELFlBQVksRUFBRSxDQUFRO29DQUMxQixDQUFDOzhDQUVBakIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQyxDQUFDO0dBM0h1QkYsYUFBYTtNQUFiQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cydcclxuaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xyXG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snOTAwJ119O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuLy9jb21wb25lbnQgcmVhY3RcclxuLy9mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuLy8ganN4XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbi8vICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYSBWaW5kYXMgZGUgdm9sdGEhPC9UaXR1bG8+XHJcbi8vICAgICAgICAgPGgxPjwvaDE+XHJcbi8vICAgICAgICA8aDI+RGlzY29yZCAtIEFsdXJhIE1hdHJpeDwvaDI+XHJcbi8vICAgICAgICAgICA8c3R5bGUganN4PnsnaDF7Y29sb3I6cmVkO30nfVxyXG5cclxuLy8gICAgICAgICAgICA8L3N0eWxlPlxyXG4vLyAgICAgIDwvZGl2PlxyXG4vLyApXHJcbi8vfVxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gICAgLy9jb25zdCB1c2VybmFtZSA9ICdpZ29yOThzYW50b3MnO1xyXG4gICAgLyogZXNzYSB2YXJpYXZlbCDDqSBhIHJlc3BvbnNhdmVsIHBvciBzZXRhciBvIHZhbG9yIG5hIGxpbmhhIDEwOSBhIDEzMyAqL1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXR1c2VybmFtZV0gPSByZWFjdC51c2VTdGF0ZSgnaWdvcjk4c2FudG9zJyk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4czogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXN1YXJpbyBkaWdpdG91JyxldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbmRlIHRhIG8gdmFsb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hdHJhdsOpcyBkbyByZWFjdCBlIGF2aXNlIHF1ZSBwcmVzaXNhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsInJlYWN0IiwiYXBwQ29uZmlnIiwiR2xvYmFsU3R5bGUiLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0dXNlcm5hbWUiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImFzIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWxvciIsImxhYmVsIiwiZnVsbFdpZHRoIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});