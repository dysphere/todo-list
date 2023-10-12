"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todos"],{

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectFactory: () => (/* binding */ projectFactory),
/* harmony export */   todoFactory: () => (/* binding */ todoFactory)
/* harmony export */ });


const todoFactory = (title, description, dueDate, priority, completion) => {
    const priorityArray = ["Low", "Medium", "High"]
    const changePriority = (n) => {
        priority = priorityArray[n]
    }
    const changeCompletion = () => {
        if (completion === true) {
            completion = false
        }
        else {
            completion = true
        }
    }
    return {title, description, dueDate, priority, completion,
            changePriority, changeCompletion};
}

const projectFactory = (title, description) => {
    let todoArray = []

    return {title, description, todoArray};
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todos.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tICdkYXRlLWZucy9mb3JtYXRSZWxhdGl2ZSdcblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGlvbikgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5QXJyYXkgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobikgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IHByaW9yaXR5QXJyYXlbbl1cbiAgICB9XG4gICAgY29uc3QgY2hhbmdlQ29tcGxldGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBsZXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbXBsZXRpb24gPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tcGxldGlvbiA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRpb24sXG4gICAgICAgICAgICBjaGFuZ2VQcmlvcml0eSwgY2hhbmdlQ29tcGxldGlvbn07XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGxldCB0b2RvQXJyYXkgPSBbXVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9BcnJheX07XG59XG5cblxuZXhwb3J0IHt0b2RvRmFjdG9yeSwgcHJvamVjdEZhY3Rvcnl9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9