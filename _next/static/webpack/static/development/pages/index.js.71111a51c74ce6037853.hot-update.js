webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavCards/NavCard.js":
/*!****************************************!*\
  !*** ./components/NavCards/NavCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Link */ "./components/Link.js");
/* harmony import */ var _cardlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cardlist */ "./components/NavCards/cardlist.js");







var _jsxFileName = "D:\\projects\\react-portfolio\\components\\NavCards\\NavCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var NavCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavCard, _React$Component);

  function NavCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      cards: _cardlist__WEBPACK_IMPORTED_MODULE_10__["default"]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "everyOther", function (index) {
      if (index % 2 === 0) {
        return 'red';
      } else {
        return 'yellow';
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-2272704859" + " " + 'cardcontainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.state.cards.map(function (card) {
        return __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
          href: card.href,
          key: card.key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("div", {
          title: card.key,
          style: {
            backgroundColor: "".concat(_this2.everyOther(card.indexOf(card)))
          },
          className: "jsx-2272704859" + " " + "homecard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx("h1", {
          className: "jsx-2272704859",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, card.header), __jsx("h2", {
          className: "jsx-2272704859",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-2272704859",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, card.desc))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2272704859",
        __self: this
      }, ".cardcontainer.jsx-2272704859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.homecard.jsx-2272704859{float:left;wrap:flex;box-shadow:0 5px 5px slategray;margin:10px;width:400px;height:240px;cursor:pointer;border-radius:5px 5px 0 0;line-height:240px;}.homecard.jsx-2272704859:hover{box-shadow:0 5px 10pt darkslateblue;-webkit-transform:translateY(-1%);-ms-transform:translateY(-1%);transform:translateY(-1%);border-bottom:5pt solid white;-webkit-transition:0.2s linear;transition:0.2s linear;}.homecard.jsx-2272704859:hover h1.jsx-2272704859{color:rgb(0,25,0);background:whitesmoke;}h1.jsx-2272704859{position:relative;text-align:left;padding:5px 0 5px 20px;font-size:28px;font-family:'Major Mono Display',monospace;top:0;color:whitesmoke;background:rgb(0,25,0);border-radius:5px 5px 0 0;}h2.jsx-2272704859{color:whitesmoke;font-size:22px;font-family:'Livvic',sans-serif;font-weight:200;text-align:center;position:relative;}span.jsx-2272704859{display:inline-block;vertical-align:middle;line-height:160px;}@media only screen and (max-width:600px){.homecard.jsx-2272704859{height:20vh;}span.jsx-2272704859{line-height:10vh;}.cardcontainer.jsx-2272704859{margin-top:12vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccmVhY3QtcG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZDYXJkc1xcTmF2Q2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjRCLEFBR3NDLEFBS0YsQUFXeUIsQUFRaEIsQUFLRixBQVlELEFBUUksQUFRTCxBQUlLLEFBSUQsV0EzRFYsQ0FvRFYsSUFRQSxDQXhCZSxBQW9CZixDQXJDc0IsQUFLTixHQXZCZSxBQTJDVCxXQVBXLEVBWlYsRUFkRyxJQVM5QixHQXlCc0IsU0EzQ04sS0F3QkcsSUFvQm5CLEdBM0NnQixBQW1DSSxRQVg0QixFQWhDN0IsRUFTRixJQW1DSyxTQWxDSCxTQW1DRyxNQWxDUSxXQXNCcEIsQ0FhVixLQVpxQixLQWpCYSxJQUxaLENBWEssT0FrQ0UsVUF0QjdCLFFBTTJCLEtBaUJHLDBCQUU5Qix1QkFsQkEsb0JBbEJBIiwiZmlsZSI6IkQ6XFxwcm9qZWN0c1xccmVhY3QtcG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZDYXJkc1xcTmF2Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBDYXJkbGlzdCBmcm9tIFwiLi9jYXJkbGlzdFwiXG5cblxuXG5jbGFzcyBOYXZDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY2FyZHM6IENhcmRsaXN0XG4gICAgfVxuXG4gICAgZXZlcnlPdGhlciA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXJkcy5tYXAoKGNhcmQpID0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NhcmQuaHJlZn0ga2V5PXtjYXJkLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVjYXJkXCIgdGl0bGU9e2NhcmQua2V5fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogYCR7dGhpcy5ldmVyeU90aGVyKGNhcmQuaW5kZXhPZihjYXJkKSl9YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y2FyZC5oZWFkZXJ9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4+e2NhcmQuZGVzY308L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwOiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHNsYXRlZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBwdCBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHQgc29saWQgd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmhvbWVjYXJkOmhvdmVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMjUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGl2dmljJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNhcmQ7Il19 */\n/*@ sourceURL=D:\\projects\\react-portfolio\\components\\NavCards\\NavCard.js */"));
    }
  }]);

  return NavCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavCard);

/***/ })

})
//# sourceMappingURL=index.js.71111a51c74ce6037853.hot-update.js.map