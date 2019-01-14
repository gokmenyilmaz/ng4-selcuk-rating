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

/***/ "./src/app/Models/entityAll.ts":
/*!*************************************!*\
  !*** ./src/app/Models/entityAll.ts ***!
  \*************************************/
/*! exports provided: Oyuncu, Ayarlar, HaftaPuan, PuanTabloItem, SkorDetay, MacFoy, MacSatir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oyuncu", function() { return Oyuncu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ayarlar", function() { return Ayarlar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaftaPuan", function() { return HaftaPuan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuanTabloItem", function() { return PuanTabloItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkorDetay", function() { return SkorDetay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacFoy", function() { return MacFoy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacSatir", function() { return MacSatir; });
var Oyuncu = /** @class */ (function () {
    function Oyuncu(OyuncuAdSoyad, BaslamaPuan, BaslamaTarihi, AyrilisTarihi, Dogum_Yili, Haftalar) {
        this.OyuncuAdSoyad = OyuncuAdSoyad;
        this.BaslamaPuan = BaslamaPuan;
        this.BaslamaTarihi = BaslamaTarihi;
        this.AyrilisTarihi = AyrilisTarihi;
        this.Dogum_Yili = Dogum_Yili;
        this.Haftalar = Haftalar;
    }
    return Oyuncu;
}());

var Ayarlar = /** @class */ (function () {
    function Ayarlar(VarsayilanGrupBolunme, MacaGelmemeSkoru) {
        this.VarsayilanGrupBolunme = VarsayilanGrupBolunme;
        this.MacaGelmemeSkoru = MacaGelmemeSkoru;
    }
    return Ayarlar;
}());

var HaftaPuan = /** @class */ (function () {
    function HaftaPuan(MacOncesiPuan, AlinanTPuan, ToplamPuan) {
        this.MacOncesiPuan = MacOncesiPuan;
        this.AlinanTPuan = AlinanTPuan;
        this.ToplamPuan = ToplamPuan;
    }
    return HaftaPuan;
}());

var PuanTabloItem = /** @class */ (function () {
    function PuanTabloItem(OyuncuAdSoyad, MO_Puan, AlinanPuan, MS_Puan, Grup, Dogum_Yili) {
        this.OyuncuAdSoyad = OyuncuAdSoyad;
        this.MO_Puan = MO_Puan;
        this.AlinanPuan = AlinanPuan;
        this.MS_Puan = MS_Puan;
        this.Grup = Grup;
        this.Dogum_Yili = Dogum_Yili;
    }
    return PuanTabloItem;
}());

var SkorDetay = /** @class */ (function () {
    function SkorDetay(OyuncuKod, Skor, Puan, Sitil, Aciklama) {
        this.OyuncuKod = OyuncuKod;
        this.Skor = Skor;
        this.Puan = Puan;
        this.Sitil = Sitil;
        this.Aciklama = Aciklama;
    }
    return SkorDetay;
}());

var MacFoy = /** @class */ (function () {
    function MacFoy(Tarih, Mac_Satirlari, EklenenOyuncuAdlari) {
        if (Mac_Satirlari === void 0) { Mac_Satirlari = []; }
        if (EklenenOyuncuAdlari === void 0) { EklenenOyuncuAdlari = []; }
        this.Tarih = Tarih;
        this.Mac_Satirlari = Mac_Satirlari;
        this.EklenenOyuncuAdlari = EklenenOyuncuAdlari;
    }
    return MacFoy;
}());

