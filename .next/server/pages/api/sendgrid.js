"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "./pages/api/sendgrid.js":
/*!*******************************!*\
  !*** ./pages/api/sendgrid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey('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');\nasync function sendEmail(req, res) {\n    try {\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: 'rohit.godse@outlook.com',\n            from: \"contact@softwill.in\",\n            subject: \"Softwill Job Application\",\n            html: `<div>\n              <b>Name: </b>${req.body.name}<br/>\n              <b>Email: </b>${req.body.email}<br/>\n              <b>Phone: </b>${req.body.phone}<br/>\n              <b>Designation: </b>${req.body.designation}<br/>\n            </div>`\n        });\n    } catch (error) {\n        console.log(error);\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VuZGdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDQSwrREFBa0IsQ0FBQyxDQUF1RTtlQUUzRUUsU0FBUyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDSiwwREFBYSxDQUFDLENBQUM7WUFDbkJNLEVBQUUsRUFBRSxDQUF5QjtZQUM3QkMsSUFBSSxFQUFFLENBQXFCO1lBQzNCQyxPQUFPLEVBQUUsQ0FBMEI7WUFDbkNDLElBQUksR0FBRztRQU1ULENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFTSxLQUFLLEVBQUUsQ0FBQztRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztRQUNqQixNQUFNLENBQUNYLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDSCxLQUFLLENBQUNJLFVBQVUsSUFBSSxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNMLEtBQUssRUFBRUE7UUFBYyxDQUFDO0lBQzFFLENBQUM7SUFFRCxNQUFNLENBQUNYLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRUU7UUFBT0wsS0FBSyxFQUFFLENBQUU7SUFBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnR3aWxsLXdlYnNpdGUvLi9wYWdlcy9hcGkvc2VuZGdyaWQuanM/NTAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VuZGdyaWQgZnJvbSBcIkBzZW5kZ3JpZC9tYWlsXCI7XG5cbnNlbmRncmlkLnNldEFwaUtleSgnU0cuejR3OHZ0MWZUWW1uWFRUbkkyaHRaZy5PNHI3Y1hBaVdoYjF1MlBpdkxjeHVFcVBxRVVERkhsdzBQUTV3MXBrVUpzJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbChyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGF3YWl0IHNlbmRncmlkLnNlbmQoe1xuICAgICAgdG86ICdyb2hpdC5nb2RzZUBvdXRsb29rLmNvbScsIC8vIFlvdXIgZW1haWwgd2hlcmUgeW91J2xsIHJlY2VpdmUgZW1haWxzXG4gICAgICBmcm9tOiBcImNvbnRhY3RAc29mdHdpbGwuaW5cIiwgLy8geW91ciB3ZWJzaXRlIGVtYWlsIGFkZHJlc3MgaGVyZVxuICAgICAgc3ViamVjdDogXCJTb2Z0d2lsbCBKb2IgQXBwbGljYXRpb25cIixcbiAgICAgIGh0bWw6IGA8ZGl2PlxuICAgICAgICAgICAgICA8Yj5OYW1lOiA8L2I+JHtyZXEuYm9keS5uYW1lfTxici8+XG4gICAgICAgICAgICAgIDxiPkVtYWlsOiA8L2I+JHtyZXEuYm9keS5lbWFpbH08YnIvPlxuICAgICAgICAgICAgICA8Yj5QaG9uZTogPC9iPiR7cmVxLmJvZHkucGhvbmV9PGJyLz5cbiAgICAgICAgICAgICAgPGI+RGVzaWduYXRpb246IDwvYj4ke3JlcS5ib2R5LmRlc2lnbmF0aW9ufTxici8+XG4gICAgICAgICAgICA8L2Rpdj5gLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXJyb3I6IFwiXCIgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRFbWFpbDsiXSwibmFtZXMiOlsic2VuZGdyaWQiLCJzZXRBcGlLZXkiLCJzZW5kRW1haWwiLCJyZXEiLCJyZXMiLCJzZW5kIiwidG8iLCJmcm9tIiwic3ViamVjdCIsImh0bWwiLCJib2R5IiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJkZXNpZ25hdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/sendgrid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/sendgrid.js"));
module.exports = __webpack_exports__;

})();