(this["webpackJsonpmywebsite"] = this["webpackJsonpmywebsite"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/App.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/sass/App.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/homepage.jpeg */ "./src/assets/homepage.jpeg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".navbar {\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  min-width: 100vw;\n  /* Hamburger Lines - Top & Bottom */\n  /* Moves Line Down */\n  /* Turns Lines Into X */ }\n  .navbar__brand-title {\n    font-weight: 400;\n    letter-spacing: 0;\n    padding-left: 20px;\n    font-size: calc(24px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680));\n    text-align: left;\n    text-transform: uppercase; }\n  .navbar__links {\n    font-weight: 200;\n    font-size: calc(16px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680));\n    text-align: left;\n    padding-right: 20px; }\n  .navbar__list {\n    display: flex;\n    margin: 0;\n    padding: 0; }\n  .navbar__link {\n    list-style: none;\n    display: block;\n    text-decoration: none;\n    color: #ffffff;\n    padding: 0.2rem 25px; }\n  .navbar .linkActive {\n    border: 2px solid #6969f6;\n    border-radius: 20px; }\n  .navbar__current {\n    border-bottom: 4px solid grey; }\n  .navbar .toggler {\n    position: absolute;\n    top: 0.2rem;\n    right: 1.5rem;\n    z-index: 2;\n    width: 50px;\n    height: 50px;\n    opacity: 0; }\n  .navbar .hamburger {\n    position: absolute;\n    right: 1.5rem;\n    z-index: 1;\n    width: 60px;\n    height: 60px;\n    padding: 0.5rem;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer; }\n  .navbar .hamburger > div {\n    position: relative;\n    flex: none;\n    width: 100%;\n    height: 2px;\n    background: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.4s ease; }\n  .navbar .hamburger > div:before,\n  .navbar .hamburger > div:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    top: -10px;\n    width: 100%;\n    height: 2px;\n    background: inherit; }\n  .navbar .hamburger > div::after {\n    top: 10px; }\n  .navbar input[type=\"checkbox\"]:checked + .hamburger > div {\n    transform: rotate(135deg); }\n  .navbar .toggler:checked + .hamburger > div:before,\n  .navbar .toggler:checked + .hamburger > div:after {\n    top: 0;\n    transform: rotate(90deg); }\n  .navbar .toggler:checked ~ .navbar__links {\n    display: flex; }\n\n@media screen and (max-width: 850px) {\n  .navbar {\n    flex-direction: column;\n    align-items: flex-start;\n    background-color: rgba(0, 0, 0, 0.6); }\n    .navbar .hamburger {\n      display: flex;\n      padding-bottom: 20px;\n      padding-top: 20px; }\n    .navbar__brand-title {\n      font-size: calc(22px + 6 * ((100vw - 320px) / 680));\n      line-height: calc(22px + 6 * ((100vw - 320px) / 680));\n      padding-bottom: 20px;\n      padding-top: 20px; }\n      .navbar__brand-title img {\n        max-width: 90%; }\n    .navbar__links {\n      display: none;\n      width: 100%;\n      font-size: calc(16px + 6 * ((100vw - 320px) / 680));\n      line-height: calc(32px + 6 * ((100vw - 320px) / 680)); }\n    .navbar__list {\n      width: 100%;\n      flex-direction: column; }\n    .navbar__link {\n      text-align: left;\n      padding: 20px;\n      border-top: 2px solid #858585 !important;\n      border-radius: unset; }\n    .navbar .linkActive {\n      border: unset;\n      border-top: 2px solid #858585 !important;\n      border-radius: unset !important; }\n    .navbar__link:hover {\n      border: unset;\n      border-radius: unset; } }\n\n.home {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/cover; }\n  .home__socialMedia {\n    padding-top: 30px; }\n  .home .socialMediaIcon {\n    color: #6969f6;\n    font-size: calc(30px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(32px + 6 * ((100vw - 320px) / 680)); }\n  .home .info-text {\n    padding: 20px 20px 20px 0;\n    text-align: center; }\n  .home .item {\n    align-items: center;\n    justify-content: center;\n    max-width: 100vw;\n    margin: 0 auto;\n    padding: 0 40px;\n    color: #ffffff; }\n  .home h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-weight: bolder;\n    font-size: calc(35px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(35px + 1 * ((100vw - 320px) / 680)); }\n  .home h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-weight: 600;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(35px + 1 * ((100vw - 320px) / 680)); }\n  .home p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .home img {\n    margin: 30px 90px;\n    max-width: 500px; }\n\n.cardContainer {\n  margin: 120px; }\n\n@media screen and (max-width: 500px) {\n  .home img {\n    margin-left: 0 !important;\n    max-width: 300px; }\n  .home .item {\n    max-width: 90vw;\n    padding-left: 20px; }\n  .home h2 {\n    font-size: calc(16px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(22px + 1 * ((100vw - 320px) / 680)); }\n  .home p {\n    margin-top: 0 !important; }\n  .home img {\n    max-width: 90%; } }\n\n@keyframes up-down {\n  0% {\n    transform: translateY(5px); }\n  100% {\n    transform: translateY(-5px); } }\n\n@media screen and (min-width: 550px) and (max-width: 768px) {\n  .home img {\n    margin-left: 0 !important; }\n  .home .item {\n    padding-bottom: 35px; } }\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .home img {\n    max-width: 100%; } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background: #f1f1f1;\n  color: #fff;\n  height: 100vh; }\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  height: 100vh; }\n\n#app {\n  width: 100%;\n  height: 100%; }\n\n.root {\n  min-width: 300px; }\n\n.about {\n  height: auto;\n  color: #1c1c1c;\n  background: #ffffff;\n  padding: 20px; }\n  .about .topography {\n    color: #1c1c1c;\n    padding: 20px;\n    text-align: left;\n    font-weight: 500;\n    letter-spacing: 1;\n    font-size: calc(52px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680)); }\n  .about .card {\n    background-color: #d9d9d9;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    width: 100%;\n    margin: 40px; }\n  .about .item {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    max-width: 1100px;\n    margin: 10px auto;\n    color: #1c1c1c;\n    margin-bottom: 2vh; }\n  .about img {\n    margin: 50px 50px 50px 0;\n    padding-left: 40px;\n    max-width: 80%; }\n  .about .info-text {\n    padding: 20px 20px 20px 0;\n    padding-left: 40px;\n    text-align: center;\n    color: #1c1c1c; }\n  .about h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .about h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .about p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n\n@media screen and (max-width: 900px) {\n  .about .container {\n    flex-direction: column;\n    align-content: space-between;\n    justify-items: center;\n    text-align: left; }\n  .about .info-text {\n    text-align: left; }\n  .about .img {\n    max-width: 200px !important;\n    margin-bottom: 20px; } }\n\n.contact {\n  height: auto;\n  color: #1c1c1c;\n  background: #ffffff;\n  padding: 20px; }\n  .contact .topography {\n    color: #1c1c1c;\n    padding: 20px;\n    text-align: left;\n    font-weight: 500;\n    letter-spacing: 1;\n    font-size: calc(52px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680)); }\n  .contact .card {\n    background-color: #d9d9d9;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    width: 100%;\n    margin: 40px; }\n  .contact .item {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    max-width: 1100px;\n    margin: 10px auto;\n    color: #1c1c1c;\n    margin-bottom: 2vh; }\n  .contact img {\n    margin: 50px 50px 50px 0;\n    padding-left: 40px;\n    max-width: 80%; }\n  .contact .info-text {\n    padding: 20px 20px 20px 0;\n    padding-left: 40px;\n    text-align: center;\n    color: #1c1c1c; }\n  .contact h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .contact h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .contact p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n\n@media screen and (max-width: 900px) {\n  .contact .container {\n    flex-direction: column;\n    align-content: space-between;\n    justify-items: center;\n    text-align: left; }\n  .contact .info-text {\n    text-align: left; }\n  .contact .img {\n    max-width: 200px !important;\n    margin-bottom: 20px; } }\n\n.menu {\n  height: auto;\n  color: #1c1c1c;\n  background: red;\n  padding: 20px; }\n  .menu .topography {\n    color: #1c1c1c;\n    padding: 20px;\n    text-align: left;\n    font-weight: 500;\n    letter-spacing: 1;\n    font-size: calc(52px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680)); }\n  .menu .card {\n    background-color: #d9d9d9;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    width: 100%;\n    margin: 40px; }\n  .menu .item {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    max-width: 1100px;\n    margin: 10px auto;\n    color: #1c1c1c;\n    margin-bottom: 2vh; }\n  .menu img {\n    margin: 50px 50px 50px 0;\n    padding-left: 40px;\n    max-width: 80%; }\n  .menu .info-text {\n    padding: 20px 20px 20px 0;\n    padding-left: 40px;\n    text-align: center;\n    color: #1c1c1c; }\n  .menu h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .menu h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .menu p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n\n@media screen and (max-width: 900px) {\n  .menu .container {\n    flex-direction: column;\n    align-content: space-between;\n    justify-items: center;\n    text-align: left; }\n  .menu .info-text {\n    text-align: left; }\n  .menu .img {\n    max-width: 200px !important;\n    margin-bottom: 20px; } }\n\n.footer {\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 25vh;\n  margin: 20px;\n  max-width: 100vw;\n  padding: 35px; }\n  .footer h1 {\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .footer h2 {\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .footer p {\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .footer .socialMediaIcon {\n    font-size: calc(30px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 6 * ((100vw - 320px) / 680)); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _containers_AuthContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/AuthContainer */ "./src/containers/AuthContainer.js");
/* harmony import */ var _sass_App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sass/App.scss */ "./src/sass/App.scss");
/* harmony import */ var _sass_App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_App_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/App.js";







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    component: _containers_AuthContainer__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/homepage.jpeg":
/*!**********************************!*\
  !*** ./src/assets/homepage.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/homepage.3b1a62a0.jpeg";

/***/ }),