var MacSatir = /** @class */ (function () {
    function MacSatir(GrupId, HaftaId, OyuncuAdSoyad, MO_Puan, AlinanTPuan, MS_Puan, C1, C2, C3, C4, C5, C6, C7, C8, C9, VarMi, BonusPuan) {
        this.GrupId = GrupId;
        this.HaftaId = HaftaId;
        this.OyuncuAdSoyad = OyuncuAdSoyad;
        this.MO_Puan = MO_Puan;
        this.AlinanTPuan = AlinanTPuan;
        this.MS_Puan = MS_Puan;
        this.C1 = C1;
        this.C2 = C2;
        this.C3 = C3;
        this.C4 = C4;
        this.C5 = C5;
        this.C6 = C6;
        this.C7 = C7;
        this.C8 = C8;
        this.C9 = C9;
        this.VarMi = VarMi;
        this.BonusPuan = BonusPuan;
    }
    return MacSatir;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _yonetim_yonetim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yonetim/yonetim.component */ "./src/app/admin/yonetim/yonetim.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_yonetim_yonetim_component__WEBPACK_IMPORTED_MODULE_2__["YonetimComponent"]],
            exports: [_yonetim_yonetim_component__WEBPACK_IMPORTED_MODULE_2__["YonetimComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/yonetim/yonetim.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/yonetim/yonetim.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3lvbmV0aW0veW9uZXRpbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/yonetim/yonetim.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/yonetim/yonetim.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  yonetim works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/yonetim/yonetim.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/yonetim/yonetim.component.ts ***!
  \****************************************************/
/*! exports provided: YonetimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YonetimComponent", function() { return YonetimComponent; });
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

var YonetimComponent = /** @class */ (function () {
    function YonetimComponent() {
    }
    YonetimComponent.prototype.ngOnInit = function () {
    };
    YonetimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yonetim',
            template: __webpack_require__(/*! ./yonetim.component.html */ "./src/app/admin/yonetim/yonetim.component.html"),
            styles: [__webpack_require__(/*! ./yonetim.component.css */ "./src/app/admin/yonetim/yonetim.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YonetimComponent);
    return YonetimComponent;
}());



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
/* harmony import */ var _oyuncular_oyuncu_list_oyuncu_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oyuncular/oyuncu-list/oyuncu-list.component */ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.ts");
/* harmony import */ var _macfoy_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macfoy/mac-foy/mac-foy.component */ "./src/app/macfoy/mac-foy/mac-foy.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: ":klup/:donem/oyuncular", component: _oyuncular_oyuncu_list_oyuncu_list_component__WEBPACK_IMPORTED_MODULE_2__["OyuncuListComponent"] },
    { path: ":klup/:donem/macfoy", component: _macfoy_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["MacFoyComponent"] },
    { path: ":klup/:donem/macfoy/:hafta/:grup", component: _macfoy_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["MacFoyComponent"] },
    { path: ":klup/:donem", component: _macfoy_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["MacFoyComponent"] },
    { path: "", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'app works!';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _oyuncular_oyuncular_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oyuncular/oyuncular.module */ "./src/app/oyuncular/oyuncular.module.ts");
/* harmony import */ var _macfoy_macfoy_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./macfoy/macfoy.module */ "./src/app/macfoy/macfoy.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                _oyuncular_oyuncular_module__WEBPACK_IMPORTED_MODULE_9__["OyuncularModule"],
                _macfoy_macfoy_module__WEBPACK_IMPORTED_MODULE_10__["MacfoyModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/core/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]
            ],
            declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/nav/nav.component.css":
/*!********************************************!*\
  !*** ./src/app/core/nav/nav.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/nav/nav.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/nav/nav.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n <mat-card>\r\n    <a routerLink=\"/oyuncular\" routerLinkActive=\"active\" mat-raised-button color=\"primary\">Oyuncular</a>\r\n    <a routerLink=\"/macfoy\" routerLinkActive=\"active\" mat-raised-button color=\"primary\">MacFoy</a>\r\n    <a routerLink=\"/edit\" routerLinkActive=\"active\" mat-raised-button color=\"primary\">OyuncuEdit</a>\r\n  </mat-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/core/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var MenuItem = /** @class */ (function () {
    function MenuItem(caption, link) {
        this.caption = caption;
        this.link = link;
    }
    return MenuItem;
}());
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        this.menuItems = [
            { caption: 'Dashboard', link: ['z'] },
            { caption: 'Characters', link: [''] },
            { caption: 'Vehicles', link: [''] },
            { caption: 'Admin', link: [''] },
            { caption: 'Login', link: [''] },
        ];
    };
    NavComponent.prototype.resetDb = function () {
        var msg = 'Are you sure you want to reset the database?';
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/core/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtHQUN4Qjs7RUFFRDtJQUNFLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n\r\n<p>\r\n  Daha önceden Klüp ve dönem adı tanımını yaptıysanız, <br/>\r\n\r\n  http://selcukrating.com/kulüp adınız/döneminiz<br/>\r\n\r\n  adresinden giriş yapınız...\r\n\r\n\r\n</p>\r\n\r\n<div class=\"example-container\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Klüp Kısa Adı (tek kelime ufak harflerle)\"[(ngModel)]=\"klup\" >\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Dönem Adı\" [(ngModel)]=\"donem\" >\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Grup Bölünmeleri 5,5,4,4 gibi yada 4,4,4\" [(ngModel)]=\"grupElememanSayilari\" >\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Maça Gelmedi Skoru\" [(ngModel)]=\"macagelmediSkoru\" >\r\n  </mat-form-field>\r\n\r\n  <div>\r\n    <button (click)=\"RatingGrupOlustur()\" style=\"width:200px;float: right\" mat-raised-button color=\"primary\">Rating Oluştur</button>\r\n  </div>\r\n\r\n  <mat-card *ngIf=\"klup_url\">\r\n\r\n      <mat-card-content >\r\n        <p>\r\n            Adrese girip oyuncuları tanımlayarak kullanabilirsiniz... Başarılar :)\r\n        </p>\r\n\r\n        <p>\r\n            <a routerLink={{klup_url}}>{{klup_url}}</a>\r\n            \r\n        </p>\r\n       \r\n\r\n      </mat-card-content>\r\n    \r\n    </mat-card>\r\n \r\n   \r\n  \r\n</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var app_Models_entityAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Models/entityAll */ "./src/app/Models/entityAll.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(af) {
        this.af = af;
        this.grupElememanSayilari = "";
        this.macagelmediSkoru = "1-3";
        this.klup_url = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.RatingGrupOlustur = function () {
        var _donemBasePath = "/" + this.klup.toLocaleLowerCase() + "/" + this.donem.toLocaleLowerCase();
        var _ayarlar = new app_Models_entityAll__WEBPACK_IMPORTED_MODULE_2__["Ayarlar"](this.grupElememanSayilari, this.macagelmediSkoru);
        this.af.object(_donemBasePath + "/Ayarlar").set(_ayarlar);
        this.klup_url = _donemBasePath + "/macfoy/1/A";
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/macfoy/mac-foy/mac-foy.component.css":
/*!******************************************************!*\
  !*** ./src/app/macfoy/mac-foy/mac-foy.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \r\n.mat-form-field-infix {\r\n    width: 10px!important\r\n}\r\n\r\nmat-card\r\n{\r\n   margin: 0px;\r\n   max-width: 100%!important;\r\n    padding: 5px;\r\n \r\n}\r\n\r\ntable {\r\n    border: 4px solid black !important;\r\n    /* table-layout: fixed;*/\r\n}\r\n\r\n.mat-option {\r\n    padding: 0 2px!important;\r\n}\r\n\r\n.siyah-zemin {\r\n        background-color: black !important;\r\n        width: 100%;\r\n        height: 45px;\r\n        border-radius: 5px;\r\n    }\r\n\r\na {\r\n        cursor: pointer;\r\n    }\r\n\r\n.siyah {\r\n        background-color: black;\r\n    }\r\n\r\n.kirmizi {\r\n        background-color: red;\r\n    }\r\n\r\n.yesil {\r\n        background-color: green;\r\n    }\r\n\r\n.sari {\r\n        background-color: yellow !important;\r\n    }\r\n\r\n.A {\r\n        background-color: moccasin;\r\n    }\r\n\r\n.B {\r\n        background-color: white;\r\n    }\r\n\r\n.C {\r\n        background-color: lightskyblue;\r\n    }\r\n\r\n.D {\r\n        background-color: white;\r\n    }\r\n\r\n.E {\r\n        background-color:  moccasin;\r\n    }\r\n\r\n.F {\r\n        background-color: white;\r\n    }\r\n\r\n.G {\r\n        background-color: lightskyblue;\r\n    }\r\n\r\n.H {\r\n        background-color: white;\r\n    }\r\n\r\n/*-----skor tablo ------------------*/\r\n\r\ndiv#skortablo-container {\r\n        overflow-x: auto;\r\n        margin-top: 10px;\r\n        padding: 5px;\r\n    }\r\n\r\ntable#skortablo {\r\n        table-layout: fixed;\r\n        width: 100%;\r\n        font-size: 0.90em;\r\n        zoom: 90%;\r\n\r\n        /*transform: scale(0.9,0.9)*/\r\n    }\r\n\r\ntable#skortablo .form-control {\r\n        padding: 2px!important;\r\n    }\r\n\r\nth.grup1-oyuncu {\r\n        width: 100px;\r\n    }\r\n\r\nth.grup1-mopuan,\r\n    th.grup1-mspuan {\r\n        width: 60px;\r\n    }\r\n\r\nth.grup1-apuan {\r\n        width: 45px;\r\n    }\r\n\r\nth.grup1-bonus {\r\n        width: 45px;\r\n    }\r\n\r\nth.skor {\r\n        width: 60px;\r\n    }\r\n\r\nth,\r\n    td button {\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\ntable#skortablo .form-control {\r\n        padding: 1px!important;\r\n    }\r\n\r\ntable#skortablo input::-webkit-inner-spin-button {\r\n        -webkit-appearance: none;\r\n    }\r\n\r\ndiv#puanListeContainer {\r\n        padding: 5px;\r\n    }\r\n\r\n.label-success\r\n    {\r\n        background-color: green;\r\n        color: white;\r\n        width: 20px;\r\n        padding: 2px;\r\n        font-size: 12px;\r\n    }\r\n\r\n.label-danger\r\n    {\r\n       \r\n         background-color: red;\r\n          color: white;\r\n        width: 20px;\r\n        padding: 2px;\r\n        font-size: 12px;\r\n    }\r\n\r\n.pull-right\r\n    {\r\n        float: right;\r\n    }\r\n\r\n.form-control\r\n    {\r\n        width: 100%;\r\n    }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjZm95L21hYy1mb3kvbWFjLWZveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDs7R0FFRyxZQUFZO0dBQ1osMEJBQTBCO0lBQ3pCLGFBQWE7O0NBRWhCOztBQUdEO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFHRztRQUNJLG1DQUFtQztRQUNuQyxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtLQUN0Qjs7QUFHRDtRQUNJLGdCQUFnQjtLQUNuQjs7QUFHRDtRQUNJLHdCQUF3QjtLQUMzQjs7QUFHRDtRQUNJLHNCQUFzQjtLQUN6Qjs7QUFHRDtRQUNJLHdCQUF3QjtLQUMzQjs7QUFHRDtRQUNJLG9DQUFvQztLQUN2Qzs7QUFHRDtRQUNJLDJCQUEyQjtLQUM5Qjs7QUFHRDtRQUNJLHdCQUF3QjtLQUMzQjs7QUFHRDtRQUNJLCtCQUErQjtLQUNsQzs7QUFHRDtRQUNJLHdCQUF3QjtLQUMzQjs7QUFHRDtRQUNJLDRCQUE0QjtLQUMvQjs7QUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7QUFFRDtRQUNJLCtCQUErQjtLQUNsQzs7QUFFRDtRQUNJLHdCQUF3QjtLQUMzQjs7QUFDRCxzQ0FBc0M7O0FBRXRDO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixhQUFhO0tBQ2hCOztBQUVEO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsVUFBVTs7UUFFViw2QkFBNkI7S0FDaEM7O0FBRUQ7UUFDSSx1QkFBdUI7S0FDMUI7O0FBRUQ7UUFDSSxhQUFhO0tBQ2hCOztBQUVEOztRQUVJLFlBQVk7S0FDZjs7QUFFRDtRQUNJLFlBQVk7S0FDZjs7QUFFRDtRQUNJLFlBQVk7S0FDZjs7QUFHRDtRQUNJLFlBQVk7S0FDZjs7QUFFRDs7UUFFSSxpQkFBaUI7UUFDakIsd0JBQXdCO0tBQzNCOztBQUVEO1FBQ0ksdUJBQXVCO0tBQzFCOztBQUVEO1FBQ0kseUJBQXlCO0tBQzVCOztBQUVEO1FBQ0ksYUFBYTtLQUNoQjs7QUFHRDs7UUFFSSx3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO0tBQ25COztBQUVEOzs7U0FHSyxzQkFBc0I7VUFDckIsYUFBYTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO0tBQ25COztBQUVEOztRQUVJLGFBQWE7S0FDaEI7O0FBRUQ7O1FBRUksWUFBWTtLQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFjZm95L21hYy1mb3kvbWFjLWZveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIFxyXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgd2lkdGg6IDEwcHghaW1wb3J0YW50XHJcbn1cclxuXHJcbm1hdC1jYXJkXHJcbntcclxuICAgbWFyZ2luOiAwcHg7XHJcbiAgIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiBcclxufVxyXG4gICAgIFxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIC8qIHRhYmxlLWxheW91dDogZml4ZWQ7Ki9cclxufVxyXG5cclxuLm1hdC1vcHRpb24ge1xyXG4gICAgcGFkZGluZzogMCAycHghaW1wb3J0YW50O1xyXG59XHJcbiAgICBcclxuXHJcbiAgICAuc2l5YWgtemVtaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2l5YWgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAua2lybWl6aSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAueWVzaWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2FyaSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5BIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtb2NjYXNpbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLkIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuQyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuRCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5FIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgbW9jY2FzaW47XHJcbiAgICB9XHJcblxyXG4gICAgLkYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5HIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLkgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLyotLS0tLXNrb3IgdGFibG8gLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBkaXYjc2tvcnRhYmxvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSNza29ydGFibG8ge1xyXG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjkwZW07XHJcbiAgICAgICAgem9vbTogOTAlO1xyXG5cclxuICAgICAgICAvKnRyYW5zZm9ybTogc2NhbGUoMC45LDAuOSkqL1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlI3Nrb3J0YWJsbyAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoLmdydXAxLW95dW5jdSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoLmdydXAxLW1vcHVhbixcclxuICAgIHRoLmdydXAxLW1zcHVhbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGguZ3J1cDEtYXB1YW4ge1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoLmdydXAxLWJvbnVzIHtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGguc2tvciB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCBidXR0b24ge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUjc2tvcnRhYmxvIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUjc2tvcnRhYmxvIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2I3B1YW5MaXN0ZUNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubGFiZWwtc3VjY2Vzc1xyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbC1kYW5nZXJcclxuICAgIHtcclxuICAgICAgIFxyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAucHVsbC1yaWdodFxyXG4gICAge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/macfoy/mac-foy/mac-foy.component.html":
/*!*******************************************************!*\
  !*** ./src/app/macfoy/mac-foy/mac-foy.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card >\r\n\r\n    <mat-tab-group focusChange=\"alert('gruplu')\">\r\n        <mat-tab>\r\n\r\n            <ng-template mat-tab-label>\r\n                <span (click)=\"grupTabAktif()\">Gruplar</span>\r\n            </ng-template>\r\n\r\n            <div class=\"container\" >\r\n                <div fxLayout=\"row\"  fxFlexFill fxLayout.lt-sm=\"column\">\r\n                    <mat-card  fxFlex=\"75\" fxLayoutGap=\"30px\">\r\n                        <mat-form-field   fxFlex=\"25\">\r\n                            <mat-select matInput placeholder=\"Hafta\" [(ngModel)]=\"hafta\" (ngModelChange)='haftaDegisti()'>\r\n                                <mat-option *ngFor=\"let hafta of haftalar\" [value]=\"hafta\">{{hafta}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field  fxFlex=\"25\">\r\n                            <input matInput  type=\"text\" placeholder=\"Mac Tarih\" [(ngModel)]='grupMacTarih' (ngModelChange)='mactarihiDegisti()'>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field   fxFlex=\"25\">\r\n                            <mat-select placeholder=\"Grup\"   [(ngModel)]=\"grup\" (ngModelChange)='grupDegisti()'>\r\n                                <mat-option *ngFor=\"let grup of gruplar\" [value]=\"grup\">{{grup}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field  fxFlex=\"25\">\r\n                            <input matInput placeholder=\"Grup Bölünmeleri\"  type=\"text\" [(ngModel)]='grupElememanSayilari'>\r\n                        </mat-form-field>\r\n                    </mat-card>\r\n\r\n                    <mat-card fxFlex=\"25\">\r\n                        <mat-slide-toggle [(ngModel)]='gelismisMod' class=\"example-margin\">Gelişmiş</mat-slide-toggle>\r\n                        <button matTooltip=\"maç tarihinde aktif olan oyuncuları önceki hafta maç sonu puan sıralamasına göre seçerek ekler.\" mat-raised-button color=\"primary\" (click)=\"macFoyeOyuncuEkle(eklenecekOyuncu,true)\">\r\n                            <span>{{grup}}'yı </span> Ekle\r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" (click)=\"kaydet()\">kaydet</button>\r\n\r\n                    </mat-card>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"gelismisMod\" cols=\"4\">\r\n                <mat-card>\r\n\r\n                <mat-form-field class=\"flex-item\">\r\n                    <mat-select style=\"width:150px;display: inline-block\" placeholder=\"Oyuncu Seçiniz\" [(ngModel)]='eklenecekOyuncu.OyuncuAdSoyad'\r\n                        (change)=\"eklenecekOyuncu_Degisti(eklenecekOyuncu)\">\r\n                        <mat-option default>Oyuncu Seçiniz</mat-option>\r\n                        <mat-option *ngFor=\"let o of aktifOyuncular\" value=\"{{o.OyuncuAdSoyad}}\">{{o.OyuncuAdSoyad}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n              \r\n                    <mat-form-field mat-no-float class=\"flex-item\">\r\n                        <input matInput style=\"text-align:right\" placeholder=\"Puan\" type=\"number\" (keyup.enter)=\"grupluMu=false;macFoyeOyuncuEkle(eklenecekOyuncu,false)\"\r\n                            [(ngModel)]='eklenecekOyuncu.BaslamaPuan'>\r\n                    </mat-form-field>\r\n\r\n                    <button mat-raised-button class=\"flex-item\" color=\"primary\" class=\"btn btn-success\" (click)=\"macFoyeOyuncuEkle(eklenecekOyuncu,false)\">\r\n                        Ekle\r\n                    </button>\r\n\r\n\r\n                </mat-card>\r\n\r\n\r\n            </div>\r\n\r\n            <div id=\"skortablo-container\" class=\"row\">\r\n                <table id=\"skortablo\" rules=\"all\" frame=\"border\" class=\"table table-bordered table-hover table-condensed table-striped\">\r\n                    <caption>\r\n\r\n                    </caption>\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"grup1-oyuncu\">{{grup}} Grubu\r\n                                <br>{{grupMacTarih}}-{{hafta}} </th>\r\n                            <th class=\"grup1-mopuan\">Maç Ö.Puan</th>\r\n                            <th class=\"grup1-apuan\">Alınan TPuan</th>\r\n                            <th class=\"grup1-bonus\" [hidden]='!gelismisMod'>Bonus Puan</th>\r\n\r\n\r\n                            <th style=\"border-right:6px double black;\" class=\"grup1-mspuan\">Maç S.Puan</th>\r\n\r\n                            <th class=\"skor\" *ngFor='let oyuncuAdSoyad of aktifMacFoy?.EklenenOyuncuAdlari'>\r\n                                {{oyuncuAdSoyad }}\r\n                            </th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let row of aktifMacFoy?.Mac_Satirlari;let row_inx:index\" [ngClass]=\"{'sari': row.VarMi!==true}\">\r\n\r\n                            <td>\r\n                                <div>\r\n\r\n                                    <button style=\"width:95%;margin:auto\" type=\"button\" [matMenuTriggerFor]=\"appMenu\">\r\n                                        <div style=\"display:flex;align-items:center;justify-content:space-between\">\r\n                                            <label> {{row.OyuncuAdSoyad}}</label>\r\n                                            <mat-icon style=\"align-self: flex-end\">more_vert</mat-icon>\r\n                                        </div>\r\n\r\n                                    </button>\r\n\r\n                                    <mat-menu #appMenu=\"matMenu\">\r\n                                        <button mat-menu-item (click)=\"MacaGelmedi(row)\">\r\n                                            <span *ngIf='row.VarMi==false'>Maça Geldi</span>\r\n                                            <span *ngIf='row.VarMi==true'>Maça Gelmedi</span>\r\n                                        </button>\r\n                                        <button (click)=\"MacSil(row)\" mat-menu-item> Listeden Kaldır </button>\r\n                                        <button mat-menu-item (click)=\"satirKonumDegistir(row,-1)\"> Yukarı Hareket </button>\r\n                                        <button mat-menu-item (click)=\"satirKonumDegistir(row,1)\"> Aşağı Hareket </button>\r\n                                    </mat-menu>\r\n                                </div>\r\n\r\n                            </td>\r\n\r\n                            <td>\r\n                                <mat-form-field>\r\n                                    <input matInput type=\"number\" [(ngModel)]='row.MO_Puan' (ngModelChange)=\"MacOncesiPuanGuncellendi(row)\" />\r\n                                </mat-form-field>\r\n\r\n\r\n                            </td>\r\n\r\n                            <td>\r\n                                <div>{{row.AlinanTPuan}}</div>\r\n                            </td>\r\n\r\n                            <td [hidden]='!gelismisMod'>\r\n                                <mat-form-field>\r\n                                    <input matInput style=\"width:100%\" type=\"number\" [(ngModel)]='row.BonusPuan' (ngModelChange)='BonusDegisti(row)' />\r\n                                </mat-form-field>\r\n                            </td>\r\n\r\n                            <td style=\"border-right:6px double black;\">\r\n                                <span type=\"number\">{{row.MS_Puan}}</span>\r\n                                <div class=\"glyphicon\" [ngClass]=\"{'glyphicon-arrow-up text-success': row.AlinanTPuan > 0,'glyphicon-arrow-down text-danger':row.AlinanTPuan < 0,'glyphicon-option-horizontal text-muted': row.AlinanTPuan == 0}\">\r\n\r\n                                </div>\r\n                            </td>\r\n\r\n                            <td *ngFor=\"let oyuncu of aktifMacFoy?.EklenenOyuncuAdlari;let inx=index\" [class.sari]=\"aktifMacFoy?.Mac_Satirlari[inx].VarMi!==true\">\r\n                                <div *ngIf=\"row['C' + (inx+1)].Skor!='X-X'\">\r\n\r\n\r\n                                    <mat-select class=\"no-underline\" [(ngModel)]=\"row['C' + (inx+1)].Skor\" (ngModelChange)='macFoySkorlariGuncelle(row,(inx+1))'>\r\n                                        <mat-option value=\"__\">__</mat-option>\r\n                                        <mat-option value=\"4-0\">4-0</mat-option>\r\n                                        <mat-option value=\"3-1\">3-1</mat-option>\r\n                                        <mat-option value=\"2-2\">2-2</mat-option>\r\n                                        <mat-option value=\"1-3\">1-3</mat-option>\r\n                                        <mat-option value=\"0-4\">0-4</mat-option>\r\n                                        <mat-option value=\"(1-3)\">*1-3</mat-option>\r\n                                        <mat-option value=\"X-X\">X-X</mat-option>\r\n                                    </mat-select>\r\n                                    <span class=\"label pull-right\" [ngClass]=\"{'label-success':row['C' + (inx+1)].Puan>=0,'label-danger':row['C' + (inx+1)].Puan<0 }\">{{row['C' + (inx+1)].Puan}}</span>\r\n                                    <span class=\"label label-info pull-left\">{{row['C' + (inx+1)].Aciklama}}</span>\r\n\r\n\r\n                                </div>\r\n\r\n                                <div *ngIf=\"row['C' + (inx+1)].Skor=='X-X'\">\r\n                                    <div class=\"siyah-zemin\"></div>\r\n                                </div>\r\n                            </td>\r\n\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n                <br>\r\n\r\n\r\n            </div>\r\n\r\n\r\n        </mat-tab>\r\n\r\n\r\n        <mat-tab label=\"Puan Durumu\">\r\n            <ng-template mat-tab-label>\r\n                <span (click)=\"PuanTablosunuGuncelle(true)\">Puan Durumu</span>\r\n            </ng-template>\r\n            <mat-card>\r\n                <strong>Sıralama Koşulu (Eşitlik halinde 3 lü kontrol)</strong>\r\n                <br/>\r\n                <div>\r\n                    Aktif hafta Maç Sonu Puanı->Aldığı Toplam Puan->Yaş\r\n                </div>\r\n            </mat-card>\r\n\r\n            <mat-card  id=\"puanListeContainer\">\r\n\r\n                <table style=\"margin:auto\" class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"text-align: center\">Sıra No</th>\r\n                            <th style=\"text-align: center;min-width: 160px\">Oyuncu Ad Soyad</th>\r\n                            <th style=\"text-align: center\">Maç Öncesi Puan</th>\r\n                            <th style=\"text-align: center\">Alınan Puan</th>\r\n                            <th style=\"text-align: center\">Maç Sonu Puan</th>\r\n                            <th style=\"text-align: center\" *ngIf='gelismisMod'>Guncel Grup</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let o of PuanTabloItemList; let sira=index\" class=\"{{o.Grup}}\">\r\n                            <td style=\"text-align: center\">{{sira+1}}</td>\r\n                            <td style=\"font-weight:bold\">{{o.OyuncuAdSoyad}}</td>\r\n                            <td style=\"text-align: center\">{{o.MO_Puan}}</td>\r\n                            <td style=\"text-align: center\">{{o.AlinanPuan}}</td>\r\n                            <td style=\"text-align: center;font-weight: bold\">{{o.MS_Puan}}\r\n                                <div class=\"glyphicon\" [ngClass]=\"{'glyphicon-arrow-up text-success': o.AlinanPuan > 0,'glyphicon-arrow-down text-danger':o.AlinanPuan < 0,'glyphicon-option-horizontal text-muted': o.AlinanPuan == 0}\">\r\n\r\n                                </div>\r\n\r\n\r\n                            </td>\r\n                            <td *ngIf='gelismisMod'>{{o.Grup}}</td>\r\n                            <td *ngIf='gelismisMod'>{{o.Dogum_Yili}}</td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </mat-card>\r\n\r\n\r\n        </mat-tab>\r\n\r\n\r\n        <mat-tab label=\"Oyuncular\">\r\n            <app-oyuncu-list></app-oyuncu-list>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Ayarlar\">\r\n                <div  class=\"container\">\r\n                        <div *ngIf=\"Ayarlar\" style=\"margin:auto\" fxLayout=\"row\"  fxLayout.sm=\"column\">\r\n      \r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Grup Bölünmeleri 6,6,5,5 gibi \"  type=\"text\" [(ngModel)]='Ayarlar.VarsayilanGrupBolunme'>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Maca Gelmeme Skoru 1-3 gibi \"  type=\"text\" [(ngModel)]='Ayarlar.MacaGelmemeSkoru'>\r\n                            </mat-form-field>\r\n        \r\n                            <button style=\"height:40px\" matInput mat-raised-button color=\"primary\" (click)=\"AyarlariKaydet()\">Kaydet</button>\r\n                        \r\n                        </div>\r\n        \r\n                    </div>\r\n        </mat-tab>\r\n\r\n\r\n    </mat-tab-group>\r\n\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/macfoy/mac-foy/mac-foy.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/macfoy/mac-foy/mac-foy.component.ts ***!
  \*****************************************************/
/*! exports provided: MacFoyComponent, DialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacFoyComponent", function() { return MacFoyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _macfoy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../macfoy.service */ "./src/app/macfoy/macfoy.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var linqts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linqts */ "./node_modules/linqts/dist/linqts.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/entityAll */ "./src/app/Models/entityAll.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//import {Observable} from 'rxjs/Rx' 



var MacFoyComponent = /** @class */ (function () {
    function MacFoyComponent(macFoyServis, af, _route, _dialog, _snackbar, activatedRoute, _router) {
        this.macFoyServis = macFoyServis;
        this.af = af;
        this._route = _route;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.activatedRoute = activatedRoute;
        this._router = _router;
        this.aktifOyuncular = [];
        this.oyuncularGruplu = [];
        this.eklenecekOyuncu = null;
        this.grup = 'A';
        this.haftalar = [];
        this.gruplar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.grupElememanSayilari = "";
        this.gelismisMod = false;
        this.haftalar = Array.from(Array(52).keys());
    }
    MacFoyComponent.prototype.degisiklikVarMi = function () {
        return true;
    };
    MacFoyComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.eklenecekOyuncu = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["Oyuncu"]('', 0, null, null);
                this.activatedRoute.params.subscribe(function (params) {
                    _this.klup = params.klup;
                    _this.donem = params.donem;
                    _this.grup = params.grup;
                    _this.hafta = parseInt(params.hafta);
                    if (params["hafta"] === undefined) {
                        _this.hafta = 1;
                        _this.grup = "A";
                    }
                    _this.macfoyBasePath = "/" + _this.klup + "/" + _this.donem + "/macfoy";
                    _this.donemBasePath = "/" + _this.klup + "/" + _this.donem;
                    _this.macfoyPath = _this.macfoyBasePath + ("/" + _this.hafta + "/" + _this.grup);
                    _this.oyuncularPath = "/" + _this.klup + "/" + _this.donem + "/Oyuncular";
                    _this.macFoyuYukle();
                });
                return [2 /*return*/];
            });
        });
    };
    MacFoyComponent.prototype.macFoyuYukle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _ayar, bugun, _aktifMacFoy, macFoyRef, yeniMacFoy, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.AyarlariGetir()];
                    case 1:
                        _a.Ayarlar = _c.sent();
                        if (this.Ayarlar == null) {
                            _ayar = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["Ayarlar"]("6,6,6,6", "1-3");
                            this.af.object(this.donemBasePath + "/Ayarlar").set(_ayar);
                            this.Ayarlar = _ayar;
                        }
                        bugun = new Date(Date.now()).toLocaleDateString("tr-TR");
                        return [4 /*yield*/, this.MacFoyuGetir()];
                    case 2:
                        _aktifMacFoy = _c.sent();
                        if (_aktifMacFoy == null) {
                            macFoyRef = this.af.object(this.macfoyPath);
                            yeniMacFoy = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["MacFoy"](bugun);
                            yeniMacFoy.EklenenOyuncuAdlari = [];
                            yeniMacFoy.Mac_Satirlari = [];
                            yeniMacFoy.Tarih = bugun;
                            macFoyRef.set(yeniMacFoy);
                            this.aktifMacFoy = yeniMacFoy;
                            this.grupMacTarih = bugun;
                        }
                        else {
                            if (_aktifMacFoy.EklenenOyuncuAdlari === undefined)
                                _aktifMacFoy.EklenenOyuncuAdlari = [];
                            if (_aktifMacFoy.Mac_Satirlari === undefined)
                                _aktifMacFoy.Mac_Satirlari = [];
                            this.aktifMacFoy = _aktifMacFoy;
                            this.grupMacTarih = _aktifMacFoy.Tarih;
                        }
                        this.grupElememanSayilari = this.Ayarlar.VarsayilanGrupBolunme;
                        _b = this;
                        return [4 /*yield*/, this.AdSoyadSirali_AktifOyunculariGetir()];
                    case 3:
                        _b.aktifOyuncular = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MacFoyComponent.prototype.AyarlariGetir = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.af.object(_this.donemBasePath + "/Ayarlar")
                .valueChanges()
                .subscribe(function (p) {
                return resolve(p);
            });
        });
    };
    MacFoyComponent.prototype.AyarlariKaydet = function () {
        this.af.object(this.donemBasePath + "/Ayarlar").set(this.Ayarlar);
        this.grupElememanSayilari = this.Ayarlar.VarsayilanGrupBolunme;
    };
    MacFoyComponent.prototype.grupTabAktif = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.grupMacTarih.length == 10)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.PuanSiraliOyunculariGetirHaftadan(this.hafta, this.grupMacTarih)];
                    case 1:
                        _a.aktifOyuncular = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MacFoyComponent.prototype.MacFoyuGetir = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.af.object(_this.macfoyPath)
                .valueChanges()
                .subscribe(function (p) {
                return resolve(p);
            });
        });
    };
    MacFoyComponent.prototype.AdSoyadSirali_AktifOyunculariGetir = function () {
        var _this = this;
        var zamanSayi = this.macFoyServis.parseDateDMY(this.aktifMacFoy.Tarih).getTime();
        return new Promise(function (resolve) {
            _this.af.list(_this.oyuncularPath)
                .valueChanges()
                .subscribe(function (p) {
                var sonuc = new linqts__WEBPACK_IMPORTED_MODULE_3__["List"](p)
                    .Where(function (o) { return _this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi &&
                    _this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi; })
                    .Select(function (o) {
                    o.Haftalar = o.Haftalar == undefined ?
                        [new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["HaftaPuan"](o.BaslamaPuan, 0, o.BaslamaPuan)] : o.Haftalar;
                    return o;
                })
                    .OrderBy(function (c) { return c.OyuncuAdSoyad; })
                    .ToArray();
                return resolve(sonuc);
            });
        });
    };
    MacFoyComponent.prototype.MacFoySonHaftaGetir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.af.list(_this.macfoyBasePath)
                            .snapshotChanges()
                            .subscribe(function (p) {
                            return resolve(p.length - 1);
                        });
                    })];
            });
        });
    };
    MacFoyComponent.prototype.PuanSiraliOyunculariGetirHaftadan = function (_hafta, _tarih) {
        var _this = this;
        var zamanSayi = this.macFoyServis.parseDateDMY(_tarih).getTime();
        return new Promise(function (resolve) {
            _this.af.list(_this.oyuncularPath)
                .valueChanges()
                .subscribe(function (p) {
                var sonuc = new linqts__WEBPACK_IMPORTED_MODULE_3__["List"](p)
                    .Where(function (o) { return _this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi &&
                    _this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi; })
                    .Select(function (o) {
                    if (o.Haftalar == undefined)
                        o.Haftalar = [];
                    if (o.Haftalar[_hafta] == undefined)
                        o.Haftalar[_hafta] = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["HaftaPuan"](o.BaslamaPuan, 0, o.BaslamaPuan);
                    return o;
                })
                    .OrderByDescending(function (o) { return o.Haftalar[_hafta].ToplamPuan; })
                    .ThenByDescending(function (o) { return o.Haftalar[_hafta].AlinanTPuan; })
                    .ThenBy(function (o) { return _this.padLeft(o.Dogum_Yili.toString(), 4); })
                    .ToArray();
                return resolve(sonuc);
            });
        });
    };
    MacFoyComponent.prototype.padLeft = function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    };
    MacFoyComponent.prototype.macFoyeOyuncuEkle = function (_oyuncu, _grupMu) {
        return __awaiter(this, void 0, void 0, function () {
            var liste, listeBirikimli_1, grup_inx, baslangicIndex, puanSiraliOncekiHafta, i, o, oncekiHaftaDurum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(_grupMu == true)) return [3 /*break*/, 2];
                        liste = this.grupElememanSayilari.split(',').map(function (x) { return parseInt(x); });
                        listeBirikimli_1 = [];
                        grup_inx = this.gruplar.indexOf(this.grup);
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(liste)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["scan"])(function (x, y) { return x + y; }))
                            .subscribe(function (c) { return listeBirikimli_1.push(c); });
                        baslangicIndex = grup_inx == 0 ? 0 : listeBirikimli_1[grup_inx - 1];
                        return [4 /*yield*/, this.PuanSiraliOyunculariGetirHaftadan(this.hafta - 1, this.grupMacTarih)];
                    case 1:
                        puanSiraliOncekiHafta = _a.sent();
                        for (i = baslangicIndex; i < listeBirikimli_1[grup_inx]; i++) {
                            o = puanSiraliOncekiHafta[i];
                            oncekiHaftaDurum = o.Haftalar[(this.hafta - 1).toString()];
                            if (oncekiHaftaDurum == undefined)
                                oncekiHaftaDurum = { ToplamPuan: o.BaslamaPuan };
                            o.BaslamaPuan = oncekiHaftaDurum.ToplamPuan;
                            this.macFoyeTekOyuncuEkle(o);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.macFoyeTekOyuncuEkle(_oyuncu);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MacFoyComponent.prototype.macFoyeTekOyuncuEkle = function (_oyuncu) {
        var macSayisi = this.aktifMacFoy.Mac_Satirlari.length + 1;
        this.aktifMacFoy.EklenenOyuncuAdlari.push(_oyuncu.OyuncuAdSoyad);
        var mx = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["MacSatir"](this.grup, 1, _oyuncu.OyuncuAdSoyad, _oyuncu.BaslamaPuan, 0, _oyuncu.BaslamaPuan, null, null, null, null, null, null, null, null, null, true, 0);
        this.aktifMacFoy.Mac_Satirlari.push(mx);
        for (var i = 1; i <= macSayisi; i++) {
            mx["C" + i] = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["SkorDetay"](_oyuncu.OyuncuAdSoyad, '__', 0, null, '');
        }
        var index = 0;
        for (var _i = 0, _a = this.aktifMacFoy.Mac_Satirlari; _i < _a.length; _i++) {
            var mac = _a[_i];
            index = index + 1;
            mac["C" + macSayisi] = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["SkorDetay"](_oyuncu.OyuncuAdSoyad, '__', 0, null, '');
            if (macSayisi == index)
                mac["C" + macSayisi].Skor = 'X-X';
        }
        this.eklenecekOyuncu = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["Oyuncu"]('', 0);
    };
    MacFoyComponent.prototype.macFoySkorlariGuncelle = function (selectedRow, aktifSutunKey) {
        var aktifRowIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(selectedRow);
        var caprazRow = this.aktifMacFoy.Mac_Satirlari[aktifSutunKey - 1];
        var caprazRowIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(caprazRow);
        var caprazSutun = 'C' + (aktifRowIndex + 1).toString();
        var aktifSutun = 'C' + aktifSutunKey.toString();
        var skor = selectedRow[aktifSutun].Skor;
        var karsilikliHukmenMi = skor.indexOf('(') >= 0;
        skor = skor.replace('(', '').replace(')', '');
        var puan = this.macFoyServis.hesapla(selectedRow.MO_Puan, caprazRow.MO_Puan, skor);
        var puan_capraz = this.macFoyServis.hesapla(caprazRow.MO_Puan, selectedRow.MO_Puan, skor);
        selectedRow[aktifSutun].Puan = puan;
        if (karsilikliHukmenMi) {
            caprazRow[caprazSutun] = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["SkorDetay"]('xx', '(' + skor.toString() + ')', puan_capraz, ' background-color: yellow;', "K.H.");
        }
        else {
            caprazRow[caprazSutun] = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["SkorDetay"]('xx', this.SonucuTersCevir(skor), puan * (-1), ' background-color: yellow;', "");
        }
        this.macFoySolGuncelle();
    };
    MacFoyComponent.prototype.macFoySolGuncelle = function () {
        var alinanPuan = 0;
        var oyuncuInx = 0;
        for (var _i = 0, _a = this.aktifMacFoy.Mac_Satirlari; _i < _a.length; _i++) {
            var _row = _a[_i];
            var alinanPuan_1 = 0;
            oyuncuInx = 0;
            for (var _b = 0, _c = this.aktifMacFoy.EklenenOyuncuAdlari; _b < _c.length; _b++) {
                var _col = _c[_b];
                oyuncuInx++;
                alinanPuan_1 = alinanPuan_1 + _row['C' + oyuncuInx].Puan;
            }
            _row.AlinanTPuan = alinanPuan_1;
            // toplarken yanyana yazıyordu o yüzden
            _row.MS_Puan = parseInt(_row.MO_Puan.toString()) + parseInt(alinanPuan_1.toString());
        }
    };
    MacFoyComponent.prototype.SonucuTersCevir = function (s) {
        if (s === '__') {
            return s;
        }
        ;
        var items = s.split('-');
        return items[1] + '-' + items[0];
    };
    MacFoyComponent.prototype.kaydet = function () {
        // let dialogRef = this._dialog.open(DialogContent, { width: '400px', height: '200px' });
        var _macFoyPath = this.macfoyPath;
        var _aktifMacFoy = this.aktifMacFoy;
        this.af.object(_macFoyPath).set(_aktifMacFoy);
        var listOyuncu = new linqts__WEBPACK_IMPORTED_MODULE_3__["List"](this.aktifOyuncular);
        var oyuncularHaftaRef = this.af.list(this.oyuncularPath);
        var _loop_1 = function (row) {
            oyuncu = listOyuncu.Where(function (c) { return c.OyuncuAdSoyad == row.OyuncuAdSoyad; }).First();
            if (oyuncu.Haftalar === undefined)
                oyuncu.Haftalar = [];
            oyuncu.Haftalar[this_1.hafta] = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["HaftaPuan"](row.MO_Puan, row.AlinanTPuan, row.MS_Puan);
            oyuncularHaftaRef.update(oyuncu["key"], oyuncu);
        };
        var this_1 = this, oyuncu;
        for (var _i = 0, _a = this.aktifMacFoy.Mac_Satirlari; _i < _a.length; _i++) {
            var row = _a[_i];
            _loop_1(row);
        }
        this._snackbar.open('Kayıt işlemi yapıldı', '', { duration: 400 });
    };
    MacFoyComponent.prototype.grupDegisti = function () {
        this._router.navigateByUrl(this.macfoyBasePath + "/" + this.hafta + "/" + this.grup);
    };
    MacFoyComponent.prototype.haftaDegisti = function () {
        this._router.navigateByUrl(this.macfoyBasePath + "/" + this.hafta + "/" + this.grup);
    };
    MacFoyComponent.prototype.MacSil = function (_row) {
        var colIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(_row);
        var colCount = this.aktifMacFoy.Mac_Satirlari.length;
        for (var _i = 0, _a = this.aktifMacFoy.Mac_Satirlari; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var i = colIndex + 1; i < colCount; i++) {
                row["C" + i] = row["C" + (i + 1)];
            }
            row['C' + colCount] = null;
        }
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(colIndex, 1);
        var _inx = 0;
        this.aktifMacFoy.Mac_Satirlari.splice(colIndex, 1);
    };
    MacFoyComponent.prototype.satirKonumDegistir = function (row, indexYon) {
        var index = this.aktifMacFoy.Mac_Satirlari.indexOf(row);
        var eskiRowIndex = index;
        var aktifRowIndex = index + indexYon;
        if (aktifRowIndex >= this.aktifMacFoy.Mac_Satirlari.length || aktifRowIndex == -1) {
            alert("Bu işlemi gerçekleştiremezsiniz");
            return;
        }
        var element = this.aktifMacFoy.Mac_Satirlari[eskiRowIndex];
        this.aktifMacFoy.Mac_Satirlari.splice(index, 1);
        this.aktifMacFoy.Mac_Satirlari.splice(index + indexYon, 0, element);
        var elementy = this.aktifMacFoy.EklenenOyuncuAdlari[index];
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(index, 1);
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(index + indexYon, 0, elementy);
        var sutunIndex1 = aktifRowIndex;
        var sutunIndex2 = aktifRowIndex + 1;
        if (indexYon == -1) {
            sutunIndex1 = aktifRowIndex + 1 + 1;
            sutunIndex2 = aktifRowIndex + 1;
        }
        this.aktifMacFoy.Mac_Satirlari.forEach(function (m) {
            var temp = m['C' + sutunIndex1].Skor;
            m['C' + (sutunIndex1)].Skor = m['C' + (sutunIndex2)].Skor;
            m['C' + (sutunIndex2)].Skor = temp;
        });
        for (var _i = 0, _a = this.aktifMacFoy.Mac_Satirlari; _i < _a.length; _i++) {
            var mac = _a[_i];
            this.MacOncesiPuanGuncellendi(mac);
        }
    };
    MacFoyComponent.prototype.MacaGelmedi = function (_row) {
        var inx = 0;
        if (_row.VarMi == false) {
            _row.VarMi = true;
            for (var _i = 0, _a = this.aktifMacFoy.EklenenOyuncuAdlari; _i < _a.length; _i++) {
                var _oy = _a[_i];
                inx++;
                if (_row['C' + inx].Skor != 'X-X') {
                    _row['C' + inx].Aciklama = "";
                    _row['C' + inx].Skor = "__";
                }
                this.macFoySkorlariGuncelle(_row, inx);
            }
            return;
        }
        _row.VarMi = false;
        var satirIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(_row);
        for (var _b = 0, _c = this.aktifMacFoy.EklenenOyuncuAdlari; _b < _c.length; _b++) {
            var _oy = _c[_b];
            inx++;
            if (_row['C' + inx].Skor != 'X-X') {
                _row['C' + inx].Skor = this.Ayarlar.MacaGelmemeSkoru;
                if (_row.VarMi == false && this.aktifMacFoy.Mac_Satirlari[inx - 1].VarMi == false) {
                    _row['C' + (inx)].Skor = "(" + this.Ayarlar.MacaGelmemeSkoru + ")";
                    _row['C' + (inx)].Aciklama = "K.H.";
                    this.aktifMacFoy.Mac_Satirlari[inx - 1]["C" + (satirIndex + 1)].Aciklama = "K.H.";
                }
                this.macFoySkorlariGuncelle(_row, inx);
            }
        }
        _row.VarMi = false;
    };
    MacFoyComponent.prototype.MacOncesiPuanGuncellendi = function (selectedRow) {
        var aktifRowIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(selectedRow);
        var caprazSutun = 'C' + (aktifRowIndex + 1).toString();
        for (var _i = 0, _a = this.aktifMacFoy.Mac_Satirlari; _i < _a.length; _i++) {
            var _row = _a[_i];
            this.macFoySkorlariGuncelle(_row, aktifRowIndex + 1);
        }
    };
    MacFoyComponent.prototype.eklenecekOyuncu_Degisti = function (_oyuncu) {
        var ek_oyuncu = this.aktifOyuncular.find(function (x) { return x.OyuncuAdSoyad == _oyuncu.OyuncuAdSoyad; });
        var oncekiHafta = ek_oyuncu[(this.hafta - 1).toString()];
        if (oncekiHafta == undefined || ek_oyuncu[(this.hafta - 1).toString()] == undefined) {
            this.eklenecekOyuncu.BaslamaPuan = ek_oyuncu.BaslamaPuan;
        }
        else {
            this.eklenecekOyuncu.BaslamaPuan = ek_oyuncu[(this.hafta - 1).toString()].ToplamPuan;
        }
    };
    MacFoyComponent.prototype.BonusDegisti = function (_row) {
        _row.MS_Puan = _row.MO_Puan + _row.AlinanTPuan + _row.BonusPuan;
    };
    MacFoyComponent.prototype.mactarihiDegisti = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.grupMacTarih.length == 10)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.PuanSiraliOyunculariGetirHaftadan(this.hafta, this.grupMacTarih)];
                    case 1:
                        _a.aktifOyuncular = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MacFoyComponent.prototype.PuanTablosunuGuncelle = function (guncelDurumMu) {
        return __awaiter(this, void 0, void 0, function () {
            var puanSiraliListe, GrupElemanSayilari, GrupElemanSayilariBirikimli, toplam, sayi, i, j;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PuanSiraliOyunculariGetirHaftadan(this.hafta, this.grupMacTarih)];
                    case 1:
                        puanSiraliListe = _a.sent();
                        GrupElemanSayilari = this.grupElememanSayilari.split(',')
                            .map(function (c) { return parseInt(c); });
                        GrupElemanSayilariBirikimli = [];
                        toplam = 0;
                        GrupElemanSayilari.forEach(function (x) {
                            toplam += x;
                            GrupElemanSayilariBirikimli.push(toplam);
                        });
                        this.PuanTabloItemList = new linqts__WEBPACK_IMPORTED_MODULE_3__["List"](puanSiraliListe)
                            .Select(function (o) { return new _Models_entityAll__WEBPACK_IMPORTED_MODULE_5__["PuanTabloItem"](o.OyuncuAdSoyad, o.Haftalar[_this.hafta].MacOncesiPuan, o.Haftalar[_this.hafta].AlinanTPuan, o.Haftalar[_this.hafta].ToplamPuan, o.GuncelGrup, o.Dogum_Yili); })
                            .ToArray();
                        sayi = 0;
                        for (i = 0; i < this.PuanTabloItemList.length; i++) {
                            for (j = 0; j < GrupElemanSayilariBirikimli.length; j++) {
                                if (i < GrupElemanSayilariBirikimli[j]) {
                                    this.PuanTabloItemList[i].Grup = this.gruplar[j];
                                    break;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MacFoyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mac-foy',
            template: __webpack_require__(/*! ./mac-foy.component.html */ "./src/app/macfoy/mac-foy/mac-foy.component.html"),
            styles: [__webpack_require__(/*! ./mac-foy.component.css */ "./src/app/macfoy/mac-foy/mac-foy.component.css")]
        }),
        __metadata("design:paramtypes", [_macfoy_service__WEBPACK_IMPORTED_MODULE_1__["MacFoyService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MacFoyComponent);
    return MacFoyComponent;
}());

var DialogContent = /** @class */ (function () {
    function DialogContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n\n        <div style='display:flex;align-items:flex-end;height:98%;'>\n            <p style='align-self:flex-start;width:100%'>Kay\u0131t yap\u0131l\u0131yor...</p>\n            <div style='display:flex;justify-content:flex-end;width:100%'>\n                <button mat-button  (click)=\"dialogRef.close('Cancel')\">Vazge\u00E7</button>\n                <button mat-raised-button color=\"primary\" (click)=\"dialogRef.close('Ok')\">Kaydet</button>\n            </div>\n        </div>\n\n\n  ",
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]])
    ], DialogContent);
    return DialogContent;
}());



