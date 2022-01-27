"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMesagens = ref1[1];\n    // Sua lógica vai aqui\n    /*\r\n    //usuario\r\n    - Usuario digita no campo textarea\r\n    - Aperta enter para enviar\r\n    - tem que adicionar o text na listagem\r\n\r\n\r\n    //Dev\r\n    - [X] Campo criado\r\n    - [] Vamos usar o onChange usa o useState (ter if para caso seja enter pra limpar a variavel)\r\n    - [] Lista de mensagens\r\n    */ // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        \"lista de mensagens: \",\n                        listaDeMensagens.forEach(mensagemA),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        console.log(event);\n                                        setListaDeMesagens(_toConsumableArray(listaDeMensagens).concat([\n                                            mensagem\n                                        ]));\n                                        setMensagem('');\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"H0mzbjZBr7nZOJcY94qDRv2PjMo=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 109,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n            lineNumber: 108,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    console.log('MessageList', props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: '5px',\n                padding: '6px',\n                marginBottom: '12px',\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: '8px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: '20px',\n                                height: '20px',\n                                borderRadius: '50%',\n                                display: 'inline-block',\n                                marginRight: '8px'\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 155,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: '10px',\n                                marginLeft: '8px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                            lineNumber: 168,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n                    lineNumber: 150,\n                    columnNumber: 17\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n            lineNumber: 138,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Remakker\\\\Documents\\\\GitHub\\\\Aprendendo JavaScript\\\\Aprendendo React\\\\Chat Matrix\\\\pages\\\\chat.js\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekJkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWE7SUFDekIsTUFBTTtRQUVFYyxHQUFHLEVBQUMsQ0FBSTtRQUNSakQsVUFBVSxFQUFFLENBQUM7WUFDVGtELFFBQVEsRUFBRSxDQUFRO1lBQ2xCakQsT0FBTyxFQUFFLENBQU07WUFDZmE7WUFDQUMsSUFBSSxFQUFFLENBQUM7O1lBRVAyQjtRQUNKLENBQUM7O1lBS0dPLEdBQUcsRUFBQyxDQUFJO1lBQ1JqRDtnQkFDSWlCO2dCQUNBSSxPQUFPLEVBQUUsQ0FBSztnQkFDZHFCLFlBQVk7Z0JBQ1pTLEtBQUssRUFBRSxDQUFDO29CQUNKL0M7Z0JBQ0osQ0FBQztZQUNMLENBQUM7OzZGQUVBakIsQ0FBQUEsc0RBQUc7b0JBQ0FhO3dCQUNJMEM7b0JBQ0osQ0FBQzs7OztnQ0FJT0osS0FBSyxvRUFBUTs7OzsyRkFJYkcsQ0FBQUEscURBQUFBLEVBQVc7NEJBQ2YsQ0FBQzs0QkFDRFcsR0FBRyxFQUFHLENBQXNDOzs7Ozs7OENBRS9DaEU7NEJBQUs2RCxHQUFHLEVBQUMsQ0FBUTtzQ0FDYnJELFFBQVEsQ0FBQ3lELEVBQUU7Ozs7Ozs7NEJBR1pyRCxVQUFVLEVBQUUsQ0FBQztnQ0FDVHNEO2dDQUNBQyxNQUFBQSw2REFBaUI7Z0NBQ2pCM0MsS0FBSyxFQUFFbkI7NEJBQ1gsQ0FBQzs0QkFDRHdELEdBQUcsRUFBQyxDQUFNO3NDQUVSLEdBQUcsQ0FBQ08sSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozs7Ozs7OztnQkFHdEM3RCxRQUFRLENBQUM4RCxLQUFLOztXQXhDVjlELFFBQVEsQ0FBQytELEVBQUU7Ozs7Ozs7Ozs7QUE0Q2hDLENBQUM7TUE1RFFaLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgY29uc3QgW2xpc3RhRGVNZW5zYWdlbnMsIHNldExpc3RhRGVNZXNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG4gICAvKlxyXG4gICAgLy91c3VhcmlvXHJcbiAgICAtIFVzdWFyaW8gZGlnaXRhIG5vIGNhbXBvIHRleHRhcmVhXHJcbiAgICAtIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgLSB0ZW0gcXVlIGFkaWNpb25hciBvIHRleHQgbmEgbGlzdGFnZW1cclxuXHJcblxyXG4gICAgLy9EZXZcclxuICAgIC0gW1hdIENhbXBvIGNyaWFkb1xyXG4gICAgLSBbXSBWYW1vcyB1c2FyIG8gb25DaGFuZ2UgdXNhIG8gdXNlU3RhdGUgKHRlciBpZiBwYXJhIGNhc28gc2VqYSBlbnRlciBwcmEgbGltcGFyIGEgdmFyaWF2ZWwpXHJcbiAgICAtIFtdIExpc3RhIGRlIG1lbnNhZ2Vuc1xyXG4gICAgKi9cclxuICAgIC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtbXX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGEgZGUgbWVuc2FnZW5zOiB7bGlzdGFEZU1lbnNhZ2Vucy5mb3JFYWNoKChtZW5zYWdlbUEpKX1cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlzdGFEZU1lc2FnZW5zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxpc3RhRGVNZW5zYWdlbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVuc2FnZW1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0gPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD0naGVhZGluZzUnPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXRcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclZhcmlhbnQ9J25ldXRyYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xvZ291dCdcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlTGlzdCcsIHByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cclxuICAgICAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmFuZXNzYW1ldG9uaW5pLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwidXNlU3RhdGUiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwibGlzdGFEZU1lbnNhZ2VucyIsInNldExpc3RhRGVNZXNhZ2VucyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiZm9yRWFjaCIsIm1lbnNhZ2VtQSIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwiY29uc29sZSIsImxvZyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwiTWVzc2FnZUxpc3QiLCJwcm9wcyIsInRhZyIsIm92ZXJmbG93IiwiaG92ZXIiLCJzcmMiLCJkZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0ZXh0byIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});