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
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _Scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]; });

/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "System", function() { return _System__WEBPACK_IMPORTED_MODULE_1__["System"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Scene = /*#__PURE__*/function () {
  function Scene() {
    _classCallCheck(this, Scene);

    this.id = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["uuidv4"])();
    this.systems = [];
    this.entities = [];
    this.queries = {};
    this.singletonComponents = new _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]();
    this.firstUpdate = true;
  }

  _createClass(Scene, [{
    key: "update",
    value: function update(delta) {
      if (this.firstUpdate) this._init();
      this.systems.forEach(function (system) {
        system.update(delta);
      });
    }
  }, {
    key: "_init",
    value: function _init() {
      this._updateQueries();

      this.systems.forEach(function (system) {
        if (system.init) system.init();
      });
      this.firstUpdate = false;
    }
  }, {
    key: "registerSystem",
    value: function registerSystem(System) {
      this.systems.push(new System(this, this.queries));
      return this;
    }
  }, {
    key: "registerQuery",
    value: function registerQuery(name, ComponentArray) {
      if (name === "singleton") throw new Error("Singleton is a reserved query");
      this.queries[name] = new _Query__WEBPACK_IMPORTED_MODULE_1__["Query"](name, ComponentArray);
      return this;
    }
  }, {
    key: "createEntity",
    value: function createEntity() {
      var newEntity = new _Entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]();
      this.entities.push(newEntity);

      this._updateQueries(); // I'd rather not iterate over every entity every time we add one.


      return newEntity;
    }
  }, {
    key: "removeEntity",
    value: function removeEntity(entity) {
      this.entities = this.entities.filter(function (item) {
        return item.id !== entity.id;
      });

      this._updateQueries();

      return this;
    }
  }, {
    key: "addSingletonComponent",
    value: function addSingletonComponent(Component) {
      var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // These are singleton so only one instance can exist in the singleton entity.
      if (this.singletonComponents.hasComponent(Component)) return;
      this.singletonComponents.addComponent(Component, initialState);

      this._updateQueries(); // I'd rather not iterate over every entity every time we add one.


      return this;
    }
  }, {
    key: "_updateQueries",
    value: function _updateQueries() {
      var _this = this;

      // TODO: This is terribly inefficient
      // Iterate over properties in the queries object
      for (var queryName in this.queries) {
        // Clear entities in each query
        this.queries[queryName].entities = [];
      }

      this.entities.forEach(function (entity) {
        for (var _queryName in _this.queries) {
          if (_queryName === "singleton") continue; // This is kinda ugly

          var query = _this.queries[_queryName];

          if (query.match(entity)) {
            query.entities.push(entity);
          }
        }
      });
      this.queries.singleton = this.singletonComponents;
    }
  }]);

  return Scene;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Entity = /*#__PURE__*/function () {
  function Entity() {
    _classCallCheck(this, Entity);

    this.id = Object(_Util__WEBPACK_IMPORTED_MODULE_0__["uuidv4"])();
    this.components = new Map();
    this.componentTypes = [];
  }

  _createClass(Entity, [{
    key: "addComponent",
    value: function addComponent(Component) {
      var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var newComponent = new Component();
      Object.assign(newComponent, initialState);
      this.components.set(Component.name, newComponent);
      this.componentTypes.push(Component);
      return this;
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(Component) {
      this.components["delete"](Component.name);
      this.componentTypes.splice(this.componentTypes.indexOf(Component), 1);
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent(Component) {
      return this.components.get(Component.name);
    }
  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.components.entries();
    }
  }, {
    key: "hasComponent",
    value: function hasComponent(Component) {
      // !!~ turns result of indexOf into a boolean
      return !!~this.componentTypes.indexOf(Component);
    }
  }, {
    key: "hasAllComponents",
    value: function hasAllComponents(ComponentArray) {
      var _this = this;

      var result = true;
      ComponentArray.forEach(function (Component) {
        result = result && !!~_this.componentTypes.indexOf(Component);
      });
      return result;
    }
  }]);

  return Entity;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidv4", function() { return uuidv4; });
// from https://jslib.k6.io/
// Wanted to use the uuid npm package but it wouldn't run in my node environment. This should suffice
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Query = /*#__PURE__*/function () {
  function Query(name, ComponentArray) {
    _classCallCheck(this, Query);

    this.name = name;
    this.components = ComponentArray;
    this.entities = [];
  }

  _createClass(Query, [{
    key: "match",
    value: function match(entity) {
      return entity.hasAllComponents(this.components);
    }
  }]);

  return Query;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "System", function() { return System; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var System = function System(entityAdmin, queries) {
  _classCallCheck(this, System);

  this.queries = queries;
  this.entityAdmin = entityAdmin;
};

/***/ })
/******/ ]);
});