/***/ }),

/***/ "./src/app/macfoy/macfoy.module.ts":
/*!*****************************************!*\
  !*** ./src/app/macfoy/macfoy.module.ts ***!
  \*****************************************/
/*! exports provided: config, MacfoyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacfoyModule", function() { return MacfoyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mac-foy/mac-foy.component */ "./src/app/macfoy/mac-foy/mac-foy.component.ts");
/* harmony import */ var _macfoy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macfoy.service */ "./src/app/macfoy/macfoy.service.ts");
/* harmony import */ var _oyuncular_oyuncular_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../oyuncular/oyuncular.module */ "./src/app/oyuncular/oyuncular.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var config = {
    apiKey: "AIzaSyCmxxECnZY5VKWHWl7PfIflQPUexr-6Tjc",
    authDomain: "reytingdb.firebaseapp.com",
    databaseURL: "https://reytingdb.firebaseio.com",
    storageBucket: "reytingdb.appspot.com",
    messagingSenderId: "1019597381393"
};
var MacfoyModule = /** @class */ (function () {
    function MacfoyModule() {
    }
    MacfoyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _oyuncular_oyuncular_module__WEBPACK_IMPORTED_MODULE_5__["OyuncularModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(config),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
            ],
            declarations: [_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["MacFoyComponent"], _mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["DialogContent"]],
            exports: [_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["MacFoyComponent"]],
            entryComponents: [_mac_foy_mac_foy_component__WEBPACK_IMPORTED_MODULE_3__["DialogContent"]],
            providers: [_macfoy_service__WEBPACK_IMPORTED_MODULE_4__["MacFoyService"]]
        })
    ], MacfoyModule);
    return MacfoyModule;
}());



