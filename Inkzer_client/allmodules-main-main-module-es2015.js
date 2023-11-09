(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["allmodules-main-main-module"],{

/***/ "LNZ2":
/*!********************************************************!*\
  !*** ./src/app/allmodules/main/main-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "T4Cv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"],
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Ousb":
/*!************************************************!*\
  !*** ./src/app/allmodules/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-routing.module */ "LNZ2");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "T4Cv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/layout.module */ "bCwe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.component */ "pG8+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]] }); })();


/***/ }),

/***/ "T4Cv":
/*!**********************************************************!*\
  !*** ./src/app/allmodules/main/index/index.component.ts ***!
  \**********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _service_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/artist.service */ "WTzV");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/client.service */ "Ig3N");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/header/header.component */ "lLVm");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "ONzT");









class IndexComponent {
    constructor(wowService, artistService, clientService, formBuilder, router) {
        this.wowService = wowService;
        this.artistService = artistService;
        this.clientService = clientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.step = 0;
        this.search = '';
        this.keyword = 'name';
        this.data = [];
        this.checkDomain();
        this.wowService.init();
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    ngOnInit() {
        if (localStorage.getItem('bookingData')) {
            localStorage.removeItem('bookingData');
        }
        if (localStorage.getItem('token')) {
            const now = new Date().getTime();
            var expiry = localStorage.getItem('expiry');
            var user_type = localStorage.getItem('user_type');
            if (expiry) {
                if (now < expiry && user_type == 2) {
                    localStorage.removeItem('bookingData');
                    this.router.navigate(['']);
                }
                else {
                    this.logout();
                }
            }
        }
        this.checkLogin();
    }
    checkLogin() {
        this.clientService.checkLogin().subscribe((res) => { }, (err) => {
            this.router.navigate(['']);
        });
    }
    checkDomain() {
        console.log(11);
        var formData = new FormData();
        formData.append('domain', window.location.hostname);
        this.artistService.checkDomain(formData).subscribe((res) => { }, (err) => { });
    }
    logout() {
        this.clientService.logout();
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 159, vars: 0, consts: [[1, "wrapper"], [1, "content-wrapper"], ["id", "inkzers", 1, ""], [1, "container"], [1, "row"], ["id", "content_div", 1, "col-lg-6", "col-md-10", "m-auto", "d-flex"], [1, "inkzers-content", "m-auto"], [1, "container", "home_content"], ["data-wow-duration", "2s", 1, "wow", "fadeInUp"], ["routerLink", "/pages/Inkzers-list", 1, "bg-btn"], ["id", "hide", 1, "col-lg-6", "col-md-9", "m-auto"], [1, "inkzer-bg"], ["src", "assets/images/banner_1.png", 1, "img-fluid"], ["id", "feature", 1, ""], [1, "tittle"], ["data-wow-duration", "2s", 1, "heading", "wow", "fadeInUp"], [1, "sub-tittle"], ["data-wow-duration", "3s", 1, "text-center", "wow", "fadeInUp"], [1, "fature-card"], [1, "col-lg-4", "col-md-6"], [1, "feature-card"], ["src", "assets/images/banner_2 (1).png", "id", "feature-img", 1, "img-fluid"], ["data-wow-duration", "3s", 1, "wow", "fadeInUp"], ["src", "assets/images/banner_2 (2).png", "id", "feature-img", 1, "img-fluid"], ["src", "assets/images/banner_2 (3).png", "id", "feature-img", 1, "img-fluid"], [1, "book_tattoo"], [1, ""], ["data-wow-duration", "5s", 1, "wow", "fadeInUp"], ["data-wow-duration", "7s", 1, "wow", "fadeInUp"], [1, "col-lg-10", "m-auto"], ["id", ""], ["src", "assets/images/final_cut_new.png", 1, "img-fluid"], [1, "vision"], ["id", "mid_img", 1, "col-lg-10", "m-auto"], ["data-wow-duration", "2s", 1, "wow", "fadeInUp", 2, "margin-top", "125px"], ["src", "assets/images/booking-img.png", 1, "img-fluid"], ["routerLink", "/register", 1, "vision_btn"], [1, "testimonial_slider"], [1, "col-lg-5", "offset-lg-6"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "testimonial_slider_1"], [1, "content_div"], ["_ngcontent-kat-c335", "", 1, "fas", "fa-quote-left"], ["_ngcontent-kat-c335", "", 1, "fas", "fa-quote-right"], [1, "testimonial_content"], ["src", "assets/images/Washington.png", 1, "img-responsive", 2, "width", "70px", "border-radius", "50%", "border", "6px solid #f7cf87"], [1, "name"], [1, "carousel-item"], ["src", "assets/images/Cassandra.png", 1, "img-responsive", 2, "width", "70px", "border-radius", "50%", "border", "6px solid #f7cf87"], ["id", "question-banner", 1, "question-banner"], [1, "container-fluid", "p-0"], [1, "col-lg-3", "p-0"], ["id", "geeks", 1, "tattoo_1"], ["src", "assets/images/banner_4boy.png", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "m-auto"], [1, "faq", "container"], ["multi", "", 1, "example-headers-align"], [1, "col-10", "mx-auto"], [1, "col-11", "m-auto"], ["id", "geeks", 1, "girl_img"], ["src", "assets/images/banner_4girl.png", "data-aos", "fade-down", "data-aos-duration", "1000", 1, "img-fluid"], ["id", "find_my_artist"], [1, "find_my_artist"], [1, "col-lg-8", "col-md-10", "m-auto"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We provide the artist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " You get your tattoo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " We at Inkzup have gathered tattoo artists, \u201CInkzers,\u201D from around the country to provide you with an incredible service. Find your match. Search profiles based on price, location and availability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Find My Artist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " How It Works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Inkzup makes it easy for you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " You Think It ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Every amazing tattoo starts with an idea that symbolizes your individuality. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " We Link It ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " A great tattoo is nothing without an Inkzer. Our platform helps you find the best Inkzer for your tattoo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " They Ink It ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Once you\u2019ve communicated with your Inkzer, you\u2019re ready to get inked. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Book Your Next Tattoo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " When you need to hire a tattoo artist. Inkzup has them for you. See portfolios, services, reviews, and chat with Inkzers, all one one platform. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Find Inkzers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Upload Your Vision with Precision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Our software allows you to upload pictures of your tattoo ideas to the Inkzers. Just provide the measurements alongside your notes. You will be able to communicate with your Inkzer throughout your tattoo prep process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Hear From Our Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Inkzup helped find an amazing artist in my local area. I have told all of my friends about it as It was so hard to find someone that could do that work that I was looking for. The process was so easy and simple. My artist got in touch with me with the hour. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "DeAndrey Washington");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Hear From Our Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " I had been searching for months for a tattoo artist. A friend of mine told me about the platform and how she was able to find an artist in a couple days. I was impressed and tried it and I must admit it was a very easy and simple process to find an artist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Cassandra Robinson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Frequently Asked Questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-accordion", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-expansion-panel", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-expansion-panel-header", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-panel-description", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Are all tattoo artists certified? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " We certify all artists who create a profile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-expansion-panel", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-expansion-panel-header", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-panel-description", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Is there a cancellation charge? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " All Inkzers have different cancellation guidelines. Please review the details on their profile before booking. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-expansion-panel", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-expansion-panel-header", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-panel-description", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Can I get a refund if I change my mind? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " All Inkzers have different refund policies. Please review the details on their profile before booking. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-expansion-panel", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-expansion-panel-header", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-panel-description", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Will my payments be secure? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Yes. Our payment system is powered by Stripe to ensure the protection of Inkzers and customers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Join the community and get inspired while connecting to the worlds best tattoo artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Find My Artist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: [".row[_ngcontent-%COMP%] {\n    margin-right: 0\n}\n\n#home[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    background-color: #fff;\n    min-height: 100%\n}\n\n#home[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-right: 0;\n    min-height: 100%\n}\n\n.boy_img[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left\n}\n\n#home[_ngcontent-%COMP%]   .girl_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    float: right\n}\n\n.home_content[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    text-align: left\n}\n\n.home_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: Nunito, sans-serif!important;\n    font-size: 47px;\n    font-weight: 800;\n    letter-spacing: 0;\n    text-align: left;\n    color: #000\n}\n\n.home_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Nunito, sans-serif!important;\n    font-style: normal;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-align: left;\n    color: #434343;\n    padding: 20px 20px 30px 0;\n    font-size: 20px\n}\n\n#inkzers[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding-top: 40px\n}\n\n.home_2[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 20px\n}\n\n.home_banner[_ngcontent-%COMP%] {\n    padding: 10px 50px 0 50px;\n    background-image: url('home_2.png');\n    background-size: 100% 100%;\n    border-radius: 20px\n}\n\n.home_text_1[_ngcontent-%COMP%] {\n    padding: 80px 0;\n    margin: auto\n}\n\n.home_text_1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #e0e0e0;\n    font-family: Nunito;\n    font-size: 19px;\n    font-style: normal;\n    font-weight: 100;\n    letter-spacing: 0;\n    text-align: left;\n    margin: 25px 0;\n    line-height: 30px;\n    padding-right: 50px;\n    word-spacing: 2px\n}\n\n.home_text_1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #ffff;\n    line-height: 40px;\n    font-size: 34px;\n    word-spacing: 2px\n}\n\n.home[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 20px 0 0 0\n}\n\n.img_banner_1[_ngcontent-%COMP%] {\n    display: flex;\n    margin: auto;\n    justify-content: center\n}\n\n.img_1[_ngcontent-%COMP%] {\n    position: relative;\n    left: 20px\n}\n\n.img_2[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 20px\n}\n\n.img_1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n    border-radius: 25px\n}\n\n.img_2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 72%;\n    float: right\n}\n\n#content_div[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: auto\n}\n\n.home-banner[_ngcontent-%COMP%] {\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 40px;\n    color: #fff;\n    background-position: center;\n    text-align: center;\n    padding: 90px 0;\n    width: 100%;\n    height: 100vh;\n    float: left;\n    background-attachment: fixed\n}\n\n.tittle[_ngcontent-%COMP%] {\n    font-family: Nunito, sans-serif!important;\n    font-weight: 700\n}\n\nh1[_ngcontent-%COMP%] {\n    letter-spacing: 1px;\n    font-size: 35px;\n    font-weight: 700;\n    line-height: 42px;\n    margin: 20px 0\n}\n\n.tittle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-family: Nunito, sans-serif!important;\n    color: #e0e0e0;\n    font-size: 20px;\n    font-weight: 300;\n    line-height: 35px;\n    letter-spacing: 1px\n}\n\n.search[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n    background-color: #0f0c0c87;\n    border: 0;\n    font-size: 18px;\n    padding: 15px;\n    transition: width .3s ease;\n    border-radius: 18px\n}\n\n.btn[_ngcontent-%COMP%]:focus, .input[_ngcontent-%COMP%]:focus {\n    outline: 0\n}\n\n.search.active[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n    width: 100%\n}\n\n.search.active[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    transform: translateX(298px)\n}\n\n#feature[_ngcontent-%COMP%] {\n    padding: 60px 0;\n    width: 100%;\n    float: left;\n    background-color: #f2f2f7\n}\n\n#feature[_ngcontent-%COMP%]   .tittle[_ngcontent-%COMP%] {\n    text-align: center\n}\n\n.sub-tittle[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 20px;\n    padding: 10px 45px\n}\n\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 10px 10px 0 0;\n    line-height: 24px;\n    color: #434343;\n    font-family: Nunito, sans-serif!important;\n    padding: 10px 75px\n}\n\n.feature-card[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-weight: 700;\n    margin: 16px 0 10px 0;\n    color: #000;\n    font-size: 20px;\n    font-family: Nunito, sans-serif!important\n}\n\n.tittle[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 700;\n    font-family: Nunito, sans-serif!important;\n    color: #000\n}\n\n.sub-tittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #434343;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 25px\n}\n\n#feature-ellipse[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 38px;\n    top: -19px\n}\n\n#feature-img[_ngcontent-%COMP%] {\n    position: relative\n}\n\n#feature-ellipse-1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: -19px\n}\n\n.book_tattoo[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 100%;\n    float: left;\n    justify-content: center;\n    padding: 60px 0;\n    text-align: center;\n    position: relative;\n    height: 600px\n}\n\n.book_tattoo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-size: 32px;\n    font-weight: 700;\n    color: #000\n}\n\n.book_tattoo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #434343;\n    font-family: Nunito;\n    font-size: 20px;\n    font-weight: 400;\n    padding: 20px 130px\n}\n\n.book_tattoo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n    left: 0;\n    right: 0;\n    position: absolute;\n    z-index: 6;\n    width: 100%;\n    float: left;\n    padding: 40px 0;\n    margin: auto\n}\n\n#mid_img[_ngcontent-%COMP%] {\n    padding: 150px 0 0 0\n}\n\n.vision[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 80px 0;\n    background-color: #161616;\n    text-align: center;\n    position: relative\n}\n\n.vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-size: 32px;\n    font-weight: 700;\n    text-align: center;\n    margin: 20px 0 10px 0;\n    color: #fff;\n    margin-top: 60px\n}\n\n.vision[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-size: 20px;\n    font-weight: 400;\n    text-align: center;\n    color: #e0e0e0;\n    padding: 10px 55px\n}\n\n.vision[_ngcontent-%COMP%]   .vision_btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 600;\n    text-align: center;\n    background-color:#fbac18;\n    color: #fff;\n    border: none;\n    outline: 0;\n    border-radius: 5px;\n    padding: 10px 25px;\n    margin: 30px 0\n}\n\n.vision_data[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left\n}\n\n.fa-quote-left[_ngcontent-%COMP%], .fa-quote-right[_ngcontent-%COMP%] {\n    \n    color: #5438ff;\n    margin: 5px 2px;\n}\n\n.testimonial_slider[_ngcontent-%COMP%] {\n    background-image: url('slider_bg.png');\n    background-size: cover;\n    width: 100%;\n    float: left;\n    background-attachment: fixed;\n    padding: 80px 0\n}\n\n.testimonial_slider_1[_ngcontent-%COMP%] {\n    padding: 80px 0;\n    width: 100%;\n    float: left;\n    background-size: cover;\n    padding: 140px 0\n}\n\n.content_div[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    background-color: #00000008;\n    border-radius: 10px;\n    padding: 40px\n}\n\n.content_div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 32px;\n    color: #000;\n    font-weight: 700;\n    margin-bottom: 10px;\n    margin: 15px 10px\n}\n\n.content_div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-right: 50px;\n    margin: 15px 10px\n}\n\n#Search-Artist[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 20px\n}\n\n#Search-Artist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: 700;\n    letter-spacing: 1px;\n    font-size: 26px;\n    line-height: 34px\n}\n\n#Search-Artist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 20px\n}\n\n#Search-Artist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: disc;\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 24px;\n    color: #e0e0e0;\n    padding: 10px;\n    text-transform: capitalize\n}\n\n#Search-Artist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n    font-size: 25px;\n    color: #fbac18\n}\n\n.artist[_ngcontent-%COMP%] {\n    background: #161616;\n    border-radius: 40px;\n    width: 100%;\n    float: left;\n    padding-bottom: 80px\n}\n\n.fature-card[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 50px 0 0\n}\n\n.bg-btn[_ngcontent-%COMP%] {\n    color: #fff;\n    outline: 0;\n    border: none;\n    font-weight: 600;\n    font-size: 18px;\n    padding: 15px 40px;\n    border-radius: 8px;\n    background: #5438ff;\n    font-family: Nunito, sans-serif!important;\n    transition: all .3s linear\n}\n\n.bg-btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-10px);\n    text-decoration: none\n}\n\n#Search-Artist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 600;\n    color: #fff;\n    line-height: 30px;\n    font-family: Nunito, sans-serif!important\n}\n\n#Search-Artist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    color: #e0e0e0;\n    padding: 10px 0;\n    font-family: Nunito, sans-serif!important;\n    line-height: 25px\n}\n\n.content[_ngcontent-%COMP%] {\n    padding: 88px 0 0 20px;\n    margin: 60px 0 0 0;\n    width: 100%;\n    float: left;\n}\n\n.name[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-weight: 700;\n    font-family: Nunito;\n    padding-top: 25px;\n    font-size: 16px;\n    margin: 10px 10px;\n}\n\n.search_div[_ngcontent-%COMP%] {\n    padding-left: 0;\n}\n\n#booking-banner[_ngcontent-%COMP%] {\n    padding: 80px 0;\n    width: 100%;\n    float: left\n}\n\n#booking-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 700;\n    font-family: Nunito, sans-serif!important;\n    padding: 10px 0 15px\n}\n\n#booking-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 24px;\n    font-size: 16px;\n    font-family: Nunito, sans-serif!important\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: 700\n}\n\n.question-banner[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 80px 0 30px 0;\n    width: 100%;\n    float: left\n}\n\n#question-banner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n.faq[_ngcontent-%COMP%] {\n    padding: 10px 60px 10px 60px;\n}\n\n#faq[_ngcontent-%COMP%] {\n    width: 55%\n}\n\n.question-banner[_ngcontent-%COMP%]   .tattoo_1[_ngcontent-%COMP%] {\n    padding-top: 10px;\n}\n\n.question-banner[_ngcontent-%COMP%]   .girl_img[_ngcontent-%COMP%] {\n    \n    padding-top: 10px;\n}\n\n.question-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-family: Nunito, sans-serif!important;\n    margin-bottom: 35px;\n    font-weight: 700;\n}\n\n.Questions[_ngcontent-%COMP%] {\n    background-color: #f2f2f7;\n    width: 100%;\n    margin: 15px 0;\n    border-radius: 15px;\n    float: left;\n    padding: 15px 0\n}\n\n.Questions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px\n}\n\n.que[_ngcontent-%COMP%] {\n    color: #000;\n    font-weight: 700;\n    font-size: 20px\n}\n\n#testimonial[_ngcontent-%COMP%] {\n    background-color: #f2f2f7;\n    width: 100%;\n    margin: 0\n}\n\n.testimonial_control[_ngcontent-%COMP%] {\n    margin: 30px 0 10px 0;\n    display: flex\n}\n\n.testimonial_control[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    background-color: #5438ff;\n    font-size: 20px;\n    padding: 10px;\n    border-radius: 50%;\n    color: #fff;\n    margin: 5px\n}\n\n.testimonial_control[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    background-color: #5438ff;\n    font-size: 20px;\n    padding: 10px;\n    border-radius: 50%;\n    color: #fff;\n    margin: 5px\n}\n\n.testimonial_para[_ngcontent-%COMP%] {\n    font-size: 18px;\n    padding: 25px;\n    padding-left: 0;\n    font-family: Nunito, sans-serif!important;\n    line-height: 30px\n}\n\n#testimonial[_ngcontent-%COMP%] {\n    padding: 100px 0;\n    width: 100%;\n    float: left\n}\n\n#testimonial[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n    padding-left: 18px;\n    font-family: Nunito, sans-serif!important\n}\n\n.testimonial_control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    background-color: #434343\n}\n\n#searchInput[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 0 0 10px;\n    padding: 8px 10px;\n    border-radius: 30px\n}\n\n.search_div[_ngcontent-%COMP%] {\n    position: relative\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n    flex-basis: unset\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n    color: #000;\n    font-weight: 700;\n    font-size: 16px;\n    font-family: Nunito, sans-serif!important;\n    \n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #000;\n    font-family: Nunito, sans-serif!important;\n    padding-top: 8px;\n    font-weight: bold;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    text-align: left\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n    box-shadow: none;\n    margin: 15px 0;\n    background: #f2f2f7;\n    border-radius: 20px!important;\n    padding: 10px 0 0\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%] {\n    margin-left: 8px\n}\n\n.autocomplete-container[_ngcontent-%COMP%]   .suggestions-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: left!important\n}\n\n#one[_ngcontent-%COMP%] {\n    position: relative;\n    float: right;\n    z-index: 5;\n    width: 70%\n}\n\n#two[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 23%;\n    width: 55%;\n    right: 44%;\n    z-index: 3\n}\n\n#three[_ngcontent-%COMP%] {\n    float: right;\n    position: relative;\n    width: 40%;\n    right: 15%;\n    bottom: 57px\n}\n\n#searchInput[_ngcontent-%COMP%]   [type=submit][_ngcontent-%COMP%] {\n    color: #fff;\n    float: right;\n    padding: 10px;\n    cursor: pointer;\n    position: absolute;\n    right: 15px;\n    bottom: 5px;\n    background: #fbac18;\n    border-radius: 32px;\n    line-height: 40px;\n    font-weight: 700;\n    padding: 1px 16px;\n    font-size: 1px 16px;\n    font-size: 16px;\n    text-transform: uppercase;\n    border: none!important\n}\n\n#geeks[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    margin: 0 auto\n}\n\n#geeks[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    transition: .5s all ease-in-out\n}\n\n#geeks[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.2)\n}\n\n@media screen and (max-width:500px) {\n    .serach_submit[_ngcontent-%COMP%] {\n        font-size: 12px!important;\n        padding: 1px 7px\n    }\n    .vision[_ngcontent-%COMP%] {\n        padding-top: 80px!important\n    }\n    .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n        margin-right: 5px\n    }\n}\n\n@media screen and (max-width:767px) {\n    .home-banner[_ngcontent-%COMP%]   .col-xs-12[_ngcontent-%COMP%] {\n        padding: 0\n    }\n    .tittle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n        font-size: 13px\n    }\n    .tittle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 25px\n    }\n    .search_div[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        margin: auto;\n        padding: 20px 5px\n    }\n    .content[_ngcontent-%COMP%] {\n        padding: 0\n    }\n    .home-banner[_ngcontent-%COMP%] {\n        padding: 10px 10px 10px 20px;\n        background-position: center\n    }\n    .home_text_1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        padding-top: 10px;\n        font-size: 21px;\n        line-height: 32px\n    }\n    .home_text_1[_ngcontent-%COMP%] {\n        padding: 20px 17px\n    }\n    .artist[_ngcontent-%COMP%] {\n        padding: 11px\n    }\n    #testimonial[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        text-align: center\n    }\n    .testimonial_para[_ngcontent-%COMP%] {\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        text-align: center;\n        margin: auto\n    }\n    .testimonial_content[_ngcontent-%COMP%] {\n        display: flex;\n        text-align: center;\n        width: 100%;\n        float: left;\n        flex-direction: column;\n        margin: auto;\n        justify-content: center\n    }\n    .testimonial_content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: auto\n    }\n    .home_banner[_ngcontent-%COMP%] {\n        padding: 10px 0 0\n    }\n    .home_text_1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        padding-right: 0;\n        font-size: 14px;\n        line-height: 28px\n    }\n    .feature-card[_ngcontent-%COMP%] {\n        justify-content: center;\n        text-align: center\n    }\n    #img_2_feature[_ngcontent-%COMP%] {\n        padding-right: 37px\n    }\n    #Search-Artist[_ngcontent-%COMP%], .home_2[_ngcontent-%COMP%] {\n        padding: 20px 12px\n    }\n    .boy_img[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 15px 0\n    }\n    .home_content[_ngcontent-%COMP%] {\n        padding: 130px 0 40px 0;\n        padding-right: 0;\n        margin: auto\n    }\n    .home_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 28px;\n        text-align: center\n    }\n    .home_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        color: #000;\n        font-weight: 600;\n        font-size: 16px;\n        text-align: center;\n        padding: 20px 0 20px 0;\n        margin-bottom: 0;\n        \n    }\n    .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        padding: 10px 0\n    }\n    .book_tattoo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        padding: 20px 10px;\n        font-size: 16px\n    }\n    .vision[_ngcontent-%COMP%] {\n        padding-top: 170px;\n        padding-bottom: 40px!important\n    }\n    .vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 26px;\n        margin-top: 40px\n    }\n    .vision[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 16px;\n        padding: 10px\n    }\n    .content_div[_ngcontent-%COMP%] {\n        padding: 25px 10px\n    }\n    .content_div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n        color: #fff;\n        font-size: 25px\n    }\n    .content_div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        padding-right: 0\n    }\n    .faq[_ngcontent-%COMP%] {\n        padding: 10px 0\n    }\n    .question-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 26px;\n        margin-top: 20px\n    }\n    .testimonial_control[_ngcontent-%COMP%] {\n        justify-content: center;\n        margin-top: 15px\n    }\n    .name[_ngcontent-%COMP%] {\n        padding-top: 10px\n    }\n    #mid_img[_ngcontent-%COMP%] {\n        padding: 10px 0\n    }\n    .book_tattoo[_ngcontent-%COMP%] {\n        height: 480px\n    }\n    #hide[_ngcontent-%COMP%] {\n        display: none\n    }\n    #content_div[_ngcontent-%COMP%] {\n        background-image: linear-gradient(rgb(255 255 255 / 16%), rgb(255 255 255 / 30%)), url('banner_1.png');\n        padding: 0 15px;\n        margin: 0 auto;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: top\n    }\n    .bg-btn[_ngcontent-%COMP%] {\n        margin: auto;\n        display: flex\n    }\n    #inkzers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        padding-right: 0;\n        margin: 0%;\n        max-width: 100%\n    }\n    .testimonial_slider[_ngcontent-%COMP%] {\n        background-image: url('slider_new_2.png');\n        background-repeat: no-repeat;\n        background-attachment: unset\n    }\n    .testimonial_slider_1[_ngcontent-%COMP%] {\n        color: #fff\n    }\n}\n\n@media only screen and (min-width:768px) and (max-width:1024px) {\n    .home-banner[_ngcontent-%COMP%] {\n        background-position: center;\n        padding: 50px 0\n    }\n    .home_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px\n    }\n    .home_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 28px\n    }\n    #home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: auto\n    }\n    .boy_img[_ngcontent-%COMP%] {\n        padding-top: 98px\n    }\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n    padding: 0 20px\n}\n\n.find_my_artist[_ngcontent-%COMP%]{\nbackground-color: #161616;\npadding: 80px 0;\ncolor: #fff;\ntext-align: center;\nborder-radius: 10px;\n\n}\n\n#find_my_artist[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    padding: 60px 0;\n}\n\n.find_my_artist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    line-height: 35px;\n    margin: 30px 0;\n\n}\n/*# sourceMappingURL=data:application/json;base64,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SjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksc0dBQThIO1FBQzlILGVBQWU7UUFDZixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QjtJQUNKO0lBQ0E7UUFDSSxZQUFZO1FBQ1o7SUFDSjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVjtJQUNKO0lBQ0E7UUFDSSx5Q0FBaUU7UUFDakUsNEJBQTRCO1FBQzVCO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZUFBZTtBQUNmLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsbUJBQW1COztBQUVuQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYzs7QUFFbEIiLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMFxufVxuXG4jaG9tZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlXG59XG5cblxuXG5cbiNob21lIC5yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlXG59XG5cbi5ib3lfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdFxufVxuXG4jaG9tZSAuZ2lybF9pbWcgaW1nIHtcbiAgICBmbG9hdDogcmlnaHRcbn1cblxuLmhvbWVfY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG4uaG9tZV9jb250ZW50IGgyIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDQ3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMDAwXG59XG5cbi5ob21lX2NvbnRlbnQgcCB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzQzNDM0MztcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMzBweCAwO1xuICAgIGZvbnQtc2l6ZTogMjBweFxufVxuXG4jaW5remVycyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDQwcHhcbn1cblxuLmhvbWVfMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMjBweFxufVxuXG4uaG9tZV9iYW5uZXIge1xuICAgIHBhZGRpbmc6IDEwcHggNTBweCAwIDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV8yLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweFxufVxuXG4uaG9tZV90ZXh0XzEge1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbiAgICBtYXJnaW46IGF1dG9cbn1cblxuLmhvbWVfdGV4dF8xIHAge1xuICAgIGNvbG9yOiAjZTBlMGUwO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICB3b3JkLXNwYWNpbmc6IDJweFxufVxuXG4uaG9tZV90ZXh0XzEgaDIge1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgd29yZC1zcGFjaW5nOiAycHhcbn1cblxuLmhvbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDBcbn1cblxuLmltZ19iYW5uZXJfMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbn1cblxuLmltZ18xIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjBweFxufVxuXG4uaW1nXzIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHhcbn1cblxuLmltZ18xIGltZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4XG59XG5cbi5pbWdfMiBpbWcge1xuICAgIHdpZHRoOiA3MiU7XG4gICAgZmxvYXQ6IHJpZ2h0XG59XG5cbiNjb250ZW50X2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG9cbn1cblxuLmhvbWUtYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDkwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWRcbn1cblxuLnRpdHRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMFxufVxuXG5oMSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDIwcHggMFxufVxuXG4udGl0dGxlIGg0IHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4XG59XG5cbi5zZWFyY2ggLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwYzBjODc7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHhcbn1cblxuLmJ0bjpmb2N1cyxcbi5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogMFxufVxuXG4uc2VhcmNoLmFjdGl2ZSAuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5zZWFyY2guYWN0aXZlIC5idG4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOThweClcbn1cblxuI2ZlYXR1cmUge1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY3XG59XG5cbiNmZWF0dXJlIC50aXR0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uc3ViLXRpdHRsZSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNDVweFxufVxuXG4uZmVhdHVyZS1jYXJkIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8sIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggNzVweFxufVxuXG4uZmVhdHVyZS1jYXJkIC5oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMTZweCAwIDEwcHggMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZiFpbXBvcnRhbnRcbn1cblxuLnRpdHRsZSAuaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDBcbn1cblxuLnN1Yi10aXR0bGUgcCB7XG4gICAgY29sb3I6ICM0MzQzNDM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHhcbn1cblxuI2ZlYXR1cmUtZWxsaXBzZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDM4cHg7XG4gICAgdG9wOiAtMTlweFxufVxuXG4jZmVhdHVyZS1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4jZmVhdHVyZS1lbGxpcHNlLTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTE5cHhcbn1cblxuLmJvb2tfdGF0dG9vIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjAwcHhcbn1cblxuLmJvb2tfdGF0dG9vIGgyIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwXG59XG5cbi5ib29rX3RhdHRvbyBwIHtcbiAgICBjb2xvcjogIzQzNDM0MztcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDIwcHggMTMwcHhcbn1cblxuLmJvb2tfdGF0dG9vIGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICBtYXJnaW46IGF1dG9cbn1cblxuI21pZF9pbWcge1xuICAgIHBhZGRpbmc6IDE1MHB4IDAgMCAwXG59XG5cbi52aXNpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLnZpc2lvbiBoMiB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDYwcHhcbn1cblxuLnZpc2lvbiBwIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiAxMHB4IDU1cHhcbn1cblxuLnZpc2lvbiAudmlzaW9uX2J0biB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZiYWMxODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIG1hcmdpbjogMzBweCAwXG59XG5cbi52aXNpb25fZGF0YSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuLmZhLXF1b3RlLWxlZnQsXG4uZmEtcXVvdGUtcmlnaHQge1xuICAgIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cbiAgICBjb2xvcjogIzU0MzhmZjtcbiAgICBtYXJnaW46IDVweCAycHg7XG59XG5cbi50ZXN0aW1vbmlhbF9zbGlkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcl9iZy5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBwYWRkaW5nOiA4MHB4IDBcbn1cblxuLnRlc3RpbW9uaWFsX3NsaWRlcl8xIHtcbiAgICBwYWRkaW5nOiA4MHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAxNDBweCAwXG59XG5cbi5jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNDBweFxufVxuXG4uY29udGVudF9kaXYgaDUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDEwcHhcbn1cblxuLmNvbnRlbnRfZGl2IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTVweCAxMHB4XG59XG5cbiNTZWFyY2gtQXJ0aXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4XG59XG5cbiNTZWFyY2gtQXJ0aXN0IGgyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4XG59XG5cbiNTZWFyY2gtQXJ0aXN0IHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcbn1cblxuI1NlYXJjaC1BcnRpc3QgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXG59XG5cbiNTZWFyY2gtQXJ0aXN0IHVsIGxpOjptYXJrZXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogI2ZiYWMxOFxufVxuXG4uYXJ0aXN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHhcbn1cblxuLmZhdHVyZS1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweCAwIDBcbn1cblxuLmJnLWJ0biB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTQzOGZmO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8sIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyXG59XG5cbi5iZy1idG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbiNTZWFyY2gtQXJ0aXN0IGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudFxufVxuXG4jU2VhcmNoLUFydGlzdCBwIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICNlMGUwZTA7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8sIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA4OHB4IDAgMCAyMHB4O1xuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLm5hbWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbn1cblxuLnNlYXJjaF9kaXYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuI2Jvb2tpbmctYmFubmVyIHtcbiAgICBwYWRkaW5nOiA4MHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuI2Jvb2tpbmctYmFubmVyIGgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTVweFxufVxuXG4jYm9va2luZy1iYW5uZXIgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8sIHNhbnMtc2VyaWYhaW1wb3J0YW50XG59XG5cbmgyIHtcbiAgICBmb250LXdlaWdodDogNzAwXG59XG5cbi5xdWVzdGlvbi1iYW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4MHB4IDAgMzBweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0XG59XG5cbiNxdWVzdGlvbi1iYW5uZXIgLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5mYXEge1xuICAgIHBhZGRpbmc6IDEwcHggNjBweCAxMHB4IDYwcHg7XG59XG5cbiNmYXEge1xuICAgIHdpZHRoOiA1NSVcbn1cblxuLnF1ZXN0aW9uLWJhbm5lciAudGF0dG9vXzEge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucXVlc3Rpb24tYmFubmVyIC5naXJsX2ltZyB7XG4gICAgLyogcGFkZGluZzogNjBweCAwOyAqL1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5cbi5xdWVzdGlvbi1iYW5uZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5RdWVzdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxNXB4IDBcbn1cblxuLlF1ZXN0aW9ucyBwIHtcbiAgICBmb250LXNpemU6IDE2cHhcbn1cblxuLnF1ZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHhcbn1cblxuI3Rlc3RpbW9uaWFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMFxufVxuXG4udGVzdGltb25pYWxfY29udHJvbCB7XG4gICAgbWFyZ2luOiAzMHB4IDAgMTBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXhcbn1cblxuLnRlc3RpbW9uaWFsX2NvbnRyb2wgLm5leHQgaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0MzhmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiA1cHhcbn1cblxuLnRlc3RpbW9uaWFsX2NvbnRyb2wgLnByZXYgaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0MzhmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiA1cHhcbn1cblxuLnRlc3RpbW9uaWFsX3BhcmEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzBweFxufVxuXG4jdGVzdGltb25pYWwge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuI3Rlc3RpbW9uaWFsIGgzIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8sIHNhbnMtc2VyaWYhaW1wb3J0YW50XG59XG5cbi50ZXN0aW1vbmlhbF9jb250cm9sIGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDNcbn1cblxuI3NlYXJjaElucHV0IHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxufVxuXG4uc2VhcmNoX2RpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGZsZXgtYmFzaXM6IHVuc2V0XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmY3O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMCAwXG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkKy5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweFxufVxuXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHVsIGxpIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudFxufVxuXG4jb25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHotaW5kZXg6IDU7XG4gICAgd2lkdGg6IDcwJVxufVxuXG4jdHdvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMyU7XG4gICAgd2lkdGg6IDU1JTtcbiAgICByaWdodDogNDQlO1xuICAgIHotaW5kZXg6IDNcbn1cblxuI3RocmVlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcmlnaHQ6IDE1JTtcbiAgICBib3R0b206IDU3cHhcbn1cblxuI3NlYXJjaElucHV0IFt0eXBlPXN1Ym1pdF0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZiYWMxODtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogMXB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxcHggMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50XG59XG5cbiNnZWVrcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgYXV0b1xufVxuXG4jZ2Vla3MgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2UtaW4tb3V0XG59XG5cbiNnZWVrczpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XG4gICAgLnNlcmFjaF9zdWJtaXQge1xuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxcHggN3B4XG4gICAgfVxuICAgIC52aXNpb24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweCFpbXBvcnRhbnRcbiAgICB9XG4gICAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweFxuICAgIH1cbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuaG9tZS1iYW5uZXIgLmNvbC14cy0xMiB7XG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG4gICAgLnRpdHRsZSBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweFxuICAgIH1cbiAgICAudGl0dGxlIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweFxuICAgIH1cbiAgICAuc2VhcmNoX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNXB4XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgICAuaG9tZS1iYW5uZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcbiAgICB9XG4gICAgLmhvbWVfdGV4dF8xIGgyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHhcbiAgICB9XG4gICAgLmhvbWVfdGV4dF8xIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAxN3B4XG4gICAgfVxuICAgIC5hcnRpc3Qge1xuICAgICAgICBwYWRkaW5nOiAxMXB4XG4gICAgfVxuICAgICN0ZXN0aW1vbmlhbCBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbiAgICAudGVzdGltb25pYWxfcGFyYSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbiAgICAudGVzdGltb25pYWxfY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgfVxuICAgIC50ZXN0aW1vbmlhbF9jb250ZW50IGltZyB7XG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbiAgICAuaG9tZV9iYW5uZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMFxuICAgIH1cbiAgICAuaG9tZV90ZXh0XzEgcCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHhcbiAgICB9XG4gICAgLmZlYXR1cmUtY2FyZCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgI2ltZ18yX2ZlYXR1cmUge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzN3B4XG4gICAgfVxuICAgICNTZWFyY2gtQXJ0aXN0LFxuICAgIC5ob21lXzIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEycHhcbiAgICB9XG4gICAgLmJveV9pbWcge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMFxuICAgIH1cbiAgICAuaG9tZV9jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTMwcHggMCA0MHB4IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbiAgICAuaG9tZV9jb250ZW50IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgLmhvbWVfY29udGVudCBwIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBcbiAgICB9XG4gICAgLmZlYXR1cmUtY2FyZCBwIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwXG4gICAgfVxuICAgIC5ib29rX3RhdHRvbyBwIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICB9XG4gICAgLnZpc2lvbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHghaW1wb3J0YW50XG4gICAgfVxuICAgIC52aXNpb24gaDIge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcbiAgICB9XG4gICAgLnZpc2lvbiBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgfVxuICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMTBweFxuICAgIH1cbiAgICAuY29udGVudF9kaXYgaDUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4XG4gICAgfVxuICAgIC5jb250ZW50X2RpdiBwIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMFxuICAgIH1cbiAgICAuZmFxIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwXG4gICAgfVxuICAgIC5xdWVzdGlvbi1iYW5uZXIgaDIge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICB9XG4gICAgLnRlc3RpbW9uaWFsX2NvbnRyb2wge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweFxuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4XG4gICAgfVxuICAgICNtaWRfaW1nIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwXG4gICAgfVxuICAgIC5ib29rX3RhdHRvbyB7XG4gICAgICAgIGhlaWdodDogNDgwcHhcbiAgICB9XG4gICAgI2hpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuICAgICNjb250ZW50X2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1IDI1NSAyNTUgLyAxNiUpLCByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpKSwgdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyXzEucG5nKTtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3BcbiAgICB9XG4gICAgLmJnLWJ0biB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleFxuICAgIH1cbiAgICAjaW5remVycyAuY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgfVxuICAgIC50ZXN0aW1vbmlhbF9zbGlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJfbmV3XzIucG5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiB1bnNldFxuICAgIH1cbiAgICAudGVzdGltb25pYWxfc2xpZGVyXzEge1xuICAgICAgICBjb2xvcjogI2ZmZlxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAuaG9tZS1iYW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMFxuICAgIH1cbiAgICAuaG9tZV9jb250ZW50IHAge1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICB9XG4gICAgLmhvbWVfY29udGVudCBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweFxuICAgIH1cbiAgICAjaG9tZSBpbWcge1xuICAgICAgICBoZWlnaHQ6IGF1dG9cbiAgICB9XG4gICAgLmJveV9pbWcge1xuICAgICAgICBwYWRkaW5nLXRvcDogOThweFxuICAgIH1cbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDIwcHhcbn1cbi5maW5kX215X2FydGlzdHtcbmJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG5wYWRkaW5nOiA4MHB4IDA7XG5jb2xvcjogI2ZmZjtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1cbiNmaW5kX215X2FydGlzdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA2MHB4IDA7XG59XG4uZmluZF9teV9hcnRpc3QgaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDMwcHggMDtcblxufSJdfQ== */"] });


/***/ }),

/***/ "pG8+":
/*!***************************************************!*\
  !*** ./src/app/allmodules/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/header/header.component */ "lLVm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/footer/footer.component */ "ONzT");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 0, consts: [[1, "wrapper"], [1, "content-wrapper"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=allmodules-main-main-module-es2015.js.map