/***/ "./src/components/Auth/MainAuth.js":
/*!*****************************************!*\
  !*** ./src/components/Auth/MainAuth.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants_AppRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/AppRoute */ "./src/constants/AppRoute.js");
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/Home */ "./src/components/Pages/Home.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Auth/MainAuth.js";





const MainAuth = () => {
  let location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _Pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainAuth);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/SocialMedia */ "./src/components/Pages/SocialMedia.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Footer.js";




function Footer() {
  return (
    /*#__PURE__*/
    // <section className="footer" id="">
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      className: "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      direction: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-between",
      alignItems: "flex-start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      item: true,
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      className: "socialMediaIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, "Social Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pages_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      item: true,
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, "Fouratefive is a buzzing neighbourhood brunch spot in Surry Hills")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      item: true,
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      container: true,
      className: "info-text ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      item: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, "PHONE + EMAIL")))))))) // </section>

  );
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants_AppRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/AppRoute */ "./src/constants/AppRoute.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Nav.js";





function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar__brand-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, " FOUR ATE FIVE ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "toggler",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hamburger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navicon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar__links ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar__list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "navbar__link",
    activeClass: "navbar__current",
    to: "landingPage",
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "HOME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "navbar__link",
    activeClass: "navbar__current",
    to: "menu",
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "MENU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "navbar__link",
    activeClass: "navbar__current",
    to: "aboutPage",
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "ABOUT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "navbar__link",
    activeClass: "navbar__current",
    to: "contactUs",
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "CONTACT US"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Pages/AboutPage.js":
/*!*******************************************!*\
  !*** ./src/components/Pages/AboutPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Pages/AboutPage.js";



const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "about",
    id: "aboutPage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    spacing: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    md: 7,
    lg: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 22
    }
  }, " Fouratefive is a buzzing neighbourhood brunch spot in Surry Hills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 23
    }
  }, " Since we opened our doors in 2009, we\u2019ve been obsessed by creating a place that you would want to visit everyday. It\u2019s all about the casual atmosphere, super friendly service, satisfying dishes & Single O coffee made with love & care!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }), " In 2015, we renovated the caf\xE9, maintaining the open floor plan and deciding to focus more on the Israeli style menu aligning with our Jewish heritage! Nothing beats a Jewish grandmothers cooking!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 28
    }
  }), " Earlier this year (2020), we spruced it up a little more with some funky new wall tiles and the addition of some great artworks by local Surry Hills artists.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }), "The ultimate Jew food must-trys are the \u2018shakshuka\u2019 \u2013 eggs baked in a rich tomato & red pepper sauce, served w feta & homemade pita, the \u2018485 breakfast plate\u2019 \u2013 falafel, boiled egg, chilli hummus, amba, pickles, chopped salad, chilli, tahini & pita, the \u2018potato latkas\u2019 and the homemade chickpea falafel.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    md: 3,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    className: "info-text ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "PHONE + EMAIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "(02) 9698 6485", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 42
    }
  }), "info@fouratefive.com ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 26
    }
  }, "485 Crown Street, Surry Hills, NSW, 2010, Australia ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "Monday - Friday - 7am-2.30pm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 56
    }
  }), "Saturday - 7:30am - 2.30pm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 55
    }
  }), "Sunday - 8:00am - 2:30pm")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Pages/ContactUs.js":
/*!*******************************************!*\
  !*** ./src/components/Pages/ContactUs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Pages/ContactUs.js";



const ContactUs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "contact",
    id: "contactUs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "contact us in progress"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

/***/ }),

