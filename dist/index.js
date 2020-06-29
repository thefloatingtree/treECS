(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ecs"] = factory();
	else
		root["ecs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntityAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityAdmin", function() { return _EntityAdmin__WEBPACK_IMPORTED_MODULE_0__["EntityAdmin"]; });

/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "System", function() { return _System__WEBPACK_IMPORTED_MODULE_1__["System"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityAdmin", function() { return EntityAdmin; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



class EntityAdmin {
    constructor() {
        this.systems = [];
        this.entities = [];
        this.queries = {};
        this.singletonComponents = new _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]();

        this.firstUpdate = true;
    }

    update(delta) {
        if (this.firstUpdate) this.init();
        this.systems.forEach(system => {
            system.update(delta);
        });
    }

    init() {
        this._updateQueries();
        this.firstUpdate = true;
    }

    registerSystem(System) {
        this.systems.push(new System(this.queries));
        return this;
    }

    registerQuery(name, ComponentArray) {
        if (name === "singleton") throw new Error("Singleton is a reserved query");
        this.queries[name] = new _Query__WEBPACK_IMPORTED_MODULE_1__["Query"](name, ComponentArray);
        return this;
    }

    createEntity() {
        let newEntity = new _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]();
        this.entities.push(newEntity);
        this._updateQueries(); // I'd rather not iterate over every entity every time we add one.
        return newEntity;
    }

    addSingletonComponent(Component, initialState = {}) {
        // These are singleton so only one instance can exist in the singleton entity.
        if (this.singletonComponents.hasComponent(Component)) return;
        this.singletonComponents.addComponent(Component, initialState);
        this._updateQueries(); // I'd rather not iterate over every entity every time we add one.
        return this;
    }

    _updateQueries() {
        // TODO: This is terribly inefficient
        // Iterate over properties in the queries object
        for (const queryName in this.queries) {
            // Clear entities in each query
            this.queries[queryName].entities = [];
        }
        this.entities.forEach(entity => {
            for (const queryName in this.queries) {
                if (queryName === "singleton") continue;
                const query = this.queries[queryName];
                if (query.match(entity)) {
                    query.entities.push(entity);
                }
            }
        });
        this.queries.singleton = this.singletonComponents;
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
class Entity {
    constructor() {
        this.components = new Map();
        this.componentTypes = [];
    }

    addComponent(Component, initialState = {}) {
        let newComponent = new Component();
        Object.assign(newComponent, initialState);
        this.components.set(Component.name, newComponent);
        this.componentTypes.push(Component);
        return this;
    }

    getComponent(Component) {
        return this.components.get(Component.name)
    }

    getComponents() {
        return this.components.entries();
    }

    hasComponent(Component) {
        // !!~ turns result of indexOf into a boolean
        return !!~this.componentTypes.indexOf(Component);
    }

    hasAllComponents(ComponentArray) {
        let result = true;
        ComponentArray.forEach(Component => {
            result = result && !!~this.componentTypes.indexOf(Component);
        });
        return result;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
class Query {
    constructor(name, ComponentArray) {
        this.name = name;
        this.components = ComponentArray;
        this.entities = [];
    }

    match(entity) {
        return entity.hasAllComponents(this.components);
    }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "System", function() { return System; });
class System {
    constructor(queries) {
        this.queries = queries;
    }
}

/***/ })
/******/ ]);
});