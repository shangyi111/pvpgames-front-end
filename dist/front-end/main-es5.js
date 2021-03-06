function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/components/login/login.component */
    "./src/app/auth/components/login/login.component.ts");
    /* harmony import */


    var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/components/register/register.component */
    "./src/app/auth/components/register/register.component.ts");
    /* harmony import */


    var _home_components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/components/tic-tac-toe/tic-tac-toe.component */
    "./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts");
    /* harmony import */


    var _home_components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/components/user-home/user-home.component */
    "./src/app/home/components/user-home/user-home.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: 'login',
      component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'user-home',
      component: _home_components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"],
      children: [{
        path: 'tic-tac-toe',
        component: _home_components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__["TicTacToeComponent"]
      }],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/components/home/home.component */
    "./src/app/home/components/home/home.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'front-end';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-home");
        }
      },
      directives: [_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/web-socket.service */
    "./src/app/services/web-socket.service.ts");

    var config = {
      url: 'https://pvpgames-socket.herokuapp.com',
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__["WebSocketService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config)],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__["WebSocketService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/auth/components/register/register.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/auth/components/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AuthModule
    });
    AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthModule, {
        declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
          exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/components/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth/components/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your username. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_div_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_div_0_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Signin button is disabled. Please provide required info.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r7.onSubmit(_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, LoginComponent_div_0_div_8_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, LoginComponent_div_0_div_14_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, LoginComponent_div_0_div_19_Template, 3, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.pristine && _r2.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r4.pristine && _r4.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", _r1.status, " ", _r1.value.username, " ", _r1.value.password, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r1.status === "INVALID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.status === "INVALID");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, _apiService, _router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this._apiService = _apiService;
        this._router = _router;
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this = this;

          this._apiService.postTypeRequest('/user/signin', form.value).subscribe(function (res) {
            console.log("front-end", res);

            if (res !== undefined) {
              if (res.status === 0) {
                //success log in
                alert(res.message);

                _this.authService.setUserDataInLocalStorage("userData", JSON.stringify(res));

                _this.authService.setUserDataInLocalStorage("token", res.token);

                _this._router.navigate(['user-home']);
              } else {
                //fail log in
                form.reset();
                alert(res.message);
              }
            }
          });
        }
      }, {
        key: "isLogin",
        value: function isLogin() {
          var userData = this.authService.getUserDataFromLocalStorage('userData');
          return !!(userData && userData.id);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.clearStorage();

          this._router.navigate(['']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 1,
      vars: 1,
      consts: [["class", "col-md-4 offset-4 mt-5", 4, "ngIf"], [1, "col-md-4", "offset-4", "mt-5"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "username", 1, "form-label"], ["ngModel", "", "name", "username", "type", "username", "id", "username", "required", "", 1, "form-control"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password", 1, "form-label"], ["ngModel", "", "name", "password", "type", "password", "id", "password", "required", "", 1, "form-control"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-muted"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, LoginComponent_div_0_Template, 20, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authService.checkLogInStatus());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/components/register/register.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/components/register/register.component.ts ***!
    \****************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your username. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your email. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please provide all information in order to register.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(_apiService, _router) {
        _classCallCheck(this, RegisterComponent);

        this._apiService = _apiService;
        this._router = _router;
      }

      _createClass(RegisterComponent, [{
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          this._apiService.postTypeRequest('/user/register', form.value).subscribe(function (res) {
            if (res.status !== undefined) {
              if (res.status === 0) {
                alert(res.message);
                form.reset();
              } else {
                alert(res.message);

                _this2._router.navigate(['login']);
              }
            }
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.??fac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 29,
      vars: 8,
      consts: [[1, "col-md-4", "offset-4", "mt-5"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "row", "mb-4", "form-group"], ["for", "username", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["ngModel", "", "name", "username", "type", "username", "id", "username", "required", "", 1, "form-control"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row", "mb-4"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], ["ngModel", "", "name", "email", "type", "email", "id", "inputEmail3", "required", "", 1, "form-control"], ["email", "ngModel"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["ngModel", "", "name", "password", "type", "password", "id", "inputPassword3", "required", "", 1, "form-control"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-muted"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RegisterComponent_div_9_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, RegisterComponent_div_16_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, RegisterComponent_div_23_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, RegisterComponent_div_28_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.pristine && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.pristine && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.pristine && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", _r1.value, " ", _r3.value, " ", _r5.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.status === "INVALID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.status === "INVALID");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/home/home.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/components/home/home.component.ts ***!
    \********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["login"];
    };

    function HomeComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["register"];
    };

    function HomeComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
      }
    }

    function HomeComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_a_9_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["user-home"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, _router) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this._router = _router;
      }

      _createClass(HomeComponent, [{
        key: "logout",
        value: function logout() {
          this.authService.clearStorage();

          this._router.navigate(['login']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLinkActive", "router-link-active", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["class", "nav-item nav-link", "routerLinkActive", "router-link-active current", 3, "routerLink", 4, "ngIf"], ["class", "nav-item nav-link", "routerLinkActive", "router-link-active", 3, "click", 4, "ngIf"], ["routerLinkActive", "router-link-active current", 1, "nav-item", "nav-link", 3, "routerLink"], [1, "sr-only"], ["routerLinkActive", "router-link-active", 1, "nav-item", "nav-link", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_a_7_Template, 4, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HomeComponent_a_8_Template, 2, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, HomeComponent_a_9_Template, 2, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authService.checkLogInStatus());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authService.checkLogInStatus());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authService.checkLogInStatus());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/room/room.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/components/room/room.component.ts ***!
    \********************************************************/

  /*! exports provided: RoomComponent */

  /***/
  function srcAppHomeComponentsRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
      return RoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoomComponent = /*#__PURE__*/function () {
      function RoomComponent() {
        _classCallCheck(this, RoomComponent);
      }

      _createClass(RoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomComponent;
    }();

    RoomComponent.??fac = function RoomComponent_Factory(t) {
      return new (t || RoomComponent)();
    };

    RoomComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RoomComponent,
      selectors: [["app-room"]],
      decls: 0,
      vars: 0,
      template: function RoomComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9yb29tL3Jvb20uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-room',
          templateUrl: './room.component.html',
          styleUrls: ['./room.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TicTacToeComponent */

  /***/
  function srcAppHomeComponentsTicTacToeTicTacToeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicTacToeComponent", function () {
      return TicTacToeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/web-socket.service */
    "./src/app/services/web-socket.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/room.service */
    "./src/app/services/room.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TicTacToeComponent_small_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter your room name. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_table_15_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_table_15_tr_9_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

          var room_r12 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r13.enterRoom(room_r12.roomId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Join");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var room_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](room_r12.roomId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](room_r12.UserCount);
      }
    }

    function TicTacToeComponent_table_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Room Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "User Count");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, TicTacToeComponent_table_15_tr_9_Template, 8, 2, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngFor", ctx_r3["for"])("ngForOf", ctx_r3.roomsMap);
      }
    }

    function TicTacToeComponent_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var user_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", user_r15.username, " ");
      }
    }

    function TicTacToeComponent_li_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var msg_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", msg_r16.msg, " ");
      }
    }

    function TicTacToeComponent_li_26_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
      }

      if (rf & 2) {
        var msg_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", msg_r16.msg, " ");
      }
    }

    function TicTacToeComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TicTacToeComponent_li_26_div_1_Template, 2, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TicTacToeComponent_li_26_ng_template_2_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r17 = ctx.index;

        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r17 === 0)("ngIfElse", _r19);
      }
    }

    function TicTacToeComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_div_28_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r23.start();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Restart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_button_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_button_30_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r25.join();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Join Game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r27.unjoin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Leave Game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_div_32_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var player_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", player_r30.user, " - ", player_r30.sign, " ");
      }
    }

    function TicTacToeComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Players in Game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TicTacToeComponent_div_32_li_3_Template, 2, 2, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r9.cachePlayers);
      }
    }

    function TicTacToeComponent_div_33_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Your turn ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_div_33_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Your opponent's turn ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_div_33_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You lost!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_div_33_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You won!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_div_33_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Tie");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TicTacToeComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TicTacToeComponent_div_33_li_1_Template, 2, 0, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TicTacToeComponent_div_33_li_2_Template, 2, 0, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TicTacToeComponent_div_33_li_3_Template, 2, 0, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TicTacToeComponent_div_33_li_4_Template, 2, 0, "li", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, TicTacToeComponent_div_33_li_5_Template, 2, 0, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.playerInTurn === ctx_r10.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.playerInTurn !== "" && ctx_r10.playerInTurn !== ctx_r10.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.winner !== "" && ctx_r10.winner !== ctx_r10.currentUser && ctx_r10.winner !== "No one ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.winner !== "" && ctx_r10.winner === ctx_r10.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.winner !== "" && ctx_r10.winner === "No one ");
      }
    }

    var TicTacToeComponent = /*#__PURE__*/function () {
      function TicTacToeComponent(webSocketService, authService, roomService) {
        _classCallCheck(this, TicTacToeComponent);

        this.webSocketService = webSocketService;
        this.authService = authService;
        this.roomService = roomService;
        this.msgs = []; //updatePlayersList

        this.cachePlayers = []; //updateBoard

        this.playerInTurn = "";
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.rows = [0, 0, 0];
        this.cols = [0, 0, 0];
        this.diag = 0;
        this.antiDiag = 0; //updateWinner

        this.winner = "";
        this.isInRoom = false;
        this.usersByRoomId = [];
        this.roomsMap = undefined;
        this.roomsList = [];
        this.currentUser = this.authService.getUserDataFromLocalStorage('userData').username;
      }

      _createClass(TicTacToeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.roomService.getRooms();
          this.webSocketService.listen('updatePlayerList').subscribe(function (data) {
            if (data.room === _this3.roomId) {
              _this3.cachePlayers = data.cachePlayers;
            } else {
              _this3.cachePlayers = [];
            }
          });
          this.webSocketService.listen('updateBoard').subscribe(function (data) {
            _this3.board = data.board;
            _this3.playerInTurn = data.playerInTurn;
            _this3.antiDiag = data.antiDiag;
            _this3.diag = data.diag;
            _this3.rows = data.rows;
            _this3.cols = data.cols;
          });
          this.webSocketService.listen('updateWinner').subscribe(function (data) {
            _this3.winner = data.winner;
          });
          this.webSocketService.listen('updateRoom') //boardcast to only certain rooms
          .subscribe(function (data) {
            _this3.usersByRoomId = data.users;
            _this3.msgs = data.msgs;
          });
          this.webSocketService.listen('updateRoomsDb') //boardcast to all rooms
          .subscribe(function (data) {
            _this3.roomsMap = data;
          });
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom() {
          this.isInRoom = false;

          if (this.checkUser(this.currentUser)) {
            this.unjoin();
          }

          this.roomService.leaveRoom(this.roomId, this.currentUser);
          this.resetRoomState();
        }
      }, {
        key: "resetRoomState",
        value: function resetRoomState() {
          this.roomId = undefined;
        }
      }, {
        key: "enterRoom",
        value: function enterRoom(id) {
          console.log("enteredRoom", this.cachePlayers);
          this.isInRoom = true;
          this.roomId = id;
          this.roomService.enterRoom(this.roomId, this.currentUser);
        }
      }, {
        key: "checkUser",
        value: function checkUser(username) {
          var res = true;
          if (this.cachePlayers.length === 0) return false;

          var _iterator = _createForOfIteratorHelper(this.cachePlayers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var e = _step.value;
              if (e.user === username) return true;else res = false;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return res;
        }
      }, {
        key: "join",
        value: function join() {
          if (this.cachePlayers.includes(this.currentUser)) {
            alert("You are already in game");
          } else if (this.cachePlayers.length === 2) {
            alert("Queue full, please wait for available seats.");
          } else {
            this.cachePlayers.push({
              user: this.currentUser,
              sign: ""
            });
            this.webSocketService.emit('updatePlayerList', {
              cachePlayers: this.cachePlayers,
              room: this.roomId
            });

            if (this.cachePlayers.length === 2) {
              this.start();
            }
          }
        }
      }, {
        key: "unjoin",
        value: function unjoin() {
          var _this4 = this;

          this.cachePlayers = this.cachePlayers.filter(function (data) {
            return data.user !== _this4.currentUser;
          });
          this.webSocketService.emit('updatePlayerList', {
            cachePlayers: this.cachePlayers,
            room: this.roomId
          });
          this.refreshWinner();
          this.refreshBoard();
        }
      }, {
        key: "refreshBoard",
        value: function refreshBoard() {
          this.webSocketService.emit('updateBoard', {
            board: new Array(9).fill("").map(function (a) {
              return "";
            }),
            playerInTurn: "",
            rows: [0, 0, 0],
            cols: [0, 0, 0],
            diag: 0,
            antiDiag: 0,
            room: this.roomId
          });
        }
      }, {
        key: "refreshWinner",
        value: function refreshWinner() {
          this.webSocketService.emit('updateWinner', {
            winner: "",
            room: this.roomId
          });
        }
      }, {
        key: "start",
        value: function start() {
          this.refreshWinner();
          this.cachePlayers[0].sign = "X";
          this.cachePlayers[1].sign = "O";
          this.webSocketService.emit('updateBoard', {
            board: new Array(9).fill("").map(function (a) {
              return "";
            }),
            playerInTurn: this.currentUser,
            rows: [0, 0, 0],
            cols: [0, 0, 0],
            diag: 0,
            antiDiag: 0,
            room: this.roomId
          });
          this.webSocketService.emit('updatePlayerList', {
            cachePlayers: this.cachePlayers,
            room: this.roomId
          });
        }
      }, {
        key: "move",
        value: function move(id) {
          if (this.board[id] !== "") {
            return;
          } else if (this.playerInTurn !== this.currentUser) {
            alert("Not your turn.");
          } else if (this.board[id] === "" && this.playerInTurn === this.currentUser) {
            var curRow = Math.floor(id / 3);
            var curCol = Math.floor(id % 3);
            var currentSign;

            if (this.cachePlayers[0].user === this.currentUser) {
              currentSign = this.cachePlayers[0].sign;
              this.playerInTurn = this.cachePlayers[1].user;
            } else {
              currentSign = this.cachePlayers[1].sign;
              this.playerInTurn = this.cachePlayers[0].user;
            }

            this.board[id] = currentSign;

            if (curRow === curCol) {
              if (currentSign === "X") {
                this.diag++;
              } else if (currentSign === "O") {
                this.diag--;
              }
            }

            if (curRow === 2 - curCol) {
              if (currentSign === "X") {
                this.antiDiag++;
              } else if (currentSign === "O") {
                this.antiDiag--;
              }
            }

            if (currentSign === "X") {
              this.rows[curRow]++;
              this.cols[curCol]++;
            } else if (currentSign === "O") {
              this.rows[curRow]--;
              this.cols[curCol]--;
            }

            this.webSocketService.emit('updateBoard', {
              board: this.board,
              playerInTurn: this.playerInTurn,
              rows: this.rows,
              cols: this.cols,
              diag: this.diag,
              antiDiag: this.antiDiag,
              room: this.roomId
            });

            if (this.checkWinner(id)) {
              this.webSocketService.emit('updateBoard', {
                board: this.board,
                playerInTurn: "",
                rows: this.rows,
                cols: this.cols,
                diag: this.diag,
                antiDiag: this.antiDiag,
                room: this.roomId
              });
              this.webSocketService.emit('updateWinner', {
                winner: this.currentUser,
                room: this.roomId
              });
            } else if (!this.board.includes("")) {
              this.webSocketService.emit('updateWinner', {
                winner: "No one ",
                room: this.roomId
              });
              this.webSocketService.emit('updateBoard', {
                board: this.board,
                playerInTurn: "",
                rows: this.rows,
                cols: this.cols,
                diag: this.diag,
                antiDiag: this.antiDiag,
                room: this.roomId
              });
            }
          } else {
            alert("The game is finished - please restart your game.");
          }
        }
      }, {
        key: "checkWinner",
        value: function checkWinner(id) {
          var curRow = Math.floor(id / 3);
          var curCol = Math.floor(id % 3);

          if (Math.abs(this.diag) === 3 || Math.abs(this.rows[curRow]) === 3 || Math.abs(this.cols[curCol]) === 3 || Math.abs(this.antiDiag) === 3) {
            return true;
          } else return false;
        }
      }, {
        key: "checkSocketHandler",
        value: function checkSocketHandler($event) {
          this.webSocketService.emit('message', 'OMG');
        }
      }]);

      return TicTacToeComponent;
    }();

    TicTacToeComponent.??fac = function TicTacToeComponent_Factory(t) {
      return new (t || TicTacToeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]));
    };

    TicTacToeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TicTacToeComponent,
      selectors: [["tic-tac-toe"]],
      decls: 56,
      vars: 22,
      consts: [[3, "hidden"], [2, "padding", "10px", 3, "ngSubmit"], ["joinRoomForm", "ngForm"], [1, "mb-3"], ["for", "inputRoom", 1, "form-label"], ["ngModel", "", "type", "text", "name", "roomName", "required", "", "id", "inputRoom", 1, "form-control", "col-lg-3", "mx-auto"], ["roomName", "ngModel"], ["class", "alert alert-info col-lg-3 mx-auto", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "row", "d-flex", "justify-content-center", 2, "margin-top", "40px"], ["class", "table-hover", "style", "width: 60%", 4, "ngIf"], [1, "container", 3, "hidden"], [1, "row"], [1, "col-3", "list-group"], [1, "list-group-item", "list-group-item-action", "active", 3, "click"], [1, "list-group-item", "list-group-item-info"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-8", "list-group"], [4, "ngIf"], [2, "padding", "10px"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "board"], [1, "col", 3, "click"], ["role", "alert", 1, "alert", "alert-info", "col-lg-3", "mx-auto"], [1, "table-hover", 2, "width", "60%"], ["scope", "col", 1, "th-lg"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], [1, "list-group-item"], ["style", "font-weight: bold;", "class", "fadeIn", 4, "ngIf", "ngIfElse"], ["otherMsgs", ""], [1, "fadeIn", 2, "font-weight", "bold"], [1, "btn", "btn-primary", 3, "click"], ["class", "list-group-item list-group-item-info", 4, "ngIf"], ["class", "list-group-item list-group-item-danger", 4, "ngIf"], ["class", "list-group-item list-group-item-success", 4, "ngIf"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-success"]],
      template: function TicTacToeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function TicTacToeComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            ctx.enterRoom(_r0.value.roomName);
            return _r0.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Enter Room Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, TicTacToeComponent_small_11_Template, 2, 0, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Join Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, TicTacToeComponent_table_15_Template, 10, 2, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_button_click_19_listener() {
            return ctx.leaveRoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Leave Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Users In Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, TicTacToeComponent_li_23_Template, 2, 1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Room Anouncements:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, TicTacToeComponent_li_26_Template, 4, 2, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, TicTacToeComponent_div_28_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, TicTacToeComponent_button_30_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, TicTacToeComponent_button_31_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, TicTacToeComponent_div_32_Template, 4, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, TicTacToeComponent_div_33_Template, 6, 5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_36_listener() {
            return ctx.move(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_38_listener() {
            return ctx.move(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_40_listener() {
            return ctx.move(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_43_listener() {
            return ctx.move(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_45_listener() {
            return ctx.move(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_47_listener() {
            return ctx.move(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_50_listener() {
            return ctx.move(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_52_listener() {
            return ctx.move(7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TicTacToeComponent_Template_div_click_54_listener() {
            return ctx.move(8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isInRoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.pristine && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r1.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.roomsMap !== undefined && ctx.roomsMap.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isInRoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.usersByRoomId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.msgs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cachePlayers.length === 2 && ctx.playerInTurn === "" && ctx.checkUser(ctx.currentUser));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.checkUser(ctx.currentUser) && ctx.cachePlayers.length < 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.checkUser(ctx.currentUser) && ctx.playerInTurn === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cachePlayers.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.checkUser(ctx.currentUser));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[4]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[5]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[6]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[7]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board[8]);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.board[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: auto;\n  display: grid;\n}\n\n.board[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  border: green solid 2px;\n  height: 100px;\n  width: 100px;\n  margin: auto;\n  font-size: 80px;\n  text-align: center;\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  animation: fadeIn linear 0.5s;\n  -webkit-animation: fadeIn linear 0.5s;\n  -moz-animation: fadeIn linear 0.5s;\n  -o-animation: fadeIn linear 0.5s;\n  -ms-animation: fadeIn linear 0.5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuZ3lpY2hlbi9Eb2N1bWVudHMvRGV2ZW9wZXIgUmVsYXRlZC9PdGhlciBleGVyY2lzZXM6cHJvamVjdHMvZnMtYmxvZy9mcm9udC1lbmQvc3JjL2FwcC9ob21lL2NvbXBvbmVudHMvdGljLXRhYy10b2UvdGljLXRhYy10b2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy90aWMtdGFjLXRvZS90aWMtdGFjLXRvZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDR0o7O0FEQUU7RUFDRTtJQUFJLFVBQUE7RUNJTjtFREhFO0lBQU0sVUFBQTtFQ01SO0FBQ0Y7O0FEQ0U7RUFDRTtJQUFJLFVBQUE7RUNVTjtFRFRFO0lBQU0sVUFBQTtFQ1lSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvdGljLXRhYy10b2UvdGljLXRhYy10b2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2FyZHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZGlzcGxheTpncmlkO1xufVxuLmJvYXJkIC5jb2x7XG4gICAgYm9yZGVyOmdyZWVuIHNvbGlkIDJweDtcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZm9udC1zaXplOjgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4uZmFkZUluIHtcbiAgICBhbmltYXRpb246IGZhZGVJbiBsaW5lYXIgLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIC41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAuNXM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIC41cztcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIC41cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtvcGFjaXR5OjA7fVxuICAgIDEwMCUge29wYWNpdHk6MTt9XG4gIH1cbiAgXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtvcGFjaXR5OjA7fVxuICAgIDEwMCUge29wYWNpdHk6MTt9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtvcGFjaXR5OjA7fVxuICAgIDEwMCUge29wYWNpdHk6MTt9XG4gIH1cbiAgXG4gIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7b3BhY2l0eTowO31cbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxuICB9IiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5ib2FyZCAuY29sIHtcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xuICAtby1hbmltYXRpb246IGZhZGVJbiBsaW5lYXIgMC41cztcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicTacToeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tic-tac-toe',
          templateUrl: './tic-tac-toe.component.html',
          styleUrls: ['./tic-tac-toe.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/user-home/user-home.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home/components/user-home/user-home.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppHomeComponentsUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["tic-tac-toe"];
    };

    var UserHomeComponent = function UserHomeComponent(authService) {
      _classCallCheck(this, UserHomeComponent);

      this.authService = authService;
      var userData = this.authService.getUserDataFromLocalStorage('userData');
      this.name = userData.username;
    };

    UserHomeComponent.??fac = function UserHomeComponent_Factory(t) {
      return new (t || UserHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    UserHomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UserHomeComponent,
      selectors: [["user-home"]],
      decls: 10,
      vars: 3,
      consts: [["routerLinkActive", "router-link-active", 3, "routerLink"]],
      template: function UserHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Big2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u4E95\u5B57\u904E\u4E09\u95DC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Welcome ", ctx.name, ", what would you like to do?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-home',
          templateUrl: './user-home.component.html',
          styleUrls: ['./user-home.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/home/components/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/user-home/user-home.component */
    "./src/app/home/components/user-home/user-home.component.ts");
    /* harmony import */


    var _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tic-tac-toe/tic-tac-toe.component */
    "./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts");
    /* harmony import */


    var _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/room/room.component */
    "./src/app/home/components/room/room.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HomeModule
    });
    HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeModule, {
        declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"], _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_6__["TicTacToeComponent"], _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
        exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"], _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_6__["TicTacToeComponent"], _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
          exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(_http) {
        _classCallCheck(this, ApiService);

        this._http = _http; // baseUrl = 'http://localhost:4000';

        this.baseUrl = 'https://pvpgames.herokuapp.com';
      }

      _createClass(ApiService, [{
        key: "getTypeRequest",
        value: function getTypeRequest(url) {
          return this._http.get("".concat(this.baseUrl).concat(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "postTypeRequest",
        value: function postTypeRequest(url, payload) {
          return this._http.post("".concat(this.baseUrl).concat(url), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "putTypeRequest",
        value: function putTypeRequest(url, payload) {
          return this._http.put("".concat(this.baseUrl).concat(url), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.??fac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ApiService,
      factory: ApiService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authService) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          return this.authService.checkLogInStatus();
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.??fac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(route, router) {
        var _this5 = this;

        _classCallCheck(this, AuthService);

        this.route = route;
        this.router = router;
        route.params.subscribe(function (params) {
          _this5.id = parseInt(params['id']);
        });
      }

      _createClass(AuthService, [{
        key: "checkLogInStatus",
        value: function checkLogInStatus() {
          var userData = this.getUserDataFromLocalStorage('userData');
          this.isLoggedIn = !!(userData && userData.id);
          return this.isLoggedIn;
        }
      }, {
        key: "setUserDataInLocalStorage",
        value: function setUserDataInLocalStorage(variableName, data) {
          localStorage.setItem(variableName, data);
        }
      }, {
        key: "getUserDataFromLocalStorage",
        value: function getUserDataFromLocalStorage(variableName) {
          return JSON.parse(localStorage.getItem(variableName));
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          localStorage.clear();
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/room.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/room.service.ts ***!
    \******************************************/

  /*! exports provided: RoomService */

  /***/
  function srcAppServicesRoomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomService", function () {
      return RoomService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web-socket.service */
    "./src/app/services/web-socket.service.ts");

    var RoomService = /*#__PURE__*/function () {
      function RoomService(apiService, webSocketService) {
        _classCallCheck(this, RoomService);

        this.apiService = apiService;
        this.webSocketService = webSocketService;
      }

      _createClass(RoomService, [{
        key: "getRooms",
        value: function getRooms() {
          var _this6 = this;

          this.apiService.getTypeRequest('/user/tic-tac-toe/rooms/mysql').subscribe(function (res) {
            _this6.webSocketService.emit("updateRoomsDb", res);
          });
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom(roomId, user) {
          this.updateUsersMsgsMySql(roomId, user, "".concat(user, " leaves room ").concat(roomId, "."), "delete");
          this.webSocketService.emit('leave', {
            room: roomId
          });
        }
      }, {
        key: "enterRoom",
        value: function enterRoom(roomId, user) {
          this.webSocketService.emit('join', {
            room: roomId
          });
          this.updateUsersMsgsMySql(roomId, user, "".concat(user, " enters room ").concat(roomId, "."), "add");
        }
      }, {
        key: "updateUsersMsgsMySql",
        value: function updateUsersMsgsMySql(roomId, user, msg, addOrDelete) {
          var _this7 = this;

          var path = "/user/tic-tac-toe/".concat(roomId, "/msgs-users/mysql");
          this.apiService.postTypeRequest(path, {
            user: user,
            msg: msg,
            addOrDelete: addOrDelete
          }).subscribe(function (res) {
            _this7.getRooms();

            _this7.webSocketService.emit('updateRoom', {
              msgs: res.msgs,
              users: res.users,
              room: roomId
            });
          });
        }
      }]);

      return RoomService;
    }();

    RoomService.??fac = function RoomService_Factory(t) {
      return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]));
    };

    RoomService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: RoomService,
      factory: RoomService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/web-socket.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/web-socket.service.ts ***!
    \************************************************/

  /*! exports provided: WebSocketService */

  /***/
  function srcAppServicesWebSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketService", function () {
      return WebSocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/build/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

    var WebSocketService = /*#__PURE__*/function () {
      // readonly url: string = "ws://localhost:3000";
      function WebSocketService() {
        _classCallCheck(this, WebSocketService);

        this.url = "https://pvpgames-socket.herokuapp.com";
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.url);
      }

      _createClass(WebSocketService, [{
        key: "listen",
        value: function listen(eventName) {
          var _this8 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            _this8.socket.on(eventName, function (data) {
              subscriber.next(data);
            });
          });
        }
      }, {
        key: "emit",
        value: function emit(eventName, data) {
          if (eventName === 'updatePlayerList') {
            console.log(data);
          }

          this.socket.emit(eventName, data);
        }
      }]);

      return WebSocketService;
    }();

    WebSocketService.??fac = function WebSocketService_Factory(t) {
      return new (t || WebSocketService)();
    };

    WebSocketService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: WebSocketService,
      factory: WebSocketService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/shangyichen/Documents/Deveoper Related/Other exercises:projects/fs-blog/front-end/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map