/***/ }),

/***/ "./src/app/macfoy/macfoy.service.ts":
/*!******************************************!*\
  !*** ./src/app/macfoy/macfoy.service.ts ***!
  \******************************************/
/*! exports provided: MacFoyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacFoyService", function() { return MacFoyService; });
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

var MacFoyService = /** @class */ (function () {
    function MacFoyService() {
        this.puanListObj = {};
        this.puanlariTanimla();
    }
    MacFoyService.prototype.puanlariTanimla = function () {
        this.puanListObj[50] = { Diff: 50, x4_0: 50, x0_4: 50, x3_1: 25, x1_3: 25, x2_2: 0 };
        this.puanListObj[150] = { Diff: 150, x4_0: 46, x0_4: 63, x3_1: 21, x1_3: 32, x2_2: 4 };
        this.puanListObj[250] = { Diff: 250, x4_0: 42, x0_4: 76, x3_1: 17, x1_3: 39, x2_2: 8 };
        this.puanListObj[350] = { Diff: 350, x4_0: 38, x0_4: 89, x3_1: 13, x1_3: 46, x2_2: 12 };
        this.puanListObj[450] = { Diff: 450, x4_0: 34, x0_4: 102, x3_1: 9, x1_3: 53, x2_2: 16 };
        this.puanListObj[550] = { Diff: 550, x4_0: 30, x0_4: 115, x3_1: 5, x1_3: 60, x2_2: 20 };
        this.puanListObj[650] = { Diff: 650, x4_0: 26, x0_4: 128, x3_1: 1, x1_3: 67, x2_2: 24 };
        this.puanListObj[750] = { Diff: 750, x4_0: 22, x0_4: 141, x3_1: -3, x1_3: 74, x2_2: 28 };
        this.puanListObj[850] = { Diff: 850, x4_0: 18, x0_4: 154, x3_1: -7, x1_3: 81, x2_2: 32 };
        this.puanListObj[950] = { Diff: 950, x4_0: 14, x0_4: 167, x3_1: -11, x1_3: 88, x2_2: 36 };
        this.puanListObj[1050] = { Diff: 1050, x4_0: 10, x0_4: 180, x3_1: -15, x1_3: 95, x2_2: 40 };
        this.puanListObj[1150] = { Diff: 1150, x4_0: 6, x0_4: 193, x3_1: -19, x1_3: 102, x2_2: 44 };
        this.puanListObj[10000] = { Diff: 10000, x4_0: 2, x0_4: 206, x3_1: -23, x1_3: 109, x2_2: 48 };
    };
    MacFoyService.prototype.hesapla = function (oyuncu1_puan, oyuncu2_puan, macSonuc) {
        if (macSonuc === '__' || macSonuc === 'X-X') {
            return 0;
        }
        ;
        var reytingiYuksekOyuncu;
        var alinanPuan = 0;
        var puanfarki = oyuncu1_puan - oyuncu2_puan;
        var mutlakfark = Math.abs(puanfarki);
        var macSonucAlan = '';
        var mutlakfarkPuanAralik = 0;
        var carpan = 0;
        mutlakfarkPuanAralik = this.PuanAralikBul(mutlakfark);
        reytingiYuksekOyuncu = this.IsaretDegerUclu(puanfarki);
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '4-0')) {
            macSonucAlan = 'x4_0';
            carpan = 1;
        }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '3-1')) {
            macSonucAlan = 'x3_1';
            carpan = 1;
        }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '2-2')) {
            macSonucAlan = 'x2_2';
            carpan = -1;
        }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '1-3')) {
            macSonucAlan = 'x1_3';
            carpan = -1;
        }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '0-4')) {
            macSonucAlan = 'x0_4';
            carpan = -1;
        }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '4-0')) {
            macSonucAlan = 'x0_4';
            carpan = 1;
        }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '3-1')) {
            macSonucAlan = 'x1_3';
            carpan = 1;
        }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '2-2')) {
            macSonucAlan = 'x2_2';
            carpan = 1;
        }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '1-3')) {
            macSonucAlan = 'x3_1';
            carpan = -1;
        }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '0-4')) {
            macSonucAlan = 'x4_0';
            carpan = -1;
        }
        alinanPuan = this.puanListObj[mutlakfarkPuanAralik][macSonucAlan] * carpan;
        return alinanPuan;
    };
    MacFoyService.prototype.IsaretDegerUclu = function (sayi) {
        if (sayi > 0) {
            return 1;
        }
        if (sayi === 0) {
            return 1;
        }
        if (sayi < 0) {
            return 2;
        }
    };
    MacFoyService.prototype.PuanAralikBul = function (_mutlakfark) {
        for (var item in this.puanListObj) {
            if (_mutlakfark <= parseInt(item)) {
                return parseInt(item);
            }
        }
        return 0;
    };
    MacFoyService.prototype.parseDateDMY = function (input) {
        // todlocaldate string veya textboxtan ilginç olarak bu karakterler geliyor
        input = input.replace(/\u200E/g, '');
        var parts = input.split('.');
        var yeniTarih = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        return yeniTarih;
    };
    MacFoyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MacFoyService);
    return MacFoyService;
}());



