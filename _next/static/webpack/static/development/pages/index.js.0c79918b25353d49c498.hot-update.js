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

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavCard, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2992618908" + " " + 'cardcontainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.state.cards.map(function (card) {
        return __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
          href: card.href,
          key: card.key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("div", {
          title: card.key,
          className: "jsx-2992618908" + " " + "homecard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("h1", {
          className: "jsx-2992618908",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, card.header), __jsx("h2", {
          className: "jsx-2992618908",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-2992618908",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, card.desc))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2992618908",
        __self: this
      }, ".cardcontainer.jsx-2992618908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.homecard.jsx-2992618908{float:left;wrap:flex;background:slategray;box-shadow:0 5px 5px slategray;margin:10px;width:400px;height:240px;cursor:pointer;border-radius:5px 5px 0 0;line-height:240px;}.homecard.jsx-2992618908:hover{background:slateblue;box-shadow:0 5px 10pt darkslateblue;-webkit-transform:translateY(-1%);-ms-transform:translateY(-1%);transform:translateY(-1%);border-bottom:5pt solid white;-webkit-transition:0.2s linear;transition:0.2s linear;}.homecard.jsx-2992618908:hover h1.jsx-2992618908{color:rgb(0,25,0);background:whitesmoke;}h1.jsx-2992618908{position:relative;text-align:left;padding:5px 0 5px 20px;font-size:28px;font-family:'Major Mono Display',monospace;top:0;color:whitesmoke;background:rgb(0,25,0);border-radius:5px 5px 0 0;}h2.jsx-2992618908{color:whitesmoke;font-size:22px;font-family:'Livvic',sans-serif;font-weight:200;text-align:center;position:relative;}span.jsx-2992618908{display:inline-block;vertical-align:middle;line-height:160px;}@media only screen and (max-width:600px){.homecard.jsx-2992618908{height:20vh;}span.jsx-2992618908{line-height:10vh;}.cardcontainer.jsx-2992618908{margin-top:12vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccmVhY3QtcG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZDYXJkc1xcTmF2Q2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQjRCLEFBR3NDLEFBS0YsQUFZVSxBQVNELEFBS0YsQUFZRCxBQVFJLEFBUUwsQUFJSyxBQUlELFdBN0RWLENBc0RWLElBUUEsQ0F4QmUsQUFvQmYsQ0FyQ3NCLEFBS04sR0F6QkssQUFXZSxBQWtDZCxXQVBXLEVBWlYsTUFMM0IsRUFwQm1DLENBNkNiLGNBbENRLEFBZVgsSUFvQm5CLEdBUm9CLFFBWDRCLENBMUJoQyxDQVJHLE1BOENHLEtBckNOLFlBQ0MsQ0FxQ0ssWUFwQ0gsS0F3QlQsQ0FhVixLQVpxQixJQXhCUyxNQVhILE9Bb0NFLFNBbEJLLElBTlosVUF5QlEsUUF4QjlCLFFBTzJCLFVBbUIzQiwyQ0F0Q0EsQ0FvQkEiLCJmaWxlIjoiRDpcXHByb2plY3RzXFxyZWFjdC1wb3J0Zm9saW9cXGNvbXBvbmVudHNcXE5hdkNhcmRzXFxOYXZDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IENhcmRsaXN0IGZyb20gXCIuL2NhcmRsaXN0XCJcblxuXG5cbmNsYXNzIE5hdkNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjYXJkczogQ2FyZGxpc3RcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRjb250YWluZXInPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcmRzLm1hcCgoY2FyZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y2FyZC5ocmVmfSBrZXk9e2NhcmQua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZWNhcmRcIiB0aXRsZT17Y2FyZC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y2FyZC5oZWFkZXJ9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4+e2NhcmQuZGVzY308L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwOiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2xhdGVncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHNsYXRlZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBwdCBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHQgc29saWQgd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmhvbWVjYXJkOmhvdmVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMjUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGl2dmljJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNhcmQ7Il19 */\n/*@ sourceURL=D:\\projects\\react-portfolio\\components\\NavCards\\NavCard.js */"));
    }
  }]);

  return NavCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavCard);

/***/ })

})
//# sourceMappingURL=index.js.0c79918b25353d49c498.hot-update.js.map