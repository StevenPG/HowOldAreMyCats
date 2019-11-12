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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-toolbar></app-toolbar>\r\n<app-card-container></app-card-container>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-container/card-container.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-container/card-container.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container\">\r\n    <div class=\"row buffer\">\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Eli\"\r\n          [birthday]=\"EliBirthday.toDateString()\"\r\n          [age]=\"EliAge\"\r\n          [main_card_image]=\"EliImage\"\r\n          [avatar]=\"EliAvatar\"\r\n          [timeUntilBirthday]=\"EliTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Umbra\"\r\n          [birthday]=\"UmbraBirthday.toDateString()\"\r\n          [age]=\"UmbraAge\"\r\n          [main_card_image]=\"UmbraImage\"\r\n          [avatar]=\"UmbraAvatar\"\r\n          [timeUntilBirthday]=\"UmbraTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Bucket\"\r\n          [birthday]=\"BucketBirthday.toDateString()\"\r\n          [age]=\"BucketAge\"\r\n          [main_card_image]=\"BucketImage\"\r\n          [avatar]=\"BucketAvatar\"\r\n          [timeUntilBirthday]=\"BucketTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row buffer\">\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Bitty\"\r\n          [birthday]=\"BittyBirthday.toDateString()\"\r\n          [age]=\"BittyAge\"\r\n          [main_card_image]=\"BittyImage\"\r\n          [avatar]=\"BittyAvatar\"\r\n          [timeUntilBirthday]=\"BittyTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Wilson\"\r\n          [birthday]=\"WilsonBirthday.toDateString()\"\r\n          [age]=\"WilsonAge\"\r\n          [main_card_image]=\"WilsonImage\"\r\n          [avatar]=\"WilsonAvatar\"\r\n          [timeUntilBirthday]=\"WilsonTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Pixie\"\r\n          [birthday]=\"PixieBirthday.toDateString()\"\r\n          [age]=\"PixieAge\"\r\n          [main_card_image]=\"PixieImage\"\r\n          [avatar]=\"PixieAvatar\"\r\n          [timeUntilBirthday]=\"PixieTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row buffer\">\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_MilkyMoo\"\r\n          [birthday]=\"MilkyMooBirthday.toDateString()\"\r\n          [age]=\"MilkyMooAge\"\r\n          [main_card_image]=\"MilkyMooImage\"\r\n          [avatar]=\"MilkyMooAvatar\"\r\n          [timeUntilBirthday]=\"MilkyMooTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <app-cat-card\r\n          [name]=\"name_Bones\"\r\n          [birthday]=\"BonesBirthday.toDateString()\"\r\n          [age]=\"BonesAge\"\r\n          [main_card_image]=\"BonesImage\"\r\n          [avatar]=\"BonesAvatar\"\r\n          [timeUntilBirthday]=\"BonesTimeUntil\"\r\n        ></app-cat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cat-card/cat-card.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cat-card/cat-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar\r\n         [style.background-image]=\"'url(' + avatar + ')'\"\r\n         [style.background-size]=\"'cover'\"\r\n    ></div>\r\n    <mat-card-title>{{name}}</mat-card-title>\r\n    <mat-card-subtitle\r\n      matTooltip=\"{{timeUntilBirthday}}\"\r\n      matTooltipPosition=\"right\"\r\n    >\r\n      {{birthday}}\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <img mat-card-image [src]=\"main_card_image\" alt=\"cat image\">\r\n  <mat-card-content>\r\n    <p>{{age}}</p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"center\">\r\n  <mat-toolbar-row>\r\n    <span>So Many Cats!</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cat-site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _card_container_card_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-container/card-container.component */ "./src/app/card-container/card-container.component.ts");
/* harmony import */ var _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cat-card/cat-card.component */ "./src/app/cat-card/cat-card.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                _card_container_card_container_component__WEBPACK_IMPORTED_MODULE_7__["CardContainerComponent"],
                _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_8__["CatCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-container/card-container.component.css":
/*!*************************************************************!*\
  !*** ./src/app/card-container/card-container.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buffer {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1jb250YWluZXIvY2FyZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtY29udGFpbmVyL2NhcmQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVmZmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/card-container/card-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/card-container/card-container.component.ts ***!
  \************************************************************/
/*! exports provided: CardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainerComponent", function() { return CardContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);



var CardContainerComponent = /** @class */ (function () {
    function CardContainerComponent() {
        var _this = this;
        // Names
        this.name_Eli = "Eli";
        this.name_Umbra = "Umbra";
        this.name_Bucket = "Bucket";
        this.name_Bitty = "Bitty";
        this.name_Wilson = "Wilson";
        this.name_Pixie = "Pixie";
        this.name_MilkyMoo = "Milky Moo";
        this.name_Bones = "Bones";
        // Birthdays
        this.EliBirthday = new Date('May 1, 2010 10:15:00');
        this.UmbraBirthday = new Date('December 8, 2015 14:26:00');
        this.BucketBirthday = new Date('May 7, 2017 05:04:00');
        this.BittyBirthday = new Date('August 22, 2017 02:36:00');
        this.WilsonBirthday = new Date('April 27, 2018 16:45:00');
        this.PixieBirthday = new Date('April 19, 2019 19:10:00');
        this.MilkyMooBirthday = new Date('May 27, 2019 12:59:00');
        this.BonesBirthday = new Date('September 9, 2019 15:23:00');
        // Avatar Images
        this.EliAvatar = "https://i.imgur.com/sgKH3H2.jpg?1";
        this.UmbraAvatar = "https://i.imgur.com/TcYvgJo.jpg?1";
        this.BucketAvatar = "https://i.imgur.com/c6YfmLK.jpg";
        this.BittyAvatar = "https://i.imgur.com/kY2aEUA.jpg?1";
        this.WilsonAvatar = "https://i.imgur.com/J2IRbrg.jpg?1";
        this.PixieAvatar = "https://i.imgur.com/CazLbo4.jpg?1";
        this.MilkyMooAvatar = "https://i.imgur.com/gEQtsnN.jpg?1";
        this.BonesAvatar = "https://i.imgur.com/BYudQIp.jpg";
        // Main Images
        this.EliImage = "https://i.imgur.com/UyUY5E6.jpg?1";
        this.UmbraImage = "https://i.imgur.com/VMGyDVE.jpg";
        this.BucketImage = "https://i.imgur.com/CXTMCHK.jpg";
        this.BittyImage = "https://i.imgur.com/ZtE60WE.jpg?1";
        this.WilsonImage = "https://i.imgur.com/PK52q1J.jpg";
        this.PixieImage = "https://i.imgur.com/686zog1.jpg?1";
        this.MilkyMooImage = "https://i.imgur.com/xFJ5rGM.jpg?1";
        this.BonesImage = "https://i.imgur.com/K0uEhAO.jpg";
        setInterval(function () {
            // Calculate age to the second
            _this.EliAge = CardContainerComponent_1.calculateDateDifference(_this.EliBirthday);
            _this.UmbraAge = CardContainerComponent_1.calculateDateDifference(_this.UmbraBirthday);
            _this.BucketAge = CardContainerComponent_1.calculateDateDifference(_this.BucketBirthday);
            _this.BittyAge = CardContainerComponent_1.calculateDateDifference(_this.BittyBirthday);
            _this.WilsonAge = CardContainerComponent_1.calculateDateDifference(_this.WilsonBirthday);
            _this.PixieAge = CardContainerComponent_1.calculateDateDifference(_this.PixieBirthday);
            _this.MilkyMooAge = CardContainerComponent_1.calculateDateDifference(_this.MilkyMooBirthday);
            _this.BonesAge = CardContainerComponent_1.calculateDateDifference(_this.BonesBirthday);
            // Calculate time until birthday
            _this.EliTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.EliBirthday);
            _this.UmbraTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.UmbraBirthday);
            _this.BucketTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.BucketBirthday);
            _this.BittyTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.BittyBirthday);
            _this.WilsonTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.WilsonBirthday);
            _this.PixieTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.PixieBirthday);
            _this.MilkyMooTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.MilkyMooBirthday);
            _this.BonesTimeUntil = CardContainerComponent_1.calculateDaysUntilBirthday(_this.BonesBirthday);
        }, 990);
    }
    CardContainerComponent_1 = CardContainerComponent;
    CardContainerComponent.prototype.ngOnInit = function () {
    };
    CardContainerComponent.calculateDaysUntilBirthday = function (birthday) {
        var today = new Date();
        console.log(birthday.toDateString());
        var upcomingBirthday = null;
        if (today.getMonth() < birthday.getMonth() || today.getMonth() === birthday.getMonth()) {
            // if it's before the birthday month
            upcomingBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate(), 0, 0, 0);
        }
        else {
            // if we're past the birthday month
            // If the month (7) is less then birthday (8), and same is for day, set year to next
            upcomingBirthday = new Date(today.getFullYear() + 1, birthday.getMonth(), birthday.getDay(), 0, 0, 0);
        }
        return "My birthday is in " + Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["distanceInWords"])(today, upcomingBirthday, { includeSeconds: true });
    };
    CardContainerComponent.calculateDateDifference = function (birthday) {
        // get the total time from today to the birth date
        var today = new Date();
        // @ts-ignore
        var msDifference = today - birthday;
        var secondsDifference = msDifference / 1000;
        var years = Math.floor(secondsDifference / 31536000);
        var days = Math.floor((secondsDifference % 31536000) / 86400);
        var hours = Math.floor(((secondsDifference % 31536000) % 86400) / 3600);
        var minutes = Math.floor((((secondsDifference % 31536000) % 86400) % 3600) / 60);
        var seconds = (((secondsDifference % 31536000) % 86400) % 3600) % 60;
        var weeks = Math.floor(days / 7);
        var adjustedDays = days - (7 * weeks);
        var output = "";
        if (years < 1) {
            output = output + (weeks != 0 ? weeks + " weeks, " : "");
            output = output + (adjustedDays != 0 ? adjustedDays + " days, " : "");
            output = output + (hours != 0 ? hours + " hours, " : "");
            return output + minutes + " minutes, " + " and " + Math.floor(seconds) + " seconds old";
        }
        else {
            output = output + (years != 0 ? years + " years, " : "");
            output = output + (weeks != 0 ? weeks + " weeks, " : "");
            output = output + (adjustedDays != 0 ? adjustedDays + " days, " : "");
            output = output + (hours != 0 ? hours + " hours, " : "");
            return output + minutes + " minutes, " + " and " + Math.floor(seconds) + " seconds old";
        }
    };
    var CardContainerComponent_1;
    CardContainerComponent = CardContainerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-container',
            template: __webpack_require__(/*! raw-loader!./card-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-container/card-container.component.html"),
            styles: [__webpack_require__(/*! ./card-container.component.css */ "./src/app/card-container/card-container.component.css")]
        })
    ], CardContainerComponent);
    return CardContainerComponent;
}());



/***/ }),

/***/ "./src/app/cat-card/cat-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  max-width: 400px;\r\n}\r\n\r\n.header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LWNhcmQvY2F0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jYXQtY2FyZC9jYXQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cat-card/cat-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.ts ***!
  \************************************************/
/*! exports provided: CatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatCardComponent", function() { return CatCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CatCardComponent = /** @class */ (function () {
    function CatCardComponent() {
    }
    CatCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "birthday", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "age", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "main_card_image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "main_card_image_alt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CatCardComponent.prototype, "timeUntilBirthday", void 0);
    CatCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cat-card',
            template: __webpack_require__(/*! raw-loader!./cat-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/cat-card/cat-card.component.html"),
            styles: [__webpack_require__(/*! ./cat-card.component.css */ "./src/app/cat-card/cat-card.component.css")]
        })
    ], CatCardComponent);
    return CatCardComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  width: 60%;\r\n  margin: 0 auto 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Tyrsn\development\HowOldAreMyCats\cat-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map