/***/ }),

/***/ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/oyuncular/oyuncu-list/oyuncu-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card\r\n{\r\n   margin: 0px;\r\n   max-width: 100%!important;\r\n    padding: 5px;\r\n \r\n}\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3l1bmN1bGFyL295dW5jdS1saXN0L295dW5jdS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsWUFBWTtHQUNaLDBCQUEwQjtJQUN6QixhQUFhOztDQUVoQiIsImZpbGUiOiJzcmMvYXBwL295dW5jdWxhci9veXVuY3UtbGlzdC9veXVuY3UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmRcclxue1xyXG4gICBtYXJnaW46IDBweDtcclxuICAgbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuIFxyXG59XHJcbiAgICAgIl19 */"

/***/ }),

/***/ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/oyuncular/oyuncu-list/oyuncu-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-form-field class=\"flex-item\">\r\n        <input matInput class=\"form-control\" style=\"text-align:center\"  placeholder=\"Oyuncu Ad Soyad\"\r\n            [(ngModel)]='eklenecek_oyuncu.OyuncuAdSoyad'>\r\n    </mat-form-field >\r\n\r\n    <mat-form-field class=\"flex-item\">\r\n        <input matInput class=\"form-control\" style=\"text-align:center\"  placeholder=\"Başlama Tarihi\"\r\n            [(ngModel)]='eklenecek_oyuncu.BaslamaTarihi'>\r\n    </mat-form-field >\r\n    \r\n    <mat-form-field  class=\"flex-item\">\r\n        <input matInput class=\"form-control\" style=\"text-align:center\"  placeholder=\"Ayrılış Tarihi\"\r\n            [(ngModel)]='eklenecek_oyuncu.AyrilisTarihi'>\r\n    </mat-form-field >\r\n\r\n    <mat-form-field class=\"flex-item\">\r\n        <input matInput class=\"form-control\" style=\"text-align:center\"  placeholder=\"Başlama Puan\"\r\n            [(ngModel)]='eklenecek_oyuncu.BaslamaPuan'>\r\n    </mat-form-field >\r\n\r\n    <mat-form-field  class=\"flex-item\">\r\n            <input matInput class=\"form-control\" style=\"text-align:center\"  placeholder=\"Doğum Yılı\"\r\n                [(ngModel)]='eklenecek_oyuncu.Dogum_Yili'>\r\n        </mat-form-field >\r\n\r\n    <div>\r\n        <button mat-raised-button  color=\"primary\" (click)=\"OyuncuEkle()\">Ekle</button>\r\n\r\n        <mat-checkbox  [(ngModel)]=\"_isEditMode\">Düzenleme Modu (yaş sıralama için önemli)</mat-checkbox>\r\n   \r\n    </div>\r\n\r\n</mat-card>\r\n\r\n\r\n<mat-card class=\"row\" style=\"text-align:center\" id=\"puanListeContainer\">\r\n\r\n    <table class=\"table table-bordered\" style=\"margin: auto\">\r\n        <thead>\r\n            <tr>\r\n                <th style=\"text-align: center\">Sıra No</th>\r\n                <th style=\"text-align: center;min-width: 160px\">Oyuncu Ad Soyad</th>\r\n                <th style=\"text-align: center\">Baslama Tarihi</th>\r\n                <th style=\"text-align: center\">Ayrılış Tarihi</th>\r\n                <th style=\"text-align: center\" >Başlama Puan</th>\r\n                <th style=\"text-align: center\" >Doğum Yılı</th>\r\n      \r\n                <th>#</th>\r\n\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            <ng-container *ngIf=\"_isEditMode\">\r\n                    <tr  *ngFor=\"let o of oyuncular | async; let sira=index\" class=\"{{o.Grup}}\">\r\n                            <td style=\"text-align: center\">{{sira+1}}</td>\r\n                            <td >\r\n                                <input   style=\"text-align:center\" \r\n                                [(ngModel)]='o.OyuncuAdSoyad'>\r\n    \r\n                            </td>\r\n                         \r\n                           \r\n                            <td style=\"text-align: center\">\r\n                                    <input  style=\"text-align:center;width:100px\" \r\n                                    [(ngModel)]='o.BaslamaTarihi'>\r\n                 \r\n                            </td>\r\n                           \r\n                           \r\n                            <td style=\"text-align: center\">\r\n                                <input   style=\"text-align:center;width:100px\" \r\n                                [(ngModel)]='o.AyrilisTarihi'>\r\n    \r\n                            \r\n                            </td>\r\n                            <td style=\"text-align: center;font-weight: bold;\">\r\n                                    <input  style=\"text-align:center;width:50px\" \r\n                                    [(ngModel)]='o.BaslamaPuan'>\r\n        \r\n                                \r\n                            </td> \r\n    \r\n                           \r\n    \r\n                            <td style=\"text-align: center;font-weight: bold;\">\r\n                                    <input   style=\"text-align:center;width:50px\" \r\n                                    [(ngModel)]='o.Dogum_Yili'>\r\n        \r\n                            </td> \r\n    \r\n    \r\n                            <td>\r\n                                <button mat-raised-button (click)=\"OyuncuSil(o.key)\">Sil</button>\r\n                                <button mat-raised-button (click)=\"OyuncuGuncelle(o.key,o)\" >Güncelle</button>\r\n                            \r\n                            </td>              \r\n                            \r\n                        </tr>\r\n            </ng-container>\r\n    \r\n             \r\n            <ng-container *ngIf=\"!_isEditMode\">\r\n                    <tr  *ngFor=\"let o of oyuncular | async; let sira=index\" class=\"{{o.Grup}}\">\r\n                            <td style=\"text-align: center\">{{sira+1}}</td>\r\n                            <td >\r\n                                <span *ngIf=\"!_isEditMode\">{{o.OyuncuAdSoyad}}</span>\r\n    \r\n                            </td>\r\n                         \r\n                           \r\n                            <td style=\"text-align: center\">\r\n                                 <span *ngIf=\"!_isEditMode\">{{o.BaslamaTarihi}}</span>\r\n                                \r\n                            </td>\r\n                           \r\n                           \r\n                            <td style=\"text-align: center\">\r\n                                <span *ngIf=\"!_isEditMode\">{{o.AyrilisTarihi}}</span>\r\n                            \r\n                            </td>\r\n                            <td style=\"text-align: center;font-weight: bold;\">\r\n                                <span *ngIf=\"!_isEditMode\">{{o.BaslamaPuan}}</span>\r\n                            </td> \r\n    \r\n    \r\n                            <td style=\"text-align: center;font-weight: bold;\">\r\n                                <span *ngIf=\"!_isEditMode\">{{o.Dogum_Yili}}</span>\r\n                            </td> \r\n    \r\n    \r\n                            <td>\r\n                                <button mat-raised-button (click)=\"OyuncuSil(o.key)\">Sil</button>\r\n                                <button mat-raised-button (click)=\"OyuncuGuncelle(o.key,o)\" >Güncelle</button>\r\n                            \r\n                            </td>              \r\n                            \r\n                        </tr>\r\n            </ng-container>\r\n\r\n\r\n        </tbody>\r\n    </table>\r\n\r\n  \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/oyuncular/oyuncu-list/oyuncu-list.component.ts ***!
  \****************************************************************/
