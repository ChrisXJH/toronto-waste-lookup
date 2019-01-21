(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  background-color: #f8fefa;\n  width: 70%;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZlZmE7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-header></app-header> <app-search-bar></app-search-bar>\n  <app-results></app-results>\n  <app-favourites></app-favourites>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'toronto-waste-lookup';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/favourites/favourites.component */ "./src/app/components/favourites/favourites.component.ts");
/* harmony import */ var _components_waste_item_waste_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/waste-item/waste-item.component */ "./src/app/components/waste-item/waste-item.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                _components_results_results_component__WEBPACK_IMPORTED_MODULE_9__["ResultsComponent"],
                _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_10__["FavouritesComponent"],
                _components_waste_item_waste_item_component__WEBPACK_IMPORTED_MODULE_11__["WasteItemComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_14__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot(_store_effects__WEBPACK_IMPORTED_MODULE_15__["effects"])
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_13__["services"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/favourites/favourites.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favourites-container {\n  padding: 1em;\n  background-color: #f8fefa;\n  min-height: 160px;\n}\n\nli {\n  list-style: none;\n}\n\nh3 {\n  color: #4b9662;\n  font-weight: bold;\n  margin-bottom: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm91cml0ZXMvZmF2b3VyaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm91cml0ZXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmZWZhO1xuICBtaW4taGVpZ2h0OiAxNjBweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjNGI5NjYyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/favourites/favourites.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favourites-container container-fluid\">\n  <h3>Favourites</h3>\n  <ng-container *ngIf=\"(favourites$ | async) as favourites\">\n    <ul>\n      <li *ngFor=\"let item of favourites\">\n        <app-waste-item [item]=\"item\"></app-waste-item>\n      </li>\n    </ul>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/components/favourites/favourites.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.ts ***!
  \***************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(store) {
        this.store = store;
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        this.favourites$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getFavouritesEntitiesSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.favourites; }));
    };
    FavouritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/components/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.css */ "./src/app/components/favourites/favourites.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background: linear-gradient(to right, #2c5791, #499364);\n}\n\nh1 {\n  font-size: 2.6em;\n  font-weight: bold;\n  padding: 1em 0;\n  text-align: center;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmM1NzkxLCAjNDk5MzY0KTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjMmM1NzkxLCAjNDk5MzY0KTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICMyYzU3OTEsICM0OTkzNjQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyYzU3OTEsICM0OTkzNjQpO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMi42ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1>Toronto Waste Lookup</h1></div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/results/results.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/results/results.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results-container {\n  padding: 1em;\n  background-color: #fff;\n}\n\nli {\n  list-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/results/results.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/results/results.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results-container container-fluid\">\n  <ng-container\n    *ngIf=\"!(isLoading$ | async) && (data$ | async) as data; else loading\"\n  >\n    <ul>\n      <li *ngFor=\"let item of data\">\n        <app-waste-item [item]=\"item\"></app-waste-item>\n      </li>\n    </ul>\n  </ng-container>\n</div>\n<ng-template #loading>Loading...</ng-template>\n"

/***/ }),