/***/ "./src/components/Pages/Home.js":
/*!**************************************!*\
  !*** ./src/components/Pages/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage */ "./src/components/Pages/LandingPage.js");
/* harmony import */ var _AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutPage */ "./src/components/Pages/AboutPage.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/components/Pages/Menu.js");
/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactUs */ "./src/components/Pages/ContactUs.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Pages/Home.js";






const Home = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AboutPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactUs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Pages/LandingPage.js":
/*!*********************************************!*\
  !*** ./src/components/Pages/LandingPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Pages/LandingPage.js";



function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "home",
    id: "landingPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    direction: "column",
    justify: "center",
    alignItems: "center",
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 10,
    md: 12,
    lg: 12,
    justify: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "center",
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    direction: "column",
    justify: "space-evenly",
    className: "info-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, " SURRY HILLS LOCAL "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "SINGLE O COFFEE, MIDDLE - EASTERN INSPIRED FOOD, HEARTY SANDWICHES, HEALTHY SALADS, SUPERFOOD SMOOTHIES, HOME MADE CAKES BREAKFAST & LUNCH, 7 DAYS A WEEK.", " "), " "), " "), " "), " "), " "), " "), " ") //  <div className="home" id="landingPage">
  // <div>
  //     <div className="container">
  //       <div className="containSection">
  //         <div className="home__statement_text">
  //           <h2>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</h2>
  //         </div>
  //         <div className="home__socialMedia">
  //           <SocialMedia />
  //         </div>
  //       </div>
  //       <div className="imageSection">
  //         <img src={image} alt="Logo" className="logo_image" width="80%" />
  //       </div>
  //     </div>
  //   </div>
  //   <div className="slider">
  //   </div>
  // </div>
  // <div >
  //   <div className="home">
  //     <div className="container">
  //       <div className="home__statement_text">
  //         <h2>
  //           Mobile and Web Application Developer
  //       </h2>
  //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase
  //         </p>
  //         <div className="home__socialMedia">
  //           <SocialMedia />
  //         </div>
  //       </div>
  //       {/* <div className="xx">
  //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</p>
  //       </div> */}
  //     </div>
  //   </div >
  //   <div className="image" >
  //     {/* <img src={image} /> */}
  //   </div>
  // </div>
  ;
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Pages/Menu.js":
/*!**************************************!*\
  !*** ./src/components/Pages/Menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Pages/Menu.js";



const Menu = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "menu",
    id: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Menu on progress"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Pages/SocialMedia.js":
/*!*********************************************!*\
  !*** ./src/components/Pages/SocialMedia.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/components/Pages/SocialMedia.js";




function SocialMedia() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    justify: "left",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    style: {
      color: "#0096EF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    className: "socialMediaIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    style: {
      color: "#20A464"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "213123313",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Call"], {
    className: "socialMediaIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    style: {
      color: "#7f1734"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "213123313",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    className: "socialMediaIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./src/constants/AppRoute.js":
/*!***********************************!*\
  !*** ./src/constants/AppRoute.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pages_LandingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pages/LandingPage */ "./src/components/Pages/LandingPage.js");