/*! exports provided: OyuncuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OyuncuListComponent", function() { return OyuncuListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_entityAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/entityAll */ "./src/app/Models/entityAll.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OyuncuListComponent = /** @class */ (function () {
    function OyuncuListComponent(af, activatedRoute) {
        this.af = af;
        this.activatedRoute = activatedRoute;
        this.eklenecek_oyuncu = null;
        this._isEditMode = false;
    }
    ;
    OyuncuListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return _this.klup = params.klup; });
        this.activatedRoute.params.subscribe(function (params) { return _this.donem = params.donem; });
        this.oyuncularRef = this.af.list("/" + this.klup + "/" + this.donem + "/Oyuncular/");
        this.oyuncular = this.oyuncularRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.YeniOyuncuOlustur();
    };
    OyuncuListComponent.prototype.OyuncuEkle = function () {
        this.oyuncularRef = this.af.list("/" + this.klup + "/" + this.donem + "/Oyuncular/");
        this.eklenecek_oyuncu.Haftalar[0].AlinanTPuan = 0;
        this.eklenecek_oyuncu.Haftalar[0].MacOncesiPuan = this.eklenecek_oyuncu.BaslamaPuan;
        this.eklenecek_oyuncu.Haftalar[0].ToplamPuan = this.eklenecek_oyuncu.BaslamaPuan;
        var newKey = this.oyuncularRef.push(this.eklenecek_oyuncu).key;
        this.eklenecek_oyuncu["key"] = newKey;
        this.oyuncularRef.update(newKey, this.eklenecek_oyuncu);
        this.YeniOyuncuOlustur();
    };
    OyuncuListComponent.prototype.YeniOyuncuOlustur = function () {
        var d = new Date();
        var d1 = new Date();
        d1.setFullYear(2020);
        this.eklenecek_oyuncu = new _Models_entityAll__WEBPACK_IMPORTED_MODULE_3__["Oyuncu"](" ", 1500, d.toLocaleDateString("tr-TR"), d1.toLocaleDateString("tr-TR"), 1970, [new _Models_entityAll__WEBPACK_IMPORTED_MODULE_3__["HaftaPuan"](1500, 0, 1500)]);
    };
    OyuncuListComponent.prototype.OyuncuSil = function (key) {
        this.oyuncularRef.remove(key);
    };
    OyuncuListComponent.prototype.OyuncuGuncelle = function (key, oyuncu) {
        oyuncu.Haftalar[0].MacOncesiPuan = oyuncu.BaslamaPuan;
        oyuncu.Haftalar[0].AlinanTPuan = 0;
        oyuncu.Haftalar[0].ToplamPuan = oyuncu.BaslamaPuan;
        this.oyuncularRef.update(key, oyuncu);
    };
    OyuncuListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oyuncu-list',
            template: __webpack_require__(/*! ./oyuncu-list.component.html */ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.html"),
            styles: [__webpack_require__(/*! ./oyuncu-list.component.css */ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OyuncuListComponent);
    return OyuncuListComponent;
}());