/***/ "./src/app/components/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(store) {
        this.store = store;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.data$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_2__["getWasteLookupEntitiesSelector"]));
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_2__["getWasteLookupIsLoadingSelector"]));
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/components/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/components/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  padding: 1em;\n  background-color: #fff;\n}\n\ninput {\n  float: left;\n  border: 1px solid #ddd;\n  width: 100%;\n  margin-right: 1em;\n  height: 48px;\n  font-size: 1em;\n  line-height: 48px;\n  text-indent: 1em;\n  outline: none;\n  box-sizing: border-box;\n}\n\nbutton {\n  float: left;\n  outline: none;\n  height: 48px;\n  background-color: #4b9662;\n  padding: 0 0.8em;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\nbutton i {\n  font-size: 2em;\n  color: #fff;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgdGV4dC1pbmRlbnQ6IDFlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiOTY2MjtcbiAgcGFkZGluZzogMCAwLjhlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIGkge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar container-fluid\">\n  <form (submit)=\"handleSubmit($event)\">\n    <div class=\"row\">\n      <div class=\"col-md-11\">\n        <input\n          type=\"text\"\n          name=\"input\"\n          placeholder=\"Enter keyword ...\"\n          (change)=\"handleTextboxUpdate($event)\"\n        />\n      </div>\n      <div class=\"col-md-1\">\n        <button id=\"submit-button\" type=\"submit\">\n          <i class=\"fas fa-search\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(store) {
        this.store = store;
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    SearchBarComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        var inputText = event.target.querySelector('[name=input]').value;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__["GetWasteData"](inputText));
    };
    SearchBarComponent.prototype.handleTextboxUpdate = function (event) {
        var value = event.target.value;
        if (value === '') {
            this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__["GetWasteData"](''));
        }
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/waste-item/waste-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/waste-item/waste-item.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star-icon {\n  color: #aaa;\n  cursor: pointer;\n}\n\n.star-icon.favourite {\n  color: #4b9662;\n}\n\n.icon-container,\n.title-container {\n  display: inline-block;\n}\n\n.icon-container {\n  margin-right: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXN0ZS1pdGVtL3dhc3RlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhc3RlLWl0ZW0vd2FzdGUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXItaWNvbiB7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGFyLWljb24uZmF2b3VyaXRlIHtcbiAgY29sb3I6ICM0Yjk2NjI7XG59XG5cbi5pY29uLWNvbnRhaW5lcixcbi50aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/waste-item/waste-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/waste-item/waste-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"icon-container\">\n        <i\n          class=\"fas fa-star star-icon\"\n          [ngClass]=\"{ favourite: item.isFavourite }\"\n          (click)=\"handleFavourite($event)\"\n        ></i>\n      </div>\n      <div class=\"title-container\">\n        <p>{{ item.title }}</p>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"body\" [innerHTML]=\"decode(item.body)\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/waste-item/waste-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/waste-item/waste-item.component.ts ***!
  \***************************************************************/
/*! exports provided: WasteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasteItemComponent", function() { return WasteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WasteItemComponent = /** @class */ (function () {
    function WasteItemComponent(store) {
        this.store = store;
        this.item = {};
    }
    WasteItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getFavouritesEntitiesSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.handleFavouritesUpdate(data); }))
            .subscribe();
    };
    WasteItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WasteItemComponent.prototype.handleFavouritesUpdate = function (data) {
        if (data.newItem && data.newItem.title === this.item.title) {
            this.item.isFavourite = true;
        }
        else if (data.removedItem && data.removedItem.title === this.item.title) {
            this.item.isFavourite = false;
        }
    };
    WasteItemComponent.prototype.decode = function (str) {
        if (str === undefined) {
            return '';
        }
        return str
            .replace(/&amp/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;'/g, "'")
            .replace(/&;nbsp;/g, ' ');
    };
    WasteItemComponent.prototype.handleFavourite = function () {
        if (this.item.isFavourite) {
            this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["RemoveFavourite"](this.item));
        }
        else {
            this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["AddFavourite"](this.item));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WasteItemComponent.prototype, "item", void 0);
    WasteItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waste-item',
            template: __webpack_require__(/*! ./waste-item.component.html */ "./src/app/components/waste-item/waste-item.component.html"),
            styles: [__webpack_require__(/*! ./waste-item.component.css */ "./src/app/components/waste-item/waste-item.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], WasteItemComponent);
    return WasteItemComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this.favourites = [];
        this.backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
    }
    DataService.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DataService.prototype.getFavourites = function () {
        return this.favourites;
    };
    DataService.prototype.addToFavourites = function (item) {
        this.favourites.push(item);
    };
    DataService.prototype.removeFromFavourites = function (targetItem) {
        this.favourites = this.favourites.filter(function (item) { return item.title !== targetItem.title; });
    };
    DataService.prototype.isFavourite = function (targetItem) {
        return this.favourites.some(function (item) { return item.title === targetItem.title; });
    };
    DataService.prototype.searchWaste = function (filter) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (!filter || filter === '') {
                observer.next([]);
                observer.complete();
            }
            else {
                _this.subscription = _this.getData()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                    return data.filter(function (item) {
                        return item.keywords &&
                            item.keywords
                                .split(', ')
                                .some(function (keyword) { return keyword.match(new RegExp(filter, 'g')); });
                    });
                }))
                    .subscribe(function (data) {
                    observer.next(data);
                    observer.complete();
                });
            }
        });
    };
    DataService.prototype.getData = function () {
        var _this = this;
        return this.httpGet(this.backendUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) {
            items.map(function (item) {
                item.isFavourite = _this.isFavourite(item);
                return item;
            });
            return items;
        }));
    };
    DataService.prototype.httpGet = function (target) {
        return this.httpClient.get(target);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: services, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]; });