/* harmony import */ var _components_Pages_AboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pages/AboutPage */ "./src/components/Pages/AboutPage.js");
/* harmony import */ var _components_Pages_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pages/Menu */ "./src/components/Pages/Menu.js");
/* harmony import */ var _components_Pages_ContactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pages/ContactUs */ "./src/components/Pages/ContactUs.js");




const HOME = "/";
const CONTACTUS = "/contactUs";
const ABOUT = "/aboutPage";
const MENU = "/menu";
const PATHS = [{
  exact: true,
  link: HOME,
  text: "Home",
  component: _components_Pages_LandingPage__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  link: MENU,
  text: "Menu",
  component: _components_Pages_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  link: ABOUT,
  text: "About",
  component: _components_Pages_AboutPage__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  link: _components_Pages_ContactUs__WEBPACK_IMPORTED_MODULE_3__["default"],
  text: "ContactUs",
  component: _components_Pages_ContactUs__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (PATHS);

/***/ }),

/***/ "./src/containers/AuthContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/AuthContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_MainAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Auth/MainAuth */ "./src/components/Auth/MainAuth.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/containers/AuthContainer.js";



class AuthContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Auth_MainAuth__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AuthContainer);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/aakashbista/Desktop/suman project/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/sass/App.scss":
/*!***************************!*\
  !*** ./src/sass/App.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/App.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/aakashbista/Desktop/suman project/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/aakashbista/Desktop/suman project/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/aakashbista/Desktop/suman project/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map