/***/ }),

/***/ "./src/app/oyuncular/oyuncu-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/oyuncular/oyuncu-service.service.ts ***!
  \*****************************************************/
/*! exports provided: OyuncuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OyuncuService", function() { return OyuncuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OyuncuService = /** @class */ (function () {
    function OyuncuService(af) {
        this.af = af;
    }
    OyuncuService.prototype.OyunculariGetir = function () {
        return this.af.list('/Selcuk/Oyuncular');
    };
    OyuncuService.prototype.OyuncuGetir = function (id) {
        return this.af.object('/Selcuk/Oyuncular/' + id);
    };
    OyuncuService.prototype.oyuncuVarMi = function (adsoyad) {
        //    return this.af.list('/Selcuk/Oyuncular/',
        //    {
        //        query: {
        //             orderByChild: 'OyuncuAdSoyad',
        //             equalTo: adsoyad
        //         }
        //    })
    };
    OyuncuService.prototype.OyuncuKaydet = function (oyuncu, key) {
        return this.af.object('/Selcuk/Oyuncular/' + key.toString())
            .update({
            "OyuncuAdSoyad": oyuncu.OyuncuAdSoyad,
            "AyrilisTarihi": oyuncu.AyrilisTarihi,
            "BaslamaPuan": oyuncu.BaslamaPuan,
            "Dogum_Yili": oyuncu.Dogum_Yili,
            "BaslamaTarihi": oyuncu.BaslamaTarihi,
        });
    };
    OyuncuService.prototype.OyuncuEkle = function (oyuncu) {
        return this.af.list('/Selcuk/Oyuncular')
            .push(oyuncu);
    };
    OyuncuService.prototype.OyuncuSil = function (oyuncu) {
        return this.af.list('/Selcuk/Oyuncular')
            .remove(oyuncu['$key']);
    };
    OyuncuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], OyuncuService);
    return OyuncuService;
}());