var services = [_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]];


/***/ }),

/***/ "./src/app/store/actions/favourite.action.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/favourite.action.ts ***!
  \***************************************************/
/*! exports provided: ADD_FAVOURITE, REMOVE_FAVOURITE, UPDATE_FAVOURITE_SUCCESS, UPDATE_FAVOURITE_FAILURE, AddFavourite, RemoveFavourite, UpdateFavouriteSuccess, UpdateFavouriteFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAVOURITE", function() { return ADD_FAVOURITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FAVOURITE", function() { return REMOVE_FAVOURITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVOURITE_SUCCESS", function() { return UPDATE_FAVOURITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVOURITE_FAILURE", function() { return UPDATE_FAVOURITE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavourite", function() { return AddFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavourite", function() { return RemoveFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFavouriteSuccess", function() { return UpdateFavouriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFavouriteFailure", function() { return UpdateFavouriteFailure; });
var ADD_FAVOURITE = '[Favourites] Add Favourite';
var REMOVE_FAVOURITE = '[Favourites] Remove Favourite';
var UPDATE_FAVOURITE_SUCCESS = '[Favourites] Update Favourite Success';
var UPDATE_FAVOURITE_FAILURE = '[Favourites] Update Favourite Failure';
var AddFavourite = /** @class */ (function () {
    function AddFavourite(payload) {
        this.payload = payload;
        this.type = ADD_FAVOURITE;
    }
    return AddFavourite;
}());

var RemoveFavourite = /** @class */ (function () {
    function RemoveFavourite(payload) {
        this.payload = payload;
        this.type = REMOVE_FAVOURITE;
    }
    return RemoveFavourite;
}());

var UpdateFavouriteSuccess = /** @class */ (function () {
    function UpdateFavouriteSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_FAVOURITE_SUCCESS;
    }
    return UpdateFavouriteSuccess;
}());

