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
        if (completion == true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tICdkYXRlLWZucy9mb3JtYXRSZWxhdGl2ZSdcblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGlvbikgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5QXJyYXkgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobikgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IHByaW9yaXR5QXJyYXlbbl1cbiAgICB9XG4gICAgY29uc3QgY2hhbmdlQ29tcGxldGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBsZXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29tcGxldGlvbiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wbGV0aW9uID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGlvbixcbiAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VDb21wbGV0aW9ufTtcbn1cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgbGV0IHRvZG9BcnJheSA9IFtdXG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgdG9kb0FycmF5fTtcbn1cblxuXG5leHBvcnQge3RvZG9GYWN0b3J5LCBwcm9qZWN0RmFjdG9yeX0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=