/***/ }),

/***/ "./src/app/oyuncular/oyuncular.module.ts":
/*!***********************************************!*\
  !*** ./src/app/oyuncular/oyuncular.module.ts ***!
  \***********************************************/
/*! exports provided: OyuncularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OyuncularModule", function() { return OyuncularModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_oyuncular_oyuncu_list_oyuncu_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/oyuncular/oyuncu-list/oyuncu-list.component */ "./src/app/oyuncular/oyuncu-list/oyuncu-list.component.ts");
/* harmony import */ var _oyuncu_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oyuncu-service.service */ "./src/app/oyuncular/oyuncu-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OyuncularModule = /** @class */ (function () {
    function OyuncularModule() {
    }
    OyuncularModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            declarations: [app_oyuncular_oyuncu_list_oyuncu_list_component__WEBPACK_IMPORTED_MODULE_3__["OyuncuListComponent"]],
            exports: [app_oyuncular_oyuncu_list_oyuncu_list_component__WEBPACK_IMPORTED_MODULE_3__["OyuncuListComponent"]],
            providers: [_oyuncu_service_service__WEBPACK_IMPORTED_MODULE_4__["OyuncuService"]]
        })
    ], OyuncularModule);
    return OyuncularModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
            ],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gokmen1977\ng5-selcuk-rating\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map