var UpdateFavouriteFailure = /** @class */ (function () {
    function UpdateFavouriteFailure() {
        this.type = UPDATE_FAVOURITE_FAILURE;
    }
    return UpdateFavouriteFailure;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: GET_WASTE_DATA, GET_WASTE_DATA_SUCCESS, GET_WASTE_DATA_FAILURE, GetWasteData, GetWasteDataSuccess, GetWasteDataFailure, ADD_FAVOURITE, REMOVE_FAVOURITE, UPDATE_FAVOURITE_SUCCESS, UPDATE_FAVOURITE_FAILURE, AddFavourite, RemoveFavourite, UpdateFavouriteSuccess, UpdateFavouriteFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waste-lookup.action */ "./src/app/store/actions/waste-lookup.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA", function() { return _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__["GET_WASTE_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA_SUCCESS", function() { return _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__["GET_WASTE_DATA_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA_FAILURE", function() { return _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__["GET_WASTE_DATA_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetWasteData", function() { return _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__["GetWasteData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetWasteDataSuccess", function() { return _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__["GetWasteDataSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetWasteDataFailure", function() { return _waste_lookup_action__WEBPACK_IMPORTED_MODULE_0__["GetWasteDataFailure"]; });

/* harmony import */ var _favourite_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite.action */ "./src/app/store/actions/favourite.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_FAVOURITE", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["ADD_FAVOURITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FAVOURITE", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FAVOURITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVOURITE_SUCCESS", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FAVOURITE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVOURITE_FAILURE", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FAVOURITE_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFavourite", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["AddFavourite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveFavourite", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["RemoveFavourite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateFavouriteSuccess", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["UpdateFavouriteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateFavouriteFailure", function() { return _favourite_action__WEBPACK_IMPORTED_MODULE_1__["UpdateFavouriteFailure"]; });





/***/ }),

/***/ "./src/app/store/actions/waste-lookup.action.ts":
/*!******************************************************!*\
  !*** ./src/app/store/actions/waste-lookup.action.ts ***!
  \******************************************************/
/*! exports provided: GET_WASTE_DATA, GET_WASTE_DATA_SUCCESS, GET_WASTE_DATA_FAILURE, GetWasteData, GetWasteDataSuccess, GetWasteDataFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA", function() { return GET_WASTE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA_SUCCESS", function() { return GET_WASTE_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA_FAILURE", function() { return GET_WASTE_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWasteData", function() { return GetWasteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWasteDataSuccess", function() { return GetWasteDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWasteDataFailure", function() { return GetWasteDataFailure; });
var GET_WASTE_DATA = '[Waste Lookup] Get Waste Data';
var GET_WASTE_DATA_SUCCESS = '[Waste Lookup] Get Waste Data Success';
var GET_WASTE_DATA_FAILURE = '[Waste Lookup] Get Waste Data Failure';
var GetWasteData = /** @class */ (function () {
    function GetWasteData(payload) {
        this.payload = payload;
        this.type = GET_WASTE_DATA;
    }
    return GetWasteData;
}());

var GetWasteDataSuccess = /** @class */ (function () {
    function GetWasteDataSuccess(payload) {
        this.payload = payload;
        this.type = GET_WASTE_DATA_SUCCESS;
    }
    return GetWasteDataSuccess;
}());

var GetWasteDataFailure = /** @class */ (function () {
    function GetWasteDataFailure() {
        this.type = GET_WASTE_DATA_FAILURE;
    }
    return GetWasteDataFailure;
}());



/***/ }),

/***/ "./src/app/store/effects/favourites.effect.ts":
/*!****************************************************!*\
  !*** ./src/app/store/effects/favourites.effect.ts ***!
  \****************************************************/
/*! exports provided: FavouritesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesEffects", function() { return FavouritesEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavouritesEffects = /** @class */ (function () {
    function FavouritesEffects(actions$, dataService) {
        var _this = this;
        this.actions$ = actions$;
        this.dataService = dataService;
        this.addFavourite$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_FAVOURITE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            _this.dataService.addToFavourites(action.payload);
            var newItem = action.payload;
            var favourites = _this.dataService.getFavourites();
            return new _actions__WEBPACK_IMPORTED_MODULE_5__["UpdateFavouriteSuccess"]({ newItem: newItem, favourites: favourites });
        }));
        this.removeFavourite$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FAVOURITE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            _this.dataService.removeFromFavourites(action.payload);
            var favourites = _this.dataService.getFavourites();
            var removedItem = action.payload;
            return new _actions__WEBPACK_IMPORTED_MODULE_5__["UpdateFavouriteSuccess"]({ favourites: favourites, removedItem: removedItem });
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], FavouritesEffects.prototype, "addFavourite$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], FavouritesEffects.prototype, "removeFavourite$", void 0);
    FavouritesEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], FavouritesEffects);
    return FavouritesEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: effects, WasteLookupEffects, FavouritesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _waste_lookup_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waste-lookup.effect */ "./src/app/store/effects/waste-lookup.effect.ts");
/* harmony import */ var _favourites_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.effect */ "./src/app/store/effects/favourites.effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WasteLookupEffects", function() { return _waste_lookup_effect__WEBPACK_IMPORTED_MODULE_0__["WasteLookupEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavouritesEffects", function() { return _favourites_effect__WEBPACK_IMPORTED_MODULE_1__["FavouritesEffects"]; });





var effects = [_waste_lookup_effect__WEBPACK_IMPORTED_MODULE_0__["WasteLookupEffects"], _favourites_effect__WEBPACK_IMPORTED_MODULE_1__["FavouritesEffects"]];


/***/ }),

/***/ "./src/app/store/effects/waste-lookup.effect.ts":
/*!******************************************************!*\
  !*** ./src/app/store/effects/waste-lookup.effect.ts ***!
  \******************************************************/
/*! exports provided: WasteLookupEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasteLookupEffects", function() { return WasteLookupEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WasteLookupEffects = /** @class */ (function () {
    function WasteLookupEffects(actions$, dataService) {
        var _this = this;
        this.actions$ = actions$;
        this.dataService = dataService;
        this.getWasteData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["GET_WASTE_DATA"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.dataService.searchWaste(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions__WEBPACK_IMPORTED_MODULE_5__["GetWasteDataSuccess"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["GetWasteDataFailure"]()); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], WasteLookupEffects.prototype, "getWasteData$", void 0);
    WasteLookupEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], WasteLookupEffects);
    return WasteLookupEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: effects, reducers, GET_WASTE_DATA, GET_WASTE_DATA_SUCCESS, GET_WASTE_DATA_FAILURE, GetWasteData, GetWasteDataSuccess, GetWasteDataFailure, ADD_FAVOURITE, REMOVE_FAVOURITE, UPDATE_FAVOURITE_SUCCESS, UPDATE_FAVOURITE_FAILURE, AddFavourite, RemoveFavourite, UpdateFavouriteSuccess, UpdateFavouriteFailure, WasteLookupEffects, FavouritesEffects, WasteLookupReducer, initialWasteLookupState, getWasteLookupEntities, getWasteLookupIsLoading, initialFavouritesState, getFavouritesEntities, getFavouritesIsLoading, getWasteLookupStateSelector, getWasteLookupEntitiesSelector, getWasteLookupIsLoadingSelector, getFavouritesStateSelector, getFavouritesEntitiesSelector, getFavouritesIsLoadingSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_WASTE_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_WASTE_DATA_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_WASTE_DATA_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_WASTE_DATA_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetWasteData", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetWasteData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetWasteDataSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetWasteDataSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetWasteDataFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetWasteDataFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_FAVOURITE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_FAVOURITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FAVOURITE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FAVOURITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVOURITE_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FAVOURITE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVOURITE_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FAVOURITE_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFavourite", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["AddFavourite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveFavourite", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["RemoveFavourite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateFavouriteSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateFavouriteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateFavouriteFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateFavouriteFailure"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WasteLookupEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["WasteLookupEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavouritesEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["FavouritesEffects"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WasteLookupReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["WasteLookupReducer"]; });

/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states */ "./src/app/store/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialWasteLookupState", function() { return _states__WEBPACK_IMPORTED_MODULE_3__["initialWasteLookupState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupEntities", function() { return _states__WEBPACK_IMPORTED_MODULE_3__["getWasteLookupEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupIsLoading", function() { return _states__WEBPACK_IMPORTED_MODULE_3__["getWasteLookupIsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialFavouritesState", function() { return _states__WEBPACK_IMPORTED_MODULE_3__["initialFavouritesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesEntities", function() { return _states__WEBPACK_IMPORTED_MODULE_3__["getFavouritesEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesIsLoading", function() { return _states__WEBPACK_IMPORTED_MODULE_3__["getFavouritesIsLoading"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupStateSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getWasteLookupStateSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupEntitiesSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getWasteLookupEntitiesSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupIsLoadingSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getWasteLookupIsLoadingSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesStateSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getFavouritesStateSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesEntitiesSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getFavouritesEntitiesSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesIsLoadingSelector", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getFavouritesIsLoadingSelector"]; });








/***/ }),

/***/ "./src/app/store/reducers/favourites.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/reducers/favourites.reducer.ts ***!
  \******************************************************/
/*! exports provided: FavouritesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesReducer", function() { return FavouritesReducer; });
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states */ "./src/app/store/states/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function FavouritesReducer(state, action) {
    if (state === void 0) { state = _states__WEBPACK_IMPORTED_MODULE_0__["initialFavouritesState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FAVOURITE"]:
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_FAVOURITE"]: {
            return __assign({}, state, { isLoading: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FAVOURITE_SUCCESS"]: {
            var favouritesEntities = action.payload;
            return __assign({}, state, { favouritesEntities: favouritesEntities, isLoading: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FAVOURITE_FAILURE"]: {
            return __assign({}, state, { isLoading: false });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, WasteLookupReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _waste_lookup_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waste-lookup.reducer */ "./src/app/store/reducers/waste-lookup.reducer.ts");
/* harmony import */ var _favourites_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.reducer */ "./src/app/store/reducers/favourites.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WasteLookupReducer", function() { return _waste_lookup_reducer__WEBPACK_IMPORTED_MODULE_0__["WasteLookupReducer"]; });




var reducers = {
    wasteLookup: _waste_lookup_reducer__WEBPACK_IMPORTED_MODULE_0__["WasteLookupReducer"],
    favourites: _favourites_reducer__WEBPACK_IMPORTED_MODULE_1__["FavouritesReducer"]
};


/***/ }),

/***/ "./src/app/store/reducers/waste-lookup.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/reducers/waste-lookup.reducer.ts ***!
  \********************************************************/
/*! exports provided: WasteLookupReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasteLookupReducer", function() { return WasteLookupReducer; });
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states */ "./src/app/store/states/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function WasteLookupReducer(state, action) {
    if (state === void 0) { state = _states__WEBPACK_IMPORTED_MODULE_0__["initialWasteLookupState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_WASTE_DATA"]: {
            return __assign({}, state, { isLoading: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_WASTE_DATA_SUCCESS"]: {
            var wasteLookupEntities = action.payload;
            return __assign({}, state, { wasteLookupEntities: wasteLookupEntities, isLoading: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_WASTE_DATA_FAILURE"]: {
            return __assign({}, state, { isLoading: false });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/selectors/favourites.selector.ts":
/*!********************************************************!*\
  !*** ./src/app/store/selectors/favourites.selector.ts ***!
  \********************************************************/
/*! exports provided: getFavouritesStateSelector, getFavouritesEntitiesSelector, getFavouritesIsLoadingSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritesStateSelector", function() { return getFavouritesStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritesEntitiesSelector", function() { return getFavouritesEntitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritesIsLoadingSelector", function() { return getFavouritesIsLoadingSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states */ "./src/app/store/states/index.ts");


var getFavouritesStateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('favourites');
var getFavouritesEntitiesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFavouritesStateSelector, _states__WEBPACK_IMPORTED_MODULE_1__["getFavouritesEntities"]);
var getFavouritesIsLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFavouritesStateSelector, _states__WEBPACK_IMPORTED_MODULE_1__["getFavouritesIsLoading"]);


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: getWasteLookupStateSelector, getWasteLookupEntitiesSelector, getWasteLookupIsLoadingSelector, getFavouritesStateSelector, getFavouritesEntitiesSelector, getFavouritesIsLoadingSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waste_lookup_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waste-lookup.selector */ "./src/app/store/selectors/waste-lookup.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupStateSelector", function() { return _waste_lookup_selector__WEBPACK_IMPORTED_MODULE_0__["getWasteLookupStateSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupEntitiesSelector", function() { return _waste_lookup_selector__WEBPACK_IMPORTED_MODULE_0__["getWasteLookupEntitiesSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupIsLoadingSelector", function() { return _waste_lookup_selector__WEBPACK_IMPORTED_MODULE_0__["getWasteLookupIsLoadingSelector"]; });

/* harmony import */ var _favourites_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.selector */ "./src/app/store/selectors/favourites.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesStateSelector", function() { return _favourites_selector__WEBPACK_IMPORTED_MODULE_1__["getFavouritesStateSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesEntitiesSelector", function() { return _favourites_selector__WEBPACK_IMPORTED_MODULE_1__["getFavouritesEntitiesSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesIsLoadingSelector", function() { return _favourites_selector__WEBPACK_IMPORTED_MODULE_1__["getFavouritesIsLoadingSelector"]; });





/***/ }),

/***/ "./src/app/store/selectors/waste-lookup.selector.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/selectors/waste-lookup.selector.ts ***!
  \**********************************************************/
/*! exports provided: getWasteLookupStateSelector, getWasteLookupEntitiesSelector, getWasteLookupIsLoadingSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupStateSelector", function() { return getWasteLookupStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupEntitiesSelector", function() { return getWasteLookupEntitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupIsLoadingSelector", function() { return getWasteLookupIsLoadingSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states */ "./src/app/store/states/index.ts");


var getWasteLookupStateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('wasteLookup');
var getWasteLookupEntitiesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getWasteLookupStateSelector, _states__WEBPACK_IMPORTED_MODULE_1__["getWasteLookupEntities"]);
var getWasteLookupIsLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getWasteLookupStateSelector, _states__WEBPACK_IMPORTED_MODULE_1__["getWasteLookupIsLoading"]);


/***/ }),

/***/ "./src/app/store/states/favourites.state.ts":
/*!**************************************************!*\
  !*** ./src/app/store/states/favourites.state.ts ***!
  \**************************************************/
/*! exports provided: initialFavouritesState, getFavouritesEntities, getFavouritesIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFavouritesState", function() { return initialFavouritesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritesEntities", function() { return getFavouritesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavouritesIsLoading", function() { return getFavouritesIsLoading; });
var initialFavouritesState = {
    favouritesEntities: [],
    isLoading: false
};
var getFavouritesEntities = function (state) {
    return state.favouritesEntities;
};
var getFavouritesIsLoading = function (state) {
    return state.isLoading;
};


/***/ }),

/***/ "./src/app/store/states/index.ts":
/*!***************************************!*\
  !*** ./src/app/store/states/index.ts ***!
  \***************************************/
/*! exports provided: initialWasteLookupState, getWasteLookupEntities, getWasteLookupIsLoading, initialFavouritesState, getFavouritesEntities, getFavouritesIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waste_lookup_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waste-lookup.state */ "./src/app/store/states/waste-lookup.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialWasteLookupState", function() { return _waste_lookup_state__WEBPACK_IMPORTED_MODULE_0__["initialWasteLookupState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupEntities", function() { return _waste_lookup_state__WEBPACK_IMPORTED_MODULE_0__["getWasteLookupEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupIsLoading", function() { return _waste_lookup_state__WEBPACK_IMPORTED_MODULE_0__["getWasteLookupIsLoading"]; });

/* harmony import */ var _favourites_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.state */ "./src/app/store/states/favourites.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialFavouritesState", function() { return _favourites_state__WEBPACK_IMPORTED_MODULE_1__["initialFavouritesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesEntities", function() { return _favourites_state__WEBPACK_IMPORTED_MODULE_1__["getFavouritesEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFavouritesIsLoading", function() { return _favourites_state__WEBPACK_IMPORTED_MODULE_1__["getFavouritesIsLoading"]; });





/***/ }),

/***/ "./src/app/store/states/waste-lookup.state.ts":
/*!****************************************************!*\
  !*** ./src/app/store/states/waste-lookup.state.ts ***!
  \****************************************************/
/*! exports provided: initialWasteLookupState, getWasteLookupEntities, getWasteLookupIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialWasteLookupState", function() { return initialWasteLookupState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupEntities", function() { return getWasteLookupEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWasteLookupIsLoading", function() { return getWasteLookupIsLoading; });
var initialWasteLookupState = {
    wasteLookupEntities: [],
    isLoading: false
};
var getWasteLookupEntities = function (state) {
    return state.wasteLookupEntities;
};
var getWasteLookupIsLoading = function (state) {
    return state.isLoading;
};


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
var environment = {
    production: false,
    backendUrl: 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/ChrisXJH/toronto-waste-lookup/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map