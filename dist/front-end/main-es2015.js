(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _home_components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/components/tic-tac-toe/tic-tac-toe.component */ "./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts");
/* harmony import */ var _home_components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/components/user-home/user-home.component */ "./src/app/home/components/user-home/user-home.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");









const routes = [
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'user-home',
        component: _home_components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"],
        children: [
            {
                path: 'tic-tac-toe',
                component: _home_components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__["TicTacToeComponent"],
            }
        ],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }
];
class AppRoutingModule {
    constructor() {
    }
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/components/home/home.component */ "./src/app/home/components/home/home.component.ts");



class AppComponent {
    constructor() {
        this.title = 'front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/web-socket.service */ "./src/app/services/web-socket.service.ts");














const config = { url: 'https://pvpgames-socket.herokuapp.com', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
        _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__["WebSocketService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config)
                ],
                providers: [
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
                    _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
                    _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__["WebSocketService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]], exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                exports: [
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function LoginComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your username. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signin button is disabled. Please provide required info.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_0_div_8_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_0_div_14_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_0_div_19_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.pristine && _r2.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.pristine && _r4.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r1.status, " ", _r1.value.username, " ", _r1.value.password, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.status === "INVALID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.status === "INVALID");
} }
class LoginComponent {
    constructor(authService, _apiService, _router) {
        this.authService = authService;
        this._apiService = _apiService;
        this._router = _router;
    }
    onSubmit(form) {
        this._apiService.postTypeRequest('/user/signin', form.value)
            .subscribe((res) => {
            console.log("front-end", res);
            if (res !== undefined) {
                if (res.status === 0) { //success log in
                    alert(res.message);
                    this.authService.setUserDataInLocalStorage("userData", JSON.stringify(res));
                    this.authService.setUserDataInLocalStorage("token", res.token);
                    this._router.navigate(['user-home']);
                }
                else { //fail log in
                    form.reset();
                    alert(res.message);
                }
            }
        });
    }
    isLogin() {
        const userData = this.authService.getUserDataFromLocalStorage('userData');
        return !!(userData && userData.id);
    }
    logout() {
        this.authService.clearStorage();
        this._router.navigate(['']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "col-md-4 offset-4 mt-5", 4, "ngIf"], [1, "col-md-4", "offset-4", "mt-5"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "username", 1, "form-label"], ["ngModel", "", "name", "username", "type", "username", "id", "username", "required", "", 1, "form-control"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password", 1, "form-label"], ["ngModel", "", "name", "password", "type", "password", "id", "password", "required", "", 1, "form-control"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-muted"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 20, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.checkLogInStatus());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your username. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide all information in order to register.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
    }
    onSubmit(form) {
        this._apiService.postTypeRequest('/user/register', form.value)
            .subscribe((res) => {
            if (res.status !== undefined) {
                if (res.status === 0) {
                    alert(res.message);
                    form.reset();
                }
                else {
                    alert(res.message);
                    this._router.navigate(['login']);
                }
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 29, vars: 8, consts: [[1, "col-md-4", "offset-4", "mt-5"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "row", "mb-4", "form-group"], ["for", "username", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["ngModel", "", "name", "username", "type", "username", "id", "username", "required", "", 1, "form-control"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row", "mb-4"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], ["ngModel", "", "name", "email", "type", "email", "id", "inputEmail3", "required", "", 1, "form-control"], ["email", "ngModel"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["ngModel", "", "name", "password", "type", "password", "id", "inputPassword3", "required", "", 1, "form-control"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-muted"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.pristine && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.pristine && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.pristine && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r1.value, " ", _r3.value, " ", _r5.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.status === "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.status === "INVALID");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return ["login"]; };
function HomeComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["register"]; };
function HomeComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function HomeComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["user-home"]; };
class HomeComponent {
    constructor(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    logout() {
        this.authService.clearStorage();
        this._router.navigate(['login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLinkActive", "router-link-active", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["class", "nav-item nav-link", "routerLinkActive", "router-link-active current", 3, "routerLink", 4, "ngIf"], ["class", "nav-item nav-link", "routerLinkActive", "router-link-active", 3, "click", 4, "ngIf"], ["routerLinkActive", "router-link-active current", 1, "nav-item", "nav-link", 3, "routerLink"], [1, "sr-only"], ["routerLinkActive", "router-link-active", 1, "nav-item", "nav-link", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_a_7_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_a_8_Template, 2, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_a_9_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.checkLogInStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.checkLogInStatus());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.checkLogInStatus());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/components/room/room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/components/room/room.component.ts ***!
  \********************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoomComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room"]], decls: 0, vars: 0, template: function RoomComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9yb29tL3Jvb20uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts ***!
  \**********************************************************************/
/*! exports provided: TicTacToeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeComponent", function() { return TicTacToeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function TicTacToeComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your room name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_table_15_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_table_15_tr_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const room_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.enterRoom(room_r12.roomId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r12.roomId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r12.UserCount);
} }
function TicTacToeComponent_table_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Room Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TicTacToeComponent_table_15_tr_9_Template, 8, 2, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngFor", ctx_r3.for)("ngForOf", ctx_r3.roomsMap);
} }
function TicTacToeComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r15.username, " ");
} }
function TicTacToeComponent_li_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r16.msg, " ");
} }
function TicTacToeComponent_li_26_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const msg_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r16.msg, " ");
} }
function TicTacToeComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicTacToeComponent_li_26_div_1_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicTacToeComponent_li_26_ng_template_2_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 === 0)("ngIfElse", _r19);
} }
function TicTacToeComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.unjoin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Leave Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_div_32_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", player_r30.user, " - ", player_r30.sign, " ");
} }
function TicTacToeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Players in Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicTacToeComponent_div_32_li_3_Template, 2, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.cachePlayers);
} }
function TicTacToeComponent_div_33_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your turn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_div_33_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your opponent's turn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_div_33_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You lost!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_div_33_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You won!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_div_33_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicTacToeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicTacToeComponent_div_33_li_1_Template, 2, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicTacToeComponent_div_33_li_2_Template, 2, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicTacToeComponent_div_33_li_3_Template, 2, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicTacToeComponent_div_33_li_4_Template, 2, 0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicTacToeComponent_div_33_li_5_Template, 2, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.playerInTurn === ctx_r10.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.playerInTurn !== "" && ctx_r10.playerInTurn !== ctx_r10.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.winner !== "" && ctx_r10.winner !== ctx_r10.currentUser && ctx_r10.winner !== "No one ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.winner !== "" && ctx_r10.winner === ctx_r10.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.winner !== "" && ctx_r10.winner === "No one ");
} }
class TicTacToeComponent {
    constructor(webSocketService, authService, roomService) {
        this.webSocketService = webSocketService;
        this.authService = authService;
        this.roomService = roomService;
        this.msgs = [];
        //updatePlayersList
        this.cachePlayers = [];
        //updateBoard
        this.playerInTurn = "";
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.rows = [0, 0, 0];
        this.cols = [0, 0, 0];
        this.diag = 0;
        this.antiDiag = 0;
        //updateWinner
        this.winner = "";
        this.isInRoom = false;
        this.usersByRoomId = [];
        this.roomsMap = undefined;
        this.roomsList = [];
        this.currentUser = this.authService.getUserDataFromLocalStorage('userData').username;
    }
    ngOnInit() {
        this.roomService.getRooms();
        this.webSocketService
            .listen('updatePlayerList')
            .subscribe((data) => {
            if (data.room === this.roomId) {
                this.cachePlayers = data.cachePlayers;
            }
            else {
                this.cachePlayers = [];
            }
        });
        this.webSocketService
            .listen('updateBoard')
            .subscribe((data) => {
            this.board = data.board;
            this.playerInTurn = data.playerInTurn;
            this.antiDiag = data.antiDiag;
            this.diag = data.diag;
            this.rows = data.rows;
            this.cols = data.cols;
        });
        this.webSocketService
            .listen('updateWinner')
            .subscribe((data) => {
            this.winner = data.winner;
        });
        this.webSocketService
            .listen('updateRoom') //boardcast to only certain rooms
            .subscribe((data) => {
            this.usersByRoomId = data.users;
            this.msgs = data.msgs;
        });
        this.webSocketService
            .listen('updateRoomsDb') //boardcast to all rooms
            .subscribe((data) => {
            this.roomsMap = data;
        });
    }
    leaveRoom() {
        this.isInRoom = false;
        if (this.checkUser(this.currentUser)) {
            this.unjoin();
        }
        this.roomService.leaveRoom(this.roomId, this.currentUser);
        this.resetRoomState();
    }
    resetRoomState() {
        this.roomId = undefined;
    }
    enterRoom(id) {
        console.log("enteredRoom", this.cachePlayers);
        this.isInRoom = true;
        this.roomId = id;
        this.roomService.enterRoom(this.roomId, this.currentUser);
    }
    checkUser(username) {
        let res = true;
        if (this.cachePlayers.length === 0)
            return false;
        for (let e of this.cachePlayers) {
            if (e.user === username)
                return true;
            else
                res = false;
        }
        return res;
    }
    join() {
        if (this.cachePlayers.includes(this.currentUser)) {
            alert("You are already in game");
        }
        else if (this.cachePlayers.length === 2) {
            alert("Queue full, please wait for available seats.");
        }
        else {
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
    unjoin() {
        this.cachePlayers = this.cachePlayers.filter(data => {
            return data.user !== this.currentUser;
        });
        this.webSocketService.emit('updatePlayerList', {
            cachePlayers: this.cachePlayers,
            room: this.roomId
        });
        this.refreshWinner();
        this.refreshBoard();
    }
    refreshBoard() {
        this.webSocketService.emit('updateBoard', {
            board: new Array(9).fill("").map(a => ""),
            playerInTurn: "",
            rows: [0, 0, 0],
            cols: [0, 0, 0],
            diag: 0,
            antiDiag: 0,
            room: this.roomId,
        });
    }
    refreshWinner() {
        this.webSocketService.emit('updateWinner', {
            winner: "",
            room: this.roomId,
        });
    }
    start() {
        this.refreshWinner();
        this.cachePlayers[0].sign = "X";
        this.cachePlayers[1].sign = "O";
        this.webSocketService.emit('updateBoard', {
            board: new Array(9).fill("").map(a => ""),
            playerInTurn: this.currentUser,
            rows: [0, 0, 0],
            cols: [0, 0, 0],
            diag: 0,
            antiDiag: 0,
            room: this.roomId,
        });
        this.webSocketService.emit('updatePlayerList', {
            cachePlayers: this.cachePlayers,
            room: this.roomId
        });
    }
    move(id) {
        if (this.board[id] !== "") {
            return;
        }
        else if (this.playerInTurn !== this.currentUser) {
            alert("Not your turn.");
        }
        else if (this.board[id] === "" && this.playerInTurn === this.currentUser) {
            let curRow = Math.floor(id / 3);
            let curCol = Math.floor(id % 3);
            let currentSign;
            if (this.cachePlayers[0].user === this.currentUser) {
                currentSign = this.cachePlayers[0].sign;
                this.playerInTurn = this.cachePlayers[1].user;
            }
            else {
                currentSign = this.cachePlayers[1].sign;
                this.playerInTurn = this.cachePlayers[0].user;
            }
            this.board[id] = currentSign;
            if (curRow === curCol) {
                if (currentSign === "X") {
                    this.diag++;
                }
                else if (currentSign === "O") {
                    this.diag--;
                }
            }
            if (curRow === (2 - curCol)) {
                if (currentSign === "X") {
                    this.antiDiag++;
                }
                else if (currentSign === "O") {
                    this.antiDiag--;
                }
            }
            if (currentSign === "X") {
                this.rows[curRow]++;
                this.cols[curCol]++;
            }
            else if (currentSign === "O") {
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
            }
            else if (!this.board.includes("")) {
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
        }
        else {
            alert("The game is finished - please restart your game.");
        }
    }
    checkWinner(id) {
        let curRow = Math.floor(id / 3);
        let curCol = Math.floor(id % 3);
        if (Math.abs(this.diag) === 3 ||
            Math.abs(this.rows[curRow]) === 3 ||
            Math.abs(this.cols[curCol]) === 3 ||
            Math.abs(this.antiDiag) === 3) {
            return true;
        }
        else
            return false;
    }
    checkSocketHandler($event) {
        this.webSocketService.emit('message', 'OMG');
    }
}
TicTacToeComponent.ɵfac = function TicTacToeComponent_Factory(t) { return new (t || TicTacToeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"])); };
TicTacToeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicTacToeComponent, selectors: [["tic-tac-toe"]], decls: 56, vars: 22, consts: [[3, "hidden"], [2, "padding", "10px", 3, "ngSubmit"], ["joinRoomForm", "ngForm"], [1, "mb-3"], ["for", "inputRoom", 1, "form-label"], ["ngModel", "", "type", "text", "name", "roomName", "required", "", "id", "inputRoom", 1, "form-control", "col-lg-3", "mx-auto"], ["roomName", "ngModel"], ["class", "alert alert-info col-lg-3 mx-auto", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "row", "d-flex", "justify-content-center", 2, "margin-top", "40px"], ["class", "table-hover", "style", "width: 60%", 4, "ngIf"], [1, "container", 3, "hidden"], [1, "row"], [1, "col-3", "list-group"], [1, "list-group-item", "list-group-item-action", "active", 3, "click"], [1, "list-group-item", "list-group-item-info"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-8", "list-group"], [4, "ngIf"], [2, "padding", "10px"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "board"], [1, "col", 3, "click"], ["role", "alert", 1, "alert", "alert-info", "col-lg-3", "mx-auto"], [1, "table-hover", 2, "width", "60%"], ["scope", "col", 1, "th-lg"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], [1, "list-group-item"], ["style", "font-weight: bold;", "class", "fadeIn", 4, "ngIf", "ngIfElse"], ["otherMsgs", ""], [1, "fadeIn", 2, "font-weight", "bold"], [1, "btn", "btn-primary", 3, "click"], ["class", "list-group-item list-group-item-info", 4, "ngIf"], ["class", "list-group-item list-group-item-danger", 4, "ngIf"], ["class", "list-group-item list-group-item-success", 4, "ngIf"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-success"]], template: function TicTacToeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TicTacToeComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); ctx.enterRoom(_r0.value.roomName); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter Room Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TicTacToeComponent_small_11_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Join Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TicTacToeComponent_table_15_Template, 10, 2, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_button_click_19_listener() { return ctx.leaveRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leave Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Users In Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TicTacToeComponent_li_23_Template, 2, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Room Anouncements:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TicTacToeComponent_li_26_Template, 4, 2, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TicTacToeComponent_div_28_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TicTacToeComponent_button_30_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TicTacToeComponent_button_31_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TicTacToeComponent_div_32_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TicTacToeComponent_div_33_Template, 6, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_36_listener() { return ctx.move(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_38_listener() { return ctx.move(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_40_listener() { return ctx.move(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_43_listener() { return ctx.move(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_45_listener() { return ctx.move(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_47_listener() { return ctx.move(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_50_listener() { return ctx.move(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_52_listener() { return ctx.move(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicTacToeComponent_Template_div_click_54_listener() { return ctx.move(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isInRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r1.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.pristine && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roomsMap !== undefined && ctx.roomsMap.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isInRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersByRoomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cachePlayers.length === 2 && ctx.playerInTurn === "" && ctx.checkUser(ctx.currentUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkUser(ctx.currentUser) && ctx.cachePlayers.length < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkUser(ctx.currentUser) && ctx.playerInTurn === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cachePlayers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkUser(ctx.currentUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.board[8]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.board[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: auto;\n  display: grid;\n}\n\n.board[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  border: green solid 2px;\n  height: 100px;\n  width: 100px;\n  margin: auto;\n  font-size: 80px;\n  text-align: center;\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  animation: fadeIn linear 0.5s;\n  -webkit-animation: fadeIn linear 0.5s;\n  -moz-animation: fadeIn linear 0.5s;\n  -o-animation: fadeIn linear 0.5s;\n  -ms-animation: fadeIn linear 0.5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFuZ3lpY2hlbi9Eb2N1bWVudHMvRGV2ZW9wZXIgUmVsYXRlZC9PdGhlciBleGVyY2lzZXM6cHJvamVjdHMvZnMtYmxvZy9mcm9udC1lbmQvc3JjL2FwcC9ob21lL2NvbXBvbmVudHMvdGljLXRhYy10b2UvdGljLXRhYy10b2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy90aWMtdGFjLXRvZS90aWMtdGFjLXRvZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDR0o7O0FEQUU7RUFDRTtJQUFJLFVBQUE7RUNJTjtFREhFO0lBQU0sVUFBQTtFQ01SO0FBQ0Y7O0FEQ0U7RUFDRTtJQUFJLFVBQUE7RUNVTjtFRFRFO0lBQU0sVUFBQTtFQ1lSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvdGljLXRhYy10b2UvdGljLXRhYy10b2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2FyZHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZGlzcGxheTpncmlkO1xufVxuLmJvYXJkIC5jb2x7XG4gICAgYm9yZGVyOmdyZWVuIHNvbGlkIDJweDtcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZm9udC1zaXplOjgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4uZmFkZUluIHtcbiAgICBhbmltYXRpb246IGZhZGVJbiBsaW5lYXIgLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIC41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAuNXM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIC41cztcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIC41cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtvcGFjaXR5OjA7fVxuICAgIDEwMCUge29wYWNpdHk6MTt9XG4gIH1cbiAgXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtvcGFjaXR5OjA7fVxuICAgIDEwMCUge29wYWNpdHk6MTt9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtvcGFjaXR5OjA7fVxuICAgIDEwMCUge29wYWNpdHk6MTt9XG4gIH1cbiAgXG4gIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7b3BhY2l0eTowO31cbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxuICB9IiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5ib2FyZCAuY29sIHtcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xuICAtby1hbmltYXRpb246IGZhZGVJbiBsaW5lYXIgMC41cztcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicTacToeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tic-tac-toe',
                templateUrl: './tic-tac-toe.component.html',
                styleUrls: ['./tic-tac-toe.component.scss']
            }]
    }], function () { return [{ type: src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/components/user-home/user-home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/components/user-home/user-home.component.ts ***!
  \******************************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["tic-tac-toe"]; };
class UserHomeComponent {
    constructor(authService) {
        this.authService = authService;
        const userData = this.authService.getUserDataFromLocalStorage('userData');
        this.name = userData.username;
    }
}
UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) { return new (t || UserHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserHomeComponent, selectors: [["user-home"]], decls: 10, vars: 3, consts: [["routerLinkActive", "router-link-active", 3, "routerLink"]], template: function UserHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Big2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u4E95\u5B57\u904E\u4E09\u95DC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.name, ", what would you like to do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-home',
                templateUrl: './user-home.component.html',
                styleUrls: ['./user-home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/home/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-home/user-home.component */ "./src/app/home/components/user-home/user-home.component.ts");
/* harmony import */ var _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tic-tac-toe/tic-tac-toe.component */ "./src/app/home/components/tic-tac-toe/tic-tac-toe.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/home/components/room/room.component.ts");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"],
        _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_6__["TicTacToeComponent"],
        _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]], exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"],
                    _components_tic_tac_toe_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_6__["TicTacToeComponent"],
                    _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                exports: [
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(_http) {
        this._http = _http;
        // baseUrl = 'http://localhost:4000';
        this.baseUrl = 'https://pvpgames.herokuapp.com';
    }
    getTypeRequest(url) {
        return this._http.get(`${this.baseUrl}${url}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            return res;
        }));
    }
    postTypeRequest(url, payload) {
        return this._http.post(`${this.baseUrl}${url}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            return res;
        }));
    }
    putTypeRequest(url, payload) {
        return this._http.put(`${this.baseUrl}${url}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            return res;
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



class AuthGuardService {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate() {
        return this.authService.checkLogInStatus();
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthService {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        route.params.subscribe(params => {
            this.id = parseInt(params['id']);
        });
    }
    checkLogInStatus() {
        const userData = this.getUserDataFromLocalStorage('userData');
        this.isLoggedIn = !!(userData && userData.id);
        return this.isLoggedIn;
    }
    setUserDataInLocalStorage(variableName, data) {
        localStorage.setItem(variableName, data);
    }
    getUserDataFromLocalStorage(variableName) {
        return JSON.parse(localStorage.getItem(variableName));
    }
    clearStorage() {
        localStorage.clear();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/room.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-socket.service */ "./src/app/services/web-socket.service.ts");




class RoomService {
    constructor(apiService, webSocketService) {
        this.apiService = apiService;
        this.webSocketService = webSocketService;
    }
    getRooms() {
        this.apiService.getTypeRequest('/user/tic-tac-toe/rooms/mysql')
            .subscribe((res) => {
            this.webSocketService.emit("updateRoomsDb", res);
        });
    }
    leaveRoom(roomId, user) {
        this.updateUsersMsgsMySql(roomId, user, `${user} leaves room ${roomId}.`, "delete");
        this.webSocketService.emit('leave', { room: roomId });
    }
    enterRoom(roomId, user) {
        this.webSocketService.emit('join', { room: roomId });
        this.updateUsersMsgsMySql(roomId, user, `${user} enters room ${roomId}.`, "add");
    }
    updateUsersMsgsMySql(roomId, user, msg, addOrDelete) {
        let path = `/user/tic-tac-toe/${roomId}/msgs-users/mysql`;
        this.apiService.postTypeRequest(path, {
            user,
            msg,
            addOrDelete
        }).subscribe((res) => {
            this.getRooms();
            this.webSocketService.emit('updateRoom', {
                msgs: res.msgs,
                users: res.users,
                room: roomId
            });
        });
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"])); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);




class WebSocketService {
    // readonly url: string = "ws://localhost:3000";
    constructor() {
        this.url = "https://pvpgames-socket.herokuapp.com";
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.url);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        if (eventName === 'updatePlayerList') {
            console.log(data);
        }
        this.socket.emit(eventName, data);
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shangyichen/Documents/Deveoper Related/Other exercises:projects/fs-blog/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map