(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/macbook12345/Music/InkzupClientV1/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ZD5":
    /*!**********************************************************!*\
      !*** ./src/app/allmodules/auth/login/login.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function ZD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../loader/loader.component */
      "CjTh");

      function LoginComponent_app_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
        }
      }

      function LoginComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.form_Err, "");
        }
      }

      function LoginComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.phone_Err, " ");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, router, clientService, socialService, cookieService, actRoute) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.clientService = clientService;
          this.socialService = socialService;
          this.cookieService = cookieService;
          this.actRoute = actRoute;
          this.hide = true;
          this.isReadOnly = true;
          this.isReadOnly1 = true;
          this.user = new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialUser"]();
          this.email_Err = '';
          this.form_Err = '';
          this.password_err = '';
          this.phone_Err = '';
          this.remeberLogin = '';
          this.isLoad = false;
          this.SocialEmailErr = '';
          this.URL = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.actRoute.queryParams.subscribe(function (params) {
              if (params.path) {
                _this.URL = params.path;
              }
            });

            if (localStorage.getItem('token')) {
              var now = new Date().getTime();
              var expiry = localStorage.getItem('expiry');
              var user_type = localStorage.getItem('user_type');

              if (expiry) {
                console.log(now + ',' + expiry);

                if (now < expiry && user_type == 2) {
                  localStorage.removeItem('bookingData');
                  this.router.navigate(['']);
                } else {
                  this.logout();
                }
              }
            }

            if (localStorage.getItem('Inkzer_token') && localStorage.getItem('status')) {
              var _now = new Date().getTime();

              var user_type = localStorage.getItem('inkzer_user_type');
              var expiry = localStorage.getItem('inkzer_expiry');
              var subscription = localStorage.getItem('subscription');
            }

            this.loginForm = this.formBuilder.group({
              email: ['', []],
              password: ['', []],
              phone: ['', []],
              rememberMe: ['', []]
            }); //check remember me

            if (this.cookieService.get('remember') !== undefined) {
              if (this.cookieService.get('remember') === 'Yes') {
                var email = this.cookieService.get('email');
                var password = this.cookieService.get('password');
                this.loginForm.patchValue({
                  email: email
                });
                this.loginForm.patchValue({
                  password: password
                });
                this.RememberMeCheck = true;
              }
            }
          }
        }, {
          key: "artistLogin",
          value: function artistLogin() {
            var _this2 = this;

            console.log("called");
            this.email_Err = '';
            this.form_Err = '';
            this.phone_Err = '';
            this.password_err = '';
            this.isLoad = true;
            this.loginForm.patchValue({
              rememberMe: this.RememberMeCheck
            });
            var phone = '';
            var regExpr = /[^0-9]/g;

            if (this.loginForm.value.phone != '') {
              phone = this.loginForm.value.phone.replace(regExpr, '');
            }

            var formData = new FormData();
            formData.append('phone', phone); // formData.append('email', this.loginForm.value.email);
            // formData.append('password', this.loginForm.value.password);

            this.clientService.clientLogin(formData).subscribe(function (res) {
              _this2.setDetail(); //User


              localStorage.setItem('is_login', 'true');

              _this2.router.navigate(['verify-code']);

              return;

              if (res.user_type == 2) {
                if (res.status == 1) {
                  var now = new Date();
                  var expiry = now.getTime() + 172800000; //Add 2 day

                  localStorage.setItem('expiry', expiry);
                  localStorage.setItem('name', res.name);
                  localStorage.setItem('user_type', res.user_type);
                  localStorage.setItem('client_id', res.id);
                  localStorage.setItem('status', res.status);
                  localStorage.setItem('profile_img', res.profile_img); //Redirect to rating page

                  var rating = localStorage.getItem('rating');
                  var url = localStorage.getItem('url');

                  if (rating && url) {
                    localStorage.removeItem('url');
                    localStorage.removeItem('rating');

                    _this2.router.navigate([url]);
                  } else {
                    // this.router.navigate(['pages/get-inkzed']);
                    if (_this2.URL) {
                      _this2.router.navigate([_this2.URL]);

                      return;
                    }

                    _this2.router.navigate(['pages/Inkzers-list']);
                  }
                } else if (res.status == 3) {
                  localStorage.setItem('user_id', res.id);

                  _this2.router.navigate(['set-password']);
                }
              } //For artist login
              else if (res.user_type == 1) {
                  localStorage.removeItem('token');

                  if (res.artist_status) {
                    if (res.artist_status == 2) {
                      localStorage.setItem('user_id', res.id); // this.router.navigate(['/subscription-plan']);

                      window.location.href = 'http://inkzup.com/Inkzer/#/subscription-plan';
                    } else if (res.artist_status == 3) {
                      localStorage.setItem('user_id', res.id); // this.router.navigate(['/register-next']);

                      window.location.href = 'http://inkzup.com/Inkzer/#/register-next';
                    } else if (res.artist_status == 4) {
                      localStorage.setItem('user_id', res.id); // this.router.navigate(['/register-next']);

                      window.location.href = 'http://inkzup.com/Inkzer/#/register-next';
                    } else if (res.artist_status == 1 && res.status == 1) {
                      var _now2 = new Date();

                      var expiry = _now2.getTime() + 172800000; //Add 2 day

                      localStorage.setItem('inkzer_expiry', expiry);
                      localStorage.setItem('user_name', res.name);
                      localStorage.setItem('inkzer_user_id', res.id);
                      localStorage.setItem('inkzer_user_type', res.user_type);
                      localStorage.setItem('status', res.status);
                      localStorage.setItem('inkzer_profile_img', res.profile_img);
                      localStorage.setItem('subscription', res.subscription);
                      localStorage.setItem('Inkzer_token', res.token);
                      localStorage.setItem('booking_url', res.booking_url);

                      if (res.subscription == 2) {
                        // this.router.navigate(['/pages/dashboard']);
                        window.location.href = 'http://inkzup.com/Inkzer/#/pages/dashboard';
                      } else {
                        window.location.href = 'http://inkzup.com/Inkzer/#/pages/booking'; // this.router.navigate(['/pages/booking']);
                      }
                    }
                  }
                }

              _this2.isLoad = false;
            }, function (err) {
              _this2.isLoad = false;

              if (err.error) {
                _this2.form_Err = err.error.error; // if (err.error.email) {
                //   if (err.error.email.length > 0) {
                //     this.email_Err = err.error.email;
                //   }
                // }
                // if (err.error.password) {
                //   this.password_err = err.error.password;
                // }

                if (err.error.phone) {
                  _this2.phone_Err = err.error.password;
                }
              }
            });
          }
        }, {
          key: "signinWithGoogle",
          value: function signinWithGoogle() {
            var _this3 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID).then(function (user) {
              _this3.isLoad = true;
              _this3.SocialEmailErr = '';
              _this3.user = user;
              var formData = new FormData();
              formData.append('name', user.name);
              formData.append('id', user.id);
              formData.append('email', user.email);
              formData.append('provider', user.provider);

              _this3.clientService.ArtistSocialRegister(formData).subscribe(function (res) {
                if (res) {
                  _this3.cookieService["delete"]('remember');

                  _this3.cookieService["delete"]('email');

                  _this3.cookieService["delete"]('password');

                  localStorage.removeItem('phone');

                  if (res.status == 4) {
                    localStorage.setItem('client_user_id', res.id);
                    localStorage.setItem('client_login_type', res.signup_type);

                    _this3.router.navigate(['/phone-verify']);

                    return;
                  }

                  var now = new Date();
                  var expiry = now.getTime() + 172800000; //Add 2 day

                  localStorage.setItem('expiry', expiry);
                  localStorage.setItem('name', res.name);
                  localStorage.setItem('status', res.status);
                  localStorage.setItem('profile_img', res.profile_img);
                  localStorage.setItem('user_type', res.user_type);
                  localStorage.setItem('client_id', res.id); //Redirect to rating page

                  var rating = localStorage.getItem('rating');
                  var url = localStorage.getItem('url'); // console.log('url-----------------------------', url);

                  if (rating && url) {
                    localStorage.removeItem('url');
                    localStorage.removeItem('rating');

                    _this3.router.navigate([url]);
                  } else {
                    if (_this3.URL) {
                      _this3.router.navigate([_this3.URL]);

                      return;
                    } // this.router.navigate(['pages/get-inkzed']);


                    _this3.router.navigate(['pages/Inkzers-list']);
                  }
                }

                _this3.isLoad = false;
              }, function (err) {
                _this3.isLoad = false;

                if (err.error) {
                  if (err.error.email) {
                    _this3.SocialEmailErr = err.error.email[0];
                  }
                }
              });
            });
          }
        }, {
          key: "signinWithFacebook",
          value: function signinWithFacebook() {
            var _this4 = this;

            this.form_Err = '';
            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID).then(function (user) {
              // this.isLoad = true;
              _this4.SocialEmailErr = '';
              _this4.user = user;
              var formData = new FormData();
              formData.append('name', user.name);
              formData.append('id', user.id);
              formData.append('email', user.email);
              formData.append('provider', user.provider);

              _this4.clientService.SocialLogin(formData).subscribe(function (res) {
                _this4.isLoad = false;

                if (res) {
                  _this4.cookieService["delete"]('remember');

                  _this4.cookieService["delete"]('email');

                  _this4.cookieService["delete"]('password');

                  localStorage.removeItem('phone');

                  if (res.status == 4) {
                    localStorage.setItem('client_user_id', res.id);
                    localStorage.setItem('client_login_type', res.signup_type);

                    _this4.router.navigate(['/phone-verify']);

                    return;
                  }

                  var now = new Date();
                  var expiry = now.getTime() + 172800000; //Add 2 day

                  localStorage.setItem('expiry', expiry);
                  localStorage.setItem('name', res.name);
                  localStorage.setItem('status', res.status);
                  localStorage.setItem('profile_img', res.profile_img);
                  localStorage.setItem('user_type', res.user_type);
                  localStorage.setItem('client_id', res.id); //Redirect to rating page

                  var rating = localStorage.getItem('rating');
                  var url = localStorage.getItem('url');

                  if (rating && url) {
                    localStorage.removeItem('url');
                    localStorage.removeItem('rating');

                    _this4.router.navigate([url]);
                  } else {
                    if (_this4.URL) {
                      _this4.router.navigate([_this4.URL]);

                      return;
                    } // this.router.navigate(['pages/get-inkzed']);
                    // this.router.navigate(['/pages/Inkzers-list']);


                    _this4.router.navigate(['/pages/inkzers']);
                  }
                }
              }, function (err) {
                _this4.isLoad = false;

                if (err.error) {
                  if (err.error.email) {
                    _this4.SocialEmailErr = err.error.email[0];
                  }
                }
              });
            });
          }
        }, {
          key: "checkRemeber",
          value: function checkRemeber() {
            if (this.RememberMeCheck) {
              this.RememberMeCheck = false;
              return;
            }

            this.RememberMeCheck = true;
          }
        }, {
          key: "setDetail",
          value: function setDetail() {
            if (this.RememberMeCheck) {
              this.cookieService.set('remember', 'Yes');
              this.cookieService.set('email', this.loginForm.value.email);
              this.cookieService.set('password', this.loginForm.value.password);
            } else {
              this.cookieService.set('remember', 'No');
              this.cookieService.set('email', '');
              this.cookieService.set('password', '');
            }
          }
        }, {
          key: "phoneFormat",
          value: function phoneFormat(event, backspace) {
            var newVal = event.target.value.replace(/\D/g, '');

            if (backspace && newVal.length <= 3) {
              newVal = newVal.substring(0, newVal.length - 1);
            }

            if (newVal.length === 0) {
              newVal = '';
            } else if (newVal.length <= 3) {
              newVal = newVal.replace(/^(\d{0,3})/, '($1)');
            } else if (newVal.length <= 6) {
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1)-$2');
            } else if (newVal.length <= 10) {
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
            } else {
              newVal = newVal.substring(0, 10);
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
            }

            event.target.value = newVal.trim();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.clientService.logout();
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            var _this5 = this;

            this.clientService.checkLogin().subscribe(function (res) {}, function (err) {
              _this5.clientService.logout();

              _this5.router.navigate(['']);
            });
          }
        }, {
          key: "test",
          value: function test() {
            this.isReadOnly = true;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 31,
        vars: 5,
        consts: [[4, "ngIf"], [1, "auth"], [1, "container"], [1, "text-center"], ["routerLink", "", "src", "assets/images/logo.svg", "alt", "Logo Image", 1, "pointer"], [1, "row"], [1, "col-md-5"], [1, "auth_form"], ["class", "text-danger errSpan float-left", 4, "ngIf"], ["name", "loginForm", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [3, "floatLabel"], ["maxlength", "14", "matInput", "", "placeholder", "Phone Number", "formControlName", "phone", "autocomplete", "off", 3, "keyup"], ["matPrefix", "", "src", "assets/images/phone.png"], ["class", "text-danger float-left errSpan", 4, "ngIf"], ["type", "submit", 1, "submit_btn"], [1, "mt-5"], ["target", "_blank", "routerLink", "/account"], [1, "col-md-1"], [1, "col-md-6"], [1, "auth_img"], ["src", "assets/images/auth.png", "alt", ""], [1, "text-danger", "errSpan", "float-left"], [1, "text-danger", "float-left", "errSpan"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_app_loader_0_Template, 1, 0, "app-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Welcome Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Inkzup Customer! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
              return ctx.artistLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Phone Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function LoginComponent_Template_input_keyup_18_listener($event) {
              return ctx.phoneFormat($event, $event.keyCode == 8 ? true : false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 1, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Not registered yet? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Create An Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_Err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phone_Err);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  background: #060606;\n  background-image: url('background.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  float: left;\n  padding: 50px 0;\n  min-height: 100%;\n}\n\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth_form[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 50px 0 30px;\n  color: #fff;\n}\n\n.auth_form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 30px;\n  font-size: 35px;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(64, 64, 64, 0.5);\n  border-radius: 10px;\n  padding: 0 20px;\n  margin-bottom: 5px;\n  color: #fff;\n}\n\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-underline {\n  display: none;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282 !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  white-space: nowrap;\n}\n\n.submit_btn[_ngcontent-%COMP%] {\n  background: #5438ff;\n  border-radius: 10px;\n  width: 100%;\n  border: none;\n  color: #fff;\n  outline: none;\n  padding: 15px;\n  font-size: 16px;\n  float: left;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  transition: transform .2s cubic-bezier(.2,0,.4,1);\n}\n\n.or[_ngcontent-%COMP%] {\n  color: #dedede;\n  font-weight: 100;\n}\n\n.google_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  margin-right: 10px;\n}\n\n.google_btn[_ngcontent-%COMP%] {\n  border: 2px solid rgba(64, 64, 64, 0.6);\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 46%;\n  margin-right: 17px;\n  padding: 5px;\n  margin-top: 15px;\n  transition: transform .2s cubic-bezier(.2,0,.4,1);\n}\n\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #5438ff;\n  text-decoration: underline;\n}\n\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #dedede;\n}\n\n.bottom_btn[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n\n.bottom_btn[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  flex-basis: 74%;\n  margin: 2px 0;\n}\n\n.bottom_btn[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%] {\n  margin: 7px 0;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 14px !important;\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.paswrd_img[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n\n\n\n@media only screen and (max-width: 580px) {\n  .google_btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .auth_img[_ngcontent-%COMP%]{\n    display:none;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1200px) {\n  .google_btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #ffac00;\n  vertical-align: middle;\n}\n\n.view_booking[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.auth_form[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  border-top: 0 !important;\n  margin-top: 13px !important;\n  margin-left: 10px !important;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media screen and (max-width:600px) {\n  .auth_img[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n\n.google_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.submit_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsdUNBQStEO0VBQy9ELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7RUFLRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgge1xuICBiYWNrZ3JvdW5kOiAjMDYwNjA2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNTBweCAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uYXV0aF9pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoX2Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDUwcHggMCAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmF1dGhfZm9ybSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uYXV0aF9mb3JtIGg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg2NCwgNjQsIDY0LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hdXRoX2Zvcm0gaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjODQ4MjgyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICM4NDgyODI7XG59XG5cbi5hdXRoX2Zvcm0gaDYgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3VibWl0X2J0biB7XG4gIGJhY2tncm91bmQ6ICM1NDM4ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllciguMiwwLC40LDEpO1xufVxuXG4ub3Ige1xuICBjb2xvcjogI2RlZGVkZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmdvb2dsZV9idG4gaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmdvb2dsZV9idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDY0LCA2NCwgNjQsIDAuNik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC4yLDAsLjQsMSk7XG59XG5cbi5hdXRoX2Zvcm0gcCBhIHtcbiAgY29sb3I6ICM1NDM4ZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYXV0aF9mb3JtIHAge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogI2RlZGVkZTtcbn1cblxuLmJvdHRvbV9idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3R0b21fYnRuIC50ZXh0LWxlZnQge1xuICBmbGV4LWJhc2lzOiA3NCU7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbi5ib3R0b21fYnRuIC5mbG9hdC1yaWdodCB7XG4gIG1hcmdpbjogN3B4IDA7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ucGFzd3JkX2ltZyB7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLyogcmVzcG9uc2l2ZSBjc3MgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuZ29vZ2xlX2J0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXV0aF9mb3JtIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmF1dGhfaW1ne1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5nb29nbGVfYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmFjMDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi52aWV3X2Jvb2tpbmdcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5XG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXhcbiAgLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uYXV0aF9mb3JtIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgLmF1dGhfaW1ne1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5nb29nbGVfYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLnN1Ym1pdF9idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "7D62":
    /*!************************************************!*\
      !*** ./src/app/allmodules/auth/auth.module.ts ***!
      \************************************************/

    /*! exports provided: AuthModule */

    /***/
    function D62(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-routing.module */
      "hU+n");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "wcx/");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      "TKYk");
      /* harmony import */


      var _vertify_email_vertify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vertify-email/vertify-email.component */
      "PNJj");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "wXU2");
      /* harmony import */


      var _verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verification-code/verification-code.component */
      "OieM");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/material-module */
      "j5wd");
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      "xOKg");
      /* harmony import */


      var _client_register_client_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./client-register/client-register.component */
      "ykfC");
      /* harmony import */


      var _verify_phone_verify_phone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./verify-phone/verify-phone.component */
      "97zl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./auth-loader/auth-loader.component */
      "DeEF");
      /* harmony import */


      var _success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./success-auth/success-auth.component */
      "SvWm");
      /* harmony import */


      var _verified_email_verified_email_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./verified-email/verified-email.component */
      "Htxs");
      /* harmony import */


      var _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./set-password/set-password.component */
      "DHuD");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD");
      /* harmony import */


      var _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./congratulation/congratulation.component */
      "ld5U");
      /* harmony import */


      var _login_login_select_login_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./login/login-select/login-select.component */
      "jMXS");
      /* harmony import */


      var _artist_verified_artist_verified_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./artist-verified/artist-verified.component */
      "TwQ9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_17__["NgOtpInputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _vertify_email_vertify_email_component__WEBPACK_IMPORTED_MODULE_4__["VertifyEmailComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"], _verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_6__["VerificationCodeComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"], _client_register_client_register_component__WEBPACK_IMPORTED_MODULE_9__["ClientRegisterComponent"], _verify_phone_verify_phone_component__WEBPACK_IMPORTED_MODULE_10__["VerifyPhoneComponent"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_13__["AuthLoaderComponent"], _success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_14__["SuccessAuthComponent"], _verified_email_verified_email_component__WEBPACK_IMPORTED_MODULE_15__["VerifiedEmailComponent"], _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_16__["SetPasswordComponent"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_18__["CongratulationComponent"], _login_login_select_login_select_component__WEBPACK_IMPORTED_MODULE_19__["LoginSelectComponent"], _artist_verified_artist_verified_component__WEBPACK_IMPORTED_MODULE_20__["ArtistVerifiedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_17__["NgOtpInputModule"]]
        });
      })();
      /***/

    },

    /***/
    "97zl":
    /*!************************************************************************!*\
      !*** ./src/app/allmodules/auth/verify-phone/verify-phone.component.ts ***!
      \************************************************************************/

    /*! exports provided: VerifyPhoneComponent */

    /***/
    function zl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPhoneComponent", function () {
        return VerifyPhoneComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      function VerifyPhoneComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      function VerifyPhoneComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.form_err, "");
        }
      }

      function VerifyPhoneComponent_span_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.phone_err, "");
        }
      }

      var VerifyPhoneComponent = /*#__PURE__*/function () {
        function VerifyPhoneComponent(clientService, router, formBuilder) {
          _classCallCheck(this, VerifyPhoneComponent);

          this.clientService = clientService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.form_err = '';
          this.form_success = '';
          this.phone_err = '';
          this.isLoad = false;
          this.phone = '';
          this.client_login_type = localStorage.getItem('client_login_type');
        }

        _createClass(VerifyPhoneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('client_user_id')) {
              this.router.navigate(['/login']);
            }

            this.phoneFormat();
            this.phoneVerifyForm = this.formBuilder.group({
              phone: [this.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              user_id: [localStorage.getItem('client_user_id'), []]
            });
          }
        }, {
          key: "sendPhoneOtp",
          value: function sendPhoneOtp() {
            var _this6 = this;

            this.isLoad = true;
            var regExpr = /[^0-9]/g;
            var phone = this.phoneVerifyForm.value.phone.replace(regExpr, '');
            var formData = new FormData();
            formData.append('phone', phone);
            formData.append('user_id', this.phoneVerifyForm.value.user_id);
            localStorage.removeItem('token');
            this.clientService.sendOtp(formData).subscribe(function (res) {
              localStorage.removeItem('token');
              _this6.isLoad = false;

              _this6.router.navigate(['/verify-code']);
            }, function (err) {
              _this6.isLoad = false;
              _this6.form_success = '';
              _this6.phone_err = '';

              if (err.error) {
                _this6.form_err = err.error.error;
              }

              if (err.error.phone) {
                _this6.phone_err = err.error.phone[0];
              }
            });
          }
        }, {
          key: "phoneFormat",
          value: function phoneFormat() {
            var newVal = localStorage.getItem('phone') ? localStorage.getItem('phone') : '';

            if (newVal == 'undefined') {
              this.phone = '';
              return;
            }

            if (newVal) {
              var regex = new RegExp(/(\d{3})(\d{3})(\d{4})/);
              var match = newVal.match(regex);

              if (match) {
                newVal = "(".concat(match[1], ")-").concat(match[2], "-").concat(match[3]);
              }

              this.phone = newVal;
            } else {
              this.phone = '';
            }
          }
        }, {
          key: "MakephoneFormat",
          value: function MakephoneFormat(event, backspace) {
            var newVal = event.target.value.replace(/\D/g, '');

            if (backspace && newVal.length <= 3) {
              newVal = newVal.substring(0, newVal.length - 1);
            }

            if (newVal.length === 0) {
              newVal = '';
            } else if (newVal.length <= 3) {
              newVal = newVal.replace(/^(\d{0,3})/, '($1)');
            } else if (newVal.length <= 6) {
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1)-$2');
            } else if (newVal.length <= 10) {
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
            } else {
              newVal = newVal.substring(0, 10);
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
            }

            event.target.value = newVal.trim();
          }
        }, {
          key: "emailVerify",
          value: function emailVerify() {
            this.router.navigate(['/email-verift']);
          }
        }]);

        return VerifyPhoneComponent;
      }();

      VerifyPhoneComponent.ɵfac = function VerifyPhoneComponent_Factory(t) {
        return new (t || VerifyPhoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      VerifyPhoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VerifyPhoneComponent,
        selectors: [["app-verify-phone"]],
        decls: 27,
        vars: 5,
        consts: [[4, "ngIf"], [1, "auth", "text-center"], [1, "container"], [1, "text-center"], ["routerLink", "", "src", "assets/images/logo.svg", "alt", "Logo Image", 1, "pointer"], [1, "col-lg-7", "col-md-9", "col-11", "m-auto"], [1, "working_dialog"], [1, "working_txt"], [1, "col-lg-6", "col-md-10", "mx-auto"], ["src", "assets/images/phone_verify.png", 1, "img-fluid"], [1, "col-lg-9", "col-10", "m-auto"], ["name", "phoneVerifyForm", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "text-left"], [3, "floatLabel"], ["matInput", "", "placeholder", "Phone", "formControlName", "phone", "maxlength", "14", "autocomplete", "off", 3, "keyup"], ["matPrefix", "", "src", "assets/images/phone.png"], ["matSuffix", "", "src", "assets/images/description.svg"], ["class", "text-danger float-left errSpan", 4, "ngIf"], ["type", "submit"], ["routerLink", "/email-verify"], [1, "text-danger", "float-left", "errSpan"]],
        template: function VerifyPhoneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VerifyPhoneComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "VERIFY YOUR PHONE NUMBER");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function VerifyPhoneComponent_Template_form_ngSubmit_13_listener() {
              return ctx.sendPhoneOtp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function VerifyPhoneComponent_Template_input_keyup_18_listener($event) {
              return ctx.MakephoneFormat($event, $event.keyCode == 8 ? true : false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, VerifyPhoneComponent_span_21_Template, 2, 1, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VerifyPhoneComponent_span_22_Template, 2, 1, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Send Text Verification Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Send Email Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.phoneVerifyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phone_err);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_7__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0 20px;\n    min-height: 100%;\n}\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.auth_form[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    padding: 25px 30px 30px;\n    color: #fff;\n    \n}\n.auth[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-weight: 500;\n    padding-bottom: 5px;\n    font-size: 30px;\n    color: #fff;\n    float: left;\n    width: 100%;\n    padding-top: 30px;\n}\n.auth[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #E0E0E0;\n    width: 80%;\n    margin: 0 auto;\n    padding-bottom: 25px;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    font-size: 14px;\n    font-weight: 500;\n}\n.working_dialog[_ngcontent-%COMP%]{\n    \n    padding: 25px;\n    text-align: center;\n    background: #1E1E1E;\n    box-shadow: 0px 0px 100px #000000;\n    border-radius: 10px;\n    margin: 20px auto;\n}\n.working_txt[_ngcontent-%COMP%]{\n    \n    margin: 0px auto;\n    padding-bottom: 90px;\n}\n.working_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 8px;\n    width: 100%;\n    border: none;\n    color: #fff;\n    padding: 12px;\n    float: left;\n    margin-top: 5px;\n}\n.working_txt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    color:#ffffffe8;\n    font-size: 30px;\n    margin-top: 0;\n    margin-bottom: 22px;\n    font-weight: 700;\n\n}\n.working_txt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    padding: 0 5px 0 0;\n}\n.working_txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 14px;\n    padding-top: 10px;\n    width: 100%;\n    float: left;\n    text-decoration: none;\n}\n.working_txt[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    color: #fff;\n    margin: 55px 0 20px 0;\n}\n.logo_img[_ngcontent-%COMP%]{\n    margin-bottom: 80px;\n}\n.mat-form-field[_ngcontent-%COMP%]{\n    width: 100%;\n    background: rgba(64, 64, 64, 0.5);\n    border-radius: 10px;\n    padding: 0 20px;\n    margin-bottom: 5px;\n    color: #fff;\n}\n  .mat-form-field.mat-focused .mat-form-field-underline {\n    display: none;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{\n    color: #848282 !important;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: #848282;\n}\n.working_txt[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{\n    padding-bottom: 0;\n}\n@media (max-width:767px){\n    .working_dialog[_ngcontent-%COMP%]{\n        width: 100%;\n        padding: 40px 0;\n    }\n    .working_txt[_ngcontent-%COMP%]{\n        width:90%;\n    }\n}\n@media screen and (min-width:767px) and (max-width:1024px) {\n    .working_txt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        line-height: 47px;\n        font-size: 30px;\n    }\n    .working_txt[_ngcontent-%COMP%]{\n        width: 100%;\n    }\n    \n}\n@media screen and (max-width:600px) {\n    .working_txt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        line-height: 40px;\n        font-size: 24px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1waG9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHdDQUFnRTtJQUNoRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoidmVyaWZ5LXBob25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aHtcbiAgICBiYWNrZ3JvdW5kOiAjMDYwNjA2O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDUwcHggMCAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uYXV0aF9pbWcgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmF1dGhfZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMUUxRTFFOyAqL1xufVxuLmF1dGggaDN7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5hdXRoIHB7XG4gICAgY29sb3I6ICNFMEUwRTA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbi5hdXRoX2Zvcm0gaDZ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ud29ya2luZ19kaWFsb2d7XG4gICAgLyogd2lkdGg6IDY1JTsgKi9cbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMUUxRTFFO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLndvcmtpbmdfdHh0e1xuICAgIC8qIHdpZHRoOiA1NSU7ICovXG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbn1cbi53b3JraW5nX3R4dCBidXR0b257XG4gICAgYmFja2dyb3VuZDogIzU0MzhGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLndvcmtpbmdfdHh0IGgye1xuICAgIGNvbG9yOiNmZmZmZmZlODtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbn1cbi53b3JraW5nX3R4dCBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHggMCAwO1xufVxuXG4ud29ya2luZ190eHQgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLndvcmtpbmdfdHh0IGg2e1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogNTVweCAwIDIwcHggMDtcbn1cbi5sb2dvX2ltZ3tcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICAgIGNvbG9yOiAjODQ4MjgyICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICM4NDgyODI7XG59XG4ud29ya2luZ190eHQgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC53b3JraW5nX2RpYWxvZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICB9XG4gICAgLndvcmtpbmdfdHh0e1xuICAgICAgICB3aWR0aDo5MCU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkgYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgLndvcmtpbmdfdHh0IGgye1xuICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAud29ya2luZ190eHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAud29ya2luZ190eHQgaDJ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIFxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        api_url: 'https://inkzup.com/Inkzup/',
        base_url: 'https://inkzup.com/Inkzup/',
        appId: '',
        inker_url: 'https://inkzup.com/Inkzer/',
        secretKey: 'XTfgX7wDTF88nEWrYz1QPgyygXzcDYd1E27TbDA9',
        pusherAppKey: '07162f9b14c62e7228cc',
        pusherCluster: 'mt1'
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
    "B7RP":
    /*!*******************************************************************!*\
      !*** ./src/app/allmodules/pages/not-found/not-found.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function B7RP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 8,
        vars: 0,
        consts: [["id", "page-not-found"], [1, "container-fluid"], [1, "col-lg-12", "m-auto"], [1, "not-found"], [1, "col-lg-5", "m-auto", "text-center"], ["src", "assets/images/page404.png", 1, "img-fluid"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Error 404 - Page Not Found ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#page-not-found[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 50px 25px;\n  background-color: #060606;\n}\n.not-found[_ngcontent-%COMP%] {\n  background-color: #161616;\n  padding: 60px 0;\n  border-radius: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #fbac18;\n  text-align: center;\n  font-family: Nunito;\n  font-size: 35px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 25px;\n}\n@media screen and (max-width: 600px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2Utbm90LWZvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA2MDY7XG59XG4ubm90LWZvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcbiAgcGFkZGluZzogNjBweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaDIge1xuICBjb2xvcjogI2ZiYWMxODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "CjTh":
    /*!*******************************************************!*\
      !*** ./src/app/allmodules/loader/loader.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function CjTh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 2,
        vars: 0,
        consts: [["id", "pause", 1, "d-flex", "align-items-center", "justify-content-center"], ["id", "spinner"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#spinner[_ngcontent-%COMP%] {\n\tanimation: frames 1s infinite linear;\n\tbackground: transparent;\n\tborder: 0.85vw solid #FFF;\n\tborder-radius: 100%;\n\tborder-top-color: #5438FF;\n\twidth: 8vw;\n\theight: 8vw;\n\topacity: .6;\n\tpadding: 0;\n\tposition: absolute;\n\tz-index: 999;\n}\n@keyframes frames {\n  0% {\n\ttransform: rotate(0deg);\n  }\n  100% {\n\ttransform: rotate(359deg);\n  }\n}\n#pause[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tbackground:\n\t\trgba(0, 0, 0, 0.66)\n\t\tno-repeat\n\t\t0 0;\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUVDLG9DQUFvQztDQUNwQyx1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7QUFDQTtFQUNFO0NBRUQsdUJBQXVCO0VBQ3RCO0VBQ0E7Q0FFRCx5QkFBeUI7RUFDeEI7QUFDRjtBQUVBO0NBQ0MsY0FBYztDQUNkOzs7S0FHSTtDQUNKLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZUFBZTtDQUNmLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsYUFBYTtBQUNkIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jc3Bpbm5lciB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmcmFtZXMgMXMgaW5maW5pdGUgbGluZWFyO1xuXHRhbmltYXRpb246IGZyYW1lcyAxcyBpbmZpbml0ZSBsaW5lYXI7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDAuODV2dyBzb2xpZCAjRkZGO1xuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRib3JkZXItdG9wLWNvbG9yOiAjNTQzOEZGO1xuXHR3aWR0aDogOHZ3O1xuXHRoZWlnaHQ6IDh2dztcblx0b3BhY2l0eTogLjY7XG5cdHBhZGRpbmc6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogOTk5O1xufVxuQGtleWZyYW1lcyBmcmFtZXMge1xuICAwJSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuI3BhdXNlIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJhY2tncm91bmQ6XG5cdFx0cmdiYSgwLCAwLCAwLCAwLjY2KVxuXHRcdG5vLXJlcGVhdFxuXHRcdDAgMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHotaW5kZXg6IDEwMDA7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "DHuD":
    /*!************************************************************************!*\
      !*** ./src/app/allmodules/auth/set-password/set-password.component.ts ***!
      \************************************************************************/

    /*! exports provided: SetPasswordComponent */

    /***/
    function DHuD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetPasswordComponent", function () {
        return SetPasswordComponent;
      });
      /* harmony import */


      var _success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../success-auth/success-auth.component */
      "SvWm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      function SetPasswordComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      function SetPasswordComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.formErr, "");
        }
      }

      function SetPasswordComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.password_err, "");
        }
      }

      function SetPasswordComponent_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.cPassword_err, "");
        }
      }

      var SetPasswordComponent = /*#__PURE__*/function () {
        function SetPasswordComponent(formBuilder, router, dialog, actRoute, clientService) {
          _classCallCheck(this, SetPasswordComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.dialog = dialog;
          this.actRoute = actRoute;
          this.clientService = clientService;
          this.password_err = "";
          this.cPassword_err = "";
          this.formErr = "";
          this.formSuccess = "";
          this.isLoad = false;
          this.hide = true;
        }

        _createClass(SetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setPasswordsForm = this.formBuilder.group({
              password: ['', []],
              confirm_password: ['', []],
              user_id: [localStorage.getItem('user_id'), []]
            });
          }
        }, {
          key: "setPassword",
          value: function setPassword() {
            var _this7 = this;

            this.password_err = "";
            this.cPassword_err = "";
            this.isLoad = true;
            this.clientService.setPassword(this.setPasswordsForm.value).subscribe(function (res) {
              if (res) {
                _this7.isLoad = false;
                localStorage.removeItem('user_id');

                _this7.successDialog();

                _this7.router.navigate(['/login']);
              }
            }, function (err) {
              _this7.isLoad = false;

              if (err.error.password) {
                _this7.password_err = err.error.password[0];
              }

              if (err.error.confirm_password) {
                _this7.cPassword_err = err.error.confirm_password[0];
              }
            });
          }
        }, {
          key: "successDialog",
          value: function successDialog() {
            var dialogRef = this.dialog.open(_success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_0__["SuccessAuthComponent"], {
              width: '460px',
              data: {
                'msg': 'You have successfully change your password, login to continue'
              }
            });
          }
        }]);

        return SetPasswordComponent;
      }();

      SetPasswordComponent.ɵfac = function SetPasswordComponent_Factory(t) {
        return new (t || SetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]));
      };

      SetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SetPasswordComponent,
        selectors: [["app-set-password"]],
        decls: 34,
        vars: 15,
        consts: [[4, "ngIf"], [1, "auth"], [1, "container"], [1, "text-center"], ["routerLink", "", "src", "assets/images/logo.svg", "alt", "Logo Image", 1, "pointer"], [1, "row"], [1, "col-md-5"], [1, "auth_form"], ["class", "text-danger", 4, "ngIf"], ["name", "resetPasswordsForm", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [3, "floatLabel"], ["matInput", "", "placeholder", "Create Password", "formControlName", "password", "autocomplete", "off", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [2, "color", "#ffac00"], ["matPrefix", "", "src", "assets/images/password.png"], [1, ""], ["matInput", "", "placeholder", "Confirm Password", "formControlName", "confirm_password", "autocomplete", "off", 3, "type"], [1, "submit_btn"], [1, "col-md-1"], [1, "col-md-6"], [1, "auth_img"], ["src", "assets/images/auth.png", "alt", ""], [1, "text-danger"]],
        template: function SetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SetPasswordComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SetPasswordComponent_span_10_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SetPasswordComponent_Template_form_ngSubmit_11_listener() {
              return ctx.setPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetPasswordComponent_Template_button_click_15_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SetPasswordComponent_span_19_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetPasswordComponent_Template_button_click_23_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SetPasswordComponent_span_27_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formErr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.setPasswordsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password_err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cPassword_err);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_11__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0;\n    min-height: 100%;\n    \n}\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.auth_form[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    padding: 50px 0 30px;\n    color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-weight: 500;\n    font-size: 30px;\n    margin-bottom: 40px;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    font-size: 14px;\n    font-weight: 500;\n}\n.mat-form-field[_ngcontent-%COMP%]{\n    width: 100%;\n    background: rgba(64, 64, 64, 0.5);\n    border-radius: 10px;\n    padding: 0 20px;\n    margin-bottom: 5px;\n    color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 65%;\n}\n  .mat-form-field.mat-focused .mat-form-field-underline {\n    display: none;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{\n    color: #848282 !important;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: #848282;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #fff;\n}\n.submit_btn[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 10px;\n    width: 100%;\n    border: none;\n    color: #fff;\n    outline: none;\n    padding: 15px;\n    font-size: 16px;\n    float: left;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n.google_btn[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    color: #fff;\n    text-align: right;\n    float: right;\n    font-weight: 100;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-weight: 100;\n    color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHdDQUFnRTtJQUNoRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XG4gICAgYmFja2dyb3VuZDogIzA2MDYwNjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5zdmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7ICovXG59XG4uYXV0aF9pbWcgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmF1dGhfZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA1MHB4IDAgMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdXRoX2Zvcm0gaDN7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5hdXRoX2Zvcm0gaDZ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2NCwgNjQsIDY0LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdXRoX2Zvcm0gaW1ne1xuICAgIHdpZHRoOiA2NSU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICAgIGNvbG9yOiAjODQ4MjgyICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICM4NDgyODI7XG59XG4uYXV0aF9mb3JtIGg2IGF7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uc3VibWl0X2J0bntcbiAgICBiYWNrZ3JvdW5kOiAjNTQzOEZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmdvb2dsZV9idG57XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5hdXRoX2Zvcm0gcHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGNvbG9yOiAjZGVkZWRlO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "DeEF":
    /*!**********************************************************************!*\
      !*** ./src/app/allmodules/auth/auth-loader/auth-loader.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AuthLoaderComponent */

    /***/
    function DeEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLoaderComponent", function () {
        return AuthLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthLoaderComponent = /*#__PURE__*/function () {
        function AuthLoaderComponent() {
          _classCallCheck(this, AuthLoaderComponent);
        }

        _createClass(AuthLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthLoaderComponent;
      }();

      AuthLoaderComponent.ɵfac = function AuthLoaderComponent_Factory(t) {
        return new (t || AuthLoaderComponent)();
      };

      AuthLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLoaderComponent,
        selectors: [["app-auth-loader"]],
        decls: 2,
        vars: 0,
        consts: [["id", "pause", 1, "d-flex", "align-items-center", "justify-content-center"], ["id", "spinner"]],
        template: function AuthLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#spinner[_ngcontent-%COMP%] {\n\tanimation: frames 1s infinite linear;\n\tbackground: transparent;\n\tborder: 0.85vw solid #FFF;\n\tborder-radius: 100%;\n\tborder-top-color: #5438FF;\n\twidth: 8vw;\n\theight: 8vw;\n\topacity: .6;\n\tpadding: 0;\n\tposition: absolute;\n\tz-index: 999;\n}\n@keyframes frames {\n  0% {\n\ttransform: rotate(0deg);\n  }\n  100% {\n\ttransform: rotate(359deg);\n  }\n}\n#pause[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tbackground:\n\t\trgba(0, 0, 0, 0.66)\n\t\tno-repeat\n\t\t0 0;\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBRUMsb0NBQW9DO0NBQ3BDLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixVQUFVO0NBQ1YsV0FBVztDQUNYLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjtBQUNBO0VBQ0U7Q0FFRCx1QkFBdUI7RUFDdEI7RUFDQTtDQUVELHlCQUF5QjtFQUN4QjtBQUNGO0FBRUE7Q0FDQyxjQUFjO0NBQ2Q7OztLQUdJO0NBQ0osV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2YsU0FBUztDQUNULE9BQU87Q0FDUCxhQUFhO0FBQ2QiLCJmaWxlIjoiYXV0aC1sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3NwaW5uZXIge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZnJhbWVzIDFzIGluZmluaXRlIGxpbmVhcjtcblx0YW5pbWF0aW9uOiBmcmFtZXMgMXMgaW5maW5pdGUgbGluZWFyO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiAwLjg1dncgc29saWQgI0ZGRjtcblx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzU0MzhGRjtcblx0d2lkdGg6IDh2dztcblx0aGVpZ2h0OiA4dnc7XG5cdG9wYWNpdHk6IC42O1xuXHRwYWRkaW5nOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDk5OTtcbn1cbkBrZXlmcmFtZXMgZnJhbWVzIHtcbiAgMCUge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbiNwYXVzZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRiYWNrZ3JvdW5kOlxuXHRcdHJnYmEoMCwgMCwgMCwgMC42Nilcblx0XHRuby1yZXBlYXRcblx0XHQwIDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHR6LWluZGV4OiAxMDAwO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Foz6":
    /*!********************************!*\
      !*** ./src/app/interceptor.ts ***!
      \********************************/

    /*! exports provided: Interceptor */

    /***/
    function Foz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Interceptor", function () {
        return Interceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Interceptor = /*#__PURE__*/function () {
        function Interceptor(authService, route) {
          _classCallCheck(this, Interceptor);

          this.authService = authService;
          this.route = route;
        }

        _createClass(Interceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this8 = this;

            var method = '';
            var currentUrl = request.url.split('/');
            var currentAPI = currentUrl[currentUrl.length - 1];

            if (currentAPI == 'login' || currentAPI == 'sendVerificationtext' || currentAPI == 'getStyleOFwork' || currentAPI == 'getPremadeServices' || currentAPI == 'getBookServices' || currentAPI == 'verifyemail' || currentAPI == 'verifyOtp' || currentAPI == 'createInkzer' || currentAPI == 'setWorkingHour' || currentAPI == 'forgotPassword' || currentAPI == 'sendEmailVerification' || currentAPI == 'socialRegister' || currentAPI == 'getArtistData' || currentAPI == 'addbusinessDetails' || currentAPI == 'getSingleArtistDetails' || currentAPI == 'register' || currentAPI == 'allArtists' || currentAPI == 'getArtistServices' || currentAPI == 'setPassword' || currentAPI == 'resetPassword' || currentAPI == 'createSubscription' || currentAPI == 'socialLogin' || currentAPI == 'addAddress' || currentAPI == 'allSearchArtists' || currentAPI == 'business-hours' || currentAPI == 'getArtistPortfolio' || currentAPI == 'allSearchArtistsData' || currentAPI == 'getServiceDetails' || currentAPI == 'checkDomain' || currentAPI == 'getReviewAddInfo' || currentAPI == 'addRating') {
              method = 'login';
            }

            this.authService.setHeader(method);
            request = request.clone({
              headers: this.authService.headers
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                if (event.body) {
                  if (event.body.token) {
                    // if (event.body.user_type == 1) {
                    _this8.authService.setToken(event.body.token); // }

                  }
                } else {
                  console.log(event.body);
                }

                switch (event.body.status) {
                  case '412':
                    console.log('i am  getiing 412'); // this.authService.logout();

                    break;

                  case '401':
                    _this8.authService.logout(); // console.log('i am  getiing 409')


                    break;

                  default:
                    // console.log(event.body.status);
                    break;
                }
              }
            }, function (error) {
              if (error.status == 401) {
                _this8.authService.logout();
              } // console.warn(error)


              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                _this8.route.navigate(['/login']);
              }
            }));
          }
        }]);

        return Interceptor;
      }();

      Interceptor.ɵfac = function Interceptor_Factory(t) {
        return new (t || Interceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      Interceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: Interceptor,
        factory: Interceptor.ɵfac
      });
      /***/
    },

    /***/
    "H2ov":
    /*!***********************************************************************!*\
      !*** ./src/app/allmodules/pages/page-loader/page-loader.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PageLoaderComponent */

    /***/
    function H2ov(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function () {
        return PageLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageLoaderComponent = /*#__PURE__*/function () {
        function PageLoaderComponent() {
          _classCallCheck(this, PageLoaderComponent);
        }

        _createClass(PageLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageLoaderComponent;
      }();

      PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) {
        return new (t || PageLoaderComponent)();
      };

      PageLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageLoaderComponent,
        selectors: [["app-page-loader"]],
        decls: 2,
        vars: 0,
        consts: [["id", "pause", 1, "d-flex", "align-items-center", "justify-content-center"], ["id", "spinner"]],
        template: function PageLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#spinner[_ngcontent-%COMP%] {\n\tanimation: frames 1s infinite linear;\n\tbackground: transparent;\n\tborder: 0.85vw solid #FFF;\n\tborder-radius: 100%;\n\tborder-top-color: #5438FF;\n\twidth: 8vw;\n\theight: 8vw;\n\topacity: .6;\n\tpadding: 0;\n\tposition: absolute;\n\tz-index: 999;\n}\n@keyframes frames {\n  0% {\n\ttransform: rotate(0deg);\n  }\n  100% {\n\ttransform: rotate(359deg);\n  }\n}\n#pause[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tbackground:\n\t\trgba(0, 0, 0, 0.66)\n\t\tno-repeat\n\t\t0 0;\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBRUMsb0NBQW9DO0NBQ3BDLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixVQUFVO0NBQ1YsV0FBVztDQUNYLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjtBQUNBO0VBQ0U7Q0FFRCx1QkFBdUI7RUFDdEI7RUFDQTtDQUVELHlCQUF5QjtFQUN4QjtBQUNGO0FBRUE7Q0FDQyxjQUFjO0NBQ2Q7OztLQUdJO0NBQ0osV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2YsU0FBUztDQUNULE9BQU87Q0FDUCxhQUFhO0FBQ2QiLCJmaWxlIjoicGFnZS1sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3NwaW5uZXIge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZnJhbWVzIDFzIGluZmluaXRlIGxpbmVhcjtcblx0YW5pbWF0aW9uOiBmcmFtZXMgMXMgaW5maW5pdGUgbGluZWFyO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiAwLjg1dncgc29saWQgI0ZGRjtcblx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzU0MzhGRjtcblx0d2lkdGg6IDh2dztcblx0aGVpZ2h0OiA4dnc7XG5cdG9wYWNpdHk6IC42O1xuXHRwYWRkaW5nOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDk5OTtcbn1cbkBrZXlmcmFtZXMgZnJhbWVzIHtcbiAgMCUge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbiNwYXVzZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRiYWNrZ3JvdW5kOlxuXHRcdHJnYmEoMCwgMCwgMCwgMC42Nilcblx0XHRuby1yZXBlYXRcblx0XHQwIDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHR6LWluZGV4OiAxMDAwO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Htxs":
    /*!****************************************************************************!*\
      !*** ./src/app/allmodules/auth/verified-email/verified-email.component.ts ***!
      \****************************************************************************/

    /*! exports provided: VerifiedEmailComponent */

    /***/
    function Htxs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifiedEmailComponent", function () {
        return VerifiedEmailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var VerifiedEmailComponent = /*#__PURE__*/function () {
        function VerifiedEmailComponent(clientService, router, formBuilder, actRoute) {
          _classCallCheck(this, VerifiedEmailComponent);

          this.clientService = clientService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.actRoute = actRoute;
          this.form_err = "";
          this.form_Success = "";
        }

        _createClass(VerifiedEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.emailVerifyForm = this.formBuilder.group({
              'token': [this.actRoute.snapshot.params.token, []]
            });
            this.verifyEmail();
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "verifyEmail",
          value: function verifyEmail() {
            var _this9 = this;

            this.clientService.verifyEmail(this.emailVerifyForm.value).subscribe(function (res) {
              _this9.form_Success = res.success;
            }, function (err) {
              if (err.error) {
                _this9.form_err = err.error;
              }
            });
          }
        }]);

        return VerifiedEmailComponent;
      }();

      VerifiedEmailComponent.ɵfac = function VerifiedEmailComponent_Factory(t) {
        return new (t || VerifiedEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      VerifiedEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerifiedEmailComponent,
        selectors: [["app-verified-email"]],
        decls: 9,
        vars: 1,
        consts: [[1, "delete_dialog"], ["src", "assets/images/logo.svg", "width", "90"], [1, "delete_txt"], [3, "click"]],
        template: function VerifiedEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifiedEmailComponent_Template_button_click_7_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please login to Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form_Success);
          }
        },
        styles: [".delete_dialog[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0;\n    min-height: 100%;\n}\n.delete_dialog[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    text-align: center;\n    padding: 50px 0;\n}\n.delete_txt[_ngcontent-%COMP%]{\n   width: 50%;\n   margin: 200px auto;\n}\n.delete_txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 30px;\n    font-weight: 500;\n    padding-bottom: 20px;\n}\n.delete_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #E0E0E0;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 27px;\n}\n.delete_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 8px;\n    width: 50%;\n    border: none;\n    color: #fff;\n    margin: 20px auto;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 13px 0 15px;\n    text-align: center;\n}\nbody[_ngcontent-%COMP%]{\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWVkLWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQWdFO0lBQ2hFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7R0FDRyxVQUFVO0dBQ1Ysa0JBQWtCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoidmVyaWZpZWQtZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGVfZGlhbG9ne1xuICAgIGJhY2tncm91bmQ6ICMwNjA2MDY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uZGVsZXRlX2RpYWxvZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweCAwO1xufVxuLmRlbGV0ZV90eHR7XG4gICB3aWR0aDogNTAlO1xuICAgbWFyZ2luOiAyMDBweCBhdXRvO1xufVxuLmRlbGV0ZV90eHQgaDN7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZGVsZXRlX3R4dCBwe1xuICAgIGNvbG9yOiAjRTBFMEUwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuLmRlbGV0ZV90eHQgYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6ICM1NDM4RkY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxM3B4IDAgMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Ig3N":
    /*!*******************************************!*\
      !*** ./src/app/service/client.service.ts ***!
      \*******************************************/

    /*! exports provided: ClientService */

    /***/
    function Ig3N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientService", function () {
        return ClientService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ClientService = /*#__PURE__*/function () {
        function ClientService(http, route) {
          _classCallCheck(this, ClientService);

          this.http = http;
          this.route = route;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          this.body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url;
          this.base_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
          this.secretKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].secretKey;
        }

        _createClass(ClientService, [{
          key: "isLoggeddIn",
          value: function isLoggeddIn() {
            if (this.getToken()) {
              return true;
            }

            return false;
          } // loginUser(data: any) {
          //   let param = new HttpParams();
          //   param = data;
          //   return this.http.post(this.api_url+'api/admin/login', param)
          // }

        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('expiry');
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('profile_img');
            localStorage.removeItem('user_type'); // localStorage.removeItem('url');
            // localStorage.removeItem('rating');

            this.route.navigate(['/login']);
            return this.http.get(this.api_url + 'api/client/logout');
          }
        }, {
          key: "forcelogout",
          value: function forcelogout() {
            localStorage.removeItem('token');
            localStorage.removeItem('rememberMe');
            this.route.navigate(['/login']);
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            if (token) {
              localStorage.setItem('token', token);
              this.setRemberToken(token);
            }
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var token = localStorage.getItem('token');

            if (token) {
              //return 'Bearer '+token;
              return 'Bearer ' + token;
            }

            this.route.navigate(['/login']);
            return;
          }
        }, {
          key: "setHeader",
          value: function setHeader() {
            var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (method == '') {
              this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: this.getToken()
              }); // console.log('header set', this.headers)
            } else {
              this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                secretKey: this.secretKey,
                'Access-Control-Allow-Origin': '*'
              });
            }
          }
        }, {
          key: "setRemberToken",
          value: function setRemberToken(token) {
            var rememberMe = localStorage.getItem('rememberMe');

            if (rememberMe) {
              localStorage.setItem('rememberMe', token);
            }
          } // register

        }, {
          key: "registerClient",
          value: function registerClient(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/register', param);
          }
        }, {
          key: "sendVerifyEmail",
          value: function sendVerifyEmail(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/sendEmailVerification', param);
          }
        }, {
          key: "sendOtp",
          value: function sendOtp(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/sendVerificationtext', param);
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/verifyOtp', param);
          }
        }, {
          key: "verifyEmail",
          value: function verifyEmail(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/verifyemail', param);
          }
        }, {
          key: "verifyEmailartist",
          value: function verifyEmailartist(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/admin/verifyemail', param);
          } //login

        }, {
          key: "clientLogin",
          value: function clientLogin(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/login', param);
          }
        }, {
          key: "SocialLogin",
          value: function SocialLogin(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/socialLogin', param);
          }
        }, {
          key: "ArtistSocialRegister",
          value: function ArtistSocialRegister(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/socialRegister', param);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/forgotPassword', param);
          }
        }, {
          key: "setPassword",
          value: function setPassword(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/setPassword', param);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/resetPassword', param);
          } //Profile

        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.http.get(this.api_url + 'api/client/profile');
          } //checkLogin

        }, {
          key: "checkLogin",
          value: function checkLogin() {
            return this.http.get(this.api_url + 'api/client/checkLoginClient');
          }
        }, {
          key: "editProfile",
          value: function editProfile(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/editProfile', param);
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/changePassword', param);
          }
        }, {
          key: "addCard",
          value: function addCard(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/addCard', param);
          }
        }, {
          key: "deleteCard",
          value: function deleteCard(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/removeCard', param);
          } //chat messaging

        }, {
          key: "getMessages",
          value: function getMessages() {
            return this.http.get(this.api_url + 'api/chat/getMessages');
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return this.http.get(this.api_url + 'api/chat/getUserId');
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/chat/sendMessage', param);
          }
        }, {
          key: "getconversation",
          value: function getconversation(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/chat/getconversation', param);
          }
        }, {
          key: "startMessaging",
          value: function startMessaging(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/chat/startMessaging', param);
          }
        }, {
          key: "getUnreadMsg",
          value: function getUnreadMsg() {
            return this.http.get(this.api_url + 'api/client/getUnreadMsg');
          }
        }]);

        return ClientService;
      }();

      ClientService.ɵfac = function ClientService_Factory(t) {
        return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ClientService,
        factory: ClientService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "OieM":
    /*!**********************************************************************************!*\
      !*** ./src/app/allmodules/auth/verification-code/verification-code.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: VerificationCodeComponent */

    /***/
    function OieM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationCodeComponent", function () {
        return VerificationCodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      var _c0 = ["ngOtpInput"];

      function VerificationCodeComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      function VerificationCodeComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errMsg, "");
        }
      }

      function VerificationCodeComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.formErr, "");
        }
      }

      var VerificationCodeComponent = /*#__PURE__*/function () {
        function VerificationCodeComponent(clientService, router, formBuilder) {
          _classCallCheck(this, VerificationCodeComponent);

          this.clientService = clientService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.otp = '';
          this.showOtpComponent = true;
          this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
              width: '11%',
              background: 'rgba(64, 64, 64, 0.5)',
              'border-radius': '8px',
              padding: '30px 10px',
              color: '#fff',
              'margin-bottom': '5px',
              'margin-right': '15px',
              border: 'none',
              'font-size': '22px',
              outline: 'none'
            }
          };
          this.formErr = '';
          this.OTP = '';
          this.errMsg = '';
          this.isLoad = false;
        }

        _createClass(VerificationCodeComponent, [{
          key: "onOtpChange",
          value: function onOtpChange(otp) {
            this.otp = otp;
          }
        }, {
          key: "setVal",
          value: function setVal(val) {
            this.ngOtpInput.setValue(val);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phonVerifyForm = this.formBuilder.group({
              otp1: ['', []]
            });
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp() {
            var _this10 = this;

            this.errMsg = '';
            this.formErr = '';

            if (this.otp == '') {
              this.errMsg = 'Please enter otp here';
              return;
            }

            if (this.otp.length < 6) {
              this.errMsg = 'Please enter Valid otp';
              return;
            }

            var formData = new FormData();
            formData.append('otp', this.otp); // if is_login is true inlocal storage then login with social otherwise normal login

            if (localStorage.getItem('is_login') == 'true') {
              formData.append('is_login', true);
            }

            this.formErr = '';
            this.isLoad = true;
            this.clientService.verifyOtp(formData).subscribe(function (res) {
              _this10.isLoad = false;
              localStorage.removeItem('is_login');
              localStorage.removeItem('email');
              localStorage.removeItem('client_user_id');
              var now = new Date();
              var expiry = now.getTime() + 172800000; //Add 2 day

              localStorage.setItem('expiry', expiry);
              localStorage.setItem('name', res.name);
              localStorage.setItem('status', res.status);
              localStorage.setItem('profile_img', res.profile_img);
              localStorage.setItem('user_type', res.user_type);

              _this10.router.navigate(['/pages/Inkzers-list']);
            }, function (err) {
              _this10.isLoad = false;

              if (err.error) {
                _this10.formErr = err.error.error;
              }
            });
          }
        }]);

        return VerificationCodeComponent;
      }();

      VerificationCodeComponent.ɵfac = function VerificationCodeComponent_Factory(t) {
        return new (t || VerificationCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      VerificationCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerificationCodeComponent,
        selectors: [["app-verification-code"]],
        viewQuery: function VerificationCodeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
          }
        },
        decls: 23,
        vars: 4,
        consts: [[4, "ngIf"], [1, "auth"], [1, "container"], [1, "text-center"], ["routerLink", "", "src", "assets/images/logo.svg", "alt", "Logo Image", 1, "pointer"], [1, "row"], [1, "col-md-6"], [1, "auth_form"], [1, "mb-4"], [3, "config", "onInputChange"], ["class", "text-danger float-left errSpan", 4, "ngIf"], [1, "submit_btn", 3, "click"], [1, "auth_img"], ["src", "assets/images/auth.png", "alt", ""], [1, "text-danger", "float-left", "errSpan"]],
        template: function VerificationCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VerificationCodeComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We sent a code to your phone for verification. Please enter the code below. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ng-otp-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function VerificationCodeComponent_Template_ng_otp_input_onInputChange_15_listener($event) {
              return ctx.onOtpChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VerificationCodeComponent_span_16_Template, 2, 1, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VerificationCodeComponent_span_17_Template, 2, 1, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationCodeComponent_Template_button_click_18_listener() {
              return ctx.verifyOtp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErr);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ng_otp_input__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_6__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0;\n    min-height: 100vh;\n    \n}\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.auth_form[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    padding: 50px 0 30px;\n    color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    \n    \n    font-size: 35px;\n    font-weight: 700;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    font-size: 15px;\n    font-weight: 700;\n    margin: 11px 0;\n}\n.mat-form-field[_ngcontent-%COMP%]{\n    width: 11%;\n    background: rgba(64, 64, 64, 0.5);\n    border-radius: 8px;\n    padding: 0 10px;\n    margin-bottom: 5px;\n    color: #fff;\n    margin-right: 15px;\n}\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 65%;\n}\n  .mat-form-field.mat-focused .mat-form-field-underline {\n    display: none;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{\n    color: #848282 !important;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: #848282;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #fff;\n}\n.submit_btn[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 10px;\n    width: 82%;\n    border: none;\n    color: #fff;\n    outline: none;\n    padding: 15px;\n    font-size: 16px;\n    float: left;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-weight: 100;\n    color: #dedede;\n    padding-bottom: 30px;\n    font-size: 16px;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi1jb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQWdFO0lBQ2hFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0FBQ2IiLCJmaWxlIjoidmVyaWZpY2F0aW9uLWNvZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoe1xuICAgIGJhY2tncm91bmQ6ICMwNjA2MDY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cbi5hdXRoX2ltZyBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoX2Zvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNTBweCAwIDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXV0aF9mb3JtIGgze1xuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXG4gICAgLyogZm9udC1zaXplOiAzMHB4OyAqL1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmF1dGhfZm9ybSBoNntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDExcHggMDtcbn1cbi5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTElO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uYXV0aF9mb3JtIGltZ3tcbiAgICB3aWR0aDogNjUlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgICBjb2xvcjogIzg0ODI4MiAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjODQ4MjgyO1xufVxuLmF1dGhfZm9ybSBoNiBhe1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnN1Ym1pdF9idG57XG4gICAgYmFja2dyb3VuZDogIzU0MzhGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA4MiU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmF1dGhfZm9ybSBwe1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgY29sb3I6ICNkZWRlZGU7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "PNJj":
    /*!**************************************************************************!*\
      !*** ./src/app/allmodules/auth/vertify-email/vertify-email.component.ts ***!
      \**************************************************************************/

    /*! exports provided: VertifyEmailComponent */

    /***/
    function PNJj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertifyEmailComponent", function () {
        return VertifyEmailComponent;
      });
      /* harmony import */


      var _success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../success-auth/success-auth.component */
      "SvWm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      function VertifyEmailComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      var VertifyEmailComponent = /*#__PURE__*/function () {
        function VertifyEmailComponent(router, dialog, clientService) {
          _classCallCheck(this, VertifyEmailComponent);

          this.router = router;
          this.dialog = dialog;
          this.clientService = clientService;
          this.isLoad = false;
          this.email = localStorage.getItem('email');
        }

        _createClass(VertifyEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!localStorage.getItem('client_user_id')) {
              this.router.navigate(['/login']);
            }
          }
        }, {
          key: "phoneVerify",
          value: function phoneVerify() {
            this.router.navigate(['/phone-verify']);
          }
        }, {
          key: "SendVerifyEmail",
          value: function SendVerifyEmail() {
            var _this11 = this;

            this.isLoad = true;
            var formData = new FormData();
            formData.append('email', localStorage.getItem('email'));
            this.clientService.sendVerifyEmail(formData).subscribe(function (res) {
              localStorage.removeItem('email');
              localStorage.removeItem('client_user_id');
              localStorage.removeItem('phone');

              _this11.successDialog();

              _this11.router.navigate(['/login']);
            }, function (err) {
              _this11.isLoad = false;
              console.warn(err);
            });
          }
        }, {
          key: "successDialog",
          value: function successDialog() {
            var dialogRef = this.dialog.open(_success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_0__["SuccessAuthComponent"], {
              width: '460px',
              data: {
                msg: 'Email was successfully sent. Please check your email and login to continue'
              }
            });
          }
        }]);

        return VertifyEmailComponent;
      }();

      VertifyEmailComponent.ɵfac = function VertifyEmailComponent_Factory(t) {
        return new (t || VertifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]));
      };

      VertifyEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VertifyEmailComponent,
        selectors: [["app-vertify-email"]],
        decls: 20,
        vars: 3,
        consts: [[4, "ngIf"], [1, "auth", "text-center"], [1, "container"], ["src", "assets/images/logo.svg", "alt", "Logo Image", "width", "90"], [1, "working_dialog"], [1, "working_txt"], ["src", "assets/images/verify.png"], ["name", "emailVerifyForm"], [1, "mb-3"], [1, "text-left"], [3, "floatLabel"], ["matInput", "", "placeholder", "Email", "readonly", "", 3, "value"], ["matPrefix", "", "src", "assets/images/mail.svg"], ["type", "button", 3, "click"], ["routerLink", "/phone-verify"]],
        template: function VertifyEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VertifyEmailComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "VERIFY YOUR EMAIL");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VertifyEmailComponent_Template_button_click_16_listener() {
              return ctx.SendVerifyEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Send Email Verification ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Send Text Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.email);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_9__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  background: #060606;\n  background-image: url('background.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  float: left;\n  padding: 50px 0 20px;\n  min-height: 100%;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: #ffffffe8;\n  font-size: 30px;\n  margin-top: 0;\n  margin-bottom: 22px;\n  font-weight: 700;\n}\n\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth_form[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 25px 30px 30px;\n  color: #fff;\n  \n}\n\n.auth[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-bottom: 5px;\n  font-size: 30px;\n  color: #fff;\n  float: left;\n  width: 100%;\n  padding-top: 30px;\n}\n\n.auth[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  width: 80%;\n  margin: 0 auto;\n  padding-bottom: 25px;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.working_dialog[_ngcontent-%COMP%] {\n  width: 65%;\n  padding: 35px;\n  text-align: center;\n  background: #1e1e1e;\n  box-shadow: 0px 0px 100px #000000;\n  border-radius: 10px;\n  margin: 20px auto;\n}\n\n.working_txt[_ngcontent-%COMP%] {\n  width: 72%;\n  margin: 0px auto;\n  padding-bottom: 90px;\n}\n\n.working_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #5438ff;\n  border-radius: 8px;\n  width: 100%;\n  border: none;\n  color: #fff;\n  padding: 12px;\n  float: left;\n  margin-top: 5px;\n}\n\n.working_txt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.working_txt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 0;\n}\n\n.working_txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  padding-top: 10px;\n  width: 100%;\n  float: left;\n}\n\n.working_txt[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(64, 64, 64, 0.5);\n  border-radius: 10px;\n  padding: 0 20px 0px;\n  margin-bottom: 5px;\n  color: #fff;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-underline {\n  display: none;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282 !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282;\n}\n\n.working_txt[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpZnktZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix1Q0FBK0Q7RUFDL0Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoidmVydGlmeS1lbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgge1xuICBiYWNrZ3JvdW5kOiAjMDYwNjA2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNTBweCAwIDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmg0IHtcbiAgY29sb3I6ICNmZmZmZmZlODtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXV0aF9pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoX2Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHggMzBweCAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLyogYmFja2dyb3VuZDogIzFFMUUxRTsgKi9cbn1cblxuLmF1dGggaDMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uYXV0aCBwIHtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLmF1dGhfZm9ybSBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLndvcmtpbmdfZGlhbG9nIHtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ud29ya2luZ190eHQge1xuICB3aWR0aDogNzIlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbn1cblxuLndvcmtpbmdfdHh0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM1NDM4ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi53b3JraW5nX3R4dCBoMiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ud29ya2luZ190eHQgaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLndvcmtpbmdfdHh0IGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ud29ya2luZ190eHQgaDYge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAyMHB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjODQ4MjgyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICM4NDgyODI7XG59XG5cbi53b3JraW5nX3R4dCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "SvWm":
    /*!************************************************************************!*\
      !*** ./src/app/allmodules/auth/success-auth/success-auth.component.ts ***!
      \************************************************************************/

    /*! exports provided: SuccessAuthComponent */

    /***/
    function SvWm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessAuthComponent", function () {
        return SuccessAuthComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SuccessAuthComponent = /*#__PURE__*/function () {
        function SuccessAuthComponent(dialog, dialogRef, data) {
          _classCallCheck(this, SuccessAuthComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.data = data;
          this.message = "";
          this.message = data.msg;
        }

        _createClass(SuccessAuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "okClick",
          value: function okClick() {
            this.dialogRef.close();
          }
        }]);

        return SuccessAuthComponent;
      }();

      SuccessAuthComponent.ɵfac = function SuccessAuthComponent_Factory(t) {
        return new (t || SuccessAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8));
      };

      SuccessAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SuccessAuthComponent,
        selectors: [["app-success-auth"]],
        decls: 11,
        vars: 1,
        consts: [[1, "delete_dialog"], ["type", "button", "mat-icon-button", "", "mat-dialog-close", "", 1, "close_btn"], [1, "delete_txt"], ["type", "button", 3, "click"]],
        template: function SuccessAuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuccessAuthComponent_Template_button_click_9_listener() {
              return ctx.okClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".delete_dialog[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n}\n.close_btn[_ngcontent-%COMP%]{\n    float: right;\n    color: #FFAC00;\n}\n.delete_txt[_ngcontent-%COMP%]{\n    width: 100%;\n    padding: 0 15px 15px;\n    float: left;\n    text-align: center;\n}\n.delete_txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 25px;\n}\n.delete_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #E0E0E0;\n    font-weight: 300;\n}\n.delete_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background: #5438FF;\n    \n    border-radius: 8px;\n    width: 100%;\n    border: none;\n    color: #fff;\n    padding: 12px;\n    float: left;\n    font-size: 20px;\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzdWNjZXNzLWF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGVfZGlhbG9ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNsb3NlX2J0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICNGRkFDMDA7XG59XG4uZGVsZXRlX3R4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVsZXRlX3R4dCBoM3tcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uZGVsZXRlX3R4dCBwe1xuICAgIGNvbG9yOiAjRTBFMEUwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGVsZXRlX3R4dCBidXR0b257XG4gICAgYmFja2dyb3VuZDogIzU0MzhGRjtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDRDNjAwOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.title = 'Inkzup';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "TKYk":
    /*!****************************************************************!*\
      !*** ./src/app/allmodules/auth/register/register.component.ts ***!
      \****************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function TKYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      function RegisterComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      function RegisterComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.name_Err, "");
        }
      }

      function RegisterComponent_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.emailErr, "");
        }
      }

      function RegisterComponent_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.phone_Err, "");
        }
      }

      function RegisterComponent_span_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.age_err, "");
        }
      }

      function RegisterComponent_span_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.term_err, "");
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, router, clientService, socialService) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.clientService = clientService;
          this.socialService = socialService;
          this.user = new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialUser"]();
          this.formErr = '';
          this.name_Err = '';
          this.emailErr = '';
          this.phone_Err = '';
          this.password_Err = '';
          this.confirm_password_Err = '';
          this.age_err = '';
          this.term_err = '';
          this.condition_err = '';
          this.age_term_condition_err = '';
          this.isLoad = false; // SocialEmailErr = '';

          this.isReadOnly1 = true;
          this.hide = true;
          this.hide1 = true;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              name: ['', []],
              email: ['', []],
              phone: ['', []],
              password: ['', []],
              confirm_password: ['', []],
              age: ['', []],
              term: ['', []]
            });
          }
        }, {
          key: "register",
          value: function register() {
            var _this12 = this;

            this.formErr = '';
            this.name_Err = '';
            this.emailErr = '';
            this.phone_Err = '';
            this.password_Err = '';
            this.confirm_password_Err = '';
            this.age_err = '';
            this.term_err = '';
            var phone = '';
            var regExpr = /[^0-9]/g;

            if (this.registerForm.value.phone != '') {
              phone = this.registerForm.value.phone.replace(regExpr, '');
            }

            if (this.registerForm.value.age) {
              this.registerForm.patchValue({
                age: true
              });
            } else {
              this.registerForm.patchValue({
                age: ''
              });
            }

            if (this.registerForm.value.term) {
              this.registerForm.patchValue({
                term: true
              });
            } else {
              this.registerForm.patchValue({
                term: ''
              });
            }

            var formData = new FormData();
            formData.append('name', this.registerForm.value.name); // formData.append(
            //   'confirm_password',
            //   this.registerForm.value.confirm_password
            // );

            formData.append('email', this.registerForm.value.email);
            formData.append('phone', phone); // formData.append('password', this.registerForm.value.password);

            formData.append('age', this.registerForm.value.age);
            formData.append('term', this.registerForm.value.term);
            this.isLoad = true;
            this.clientService.registerClient(formData).subscribe(function (res) {
              _this12.isLoad = false;

              _this12.registerForm.reset();

              console.log('Register Response!!!', res);

              if (res.status == 4) {
                // comment when twilio issue resolved
                // if(res.status == 1){
                localStorage.removeItem('phone'); //redirect to next registration process

                localStorage.setItem('client_login_type', res.signup_type);
                localStorage.setItem('client_user_id', res.id);
                localStorage.setItem('email', res.email);
                localStorage.setItem('phone', res.phone); // this.router.navigate(['/phone-verify']);

                _this12.router.navigate(['/verify-code']); // Remove this code after twilio issue resolved
                // const now = new Date();
                // var expiry: any = now.getTime() + 172800000; //Add 2 day
                // localStorage.setItem('expiry', expiry);
                // localStorage.setItem('name', res.name);
                // localStorage.setItem('status', res.status);
                // localStorage.setItem('profile_img', res.profile_img);
                // localStorage.setItem('user_type', res.user_type);
                //  this.router.navigate(['/pages/Inkzers-list']);

              } //

            }, function (err) {
              _this12.isLoad = false;

              if (err.error.name) {
                _this12.name_Err = err.error.name[0];
              }

              if (err.error.email) {
                _this12.emailErr = err.error.email[0];
              }

              if (err.error.password) {
                _this12.password_Err = err.error.password[0];
              }

              if (err.error.confirm_password) {
                _this12.confirm_password_Err = err.error.confirm_password[0];
              }

              if (err.error.phone) {
                _this12.phone_Err = err.error.phone[0];
              }

              if (err.error.age) {
                _this12.age_err = err.error.age[0];
              }

              if (err.error.term) {
                _this12.term_err = err.error.term[0];
              }
            });
          }
        }, {
          key: "signinWithGoogle",
          value: function signinWithGoogle() {
            var _this13 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID).then(function (user) {
              _this13.isLoad = true; // this.SocialEmailErr = '';

              _this13.user = user;
              var formData = new FormData();
              formData.append('id', user.id);
              formData.append('email', user.email);
              formData.append('name', user.name);
              formData.append('photoUrl', user.photoUrl);
              formData.append('provider', user.provider);

              _this13.clientService.SocialLogin(formData).subscribe(function (res) {
                if (res) {
                  localStorage.setItem('email', user.email);
                  localStorage.removeItem('phone');

                  if (res.status == 4) {
                    localStorage.setItem('client_user_id', res.id);
                    localStorage.setItem('client_login_type', res.signup_type);

                    _this13.router.navigate(['/phone-verify']);

                    return;
                  }

                  var now = new Date();
                  var expiry = now.getTime() + 172800000; //Add 2 day

                  localStorage.setItem('expiry', expiry);
                  localStorage.setItem('phone', res.phone);
                  localStorage.setItem('name', res.name);
                  localStorage.setItem('profile_img', res.profile_img);
                  localStorage.setItem('user_type', res.user_type);
                  localStorage.setItem('client_id', res.id); // this.router.navigate(['pages/get-inkzed']);

                  _this13.router.navigate(['pages/Inkzers-list']);

                  _this13.isLoad = false;
                }
              }, function (err) {
                _this13.isLoad = false;

                if (err.error) {
                  if (err.error.email) {// this.SocialEmailErr = err.error.email[0];
                  }
                }
              });
            });
          }
        }, {
          key: "signinWithFacebook",
          value: function signinWithFacebook() {
            var _this14 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID).then(function (user) {
              console.log('clent register by facebook--------------------------', user);
              _this14.isLoad = true; // this.SocialEmailErr = '';

              _this14.user = user;
              var formData = new FormData();
              formData.append('id', user.id);
              formData.append('email', user.email);
              formData.append('name', user.name);
              formData.append('photoUrl', user.photoUrl);
              formData.append('provider', user.provider);

              _this14.clientService.SocialLogin(formData).subscribe(function (res) {
                if (res) {
                  if (res.status == 4) {
                    localStorage.setItem('client_user_id', res.id);
                    localStorage.setItem('client_login_type', res.signup_type);

                    _this14.router.navigate(['/phone-verify']);

                    return;
                  }

                  var now = new Date();
                  var expiry = now.getTime() + 172800000; //Add 2 day

                  localStorage.setItem('expiry', expiry);
                  localStorage.setItem('phone', res.phone);
                  localStorage.setItem('name', res.name);
                  localStorage.setItem('profile_img', res.profile_img);
                  localStorage.setItem('user_type', res.user_type);
                  localStorage.setItem('client_id', res.id); // this.router.navigate(['pages/get-inkzed']);

                  _this14.router.navigate(['pages/Inkzers-list']);

                  _this14.isLoad = false;
                }
              }, function (err) {
                _this14.isLoad = false;

                if (err.error) {
                  if (err.error.email) {// this.SocialEmailErr = err.error.email[0];
                  }
                }
              });
            });
          }
        }, {
          key: "phoneFormat",
          value: function phoneFormat(event, backspace) {
            var newVal = event.target.value.replace(/\D/g, '');

            if (backspace && newVal.length <= 3) {
              newVal = newVal.substring(0, newVal.length - 1);
            }

            if (newVal.length === 0) {
              newVal = '';
            } else if (newVal.length <= 3) {
              newVal = newVal.replace(/^(\d{0,3})/, '($1)');
            } else if (newVal.length <= 6) {
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1)-$2');
            } else if (newVal.length <= 10) {
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
            } else {
              newVal = newVal.substring(0, 10);
              newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
            }

            event.target.value = newVal.trim();
          }
        }, {
          key: "MakephoneFormat",
          value: function MakephoneFormat(newVal) {
            if (newVal != '') {
              var regex = new RegExp(/(\d{3})(\d{3})(\d{4})/);
              var match = newVal.match(regex);

              if (match) {
                newVal = "(".concat(match[1], ")-").concat(match[2], "-").concat(match[3]);
              }

              return newVal;
            } else {
              return '';
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 61,
        vars: 11,
        consts: [[4, "ngIf"], [1, "auth"], [1, "container"], [1, "text-center"], ["routerLink", "", "src", "assets/images/logo.svg", "alt", "Logo Image", 1, "pointer"], [1, "row"], [1, "col-md-5"], [1, "auth_form"], ["name", "registerForm", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [3, "floatLabel"], ["matInput", "", "placeholder", "Full Name", "formControlName", "name", "autocomplete", "off"], ["matPrefix", "", "src", "assets/images/user.png"], ["class", "text-danger float-left errSpan", 4, "ngIf"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "type", "email", "autocomplete", "off", "onfocus", "this.removeAttribute('readonly');"], ["matPrefix", "", "src", "assets/images/email.png"], ["maxlength", "14", "matInput", "", "placeholder", "Phone Number", "formControlName", "phone", "autocomplete", "off", 3, "keyup"], ["matPrefix", "", "src", "assets/images/phone.png"], [1, "mt-3"], ["formControlName", "age"], ["formControlName", "term"], ["routerLink", "/pages/terms-conditions", "target", "_blank", 1, "termCondition"], ["target", "_blank", "routerLink", "/pages/privacy-policy", 1, "termCondition"], ["type", "submit", 1, "submit_btn"], [1, "foot"], ["routerLink", "/login"], [1, "col-md-1"], [1, "col-md-6"], [1, "auth_img", "mt-5"], ["src", "assets/images/register.png", "alt", ""], [1, "text-danger", "float-left", "errSpan"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RegisterComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Create An Inkzup");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Customer Account ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_12_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_span_19_Template, 2, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RegisterComponent_span_26_Template, 2, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Phone Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_31_listener($event) {
              return ctx.phoneFormat($event, $event.keyCode == 8 ? true : false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterComponent_span_33_Template, 2, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-checkbox", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "The website requires you to be 18+ or older");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RegisterComponent_span_37_Template, 2, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-checkbox", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Accept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Terms of Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, RegisterComponent_span_45_Template, 2, 1, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Book An Appointment Hassle-Free With Our Expertise Tattoo Artists. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name_Err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("readonly", ctx.isReadOnly1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailErr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phone_Err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.age_err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.term_err);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_9__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  background: #060606;\n  background-image: url('background.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  float: left;\n  padding: 50px 0 20px;\n  min-height: 100%;\n}\n\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth_form[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 50px 0 30px;\n  color: #fff;\n}\n\n.auth_form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 30px;\n  font-size: 35px;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(64, 64, 64, 0.5);\n  border-radius: 10px;\n  padding: 0 20px;\n  margin-bottom: 5px;\n  color: #fff;\n}\n\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-underline {\n  display: none;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282 !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.submit_btn[_ngcontent-%COMP%] {\n  background: #5438ff;\n  border-radius: 10px;\n  width: 100%;\n  border: none;\n  color: #fff;\n  outline: none;\n  padding: 15px;\n  font-size: 16px;\n  float: left;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  transition: transform .2s cubic-bezier(.2,0,.4,1);\n}\n\n.or[_ngcontent-%COMP%] {\n  color: #dedede;\n  font-weight: 100;\n}\n\n.google_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  margin-right: 10px;\n}\n\n.google_btn[_ngcontent-%COMP%] {\n  border: 2px solid rgba(64, 64, 64, 0.6);\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 46%;\n  margin-right: 17px;\n  padding: 5px;\n  margin-top: 15px;\n  width: 100%;\n  \n  transition: transform .2s cubic-bezier(.2,0,.4,1);\n  }\n\n.foot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #5438ff;\n  text-decoration: underline;\n}\n\n.foot[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #dedede;\n  width: 100%;\n  float: left;\n  padding-top: 30px;\n}\n\n.errSpan[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n}\n\n.auth_img[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 45px;\n  color: #ffac00;\n  text-align: center;\n  padding: 20px 0px 0 0px;\n  width: 100%;\n  float: left;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.termCondition[_ngcontent-%COMP%] {\n  color: #ffac00 !important;\n  \n  background-color: transparent !important;\n}\n\n@media screen and (max-width: 767px) {\n  .auth_img[_ngcontent-%COMP%]{\n    display:none;\n  }\n}\n\n.google_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.submit_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsdUNBQStEO0VBQy9ELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYOytCQUM2QjtFQUM3QixpREFBaUQ7RUFDakQ7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0Qyx3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUdBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XG4gIGJhY2tncm91bmQ6ICMwNjA2MDY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1MHB4IDAgMjBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmF1dGhfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXV0aF9mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1MHB4IDAgMzBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hdXRoX2Zvcm0gaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmF1dGhfZm9ybSBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXV0aF9mb3JtIGltZyB7XG4gIHdpZHRoOiA2NSU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzg0ODI4MiAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjODQ4MjgyO1xufVxuXG4uYXV0aF9mb3JtIGg2IGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnN1Ym1pdF9idG4ge1xuICBiYWNrZ3JvdW5kOiAjNTQzOGZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoLjIsMCwuNCwxKTtcbn1cblxuLm9yIHtcbiAgY29sb3I6ICNkZWRlZGU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5nb29nbGVfYnRuIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5nb29nbGVfYnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg2NCwgNjQsIDY0LCAwLjYpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuMTZzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyOyAqL1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllciguMiwwLC40LDEpO1xuICB9XG5cbi5mb290IHAgYSB7XG4gIGNvbG9yOiAjNTQzOGZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvb3Qge1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogI2RlZGVkZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmVyclNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5hdXRoX2ltZyBoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiAjZmZhYzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDAgMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRlcm1Db25kaXRpb24ge1xuICBjb2xvcjogI2ZmYWMwMCAhaW1wb3J0YW50O1xuICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hdXRoX2ltZ3tcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbn1cblxuXG4uZ29vZ2xlX2J0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cbi5zdWJtaXRfYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "TwQ9":
    /*!******************************************************************************!*\
      !*** ./src/app/allmodules/auth/artist-verified/artist-verified.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ArtistVerifiedComponent */

    /***/
    function TwQ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtistVerifiedComponent", function () {
        return ArtistVerifiedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ArtistVerifiedComponent = /*#__PURE__*/function () {
        function ArtistVerifiedComponent(clientService, router, formBuilder, actRoute) {
          _classCallCheck(this, ArtistVerifiedComponent);

          this.clientService = clientService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.actRoute = actRoute;
          this.form_err = "";
          this.form_Success = "";
        }

        _createClass(ArtistVerifiedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.emailVerifyForm = this.formBuilder.group({
              'token': [this.actRoute.snapshot.params.token, []]
            });
            this.verifyEmail();
          }
        }, {
          key: "login",
          value: function login() {
            // this.router.navigate(['/login']);
            window.location.href = "https://inkzup.com/Inkzer/";
          }
        }, {
          key: "verifyEmail",
          value: function verifyEmail() {
            var _this15 = this;

            this.clientService.verifyEmailartist(this.emailVerifyForm.value).subscribe(function (res) {
              _this15.form_Success = res.success;
            }, function (err) {
              if (err.error) {
                _this15.form_err = err.error;
              }
            });
          }
        }]);

        return ArtistVerifiedComponent;
      }();

      ArtistVerifiedComponent.ɵfac = function ArtistVerifiedComponent_Factory(t) {
        return new (t || ArtistVerifiedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ArtistVerifiedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArtistVerifiedComponent,
        selectors: [["app-artist-verified"]],
        decls: 9,
        vars: 1,
        consts: [[1, "delete_dialog"], ["src", "assets/images/logo.svg", "width", "90"], [1, "delete_txt"], [3, "click"]],
        template: function ArtistVerifiedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistVerifiedComponent_Template_button_click_7_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login to Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form_Success);
          }
        },
        styles: [".delete_dialog[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0;\n    min-height: 100%;\n}\n.delete_dialog[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    text-align: center;\n    padding: 50px 0;\n}\n.delete_txt[_ngcontent-%COMP%]{\n   width: 50%;\n   margin: 120px auto;\n}\n.delete_txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 30px;\n    font-weight: 500;\n    padding-bottom: 20px;\n}\n.delete_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #E0E0E0;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 27px;\n}\n.delete_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 8px;\n    width: 45%;\n    border: none;\n    color: #fff;\n    margin: 20px auto;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 13px 0 15px;\n    text-align: center;\n    outline: none;\n}\n@media (max-width:1024px){\n    .delete_txt[_ngcontent-%COMP%] {\n        width: 90%;\n        margin: 80px auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGlzdC12ZXJpZmllZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHdDQUFnRTtJQUNoRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0dBQ0csVUFBVTtHQUNWLGtCQUFrQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJhcnRpc3QtdmVyaWZpZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGVfZGlhbG9ne1xuICAgIGJhY2tncm91bmQ6ICMwNjA2MDY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uZGVsZXRlX2RpYWxvZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweCAwO1xufVxuLmRlbGV0ZV90eHR7XG4gICB3aWR0aDogNTAlO1xuICAgbWFyZ2luOiAxMjBweCBhdXRvO1xufVxuLmRlbGV0ZV90eHQgaDN7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZGVsZXRlX3R4dCBwe1xuICAgIGNvbG9yOiAjRTBFMEUwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuLmRlbGV0ZV90eHQgYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6ICM1NDM4RkY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxM3B4IDAgMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAuZGVsZXRlX3R4dCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "VZhT":
    /*!*****************************************************************************!*\
      !*** ./src/app/allmodules/pages/inkzer-details/inkzer-details.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: InkzerDetailsComponent */

    /***/
    function VZhT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InkzerDetailsComponent", function () {
        return InkzerDetailsComponent;
      });
      /* harmony import */


      var _success_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../success/success.component */
      "iNcN");
      /* harmony import */


      var ngx_stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-stars */
      "t10x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/artist.service */
      "WTzV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../page-loader/page-loader.component */
      "H2ov");

      function InkzerDetailsComponent_app_page_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-loader");
        }
      }

      function InkzerDetailsComponent_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 33);
        }
      }

      function InkzerDetailsComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InkzerDetailsComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.saveInkzer(ctx_r11.artistData.user_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Favorite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function InkzerDetailsComponent_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InkzerDetailsComponent_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.saveInkzer(ctx_r13.artistData.user_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function InkzerDetailsComponent_div_39_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx_r15.artistData.address, " ", ctx_r15.artistData.city, ", ", ctx_r15.artistData.zipcode, " ");
        }
      }

      function InkzerDetailsComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, InkzerDetailsComponent_div_39_p_9_Template, 2, 3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.artistData.studio_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.address_detail_show);
        }
      }

      function InkzerDetailsComponent_div_40_div_8_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var business_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", business_r17.opening_time, " - ", business_r17.closing_time, "");
        }
      }

      function InkzerDetailsComponent_div_40_div_8_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Open 24 Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function InkzerDetailsComponent_div_40_div_8_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function InkzerDetailsComponent_div_40_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InkzerDetailsComponent_div_40_div_8_div_6_Template, 4, 2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InkzerDetailsComponent_div_40_div_8_div_7_Template, 4, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, InkzerDetailsComponent_div_40_div_8_div_8_Template, 4, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var business_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](business_r17.day);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", business_r17.opening_time !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", business_r17.opening_time == null && business_r17.closing_time == null && business_r17.open_close == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", business_r17.opening_time == null && business_r17.closing_time == null && business_r17.open_close == 2);
        }
      }

      function InkzerDetailsComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Business Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, InkzerDetailsComponent_div_40_div_8_Template, 9, 4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.artistData.workhours);
        }
      }

      function InkzerDetailsComponent_div_41_p_7_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InkzerDetailsComponent_div_41_p_7_span_6_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r25.toggleSkil(ctx_r25.info_refund);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r24.showTxt_refund, " ");
        }
      }

      function InkzerDetailsComponent_div_41_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Refund Policy:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InkzerDetailsComponent_div_41_p_7_span_6_Template, 2, 1, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r22.info_refund && ctx_r22.info_refund.length > ctx_r22.firstCount ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](5, 2, ctx_r22.info_refund, 0, ctx_r22.counter) + ".." : ctx_r22.info_refund, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.info_refund && ctx_r22.info_refund.length > 100);
        }
      }

      function InkzerDetailsComponent_div_41_p_8_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InkzerDetailsComponent_div_41_p_8_span_6_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r28.toggleCancel(ctx_r28.info_cancel);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r27.showTxt_cancel, " ");
        }
      }

      function InkzerDetailsComponent_div_41_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cancellation Policy:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InkzerDetailsComponent_div_41_p_8_span_6_Template, 2, 1, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r23.info_cancel && ctx_r23.info_cancel.length > ctx_r23.firstCount ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](5, 2, ctx_r23.info_cancel, 0, ctx_r23.counter_cancel) + ".." : ctx_r23.info_cancel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.info_cancel && ctx_r23.info_cancel.length > 100);
        }
      }

      function InkzerDetailsComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Policies");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InkzerDetailsComponent_div_41_p_7_Template, 7, 6, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, InkzerDetailsComponent_div_41_p_8_Template, 7, 6, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.info_refund && ctx_r6.info_refund.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.info_cancel && ctx_r6.info_cancel.length);
        }
      }

      function InkzerDetailsComponent_a_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r7.artistData.fb_link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function InkzerDetailsComponent_a_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r8.artistData.instagram_link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function InkzerDetailsComponent_a_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r9.artistData.website_link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var InkzerDetailsComponent = /*#__PURE__*/function () {
        function InkzerDetailsComponent(artistService, actRoute, dialog, router, scroller) {
          _classCallCheck(this, InkzerDetailsComponent);

          this.artistService = artistService;
          this.actRoute = actRoute;
          this.dialog = dialog;
          this.router = router;
          this.scroller = scroller;
          this.isLoad = false;
          this.search = '';
          this.serviceList = [];
          this.artistData = [];
          this.portfolioList = [];
          this.portfolioImages = [];
          this.reviewList = [];
          this.collectionSize = 0;
          this.page = 1;
          this.pageSize = 10;
          this.page_no = '1';
          this.p = 1;
          this.conversastion_id = '';
          this.conversastion_channel = '';
          this.channel_id = '';
          this.receiver_id = '';
          this.working_hours_show = false;
          this.address_show = false;
          this.address_detail_show = false;
          this.reviewCount = 0;
          this.firstCount = 100;
          this.last_index_refund = 100;
          this.last_index_cancel = 100;
          this.counter = 100;
          this.counter_cancel = 100;
          this.isReadMore = true;
          this.info_cancel = '';
          this.info_refund = '';
          this.fb_link = '';
          this.insta_link = '';
          this.website_link = '';
          this.showTxt_refund = 'Show More';
          this.showTxt_cancel = 'Show More';

          this.checkIfAllPropertiesAreNull = function (object) {
            var properties = ["closing_time", "open_close", "opening_time"];

            for (var _i = 0, _properties = properties; _i < _properties.length; _i++) {
              var property = _properties[_i];

              if (object[property] !== null) {
                return true;
              }
            }

            return false;
          };

          this.checkForAddress = function (artistData, properties) {
            var _iterator = _createForOfIteratorHelper(properties),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var property = _step.value;

                if (artistData[property] !== null) {
                  return true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return false;
          };
        }

        _createClass(InkzerDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getArtistProfile();
            this.getArtistService();
            this.getArtistPortfolio();
          }
        }, {
          key: "getArtistProfile",
          value: function getArtistProfile() {
            var _this16 = this;

            this.isLoad = true;
            var formData = new FormData();
            formData.append('artist_id', this.actRoute.snapshot.params.id);

            if (localStorage.getItem('token')) {
              this.artistService.getArtistDetails(formData).subscribe(function (res) {
                var _a;

                _this16.artistData = res.Artist;
                _this16.reviewCount = _this16.artistData.reviewstar;
                _this16.conversastion_id = _this16.artistData.conversastion_id;
                _this16.conversastion_channel = _this16.artistData.conversastion_channel;

                _this16.starsComponent.setRating(_this16.artistData.reviewstar);

                if (res.Artist.refundPolicies) {
                  _this16.info_refund = res.Artist.refundPolicies; //show more less for refund policies

                  _this16.last_index_refund = (_a = _this16.info_refund) !== null && _a !== void 0 ? _a : _this16.info_refund.substring(0, 100).lastIndexOf(' ');
                  if (_this16.last_index_refund > 100) _this16.last_index_refund = 100;
                  _this16.counter = _this16.last_index_refund;
                }

                if (res.Artist.cancellationPolicies) {
                  _this16.info_cancel = res.Artist.cancellationPolicies; //show more less for Cancel policies

                  _this16.last_index_cancel = _this16.info_cancel ? _this16.info_cancel.substring(0, 100).lastIndexOf(' ') : 0;
                  if (_this16.last_index_cancel > 100) _this16.last_index_cancel = 100;
                  _this16.counter_cancel = _this16.last_index_cancel;
                }

                if (res.Artist.workhours.length > 0) {
                  _this16.working_hours_show = res.Artist.workhours.every(_this16.checkIfAllPropertiesAreNull);
                } // this.address_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode", "studio_name"]);


                _this16.address_show = _this16.checkForAddress(res.Artist, ["address", "city", "zipcode", "studio_name"]); // this.address_detail_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode"])

                _this16.address_detail_show = _this16.checkForAddress(res.Artist, ["address", "city", "zipcode"]);
                _this16.fb_link = res.Artist.fb_link;
                _this16.insta_link = res.Artist.instagram_link;
                _this16.website_link = res.Artist.website_link;
                _this16.reviewList = res.Artist.review;
                _this16.isLoad = false;
                return;
              }, function (err) {
                _this16.isLoad = false;

                _this16.router.navigate(['/404']);
              });
            } else {
              this.artistService.getSingleArtistDetails(formData).subscribe(function (res) {
                if (res) {
                  _this16.artistData = res.Artist;
                  _this16.reviewList = res.Artist.review;
                  _this16.conversastion_id = res.conversastion_id;
                  _this16.fb_link = res.Artist.fb_link;
                  _this16.insta_link = res.Artist.instagram_link;
                  _this16.website_link = res.Artist.website_link;

                  _this16.starsComponent.setRating(_this16.artistData.reviewstar); //show more less for refund policies


                  _this16.info_refund = res.Artist.refundPolicies;
                  _this16.last_index_refund = _this16.info_refund ? _this16.info_refund.substring(0, 100).lastIndexOf(' ') : 0;
                  if (_this16.last_index_refund > 100) _this16.last_index_refund = 100;
                  _this16.counter = _this16.last_index_refund; //show more less for Cancel policies

                  _this16.info_cancel = res.Artist.cancellationPolicies;
                  _this16.last_index_cancel = _this16.info_cancel ? _this16.info_cancel.substring(0, 100).lastIndexOf(' ') : 0;
                  if (_this16.last_index_cancel > 100) _this16.last_index_cancel = 100;
                  _this16.counter_cancel = _this16.last_index_cancel;
                  _this16.isLoad = false;

                  if (res.Artist.workhours.length > 0) {
                    _this16.working_hours_show = res.Artist.workhours.every(_this16.checkIfAllPropertiesAreNull);
                  } // this.address_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode", "studio_name"]);


                  _this16.address_show = _this16.checkForAddress(res.Artist, ["address", "city", "zipcode", "studio_name"]); // this.address_detail_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode"])

                  _this16.address_detail_show = _this16.checkForAddress(res.Artist, ["address", "city", "zipcode"]);
                  return;
                }
              }, function (err) {
                _this16.isLoad = false;

                _this16.router.navigate(['/404']);
              });
            }
          }
        }, {
          key: "getArtistService",
          value: function getArtistService() {
            var _this17 = this;

            this.isLoad = true;
            var formData = new FormData(); // let  param = {'search':this.search,}

            formData.append('user_id', this.actRoute.snapshot.params.id);
            this.artistService.getArtistServices(formData).subscribe(function (res) {
              _this17.serviceList = res.data;
              _this17.isLoad = false;
              return;
            }, function (err) {
              _this17.isLoad = false;
            });
          }
        }, {
          key: "getArtistPortfolio",
          value: function getArtistPortfolio() {
            var _this18 = this;

            this.isLoad = true;
            var formData = new FormData(); // let  param = {'search':this.search,}

            formData.append('artist_id', this.actRoute.snapshot.params.id);
            this.artistService.getArtistPortfolios(formData).subscribe(function (res) {
              if (res) {
                _this18.portfolioList = res.data;

                _this18.portfolioList.forEach(function (portfolio) {
                  var _this18$portfolioImag;

                  (_this18$portfolioImag = _this18.portfolioImages).push.apply(_this18$portfolioImag, _toConsumableArray(portfolio.portfolioImg));
                });

                _this18.pageSize = res.per_page;
                _this18.page = res.currentPage;
                _this18.collectionSize = res.total_record;
                _this18.isLoad = false;
                return;
              }
            }, function (err) {
              _this18.isLoad = false;
            });
          }
        }, {
          key: "saveInkzer",
          value: function saveInkzer(artist_id) {
            var _this19 = this;

            this.isLoad = true;
            var formData = new FormData();
            formData.append('artist_id', artist_id);

            if (localStorage.getItem('token')) {
              this.artistService.saveInkzer(formData).subscribe(function (res) {
                _this19.isLoad = false;

                if (res) {
                  _this19.successeDialog(res.message);
                }
              }, function (err) {
                _this19.isLoad = false;
              });
            } else {
              this.isLoad = false;
              this.router.navigate(['/pages/profile']);
            }
          }
        }, {
          key: "successeDialog",
          value: function successeDialog(message) {
            var _this20 = this;

            var dialogRef = this.dialog.open(_success_success_component__WEBPACK_IMPORTED_MODULE_0__["SuccessComponent"], {
              width: '460px',
              data: {
                msg: message
              }
            }).afterClosed().subscribe(function () {
              return _this20.getArtistProfile();
            });
          }
        }, {
          key: "takeMeToDynamicUrl",
          value: function takeMeToDynamicUrl(url) {
            document.location.href = url;
          }
        }, {
          key: "toggleSkil",
          value: function toggleSkil(refund) {
            if (this.counter < 101) {
              this.counter = this.info_refund.length;
              this.showTxt_refund = 'Show less';
            } else {
              this.counter = this.last_index_refund;
              this.showTxt_refund = 'Show More';
            }
          }
        }, {
          key: "toggleCancel",
          value: function toggleCancel(refund) {
            if (this.counter_cancel < 101) {
              this.counter_cancel = this.info_cancel.length;
              this.showTxt_cancel = 'Show less';
            } else {
              this.counter_cancel = this.last_index_cancel;
              this.showTxt_cancel = 'Show More';
            }
          }
        }, {
          key: "FB",
          value: function FB() {
            window.open(this.fb_link, '_blank');
          }
        }, {
          key: "insta",
          value: function insta() {
            window.open(this.insta_link, '_blank');
          }
        }, {
          key: "website",
          value: function website() {
            // window.location.href = this.website_link;
            window.open(this.website_link, '_blank');
          }
        }, {
          key: "bookService",
          value: function bookService(uuid, service_id) {
            this.router.navigate(['/pages/booking-details/' + uuid], {
              queryParams: {
                service: service_id
              }
            });
          }
        }, {
          key: "goDown",
          value: function goDown() {
            if (this.reviewList.length > 0) {
              this.scroller.scrollToAnchor('targetRed');
            }
          }
        }, {
          key: "messageInkzer",
          value: function messageInkzer(artist) {
            if (localStorage.getItem('token')) {
              this.router.navigate(['/pages/message'], {
                queryParams: {
                  artist: artist,
                  conversastion_id: this.conversastion_id,
                  channel: this.conversastion_channel
                }
              });
            } else {
              this.router.navigate(['/login']);
            }
          }
        }]);

        return InkzerDetailsComponent;
      }();

      InkzerDetailsComponent.ɵfac = function InkzerDetailsComponent_Factory(t) {
        return new (t || InkzerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"]));
      };

      InkzerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: InkzerDetailsComponent,
        selectors: [["app-inkzer-details"]],
        viewQuery: function InkzerDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_stars__WEBPACK_IMPORTED_MODULE_1__["NgxStarsComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.starsComponent = _t.first);
          }
        },
        decls: 56,
        vars: 23,
        consts: [[4, "ngIf"], [1, "inkzer_banner"], [1, "inkzer_details", "artist_details"], [1, "container"], [1, "width_70"], [1, "animate__animated", "animate__fadeInUp", "animate__fast-800ms"], ["src", "assets/images/elite_pro.svg", 4, "ngIf"], [1, "stars", "rate", "animate__animated", "animate__fadeInUp", "animate__slow-4ms", 3, "click"], [3, "initialStars", "color", "readonly", "size", "maxStars"], [1, "save_book_btn"], [1, "btn_section"], ["class", "add_fav", 3, "click", 4, "ngIf"], [1, "save_btn", 3, "routerLink"], [1, "about"], [1, "container", "animate__fadeInUp"], [1, "row", "pb-5", 2, "border-bottom", "4px solid #161616"], [1, "col-md-6"], [1, "about_text"], [1, "animate__animated", "animate__fadeInUp", "animate__slow-2s"], [1, "about_profile"], [3, "src"], [1, "profile_text"], [3, "click"], [1, "about_location"], ["class", "board_about", 4, "ngIf"], [1, "board_about"], [1, "row"], [1, "col-md-3"], ["src", "assets/images/link1.svg"], [1, "col-md-9"], ["target", "_blank", 3, "href", 4, "ngIf"], ["id", "targetRed", 1, "about_tabs"], ["tabs", ""], ["src", "assets/images/elite_pro.svg"], [1, "add_fav", 3, "click"], ["src", "assets/images/location1.svg"], [1, "mb-0"], ["src", "assets/images/clock.svg"], [1, "pb-2"], [1, "business_hours"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-3"], [1, "col-md-8", "col-9"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], [1, "text-center"], ["src", "assets/images/policy1.svg"], ["class", "pb-1", 4, "ngIf"], [1, "pb-1"], [1, "collapsable"], ["class", "redTxt", 3, "click", 4, "ngIf"], [1, "redTxt", 3, "click"], ["target", "_blank", 3, "href"], ["src", "assets/images/facebook.svg", 1, "hover_"], ["src", "assets/images/instagram.svg", 1, "hover_"], ["src", "assets/images/website.svg", 1, "hover_"]],
        template: function InkzerDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InkzerDetailsComponent_app_page_loader_0_Template, 1, 0, "app-page-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InkzerDetailsComponent_img_7_Template, 1, 0, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InkzerDetailsComponent_Template_div_click_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](54);

              return _r10.selectedIndex = 2;
            })("click", function InkzerDetailsComponent_Template_div_click_8_listener() {
              return ctx.goDown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ngx-stars", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, InkzerDetailsComponent_button_13_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, InkzerDetailsComponent_button_14_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Style of Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InkzerDetailsComponent_Template_button_click_35_listener() {
              return ctx.messageInkzer(ctx.artistData.user_id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Message Inkzer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, InkzerDetailsComponent_div_39_Template, 10, 2, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, InkzerDetailsComponent_div_40_Template, 9, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, InkzerDetailsComponent_div_41_Template, 9, 2, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, InkzerDetailsComponent_a_49_Template, 2, 1, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, InkzerDetailsComponent_a_50_Template, 2, 1, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, InkzerDetailsComponent_a_51_Template, 2, 1, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-tab-group", null, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.artistData.artist_name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.artistData.subscription == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \xA0 ", ctx.artistData.reviewCount, " Reviews ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("initialStars", ctx.reviewCount)("color", "#FFAC00")("readonly", true)("size", 1)("maxStars", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.artistData.isFavourite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.artistData.isFavourite);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/service/", ctx.artistData.user_name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" About ", ctx.artistData.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.artistData.about_me, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.artistData.profile_img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.artistData.user_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.artistData.workStylecomma);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.address_show);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.working_hours_show);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.info_refund || ctx.info_cancel);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.artistData.fb_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.artistData.instagram_link);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.artistData.website_link);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_stars__WEBPACK_IMPORTED_MODULE_1__["NgxStarsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
        styles: [".inkzer_details[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10%;\n    width: 100%;\n    float: left;\n    padding: 130px 0;\n    text-align: center;\n    \n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    font-family: \"Nunito\", sans-serif !important;\n}\n.hover_[_ngcontent-%COMP%]{\n    transition: transform .2s cubic-bezier(.2,0,.4,1);\n}\n.hover_[_ngcontent-%COMP%]:hover {\n    transform: translateY(2px);\n  }\n.stars[_ngcontent-%COMP%]   ngx-stars[_ngcontent-%COMP%] {\n    padding-left: 9px;\n    width: 100%;\n    float: left;\n    margin-top: 10px;\n}\n.inkzer_banner[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 100%;\n    float: left;\n    background-color: #000;\n}\n.stars-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    z-index: 9 !important;\n}\n.inkzer_banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-fit: cover;\n    object-position: center;\n    width: 100%;\n    height: 100%;\n    opacity: 0.6;\n}\n.review_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n}\n.width_70[_ngcontent-%COMP%] {\n    width: 62%;\n    margin: 0 auto;\n}\n.inkzer_details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 45px;\n    line-height: 50px;\n    color: #ffffff;\n}\n.inkzer_details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 40px;\n    text-align: center;\n    padding-top: 10px;\n    color: #ffffff;\n}\n.rate[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 22px;\n    color: #ffffff;\n}\n.rate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: baseline;\n}\n.save_book_btn[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    background: #000;\n}\n.btn_section[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n   \n}\n.add_fav[_ngcontent-%COMP%]{\n    background: linear-gradient(180deg, rgba(251, 172, 24, 0.9) 0%, #ffac00 100%);\n    -webkit-backdrop-filter: blur(40px);\n            backdrop-filter: blur(40px);\n    border-radius: 200px;\n    padding: 20px 60px;\n    margin-top: -40px;\n    opacity: 0.9;\n    border: none;\n    outline: none;\n    transition: transform .2s cubic-bezier(.2,0,.4,1);\n    margin-right: 5px;\n}\n.save_btn[_ngcontent-%COMP%]{\n    background:#5438FF;\n    -webkit-backdrop-filter: blur(40px);\n            backdrop-filter: blur(40px);\n    border-radius: 200px;\n    padding: 20px 70px;\n    margin-top: -40px;\n    opacity: 0.9;\n    color: #fff;\n    transition: transform .2s cubic-bezier(.2,0,.4,1);\n\n}\n.save_btn[_ngcontent-%COMP%]:hover, .add_fav[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n  }\n.btn_section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 25px;\n    text-align: center;\n    border: none;\n    outline: none;\n}\n.about[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    background: #000;\n    padding: 80px 0;\n}\n.about_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 23px;\n    color: #ffffff;\n    line-height: 0;\n    margin: 40px 0;\n    letter-spacing: 1px;\n}\n.about_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 100;\n    font-size: 18px;\n    color: #e0e0e0;\n    padding-top: 15px;\n    padding-right: 20px;\n    line-height: 27px;\n    line-break: anywhere;\n}\n.about_text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #5438ff;\n    border-radius: 10px;\n    color: #fff;\n    font-weight: 600;\n    font-size: 25px;\n    line-height: 41px;\n    text-align: center;\n    color: #ffffff;\n    width: 100%;\n    padding: 10px 0 15px;\n    border: none;\n    outline: none;\n    margin-top: 20px;\n    float: left;\n    margin: 20px 0;\n}\n.about_profile[_ngcontent-%COMP%] {\n    position: relative;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    border-bottom: 4px solid #161616;\n    margin-bottom: 25px;\n}\n.about_profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    width: 80px;\n    height: 80px;\n    box-shadow: 0px 1px 10px 5px rgb(251 172 24 / 20%);\n}\n.profile_text[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40px;\n    left: 100px;\n}\n.about_location[_ngcontent-%COMP%] {\n    background: #161616;\n    border-radius: 10px;\n    width: 100%;\n    float: left;\n}\n.board_about[_ngcontent-%COMP%] {\n    padding: 30px 35px 25px;\n    border-bottom: 2px solid #000000;\n}\n.board_about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    background: #ffac00;\n    border-radius: 10px;\n    padding: 12px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n}\n.board_about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    \n    \n    color: #ffffff;\n    margin-top: 0;\n}\n.board_about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 100;\n    font-size: 16px;\n    line-height: 27px;\n    color: #e0e0e0;\n}\n.board_about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    background: transparent;\n    margin-top: 0;\n    padding-top: 0;\n    padding-left: 0;\n}\n.about_tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding-top: 50px;\n}\n.service_tab[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding-top: 50px;\n}\n.service_box[_ngcontent-%COMP%] {\n    background: #161616;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);\n    border-radius: 20px;\n    padding: 15px;\n    margin: 15px 0;\n}\n.service_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 300px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    object-fit: cover;\n}\n.service_box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 38px;\n    color: #ffffff;\n    padding: 10px 0 0;\n    font-family: \"Nunito\", sans-serif !important;\n    margin-bottom: 0px;\n}\n.service_box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 30px;\n    color: #e0e0e0;\n    padding-bottom: 5px;\n}\n.service_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #5438ff;\n    border-radius: 10px;\n    color: #fff;\n    width: 100%;\n    text-align: center;\n    padding: 10px 0;\n    font-weight: bold;\n    font-size: 18px;\n    border: none;\n    outline: none;\n}\n.show_more[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto;\n}\n.show_more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #5438ff;\n    border-radius: 10px;\n    color: #fff;\n    text-align: center;\n    padding: 15px 0;\n    font-weight: 600;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    width: 100%;\n    margin-top: 30px;\n}\n.portfolio[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding-top: 50px;\n}\n.portfolio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 10px;\n}\n.protfolio_img[_ngcontent-%COMP%] {\n    height: 250px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n}\n.review[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 20px 0;\n    border-bottom: 4px solid #161616;\n}\n.review_rateing[_ngcontent-%COMP%] {\n    position: relative;\n    padding-bottom: 10px;\n}\n.review_rateing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n}\n.review_text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 88%;\n    top: 0;\n    left: 100px;\n}\n.review_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 27px;\n    color: #ffffff;\n}\n.review_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 200;\n}\n.review_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    color: #e0e0e0;\n    margin-bottom: 5px;\n}\n.review_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n}\n.review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: 200;\n    font-size: 16px;\n    line-height: 22px;\n    color: #e0e0e0;\n}\n.Page-navigation[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    float: left;\n    margin: auto;\n    justify-content: center;\n    padding: 40px 0;\n}\n.page-link[_ngcontent-%COMP%] {\n    background-color: #090909;\n    border: 1px solid #161616;\n    margin: 0 5px;\n    color: #ffac00;\n    font-weight: bold;\n    border-radius: 4px;\n    font-size: 16px;\n    padding: 7px 15px;\n}\n.active[_ngcontent-%COMP%] {\n    background-color: #ffac00;\n    color: #fff;\n}\n.page-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: #ffac00;\n    color: #fff;\n}\n.pagination[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n.pagination_[_ngcontent-%COMP%] {\n    float: right;\n    margin-top: 20px;\n    padding-right: 20px;\n}\npagination-controls[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n@media (max-width: 425px) {\n    .btn_section[_ngcontent-%COMP%] {\n        width: 94%;\n    }\n    .review_text[_ngcontent-%COMP%] {\n        width: 65% !important;\n    }\n}\n@media only screen and (min-width: 426px) and (max-width: 767px) {\n    .btn_section[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n    .btn_section[_ngcontent-%COMP%] {\n        \n    }\n    .board_about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        padding: 8px;\n        width: 50px;\n    }\n    .review_text[_ngcontent-%COMP%] {\n        width: 78% !important;\n    }\n   \n}\n@media screen and (max-width: 767px) {\n    .width_70[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .inkzer_details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 38px;\n    }\n    .btn_section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        border-right: 0 !important;\n        font-size: 20px;\n    }\n    .review_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 14px;\n        padding: 10px;\n    }\n    .pagination_[_ngcontent-%COMP%] {\n        float: none;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n    }\n    .save_btn[_ngcontent-%COMP%]{\n        padding: 20px 40px;\n    }\n    .add_fav[_ngcontent-%COMP%]{\n        padding:20px;\n    }\n}\n.redTxt[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: #ffac00;\n}\n.stars-line[_ngcontent-%COMP%] {\n    justify-content: left !important;\n}\n@media screen and (max-width: 992px) {\n    #inkzer_banner[_ngcontent-%COMP%] {\n        height: 100%;\n    }\n}\n.stars[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlua3plci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1RUFBdUU7SUFDdkUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLDBCQUEwQjtFQUM1QjtBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksNkVBQTZFO0lBQzdFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpREFBaUQ7O0FBRXJEO0FBQ0E7SUFDSSwyQkFBMkI7RUFDN0I7QUFFRDtJQUNHLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtEQUFrRDtBQUN0RDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCOztBQUVKO0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJpbmt6ZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlua3plcl9kZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTMwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzLy9pbWFnZXMvSW5remVyc19kZXRhaWxfYmFubmVyLnBuZ1wiKTsgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG4uaG92ZXJfe1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC4yLDAsLjQsMSk7XG59XG4uaG92ZXJfOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgfVxuXG4uc3RhcnMgbmd4LXN0YXJzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW5remVyX2Jhbm5lciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uc3RhcnMtbGluZSBkaXYge1xuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLmlua3plcl9iYW5uZXIgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMC42O1xufVxuXG4ucmV2aWV3X3RleHQgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ud2lkdGhfNzAge1xuICAgIHdpZHRoOiA2MiU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbmt6ZXJfZGV0YWlscyBoMiB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW5remVyX2RldGFpbHMgcCB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmF0ZSBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLnNhdmVfYm9va19idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5idG5fc2VjdGlvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbn1cbi5hZGRfZmF2e1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjUxLCAxNzIsIDI0LCAwLjkpIDAlLCAjZmZhYzAwIDEwMCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC4yLDAsLjQsMSk7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uc2F2ZV9idG57XG4gICAgYmFja2dyb3VuZDojNTQzOEZGO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC4yLDAsLjQsMSk7XG5cbn1cbi5zYXZlX2J0bjpob3ZlciwuYWRkX2Zhdjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICB9XG5cbiAuYnRuX3NlY3Rpb24gYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufSBcblxuLmFib3V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLmFib3V0X3RleHQgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG1hcmdpbjogNDBweCAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5hYm91dF90ZXh0IHAge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZTBlMGUwO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGluZS1icmVhazogYW55d2hlcmU7XG59XG5cbi5hYm91dF90ZXh0IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzU0MzhmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uYWJvdXRfcHJvZmlsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMTYxNjE2O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5hYm91dF9wcm9maWxlIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggNXB4IHJnYigyNTEgMTcyIDI0IC8gMjAlKTtcbn1cblxuLnByb2ZpbGVfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICBsZWZ0OiAxMDBweDtcbn1cblxuLmFib3V0X2xvY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5ib2FyZF9hYm91dCB7XG4gICAgcGFkZGluZzogMzBweCAzNXB4IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5ib2FyZF9hYm91dCBpbWcge1xuICAgIGJhY2tncm91bmQ6ICNmZmFjMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJvYXJkX2Fib3V0IGg0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgLyogbGluZS1oZWlnaHQ6IDA7ICovXG4gICAgLyogbWFyZ2luOiAyMHB4IDAgMCAwOyAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5ib2FyZF9hYm91dCBwIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLmJvYXJkX2Fib3V0IGEgaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmFib3V0X3RhYnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uc2VydmljZV90YWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uc2VydmljZV9ib3gge1xuICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4uc2VydmljZV9ib3ggaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5zZXJ2aWNlX2JveCBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMCAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uc2VydmljZV9ib3ggaDYge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uc2VydmljZV9ib3ggYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTQzOGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zaG93X21vcmUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2hvd19tb3JlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzU0MzhmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnBvcnRmb2xpbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5wb3J0Zm9saW8gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb3Rmb2xpb19pbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5yZXZpZXcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzE2MTYxNjtcbn1cblxuLnJldmlld19yYXRlaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5yZXZpZXdfcmF0ZWluZyBpbWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5yZXZpZXdfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4OCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDEwMHB4O1xufVxuXG4ucmV2aWV3X3RleHQgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmV2aWV3X3RleHQgaDQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5yZXZpZXdfdGV4dCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICNlMGUwZTA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucmV2aWV3X3RleHQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLnJldmlldyBwIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLlBhZ2UtbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweCAwO1xufVxuXG4ucGFnZS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwOTA5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNjE2MTY7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBjb2xvcjogI2ZmYWMwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYzAwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ucGFnZS1saW5rIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWMwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnBhZ2luYXRpb24gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYWdpbmF0aW9uXyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxucGFnaW5hdGlvbi1jb250cm9scyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgLmJ0bl9zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICB9XG4gICAgLnJldmlld190ZXh0IHtcbiAgICAgICAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmJ0bl9zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5idG5fc2VjdGlvbiB7XG4gICAgICAgIC8qIHdpZHRoOiA0MCU7ICovXG4gICAgfVxuICAgIC5ib2FyZF9hYm91dCBpbWcge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgICAucmV2aWV3X3RleHQge1xuICAgICAgICB3aWR0aDogNzglICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLndpZHRoXzcwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5pbmt6ZXJfZGV0YWlscyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICB9XG4gICAgLmJ0bl9zZWN0aW9uIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5yZXZpZXdfdGV4dCBoNCBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAucGFnaW5hdGlvbl8ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLnNhdmVfYnRue1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgfVxuICAgIC5hZGRfZmF2e1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgfVxufVxuXG4ucmVkVHh0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmFjMDA7XG59XG5cbi5zdGFycy1saW5lIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAjaW5remVyX2Jhbm5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5zdGFycyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "WTzV":
    /*!*******************************************!*\
      !*** ./src/app/service/artist.service.ts ***!
      \*******************************************/

    /*! exports provided: ArtistService */

    /***/
    function WTzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtistService", function () {
        return ArtistService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ArtistService = /*#__PURE__*/function () {
        function ArtistService(http, route) {
          _classCallCheck(this, ArtistService);

          this.http = http;
          this.route = route;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          this.body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          this.api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url;
          this.base_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
          this.secretKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].secretKey;
        }

        _createClass(ArtistService, [{
          key: "getAllArtist",
          value: function getAllArtist(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/allArtists', param);
          }
        }, {
          key: "allSearchArtists",
          value: function allSearchArtists(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/allSearchArtists', param);
          }
        }, {
          key: "allSearchArtistsData",
          value: function allSearchArtistsData(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/allSearchArtistsData', param);
          } //Sigle artist details

        }, {
          key: "getSingleArtistDetails",
          value: function getSingleArtistDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getSingleArtistDetails', param);
          }
        }, {
          key: "getArtistDetails",
          value: function getArtistDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getArtistDetails', param);
          }
        }, {
          key: "getArtistServices",
          value: function getArtistServices(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getArtistServices', param);
          }
        }, {
          key: "getArtistPortfolios",
          value: function getArtistPortfolios(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getArtistPortfolio', param);
          }
        }, {
          key: "getServiceDetails",
          value: function getServiceDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getServiceDetails', param);
          }
        }, {
          key: "getBookServices",
          value: function getBookServices(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getBookServices', param);
          }
        }, {
          key: "saveInkzer",
          value: function saveInkzer(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/saveInkzer', param);
          }
        }, {
          key: "getSavedInkzer",
          value: function getSavedInkzer() {
            return this.http.get(this.api_url + 'api/client/getSavedInkzer');
          } //Booking

        }, {
          key: "AddBokingDetails",
          value: function AddBokingDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/addbookingDetails', param);
          }
        }, {
          key: "AddBokingTime",
          value: function AddBokingTime(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/AddBokingTime', param);
          }
        }, {
          key: "getBookingSlots",
          value: function getBookingSlots(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getBookingSlots', param);
          }
        }, {
          key: "getbookingDetails",
          value: function getbookingDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getbookingDetails', param);
          }
        }, {
          key: "getUserPayMethod",
          value: function getUserPayMethod(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getUserDetails', param);
          }
        }, {
          key: "getStyleOFwork",
          value: function getStyleOFwork() {
            return this.http.get(this.api_url + 'api/getStyleOFwork');
          }
        }, {
          key: "saveImgVideo",
          value: function saveImgVideo(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/saveImgVideo', param);
          }
        }, {
          key: "addBooking",
          value: function addBooking(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/addBooking', param);
          }
        }, {
          key: "bookingHistrory",
          value: function bookingHistrory() {
            return this.http.get(this.api_url + 'api/client/clientBookingHistory');
          }
        }, {
          key: "getbookingConsant",
          value: function getbookingConsant(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getbookingConsant', param);
          }
        }, {
          key: "updateConsantForm",
          value: function updateConsantForm(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/updateConsantForm', param);
          }
        }, {
          key: "consantformDetailsClient",
          value: function consantformDetailsClient(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/consantformDetailsClient', param);
          }
        }, {
          key: "addRating",
          value: function addRating(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/addRating', param);
          }
        }, {
          key: "getReviewAddInfo",
          value: function getReviewAddInfo(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getReviewAddInfo', param);
          }
        }, {
          key: "clientBookingDetails",
          value: function clientBookingDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/clientBookingDetails', param);
          }
        }, {
          key: "bookingDetailsWithUser",
          value: function bookingDetailsWithUser(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/bookingDetailsWithUser', param);
          }
        }, {
          key: "getRescheduleBookingDetails",
          value: function getRescheduleBookingDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/getRescheduleBookingDetails', param);
          }
        }, {
          key: "bookingRemainingPayment",
          value: function bookingRemainingPayment(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/bookingRemainingPayment', param);
          }
        }, {
          key: "cancelBooking",
          value: function cancelBooking(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/cancelBooking', param);
          }
        }, {
          key: "rescheduleBooking",
          value: function rescheduleBooking(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/rescheduleBooking', param);
          }
        }, {
          key: "paymentHistrory",
          value: function paymentHistrory() {
            return this.http.get(this.api_url + 'api/client/clientPaymentHistory');
          }
        }, {
          key: "paymentDetails",
          value: function paymentDetails(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/client/paymentDetails', param);
          }
        }, {
          key: "checkDomain",
          value: function checkDomain(data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            param = data;
            return this.http.post(this.api_url + 'api/checkDomain', param);
          }
        }]);

        return ArtistService;
      }();

      ArtistService.ɵfac = function ArtistService_Factory(t) {
        return new (t || ArtistService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ArtistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ArtistService,
        factory: ArtistService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Y6O2":
    /*!***********************************************************************************!*\
      !*** ./src/app/allmodules/pages/inkzers/become-inkzer/become-inkzer.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: BecomeInkzerComponent */

    /***/
    function Y6O2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BecomeInkzerComponent", function () {
        return BecomeInkzerComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/artist.service */
      "WTzV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../layout/header/header.component */
      "lLVm");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../page-loader/page-loader.component */
      "H2ov");
      /* harmony import */


      var ngx_stars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-stars */
      "t10x");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");

      function BecomeInkzerComponent_app_page_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-loader");
        }
      }

      function BecomeInkzerComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_div_33_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var style_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.AddStyleOfWork(style_r12.name, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var style_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](style_r12.name);
        }
      }

      function BecomeInkzerComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_div_47_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var service_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.AddService(service_r15.id, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var service_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r15.name);
        }
      }

      function BecomeInkzerComponent_button_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BecomeInkzerComponent_button_48_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.toggleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.showTxt, " ");
        }
      }

      function BecomeInkzerComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_div_62_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var state_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.Addstate(state_r20.state, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r20.state);
        }
      }

      function BecomeInkzerComponent_button_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BecomeInkzerComponent_button_63_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.toggleState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.showTxt_state, " ");
        }
      }

      function BecomeInkzerComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_div_77_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var city_r25 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.citystate(city_r25.city, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r25.city);
        }
      }

      function BecomeInkzerComponent_button_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BecomeInkzerComponent_button_78_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.toggleCity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.showTxt_city, " ");
        }
      }

      function BecomeInkzerComponent_button_137_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BecomeInkzerComponent_button_137_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.toggleInkzer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.showTxt_inkzer, " ");
        }
      }

      function BecomeInkzerComponent_div_146_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 59);
        }
      }

      function BecomeInkzerComponent_div_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BecomeInkzerComponent_div_146_img_4_Template, 1, 0, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ngx-stars", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " View Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artist_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/artist-profile/", artist_r32.user_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", artist_r32.banner_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", artist_r32.subscription == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", artist_r32.profile_img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](artist_r32.artist_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \xA0 ", artist_r32.reviewcount, " Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initialStars", artist_r32.reviewstar)("color", "#FFAC00")("readonly", true)("size", 1)("maxStars", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/artist-profile/", artist_r32.user_name, "");
        }
      }

      function BecomeInkzerComponent_div_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function BecomeInkzerComponent_div_149_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pagination-controls", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function BecomeInkzerComponent_div_149_Template_pagination_controls_pageChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r35.page = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return {
          itemsPerPage: 12,
          currentPage: a1
        };
      };

      var BecomeInkzerComponent = /*#__PURE__*/function () {
        function BecomeInkzerComponent(artistService, formBuilder, router, activatedRoute) {
          _classCallCheck(this, BecomeInkzerComponent);

          this.artistService = artistService;
          this.formBuilder = formBuilder;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.isLoad = false;
          this.search = '';
          this.artistList = [];
          this.styleOfWork = [];
          this.starWork = [];
          this.serviceArr = [];
          this.InkzerArr = [];
          this.stateArr = [];
          this.cityArr = [];
          this.stateList = [];
          this.cityList = [];
          this.inkzerList = [];
          this.styleOfworkList = [];
          this.serviceList = [];
          this.artistname = [];
          this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
          this.firstCount = 10;
          this.showTxt = 'Show More';
          this.showTxt_state = 'Show More';
          this.showTxt_city = 'Show More';
          this.showTxt_inkzer = 'Show More';
          this.counter = 10;
          this.counter_state = 10;
          this.counter_city = 10;
          this.counter_inkzer = 10;
          this.last_index = 100;
          this.info = '';
          this.collectionSize = 0;
          this.page = 1;
          this.pageSize = 10;
          this.page_no = '1';
          this.p = 1;
        }

        _createClass(BecomeInkzerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('bookingData')) {
              localStorage.removeItem('bookingData');
            }

            this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              inkzer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              service: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              style_of_work: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              starWork: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              search: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [])
            });
            this.getArtist();
            this.getStyleOFwork();
          }
        }, {
          key: "AddStyleOfWork",
          value: function AddStyleOfWork(val, event) {
            var checked = event.checked;

            if (checked) {
              this.styleOfWork.push(val);
            } else {
              var index = this.styleOfWork.indexOf(val);
              this.styleOfWork.splice(index, 1);
            }

            this.filterForm.patchValue({
              style_of_work: this.styleOfWork
            });
          }
        }, {
          key: "AddStar",
          value: function AddStar(val, event) {
            var checked = event.checked;

            if (checked) {
              this.starWork.push(val);
            } else {
              var index = this.starWork.indexOf(val);
              this.starWork.splice(index, 1);
            } // console.warn(this.starWork);


            this.filterForm.patchValue({
              starWork: this.starWork
            });
          }
        }, {
          key: "AddService",
          value: function AddService(val, event) {
            var checked = event.checked;

            if (checked) {
              this.serviceArr.push(val);
            } else {
              var index = this.serviceArr.indexOf(val);
              this.serviceArr.splice(index, 1);
            } // console.warn(this.serviceArr);


            this.filterForm.patchValue({
              service: this.serviceArr
            });
          }
        }, {
          key: "AddInkzerName",
          value: function AddInkzerName(event) {
            var checked = event.target.value;
            this.InkzerArr.push(checked);
            this.filterForm.patchValue({
              inkzer_name: this.InkzerArr
            });
          }
        }, {
          key: "Addstate",
          value: function Addstate(val, event) {
            var checked = event.checked;

            if (checked) {
              this.stateArr.push(val);
            } else {
              var index = this.stateArr.indexOf(val);
              this.stateArr.splice(index, 1);
            }

            this.filterForm.patchValue({
              state: this.stateArr
            });
          }
        }, {
          key: "citystate",
          value: function citystate(val, event) {
            var checked = event.checked;

            if (checked) {
              this.cityArr.push(val);
            } else {
              var index = this.cityArr.indexOf(val);
              this.cityArr.splice(index, 1);
            }

            this.filterForm.patchValue({
              city: this.cityArr
            });
          }
        }, {
          key: "getArtist",
          value: function getArtist() {
            var _this21 = this;

            this.isLoad = true; // console.log(params.code);

            this.filterForm.patchValue({
              search: ''
            });
            this.artistService.getAllArtist(this.filterForm.value).subscribe(function (res) {
              _this21.isLoad = false;

              if (res) {
                _this21.artistList = res.data;
                _this21.pageSize = res.per_page;
                _this21.page = res.currentPage;
                _this21.collectionSize = res.total_record; // console.log(this.artistList);
              }
            }, function (err) {
              _this21.isLoad = false;
            });
          }
        }, {
          key: "filter",
          value: function filter() {
            var _this22 = this;

            this.isLoad = true;
            this.artistService.getAllArtist(this.filterForm.value).subscribe(function (res) {
              _this22.isLoad = false;

              if (res) {
                _this22.artistList = res.data;
                return;
              }
            }, function (err) {
              _this22.isLoad = false;
            });
          }
        }, {
          key: "getStyleOFwork",
          value: function getStyleOFwork() {
            var _this23 = this;

            this.artistService.getStyleOFwork().subscribe(function (res) {
              _this23.styleOfworkList = res.style;
              _this23.stateList = res.state;
              _this23.cityList = res.city;
              _this23.inkzerList = res.inkzers; //show more less for refund policies

              _this23.last_index = 10;
              if (_this23.last_index > 10) _this23.last_index = 10;
              _this23.counter = _this23.last_index;
              _this23.serviceList = res.services;
            }, function (err) {});
          }
        }, {
          key: "toggleCancel",
          value: function toggleCancel() {
            if (this.counter == 10) {
              this.counter = this.serviceList.length;
              this.showTxt = 'Show less';
            } else {
              this.counter = this.last_index;
              this.showTxt = 'Show More';
            }
          }
        }, {
          key: "toggleState",
          value: function toggleState() {
            if (this.counter_state == 10) {
              this.counter_state = this.stateList.length;
              this.showTxt_state = 'Show less';
            } else {
              this.counter_state = 10;
              this.showTxt_state = 'Show More';
            }
          }
        }, {
          key: "toggleCity",
          value: function toggleCity() {
            if (this.counter_city == 10) {
              this.counter_city = this.cityList.length;
              this.showTxt_city = 'Show less';
            } else {
              this.counter_city = this.last_index;
              this.showTxt_city = 'Show More';
            }
          }
        }, {
          key: "toggleInkzer",
          value: function toggleInkzer() {
            if (this.counter_inkzer == 10) {
              this.counter_inkzer = this.serviceList.length;
              this.showTxt_inkzer = 'Show less';
            } else {
              this.counter_inkzer = 10;
              this.showTxt_inkzer = 'Show More';
            }
          }
        }]);

        return BecomeInkzerComponent;
      }();

      BecomeInkzerComponent.ɵfac = function BecomeInkzerComponent_Factory(t) {
        return new (t || BecomeInkzerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      BecomeInkzerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BecomeInkzerComponent,
        selectors: [["app-become-inkzer"]],
        decls: 150,
        vars: 20,
        consts: [[4, "ngIf"], [1, "inkzer_details", "inkerList"], [1, "container"], [1, "width_70"], [1, "inkzer"], [1, ""], [1, "inkzer_box"], [1, "row"], [1, "col-lg-3", "col-md-4", "mb-3", "order-md-1", "order-2"], [1, "inkzer_filter"], [1, "filter_line"], ["name", "filterForm", 3, "formGroup", "ngSubmit"], [1, "filter_section"], [1, "container", "px-0"], ["id", "accordion"], [1, "card"], [1, "card-header"], ["data-toggle", "collapse", "href", "#menufour", "aria-expanded", "false", "aria-controls", "menufour", 1, "card-link"], [1, "collapsed"], ["src", "assets/images/plus.png"], [1, "expanded"], ["src", "assets/images/minus.png"], ["id", "menufour", 1, "collapse"], [1, "card-body"], ["class", "service_check", 4, "ngFor", "ngForOf"], ["data-toggle", "collapse", "href", "#menuthree", "aria-expanded", "false", "aria-controls", "menuthree", 1, "card-link"], ["id", "menuthree", 1, "collapse"], ["class", "search_btn", "type", "button", 3, "click", 4, "ngIf"], ["data-toggle", "collapse", "href", "#menuone", "aria-expanded", "false", "aria-controls", "menuone", 1, "card-link"], ["id", "menuone", 1, "collapse"], ["data-toggle", "collapse", "href", "#menusix", "aria-expanded", "false", "aria-controls", "menusix", 1, "card-link"], ["id", "menusix", 1, "collapse"], ["data-toggle", "collapse", "href", "#menufive", "aria-expanded", "false", "aria-controls", "menufive", 1, "card-link"], ["id", "menufive", 1, "collapse"], [1, "service_check"], [1, "example-margin", 3, "change"], ["src", "assets/images/start-rating.svg", 1, "starImg"], ["data-toggle", "collapse", "href", "#menutwo", "aria-expanded", "false", "aria-controls", "menutwo", 1, "card-link"], ["id", "menutwo", 1, "collapse"], [3, "floatLabel"], ["matInput", "", "placeholder", "Enter Your Artist Name", "formControlName", "inkzer_name", "type", "text", "autocomplete", "off", 3, "ngModel", "ngModelChange", "change"], [1, "p-4"], [1, "search_btn"], [1, "col-lg-9", "col-md-8", "order-md-2", "order-1"], [1, "inkzer_profile"], [1, "save_inkzer"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-6", 4, "ngIf"], ["class", "float-right pagination_", 4, "ngIf"], ["type", "button", 1, "search_btn", 3, "click"], [1, "col-lg-4", "col-md-6"], [1, "save-box", 2, "cursor", "pointer", 3, "routerLink"], [1, "save_box_img"], [3, "src"], ["src", "assets/images/elite_pro.svg", "class", "plan_icon", 4, "ngIf"], [1, "save_profile", "text-center"], ["alt", "", 1, "profile_img", 3, "src"], [3, "initialStars", "color", "readonly", "size", "maxStars"], [3, "routerLink"], ["src", "assets/images/elite_pro.svg", 1, "plan_icon"], [2, "color", "#fff"], [1, "float-right", "pagination_"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"]],
        template: function BecomeInkzerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BecomeInkzerComponent_app_page_loader_0_Template, 1, 0, "app-page-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Find My Artist");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BecomeInkzerComponent_Template_form_ngSubmit_16_listener() {
              return ctx.filter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Style of Work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BecomeInkzerComponent_div_33_Template, 3, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Service ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, BecomeInkzerComponent_div_47_Template, 3, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, BecomeInkzerComponent_button_48_Template, 2, 1, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " State ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, BecomeInkzerComponent_div_62_Template, 3, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, BecomeInkzerComponent_button_63_Template, 2, 1, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, BecomeInkzerComponent_div_77_Template, 3, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, BecomeInkzerComponent_button_78_Template, 2, 1, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Ratings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_Template_mat_checkbox_change_93_listener($event) {
              return ctx.AddStar(5, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_Template_mat_checkbox_change_101_listener($event) {
              return ctx.AddStar(4, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_Template_mat_checkbox_change_108_listener($event) {
              return ctx.AddStar(3, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_Template_mat_checkbox_change_114_listener($event) {
              return ctx.AddStar(2, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BecomeInkzerComponent_Template_mat_checkbox_change_119_listener($event) {
              return ctx.AddStar(1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BecomeInkzerComponent_Template_input_ngModelChange_136_listener($event) {
              return ctx.artistname = $event;
            })("change", function BecomeInkzerComponent_Template_input_change_136_listener($event) {
              return ctx.AddInkzerName($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, BecomeInkzerComponent_button_137_Template, 2, 1, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, BecomeInkzerComponent_div_146_Template, 14, 12, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, BecomeInkzerComponent_div_148_Template, 2, 0, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, BecomeInkzerComponent_div_149_Template, 2, 0, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.filterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.styleOfworkList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.serviceList.slice(0, ctx.counter));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter > 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList.slice(0, ctx.counter_state));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter_state > 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cityList.slice(0, ctx.counter_city));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter_city > 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.artistname);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter_inkzer > 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](147, 15, ctx.artistList, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.page)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.artistList.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.collectionSize >= 10);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__["PageLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ngx_stars__WEBPACK_IMPORTED_MODULE_10__["NgxStarsComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"]],
        styles: [".inkzer_details[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 130px 0;\n  text-align: center;\n  background-image: url('/assets/images/become.png') ;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-family: \"Nunito\", sans-serif !important;\n  \n}\n\n\n\n.panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.width_70[_ngcontent-%COMP%] {\n  width: 62%;\n  margin: 0 auto;\n}\n\n.inkzer_details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 60px;\n  \n  color: #ffffff;\n}\n\n.inkzer_details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 40px;\n  text-align: center;\n  padding-top: 10px;\n  color: #ffffff;\n}\n\n.rate[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  color: #ffffff;\n}\n\n.rate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n.save-box[_ngcontent-%COMP%] {\n  background: #161616;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);\n  border-radius: 20px;\n  width: 100%;\n  float: left;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n\n.save_box_img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.save_box_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: center;\n  height: 140px;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.plan_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  width: 45px !important;\n  right: 5px;\n  object-fit: none;\n  object-position: none;\n  height: auto !important;\n  width: 0%;\n}\n\n.save_profile[_ngcontent-%COMP%] {\n  z-index: 9;\n  position: relative;\n}\n\n.profile_img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-top: -55px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 5px solid #161616;\n}\n\n.save_profile[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 0;\n  color: #ffffff;\n  padding: 30px 0 10px;\n}\n\n.save_profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 14px;\n  color: #e0e0e0;\n  margin: 5px 0;\n}\n\n.save_profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #5438ff;\n  border-radius: 10px;\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  width: 100%;\n  color: #fff;\n  padding: 10px 0;\n  border: none;\n  outline: none;\n  margin-top: 20px;\n}\n\n.save_inkzer[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  \n}\n\n.inkzer[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  background: #000;\n  padding: 80px 80px 80px 0;\n}\n\n.inkzer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  color: #ffffff;\n}\n\n#accordion2[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 200;\n  position: relative;\n  font-family: Nunito;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 120%;\n  color: #ffffff;\n  text-decoration: none;\n}\n\n#accordion2[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\\f068\";\n  font-family: \"Font Awesome 5 Free\";\n  width: 20px;\n  height: 20px;\n  line-height: 17px;\n  border-radius: 50%;\n  font-size: 9px;\n  font-weight: 900;\n  color: #ffac00;\n  text-align: center;\n  text-shadow: none;\n  position: absolute;\n  top: 0px;\n  right: 15px;\n  border: 1px solid #ffac00;\n}\n\n#accordion2[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:before {\n  content: \"\\f067\";\n}\n\n#accordion2[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  \n  font-size: 15px;\n  color: #222;\n  line-height: 27px;\n  border: none;\n}\n\n#accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 200;\n  position: relative;\n  font-family: Nunito;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 120%;\n  color: #ffffff;\n  text-decoration: none;\n  padding: 5px 0;\n}\n\n#accordion2[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.inkzer_filter[_ngcontent-%COMP%] {\n  background: #161616;\n  box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 100%;\n  float: left;\n  height: auto;\n}\n\n.filter_line[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 30px 30px 20px;\n  border-bottom: 2px solid #000;\n}\n\n.filter_line[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: Nunito !important;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.filter_section[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n}\n\n.pagination_[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 20px;\n  padding-right: 20px;\n}\n\n.panel.panel-default[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #000;\n  padding: 15px 30px;\n  width: 100%;\n  float: left;\n}\n\n.search_btn[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  background: #5438ff;\n  border-radius: 6px;\n  border: none;\n  outline: none;\n  width: 100%;\n  padding: 15px;\n  margin-top: 25px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #000;\n  border-radius: 10px;\n  padding: 0px 20px 0px;\n  margin-bottom: 5px;\n  color: #e0e0e0;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-underline {\n  display: none;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282 !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282;\n}\n\nform[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  padding-right: 10px;\n}\n\n.mat-checkbox[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 16px;\n  line-height: 120%;\n  color: #ffffff;\n  margin-left: 10px !important;\n}\n\n.mat-checkbox[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  vertical-align: sub !important;\n}\n\n.starImg[_ngcontent-%COMP%] {\n  vertical-align: sub !important;\n}\n\n.service_check[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 10px 0;\n}\n\n.mat_serv[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n@media (max-width: 767px) {\n  .inkzer[_ngcontent-%COMP%] {\n    padding: 80px 20px;\n  }\n  .width_70[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .pagination_[_ngcontent-%COMP%] {\n    float: none;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n  }\n  .inkzer_details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-size: 46px;\n  }\n}\n\n.inkzer_filter[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .inkzer_filter[_ngcontent-%COMP%]   .card-link[_ngcontent-%COMP%], .inkzer_filter[_ngcontent-%COMP%]   .card-link[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  text-align: left;\n  color: hotpink;\n}\n\n.inkzer_filter[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n\n.inkzer_filter[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid #000;\n  padding: 5px 15px;\n}\n\n.inkzer_filter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 20px;\n  color: white;\n  webkit-animation: minus 0.5s;\n  margin: 7px 0;\n}\n\n@keyframes minus {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n[aria-expanded=\"false\"][_ngcontent-%COMP%]    > .expanded[_ngcontent-%COMP%], [aria-expanded=\"true\"][_ngcontent-%COMP%]    > .collapsed[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: inherit;\n  font-size: 14px;\n}\n\n.stars-line[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlY29tZS1pbmt6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtREFBbUQ7RUFDbkQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGlDQUFpQztBQUNuQzs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBR0E7OztFQUdFLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDIiwiZmlsZSI6ImJlY29tZS1pbmt6ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmt6ZXJfZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JlY29tZS5wbmcnKSA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbi15OiA5MHB4OyAqL1xufVxuXG4vKiAuc3RhcnMtbGluZSB7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufSAqL1xuXG4ucGFuZWwtYm9keSBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi53aWR0aF83MCB7XG4gIHdpZHRoOiA2MiU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaW5remVyX2RldGFpbHMgaDIge1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDYwcHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiA1MHB4OyAqL1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlua3plcl9kZXRhaWxzIHAge1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnJhdGUgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4uc2F2ZS1ib3gge1xuICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2F2ZV9ib3hfaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2F2ZV9ib3hfaW1nIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ucGxhbl9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDVweDtcbiAgb2JqZWN0LWZpdDogbm9uZTtcbiAgb2JqZWN0LXBvc2l0aW9uOiBub25lO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IDAlO1xufVxuXG4uc2F2ZV9wcm9maWxlIHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IC01NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMTYxNjE2O1xufVxuXG4uc2F2ZV9wcm9maWxlIGg0IHtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHggMCAxMHB4O1xufVxuXG4uc2F2ZV9wcm9maWxlIHAge1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5zYXZlX3Byb2ZpbGUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzU0MzhmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2F2ZV9pbmt6ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC8qIHBhZGRpbmctdG9wOiAzMHB4OyAqL1xufVxuXG4uaW5remVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwYWRkaW5nOiA4MHB4IDgwcHggODBweCAwO1xufVxuXG4uaW5remVyIGgyIHtcbiAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2FjY29yZGlvbjIgLnBhbmVsLXRpdGxlIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNhY2NvcmRpb24yIC5wYW5lbC10aXRsZSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDY4XCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZhYzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWMwMDtcbn1cblxuI2FjY29yZGlvbjIgLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XG59XG5cbiNhY2NvcmRpb24yIC5wYW5lbC1ib2R5IHtcbiAgLyogcGFkZGluZzogMHB4IDE1cHg7ICovXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyMjI7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNhY2NvcmRpb24gLmNhcmQtaGVhZGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4jYWNjb3JkaW9uMiAucGFuZWwtYm9keSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlua3plcl9maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDAgMCAwIC8gMTUlKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZpbHRlcl9saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG5cbi5maWx0ZXJfbGluZSBoNCB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG8gIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZpbHRlcl9zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGFnaW5hdGlvbl8ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5wYW5lbC5wYW5lbC1kZWZhdWx0IHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2VhcmNoX2J0biB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzU0MzhmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjZTBlMGUwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICM4NDgyODIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzg0ODI4Mjtcbn1cblxuZm9ybSBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm1hdC1jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTIwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hlY2tib3ggLmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWIgIWltcG9ydGFudDtcbn1cblxuLnN0YXJJbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViICFpbXBvcnRhbnQ7XG59XG5cbi5zZXJ2aWNlX2NoZWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5tYXRfc2VydiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaW5remVyIHtcbiAgICBwYWRkaW5nOiA4MHB4IDIwcHg7XG4gIH1cbiAgLndpZHRoXzcwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucGFnaW5hdGlvbl8ge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5pbmt6ZXJfZGV0YWlscyBoMntcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gIH1cbn1cblxuXG4uaW5remVyX2ZpbHRlciAuY2FyZC1oZWFkZXIsXG4uaW5remVyX2ZpbHRlciAuY2FyZC1saW5rLFxuLmlua3plcl9maWx0ZXIgLmNhcmQtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogaG90cGluaztcbn1cblxuLmlua3plcl9maWx0ZXIgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLmlua3plcl9maWx0ZXIgLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLmlua3plcl9maWx0ZXIgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdlYmtpdC1hbmltYXRpb246IG1pbnVzIDAuNXM7XG4gIG1hcmdpbjogN3B4IDA7XG59XG5cbkBrZXlmcmFtZXMgbWludXMge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5bYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdID4gLmV4cGFuZGVkLFxuW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdID4gLmNvbGxhcHNlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wYXJhZ3JhcGggcCB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdGFycy1saW5lIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _allmodules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./allmodules/auth/login/login.component */
      "0ZD5");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./material-module */
      "j5wd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var ngx_wow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-wow */
      "ME1z");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./interceptor */
      "Foz6");
      /* harmony import */


      var _allmodules_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./allmodules/loader/loader.component */
      "CjTh");
      /* harmony import */


      var _allmodules_auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./allmodules/auth/auth.module */
      "7D62");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], // { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PathLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _interceptor__WEBPACK_IMPORTED_MODULE_13__["Interceptor"],
          multi: true
        }, {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"]('564808505251-87oasag253ou381dln8d04pndsj0i7oe.apps.googleusercontent.com')
            }, {
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"]('307618951111264')
            }]
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_10__["NgwWowModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_11__["NgOtpInputModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _allmodules_auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _allmodules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _allmodules_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_10__["NgwWowModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_11__["NgOtpInputModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _allmodules_auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"]]
        });
      })();
      /***/

    },

    /***/
    "hU+n":
    /*!********************************************************!*\
      !*** ./src/app/allmodules/auth/auth-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function hUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "0ZD5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        children: [{
          path: '',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "iNcN":
    /*!***************************************************************!*\
      !*** ./src/app/allmodules/pages/success/success.component.ts ***!
      \***************************************************************/

    /*! exports provided: SuccessComponent */

    /***/
    function iNcN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessComponent", function () {
        return SuccessComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SuccessComponent = /*#__PURE__*/function () {
        function SuccessComponent(dialog, dialogRef, data) {
          _classCallCheck(this, SuccessComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.data = data;
          this.message = "";
          this.message = data.msg;
        }

        _createClass(SuccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Okclick",
          value: function Okclick() {
            this.dialogRef.close();
          }
        }]);

        return SuccessComponent;
      }();

      SuccessComponent.ɵfac = function SuccessComponent_Factory(t) {
        return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8));
      };

      SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SuccessComponent,
        selectors: [["app-success"]],
        decls: 11,
        vars: 1,
        consts: [[1, "delete_dialog"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close_btn"], [1, "delete_txt"], [1, "pt-2", "pb-3"], ["type", "button", 3, "click"]],
        template: function SuccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuccessComponent_Template_button_click_9_listener() {
              return ctx.Okclick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".delete_dialog[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n}\n.close_btn[_ngcontent-%COMP%]{\n    float: right;\n    color: #FFAC00;\n    outline: none;\n}\n.delete_txt[_ngcontent-%COMP%]{\n    width: 100%;\n    padding: 0 15px 15px;\n    float: left;\n    text-align: center;\n}\n.delete_txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 25px;\n}\n.delete_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #E0E0E0;\n    font-weight: 300;\n}\n.delete_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    \n    background: #5438FF;\n    border-radius: 8px;\n    width: 100%;\n    border: none;\n    color: #fff;\n    padding: 12px;\n    float: left;\n    font-size: 20px;\n    margin-top: 20px;\n    outline: none;\n}\n.mat-icon[_ngcontent-%COMP%]{\n    font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZV9kaWFsb2d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY2xvc2VfYnRue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI0ZGQUMwMDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmRlbGV0ZV90eHR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRlbGV0ZV90eHQgaDN7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmRlbGV0ZV90eHQgcHtcbiAgICBjb2xvcjogI0UwRTBFMDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmRlbGV0ZV90eHQgYnV0dG9ue1xuICAgIC8qIGJhY2tncm91bmQ6ICNGRjAwMDA7ICovXG4gICAgYmFja2dyb3VuZDogIzU0MzhGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5tYXQtaWNvbntcbiAgICBmb250LXNpemU6IDM1cHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "j5wd":
    /*!************************************!*\
      !*** ./src/app/material-module.ts ***!
      \************************************/

    /*! exports provided: DemoMaterialModule */

    /***/
    function j5wd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
        return DemoMaterialModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DemoMaterialModule = function DemoMaterialModule() {
        _classCallCheck(this, DemoMaterialModule);
      };

      DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
        type: DemoMaterialModule
      });
      DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
        factory: function DemoMaterialModule_Factory(t) {
          return new (t || DemoMaterialModule)();
        },
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
        });
      })();
      /***/

    },

    /***/
    "jMXS":
    /*!******************************************************************************!*\
      !*** ./src/app/allmodules/auth/login/login-select/login-select.component.ts ***!
      \******************************************************************************/

    /*! exports provided: LoginSelectComponent */

    /***/
    function jMXS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginSelectComponent", function () {
        return LoginSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var LoginSelectComponent = /*#__PURE__*/function () {
        function LoginSelectComponent() {
          _classCallCheck(this, LoginSelectComponent);
        }

        _createClass(LoginSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "inkerLogin",
          value: function inkerLogin() {
            window.location.href = 'https://inkzup.com/Inkzer';
          }
        }]);

        return LoginSelectComponent;
      }();

      LoginSelectComponent.ɵfac = function LoginSelectComponent_Factory(t) {
        return new (t || LoginSelectComponent)();
      };

      LoginSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginSelectComponent,
        selectors: [["app-login-select"]],
        decls: 32,
        vars: 0,
        consts: [[1, "auth", "text-center"], [1, "container"], [1, "row"], [1, "col-md-8", "m-auto"], ["src", "assets/images/logo.svg", "alt", "Logo Image", "routerLink", "", 1, "cursor"], [2, "color", "#fff", "margin", "30px 0"], [1, "radio"], [1, "auth_form", "text-left", "mat-card"], [1, "account", 2, "border-bottom", "2px solid #000"], [1, "account_check"], [1, "example-margin", 3, "click"], [1, "col-md-4", "col-lg-3", "col-6"], [1, "account_img_box"], ["src", "assets/images/inkzers.svg", 1, "img-fluid"], [1, "col-md-8", "col-lg-9", "col-12"], [1, "account_text"], [1, "account"], ["routerLink", "/login", 1, "example-margin"], [1, "col-md-4", "col-lg-3", "col-6", "my-3"], ["src", "assets/images/inkzup_get.svg"]],
        template: function LoginSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Which type of account would you like to login into? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSelectComponent_Template_mat_checkbox_click_12_listener() {
              return ctx.inkerLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Inkzers- Tattoo Artists Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-checkbox", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Get Inkzed- Clients Account");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  background: #060606;\n  background-image: url('background.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  max-width: 100%;\n  float: left;\n  padding: 30px 0 20px;\n  \n  min-height: 100%;\n}\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth_form[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 25px 0px 30px;\n  color: #fff;\n  background: #1e1e1e;\n}\n.auth[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 5px;\n  font-size: 30px;\n  color: #fff;\n  float: left;\n  width: 100%;\n  padding-top: 30px;\n}\n.auth[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  width: 80%;\n  margin: 0 auto;\n  padding-bottom: 50px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 25px;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffac00;\n  text-decoration: underline;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #dedede;\n  width: 100%;\n  float: left;\n  padding-bottom: 10px;\n}\n.account[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 20px 30px;\n  position: relative;\n}\n.account_img_box[_ngcontent-%COMP%] {\n  background: #000000;\n  border-radius: 20px;\n  width: 100%;\n  float: left;\n  margin-bottom: 25px;\n}\n.account_img_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100%;\n}\n.account_text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  white-space: break-spaces;\n  margin: 47px 33px;\n}\n.account_check[_ngcontent-%COMP%]   .account_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  font-size: 14px;\n  padding-bottom: 20px;\n  white-space: normal;\n}\n@media screen and (max-width:767px) {\n  .account_text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    margin: 45px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVDQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoibG9naW4tc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XG4gIGJhY2tncm91bmQ6ICMwNjA2MDY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDMwcHggMCAyMHB4O1xuICAvKmhlaWdodDogMTAwdmg7Ki9cbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5hdXRoX2ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdXRoX2Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHggMHB4IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuLmF1dGggaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5hdXRoIHAge1xuICBjb2xvcjogI2UwZTBlMDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmF1dGhfZm9ybSBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hdXRoX2Zvcm0gaW1nIHtcbiAgd2lkdGg6IDY1JTtcbn1cbi5hdXRoX2Zvcm0gaDYgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXV0aF9mb3JtIHAgYSB7XG4gIGNvbG9yOiAjZmZhYzAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5hdXRoX2Zvcm0gcCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjZGVkZWRlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmFjY291bnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFjY291bnRfaW1nX2JveCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5hY2NvdW50X2ltZ19ib3ggaW1nIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWNjb3VudF90ZXh0IGg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICBtYXJnaW46IDQ3cHggMzNweDtcbn1cbi5hY2NvdW50X2NoZWNrIC5hY2NvdW50X3RleHQgcCB7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAuYWNjb3VudF90ZXh0IGg1e1xuICAgIG1hcmdpbjogNDVweCAwO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "lLVm":
    /*!**************************************************************!*\
      !*** ./src/app/allmodules/layout/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function lLVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var pusher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! pusher-js */
      "eC5B");
      /* harmony import */


      var pusher_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      function HeaderComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Bookings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_13_samp_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "samp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.msgCount);
        }
      }

      function HeaderComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Messages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_li_13_samp_3_Template, 2, 1, "samp", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.msgCount > 0);
        }
      }

      function HeaderComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Favorites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " keyboard_arrow_down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-menu", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Payment History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_17_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r5.profile_img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(clientService) {
          _classCallCheck(this, HeaderComponent);

          this.clientService = clientService;
          this.checkLogin = false;
          this.checkToken = localStorage.getItem('token') ? localStorage.getItem('token') : 0;
          this.user_name = localStorage.getItem('user_name') ? localStorage.getItem('user_name') : '';
          this.profile_img = localStorage.getItem('profile_img') ? localStorage.getItem('profile_img') : '';
          this.user_id = localStorage.getItem('client_id');
          this.channel_name = '';
          this.messageData = [];
          this.msgCount = 0; // this.checkLoginUser();

          this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_0___default.a(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusherAppKey, {
            cluster: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusherCluster
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            if (this.checkToken) {
              this.checkLogin = true;
            }

            if (this.checkToken) {
              var msgCount = this.pusher.channel('msgCount_' + this.user_id);

              if (msgCount) {
                return;
              } else {
                console.log();
                var channel = this.pusher.subscribe('msgCount_' + this.user_id);
                channel.bind('getMessageUnreadCount', function (data) {
                  _this24.msgCount = data['count'];
                });
                this.getUnreadMsg();
              }
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.checkLogin = false;
            this.clientService.logout();
          }
        }, {
          key: "checkLoginUser",
          value: function checkLoginUser() {
            var _this25 = this;

            this.clientService.checkLogin().subscribe(function (res) {
              _this25.checkLogin = true;
            }, function (err) {
              _this25.checkLogin = false;
            });
          }
        }, {
          key: "getUnreadMsg",
          value: function getUnreadMsg() {
            var _this26 = this;

            this.clientService.getUnreadMsg().subscribe(function (res) {
              _this26.msgCount = res;
            }, function (err) {
              console.warn(err);
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 18,
        vars: 6,
        consts: [[1, "head"], [1, "navbar", "fixed-top", "navbar-expand-lg"], [1, "container"], ["href", "https://inkzup.com/", 1, "navbar-brand"], ["src", "assets/images/logo_1.png", 1, "logo"], ["id", "navbar", 1, "collapse", "navbar-collapse"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/pages/my-booking", "routerLinkActive", "active", 1, "nav-link", "Explore", 2, "text-transform", "uppercase"], ["routerLink", "/pages/message", "routerLinkActive", "active", 1, "nav-link", "Explore", 2, "text-transform", "uppercase"], [4, "ngIf"], ["routerLink", "/pages/save-inkzer", "routerLinkActive", "active", 1, "nav-link", "Favorites", 2, "text-transform", "uppercase"], ["routerLink", "/login-select", 1, "login_btn"], ["routerLink", "/account", 1, "signup_btn"], ["mat-button", "", 1, "drodown-btn", 3, "matMenuTriggerFor"], [1, "profile_img", 3, "src"], [1, "material-icons"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "porfile_btn"], ["routerLink", "/pages/profile", 1, "nav-link"], ["mat-menu-item", "", 2, "color", "#fff", "border-bottom", "2px solid #161616"], ["routerLink", "/pages/payment", 1, "nav-link"], ["mat-menu-item", "", 2, "color", "#fff", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 0, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 4, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 0, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 3, 0, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 0, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 15, 2, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.checkLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.checkLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkLogin);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]],
        styles: [".head[_ngcontent-%COMP%] {\n    background: #161616;\n    width: 100%;\n    float: left;\n    height: 90px;\n    z-index: 999;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    background: #161616;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: left;\n    padding-left: 0;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 16px;\n    padding: 20px 35px 0;\n    font-weight: 600;\n}\n\n.active[_ngcontent-%COMP%] {\n    color: #fbac18 !important;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n    background: rgba(251, 172, 24, 0.01);\n    border: 2px solid #fbac18;\n    color: #fff;\n    font-size: 16px;\n    padding: 6px 20px 6px;\n    border-radius: 6px;\n    margin-top: 10px;\n    margin: 12px 20px 0;\n    outline: none;\n    transform: translateY(0);\n    transition: transform .2s cubic-bezier(.2,0,.4,1);\n}\n\n.login_btn[_ngcontent-%COMP%]:hover{\n    transform: translateY(-2px);\n\n}\n\n.signup_btn[_ngcontent-%COMP%] {\n    background: #fbac18;\n    border: 2px solid #fbac18;\n    color: #fff;\n    font-size: 16px;\n    padding: 6px 20px 7px;\n    border-radius: 6px;\n    margin-top: 12px;\n    outline: none;\n    transform: translateY(0);\n    transition: transform .2s cubic-bezier(.2,0,.4,1);\n}\n\n.signup_btn[_ngcontent-%COMP%]:hover{\n    transform: translateY(-2px);\n\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n    color: #fbac18 !important;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    color: #fbac18;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.profile_dropdown[_ngcontent-%COMP%] {\n    background: #161616;\n    border: none;\n    color: #fff;\n    font-size: 14px;\n}\n\n.profile_dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24%;\n    padding: 5px;\n}\n\n.profile_dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: text-bottom;\n    color: #ffac00;\n}\n\n.profile_dropdown[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n    background: #161616;\n}\n\n.profile_dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 16px;\n    border-bottom: 1px solid #000;\n    padding: 10px 30px;\n}\n\n.profile_dropdown[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\n    background: #161616;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-item[_ngcontent-%COMP%]:hover {\n    background: #161616;\n    color: #fff;\n}\n\n.drodown-btn[_ngcontent-%COMP%] {\n    outline: none;\n    border: none;\n}\n\n.drodown-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 45%;\n    margin: 6px 10px 5px 10px;\n}\n\n.drodown-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #fbac18;\n}\n\n.drodown-btn[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 10px 0;\n}\n\nsamp[_ngcontent-%COMP%] {\n    float: right;\n    border-radius: 50%;\n    line-height: 17px;\n    width: 17px;\n    text-align: center;\n    margin-left: 6px;\n    font-size: 12px;\n    margin-top: 3px;\n    background: #ffac00;\n    color: #000;\n    font-weight: bold;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.porfile_btn[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    color: #fff;\n    border-bottom: 2px solid #161616;\n}\n\n@media (max-width: 768px) {\n    .navbar-nav[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        margin: auto;\n    }\n    .navbar-brand[_ngcontent-%COMP%] {\n        width: 115px;\n        padding: 9px 0 5px 10px !important;\n    }\n    .head[_ngcontent-%COMP%] {\n        height: 70px !important;\n    }\n    .logo[_ngcontent-%COMP%] {\n        width: 57%;\n    }\n    .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        padding: 12px 35px 12px 35px;\n    }\n}\n\n@media (max-width: 991px) {\n    .signup_btn[_ngcontent-%COMP%] {\n        float: left !important;\n        margin-bottom: 40px;\n        margin-top: 0;\n    }\n    .login_btn[_ngcontent-%COMP%] {\n        margin: 20px 0;\n    }\n    .navbar-toggler[_ngcontent-%COMP%]:focus, .navbar-toggler[_ngcontent-%COMP%]:hover {\n        outline: none;\n    }\n    .Artists[_ngcontent-%COMP%] {\n        padding-bottom: 15px !important;\n    }\n    .navbar-nav[_ngcontent-%COMP%] {\n        float: none;\n    }\n    .navbar-collapse[_ngcontent-%COMP%] {\n        background: #161616;\n        width: 100%;\n        float: left;\n    }\n    .navbar[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        float: left;\n        width: 100%;\n        z-index: 999;\n    }\n    .navbar-brand[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n    .head[_ngcontent-%COMP%] {\n        height: 80px;\n        padding-top: 10px;\n    }\n    .head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin-top: 5px;\n        float: right;\n        display: flex;\n        float: left;\n    }\n    .nav-item[_ngcontent-%COMP%] {\n        margin: auto !important;\n        justify-content: center;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .container-fluid[_ngcontent-%COMP%] {\n        padding: 0 187px;\n    }\n}\n\n.profile_img[_ngcontent-%COMP%] {\n    width: 40px !important;\n    height: 40px;\n    border-radius: 50%;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n    width: 85%;\n}\n\nmat-menu[_ngcontent-%COMP%] {\n    padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsaURBQWlEO0FBQ3JEOztBQUNBO0lBQ0ksMkJBQTJCOztBQUUvQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlEQUFpRDtBQUNyRDs7QUFDQTtJQUNJLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO0lBQ2Y7SUFDQTtRQUNJLHVCQUF1QjtRQUN2Qix1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogOTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7XG59XG5cbi5uYXYtbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uYXYtaXRlbSBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMjBweCAzNXB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmYmFjMTggIWltcG9ydGFudDtcbn1cblxuLmxvZ2luX2J0biB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTEsIDE3MiwgMjQsIDAuMDEpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYmFjMTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDZweCAyMHB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW46IDEycHggMjBweCAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC4yLDAsLjQsMSk7XG59XG4ubG9naW5fYnRuOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblxufVxuLnNpZ251cF9idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmYmFjMTg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZiYWMxODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogNnB4IDIwcHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC4yLDAsLjQsMSk7XG59XG4uc2lnbnVwX2J0bjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZiYWMxOCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiAubWF0LWljb24ge1xuICAgIGNvbG9yOiAjZmJhYzE4O1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZmlsZV9kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZDogIzE2MTYxNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZmlsZV9kcm9wZG93biBpbWcge1xuICAgIHdpZHRoOiAyNCU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvZmlsZV9kcm9wZG93biBzcGFuIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgY29sb3I6ICNmZmFjMDA7XG59XG5cbi5wcm9maWxlX2Ryb3Bkb3duIC5kcm9wZG93bi1tZW51LnNob3cge1xuICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7XG59XG5cbi5wcm9maWxlX2Ryb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuXG4ucHJvZmlsZV9kcm9wZG93biAuZHJvcGRvd24taXRlbS5hY3RpdmUsXG4uZHJvcGRvd24taXRlbTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7XG59XG5cbi5kcm9wZG93bi1pdGVtOmZvY3VzLFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxNjE2MTY7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5kcm9kb3duLWJ0biB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5kcm9kb3duLWJ0biBpbWcge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luOiA2cHggMTBweCA1cHggMTBweDtcbn1cblxuLmRyb2Rvd24tYnRuIHNwYW4ge1xuICAgIGNvbG9yOiAjZmJhYzE4O1xufVxuXG4uZHJvZG93bi1idG4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuc2FtcCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmFjMDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXYtbGluayB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnBvcmZpbGVfYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTYxNjE2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICB3aWR0aDogMTE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDlweCAwIDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5oZWFkIHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDU3JTtcbiAgICB9XG4gICAgLm5hdi1pdGVtIGEge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDM1cHggMTJweCAzNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnNpZ251cF9idG4ge1xuICAgICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAubG9naW5fYnRuIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuICAgIC5uYXZiYXItdG9nZ2xlcjpmb2N1cyxcbiAgICAubmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuQXJ0aXN0cyB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5uYXZiYXItbmF2IHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTYxNjE2O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIC5uYXZiYXIge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgIH1cbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmhlYWQge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuaGVhZCBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICBwYWRkaW5nOiAwIDE4N3B4O1xuICAgIH1cbn1cblxuLnByb2ZpbGVfaW1nIHtcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxubWF0LW1lbnUge1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "ld5U":
    /*!****************************************************************************!*\
      !*** ./src/app/allmodules/auth/congratulation/congratulation.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CongratulationComponent */

    /***/
    function ld5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratulationComponent", function () {
        return CongratulationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CongratulationComponent = /*#__PURE__*/function () {
        function CongratulationComponent() {
          _classCallCheck(this, CongratulationComponent);
        }

        _createClass(CongratulationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CongratulationComponent;
      }();

      CongratulationComponent.ɵfac = function CongratulationComponent_Factory(t) {
        return new (t || CongratulationComponent)();
      };

      CongratulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CongratulationComponent,
        selectors: [["app-congratulation"]],
        decls: 9,
        vars: 0,
        consts: [[1, "delete_dialog"], ["src", "assets/images/logo.svg", "width", "90"], [1, "delete_txt"], ["routerLink", "/login"]],
        template: function CongratulationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Welcome to INKZUP! We are glad that you are here. You have successfully registered your account with us.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please login to Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".delete_dialog[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0;\n    min-height: 100%;\n}\n.delete_dialog[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    text-align: center;\n    padding: 50px 0;\n}\n.delete_txt[_ngcontent-%COMP%]{\n   width: 50%;\n   margin: 120px auto;\n}\n.delete_txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 30px;\n    font-weight: 500;\n    padding-bottom: 20px;\n}\n.delete_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #E0E0E0;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 27px;\n}\n.delete_txt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 8px;\n    width: 45%;\n    border: none;\n    color: #fff;\n    margin: 20px auto;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 13px 0 15px;\n    text-align: center;\n    outline: none;\n}\n@media (max-width:1024px){\n    .delete_txt[_ngcontent-%COMP%] {\n        width: 90%;\n        margin: 80px auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQWdFO0lBQ2hFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7R0FDRyxVQUFVO0dBQ1Ysa0JBQWtCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6ImNvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlX2RpYWxvZ3tcbiAgICBiYWNrZ3JvdW5kOiAjMDYwNjA2O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmRlbGV0ZV9kaWFsb2d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5kZWxldGVfdHh0e1xuICAgd2lkdGg6IDUwJTtcbiAgIG1hcmdpbjogMTIwcHggYXV0bztcbn1cbi5kZWxldGVfdHh0IGgze1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmRlbGV0ZV90eHQgcHtcbiAgICBjb2xvcjogI0UwRTBFMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbn1cbi5kZWxldGVfdHh0IGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiAjNTQzOEZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTNweCAwIDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCl7XG4gICAgLmRlbGV0ZV90eHQge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDgwcHggYXV0bztcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _allmodules_auth_client_register_client_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allmodules/auth/client-register/client-register.component */
      "ykfC");
      /* harmony import */


      var _allmodules_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./allmodules/auth/forgot-password/forgot-password.component */
      "wXU2");
      /* harmony import */


      var _allmodules_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./allmodules/auth/register/register.component */
      "TKYk");
      /* harmony import */


      var _allmodules_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./allmodules/auth/reset-password/reset-password.component */
      "xOKg");
      /* harmony import */


      var _allmodules_auth_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./allmodules/auth/verification-code/verification-code.component */
      "OieM");
      /* harmony import */


      var _allmodules_auth_verify_phone_verify_phone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./allmodules/auth/verify-phone/verify-phone.component */
      "97zl");
      /* harmony import */


      var _allmodules_auth_vertify_email_vertify_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./allmodules/auth/vertify-email/vertify-email.component */
      "PNJj");
      /* harmony import */


      var _allmodules_auth_verified_email_verified_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./allmodules/auth/verified-email/verified-email.component */
      "Htxs");
      /* harmony import */


      var _allmodules_auth_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./allmodules/auth/congratulation/congratulation.component */
      "ld5U");
      /* harmony import */


      var _allmodules_auth_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./allmodules/auth/set-password/set-password.component */
      "DHuD");
      /* harmony import */


      var _allmodules_layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./allmodules/layout/header/header.component */
      "lLVm");
      /* harmony import */


      var _allmodules_pages_inkzer_details_inkzer_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./allmodules/pages/inkzer-details/inkzer-details.component */
      "VZhT");
      /* harmony import */


      var _allmodules_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./allmodules/pages/not-found/not-found.component */
      "B7RP");
      /* harmony import */


      var _allmodules_auth_login_login_select_login_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./allmodules/auth/login/login-select/login-select.component */
      "jMXS");
      /* harmony import */


      var _allmodules_auth_artist_verified_artist_verified_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./allmodules/auth/artist-verified/artist-verified.component */
      "TwQ9");
      /* harmony import */


      var src_app_allmodules_pages_inkzers_become_inkzer_become_inkzer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/allmodules/pages/inkzers/become-inkzer/become-inkzer.component */
      "Y6O2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: src_app_allmodules_pages_inkzers_become_inkzer_become_inkzer_component__WEBPACK_IMPORTED_MODULE_16__["BecomeInkzerComponent"]
      }, {
        path: 'home',
        component: src_app_allmodules_pages_inkzers_become_inkzer_become_inkzer_component__WEBPACK_IMPORTED_MODULE_16__["BecomeInkzerComponent"]
      }, {
        path: 'forgot-password',
        component: _allmodules_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
      }, {
        path: 'booking/:id',
        component: _allmodules_pages_inkzer_details_inkzer_details_component__WEBPACK_IMPORTED_MODULE_12__["InkzerDetailsComponent"]
      }, {
        path: 'register',
        component: _allmodules_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
      }, {
        path: 'verify-code',
        component: _allmodules_auth_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_5__["VerificationCodeComponent"]
      }, {
        path: 'reset-password/:token',
        component: _allmodules_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
      }, {
        path: 'account',
        component: _allmodules_auth_client_register_client_register_component__WEBPACK_IMPORTED_MODULE_1__["ClientRegisterComponent"]
      }, {
        path: 'login-select',
        component: _allmodules_auth_login_login_select_login_select_component__WEBPACK_IMPORTED_MODULE_14__["LoginSelectComponent"]
      }, {
        path: 'email-verify',
        component: _allmodules_auth_vertify_email_vertify_email_component__WEBPACK_IMPORTED_MODULE_7__["VertifyEmailComponent"]
      }, {
        path: 'email-verified/:token',
        component: _allmodules_auth_verified_email_verified_email_component__WEBPACK_IMPORTED_MODULE_8__["VerifiedEmailComponent"]
      }, {
        path: 'artist_verified',
        component: _allmodules_auth_artist_verified_artist_verified_component__WEBPACK_IMPORTED_MODULE_15__["ArtistVerifiedComponent"]
      }, {
        path: 'artist_verified/:token',
        component: _allmodules_auth_artist_verified_artist_verified_component__WEBPACK_IMPORTED_MODULE_15__["ArtistVerifiedComponent"]
      }, {
        path: 'phone-verify',
        component: _allmodules_auth_verify_phone_verify_phone_component__WEBPACK_IMPORTED_MODULE_6__["VerifyPhoneComponent"]
      }, {
        path: 'resgister-success',
        component: _allmodules_auth_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_9__["CongratulationComponent"]
      }, {
        path: 'set-password',
        component: _allmodules_auth_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_10__["SetPasswordComponent"]
      }, {
        path: 'sidebar',
        component: _allmodules_layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
      }, {
        path: '404',
        component: _allmodules_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
      }, // {
      //   path: 'Inkzer',
      //   component: RegisterComponent,
      //   children: [{ path: '/register', component: RegisterComponent }],
      // },
      //Wild Card Route for 404 request
      // { path: '**', pathMatch: 'full', component: NotFoundComponent },
      {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./allmodules/auth/auth.module */
          "7D62")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | allmodules-main-main-module */
          [__webpack_require__.e("default~allmodules-main-main-module~allmodules-pages-pages-module"), __webpack_require__.e("allmodules-main-main-module")]).then(__webpack_require__.bind(null,
          /*! ./allmodules/main/main.module */
          "Ousb")).then(function (m) {
            return m.MainModule;
          });
        }
      }, {
        path: 'pages',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | allmodules-pages-pages-module */
          [__webpack_require__.e("default~allmodules-main-main-module~allmodules-pages-pages-module"), __webpack_require__.e("allmodules-pages-pages-module")]).then(__webpack_require__.bind(null,
          /*! ./allmodules/pages/pages.module */
          "tQPa")).then(function (m) {
            return m.PagesModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wXU2":
    /*!******************************************************************************!*\
      !*** ./src/app/allmodules/auth/forgot-password/forgot-password.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function wXU2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      function ForgotPasswordComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      function ForgotPasswordComponent_p_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your account's email and we'll send you the code to reset your password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.form_success, "");
        }
      }

      function ForgotPasswordComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.email_err, "");
        }
      }

      function ForgotPasswordComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.form_error, "");
        }
      }

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(formBuilder, router, cookieService, ClientService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.cookieService = cookieService;
          this.ClientService = ClientService;
          this.email_err = "";
          this.form_error = "";
          this.form_success = "";
          this.isLoad = false;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotPasswordForm = this.formBuilder.group({
              email: ['', []]
            });
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            var _this27 = this;

            if (!this.forgotPasswordForm.valid) {
              return;
            }

            this.isLoad = true;
            this.form_error = "";
            this.form_success = "";
            this.email_err = "";
            this.ClientService.forgotPassword(this.forgotPasswordForm.value).subscribe(function (res) {
              _this27.isLoad = false;

              _this27.forgotPasswordForm.reset();

              if (res) {
                _this27.form_success = res.message;
              }

              _this27.cookieService["delete"]('email');

              _this27.cookieService["delete"]('password');

              _this27.cookieService["delete"]('remember'); // 

            }, function (err) {
              _this27.isLoad = false;

              if (err.error) {
                _this27.email_err = err.error.email;
              }

              if (err.error.error) {
                _this27.form_error = err.error.error;
              }
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 26,
        vars: 7,
        consts: [[4, "ngIf"], [1, "auth"], [1, "container"], [1, "row"], [1, "col-md-5"], ["src", "assets/images/logo.svg", "alt", "Logo Image"], ["type", "button", "mat-stroked-button", "", "routerLink", "/login", 1, "google_btn"], [1, "auth_form"], ["class", "text-light float-left form-success", 4, "ngIf"], ["name", "forgotPasswordForm", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [3, "floatLabel"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "type", "email", "autocomplete", "off"], ["matPrefix", "", "src", "assets/images/email.png", 1, "mt-1"], ["class", "text-danger", 4, "ngIf"], [1, "submit_btn"], [1, "col-md-1"], [1, "col-md-6"], [1, "auth_img"], ["src", "assets/images/auth.png", "alt", ""], [1, "text-light", "float-left", "form-success"], [1, "text-danger"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgotPasswordComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotPasswordComponent_p_11_Template, 2, 0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordComponent_span_12_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_13_listener() {
              return ctx.forgotPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_span_18_Template, 2, 1, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotPasswordComponent_span_19_Template, 2, 1, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Send Email Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.form_success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form_success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email_err);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form_error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_9__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  background: #060606;\n  background-image: url('background.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  float: left;\n  padding: 50px 0;\n  min-height: 100%;\n}\n\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth_form[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 50px 0 30px;\n  color: #fff;\n}\n\n.auth_form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 30px;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(64, 64, 64, 0.5);\n  border-radius: 10px;\n  padding: 0 20px;\n  margin-bottom: 5px;\n  color: #fff;\n}\n\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-underline {\n  display: none;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282 !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #848282;\n}\n\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.submit_btn[_ngcontent-%COMP%] {\n  background: #5438ff;\n  border-radius: 10px;\n  width: 100%;\n  border: none;\n  color: #fff;\n  outline: none;\n  padding: 15px;\n  font-size: 16px;\n  float: left;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.google_btn[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #fff;\n  text-align: right;\n  float: right;\n  font-weight: 100;\n}\n\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #dedede;\n  padding-bottom: 30px;\n}\n\n.form-success[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVDQUErRDtFQUMvRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgge1xuICBiYWNrZ3JvdW5kOiAjMDYwNjA2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNTBweCAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uYXV0aF9pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoX2Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDUwcHggMCAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmF1dGhfZm9ybSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmF1dGhfZm9ybSBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYXV0aF9mb3JtIGltZyB7XG4gIHdpZHRoOiA2NSU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzg0ODI4MiAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjODQ4MjgyO1xufVxuXG4uYXV0aF9mb3JtIGg2IGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnN1Ym1pdF9idG4ge1xuICBiYWNrZ3JvdW5kOiAjNTQzOGZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmdvb2dsZV9idG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmF1dGhfZm9ybSBwIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1zdWNjZXNzIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "wcx/":
    /*!***************************************************!*\
      !*** ./src/app/allmodules/auth/auth.component.ts ***!
      \***************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function wcx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 2,
        vars: 0,
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auth works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "xOKg":
    /*!****************************************************************************!*\
      !*** ./src/app/allmodules/auth/reset-password/reset-password.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function xOKg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../success-auth/success-auth.component */
      "SvWm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/client.service */
      "Ig3N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../auth-loader/auth-loader.component */
      "DeEF");

      function ResetPasswordComponent_app_auth_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-auth-loader");
        }
      }

      function ResetPasswordComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.formErr, "");
        }
      }

      function ResetPasswordComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.password_err, "");
        }
      }

      function ResetPasswordComponent_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.cPassword_err, "");
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(formBuilder, router, dialog, actRoute, clientService) {
          _classCallCheck(this, ResetPasswordComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.dialog = dialog;
          this.actRoute = actRoute;
          this.clientService = clientService;
          this.password_err = "";
          this.cPassword_err = "";
          this.formErr = "";
          this.formSuccess = "";
          this.isLoad = false;
          this.hide = true;
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetPasswordsForm = this.formBuilder.group({
              password: ['', []],
              confirm_password: ['', []],
              token: ['', []]
            });
          }
        }, {
          key: "resetPasswords",
          value: function resetPasswords() {
            var _this28 = this;

            this.isLoad = true;
            this.password_err = "";
            this.cPassword_err = "";
            this.formErr = "";
            this.formSuccess = "";
            this.resetPasswordsForm.patchValue({
              'token': this.actRoute.snapshot.params.token
            });
            this.clientService.resetPassword(this.resetPasswordsForm.value).subscribe(function (res) {
              _this28.isLoad = false;

              _this28.resetPasswordsForm.reset();

              if (res) {
                _this28.successDialog();

                _this28.router.navigate(['/login']);
              }
            }, function (err) {
              _this28.isLoad = false;

              if (err.error) {
                _this28.formErr = err.error.error;

                if (err.error.password) {
                  _this28.password_err = err.error.password;
                }

                if (err.error.confirm_password) {
                  _this28.cPassword_err = err.error.confirm_password;
                }
              }
            });
          }
        }, {
          key: "successDialog",
          value: function successDialog() {
            var dialogRef = this.dialog.open(_success_auth_success_auth_component__WEBPACK_IMPORTED_MODULE_0__["SuccessAuthComponent"], {
              width: '460px',
              data: {
                'msg': 'Reset password successfully.Please login to continue'
              }
            });
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]));
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 34,
        vars: 15,
        consts: [[4, "ngIf"], [1, "auth"], [1, "container"], [1, "text-center"], ["routerLink", "", "src", "assets/images/logo.svg", "alt", "Logo Image", 1, "pointer"], [1, "row"], [1, "col-md-5"], [1, "auth_form"], ["class", "text-danger", 4, "ngIf"], ["name", "resetPasswordsForm", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [3, "floatLabel"], ["matInput", "", "placeholder", "Create Password", "formControlName", "password", "autocomplete", "off", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [2, "color", "#ffac00"], ["matPrefix", "", "src", "assets/images/password.png"], [1, ""], ["matInput", "", "placeholder", "Confirm Password", "formControlName", "confirm_password", "autocomplete", "off", 3, "type"], [1, "submit_btn"], [1, "col-md-1"], [1, "col-md-6"], [1, "auth_img"], ["src", "assets/images/auth.png", "alt", ""], [1, "text-danger"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResetPasswordComponent_app_auth_loader_0_Template, 1, 0, "app-auth-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResetPasswordComponent_span_10_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_11_listener() {
              return ctx.resetPasswords();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_15_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ResetPasswordComponent_span_19_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_23_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ResetPasswordComponent_span_27_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoad);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formErr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetPasswordsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.hide ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password_err);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", "never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.hide ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cPassword_err);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _auth_loader_auth_loader_component__WEBPACK_IMPORTED_MODULE_11__["AuthLoaderComponent"]],
        styles: [".auth[_ngcontent-%COMP%]{\n    background: #060606;\n    background-image:  url('background.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    float: left;\n    padding: 50px 0;\n    min-height: 100%;\n    \n}\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.auth_form[_ngcontent-%COMP%]{\n    width: 100%;\n    float: left;\n    padding: 50px 0 30px;\n    color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-weight: 500;\n    font-size: 30px;\n    margin-bottom: 40px;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    font-size: 14px;\n    font-weight: 500;\n}\n.mat-form-field[_ngcontent-%COMP%]{\n    width: 100%;\n    background: rgba(64, 64, 64, 0.5);\n    border-radius: 10px;\n    padding: 0 20px;\n    margin-bottom: 5px;\n    color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 65%;\n}\n  .mat-form-field.mat-focused .mat-form-field-underline {\n    display: none;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{\n    color: #848282 !important;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    color: #848282;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #fff;\n}\n.submit_btn[_ngcontent-%COMP%]{\n    background: #5438FF;\n    border-radius: 10px;\n    width: 100%;\n    border: none;\n    color: #fff;\n    outline: none;\n    padding: 15px;\n    font-size: 16px;\n    float: left;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n.google_btn[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    color: #fff;\n    text-align: right;\n    float: right;\n    font-weight: 100;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-weight: 100;\n    color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQWdFO0lBQ2hFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoe1xuICAgIGJhY2tncm91bmQ6ICMwNjA2MDY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgLyogaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAqL1xufVxuLmF1dGhfaW1nIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5hdXRoX2Zvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNTBweCAwIDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXV0aF9mb3JtIGgze1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uYXV0aF9mb3JtIGg2e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXV0aF9mb3JtIGltZ3tcbiAgICB3aWR0aDogNjUlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgICBjb2xvcjogIzg0ODI4MiAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjODQ4MjgyO1xufVxuLmF1dGhfZm9ybSBoNiBhe1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnN1Ym1pdF9idG57XG4gICAgYmFja2dyb3VuZDogIzU0MzhGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5nb29nbGVfYnRue1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uYXV0aF9mb3JtIHB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBjb2xvcjogI2RlZGVkZTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ykfC":
    /*!******************************************************************************!*\
      !*** ./src/app/allmodules/auth/client-register/client-register.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ClientRegisterComponent */

    /***/
    function ykfC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientRegisterComponent", function () {
        return ClientRegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var ClientRegisterComponent = /*#__PURE__*/function () {
        function ClientRegisterComponent(route) {
          _classCallCheck(this, ClientRegisterComponent);

          this.route = route;
        }

        _createClass(ClientRegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "becomeInker",
          value: function becomeInker() {
            // window.location.href = 'https://inkzup.com/Inkzer/register';
            window.location.href = 'https://inkzup.com/Inkzer/#/register'; // window.open("https://inkzup.com/Inkzer/register");
            // this.route.navigate(["https://inkzup.com/Inkzer/#/register"]);
            // document.location.href = 'http://localhost:4400/';
          }
        }]);

        return ClientRegisterComponent;
      }();

      ClientRegisterComponent.ɵfac = function ClientRegisterComponent_Factory(t) {
        return new (t || ClientRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ClientRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClientRegisterComponent,
        selectors: [["app-client-register"]],
        decls: 37,
        vars: 0,
        consts: [[1, "auth", "text-center"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-11", "m-auto"], ["src", "assets/images/logo.svg", "alt", "Logo Image", "routerLink", "", 1, "cursor"], [2, "color", "#fff", "margin", "30px 0"], [1, "radio"], [1, "auth_form", "text-left", "mat-card"], [1, "account", 2, "border-bottom", "2px solid #000"], [1, "account_check"], [1, "example-margin", 3, "click"], [1, "col-md-4", "col-lg-3", "col-6"], [1, "account_img_box"], ["src", "assets/images/inkzers.svg", 1, "img-fluid"], [1, "col-md-8", "col-lg-9", "col-12"], [1, "account_text"], [1, "account"], ["routerLink", "/register", 1, "example-margin"], [1, "col-md-4", "col-lg-3", "col-6", "my-3"], ["src", "assets/images/inkzup_get.svg"], [1, "container", "mt-5"], [1, ""], ["routerLink", "/login"]],
        template: function ClientRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Which type of Inkzup account would you like to create ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientRegisterComponent_Template_mat_checkbox_click_12_listener() {
              return ctx.becomeInker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Inkzers- Tattoo Artists Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-checkbox", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Get Inkzed- Clients Account");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".auth[_ngcontent-%COMP%] {\n  background: #060606;\n  background-image: url('background.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  max-width: 100%;\n  float: left;\n  padding: 30px 0 20px;\n  \n  min-height: 100%;\n}\n.auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth_form[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 25px 0px 30px;\n  color: #fff;\n  background: #1e1e1e;\n}\n.auth[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 5px;\n  font-size: 30px;\n  color: #fff;\n  float: left;\n  width: 100%;\n  padding-top: 30px;\n}\n.auth[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  width: 80%;\n  margin: 0 auto;\n  padding-bottom: 50px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 25px;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.auth_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.auth_form[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffac00;\n  text-decoration: underline;\n}\n.auth_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #dedede;\n  width: 100%;\n  float: left;\n  padding-bottom: 10px;\n}\n.account[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 20px 30px;\n  position: relative;\n}\n.account_img_box[_ngcontent-%COMP%] {\n  background: #000000;\n  border-radius: 20px;\n  width: 100%;\n  float: left;\n  margin-bottom: 25px;\n}\n.account_img_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100%;\n}\n.account_text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  white-space: break-spaces;\n  margin: 47px 33px;\n}\n.account_check[_ngcontent-%COMP%]   .account_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n  font-size: 14px;\n  padding-bottom: 20px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVDQUErRDtFQUMvRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjbGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoIHtcbiAgYmFja2dyb3VuZDogIzA2MDYwNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMzBweCAwIDIwcHg7XG4gIC8qaGVpZ2h0OiAxMDB2aDsqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmF1dGhfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGhfZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjVweCAwcHggMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG4uYXV0aCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmF1dGggcCB7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uYXV0aF9mb3JtIGg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmF1dGhfZm9ybSBpbWcge1xuICB3aWR0aDogNjUlO1xufVxuLmF1dGhfZm9ybSBoNiBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hdXRoX2Zvcm0gcCBhIHtcbiAgY29sb3I6ICNmZmFjMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmF1dGhfZm9ybSBwIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICNkZWRlZGU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYWNjb3VudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWNjb3VudF9pbWdfYm94IHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmFjY291bnRfaW1nX2JveCBpbWcge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hY2NvdW50X3RleHQgaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gIG1hcmdpbjogNDdweCAzM3B4O1xufVxuLmFjY291bnRfY2hlY2sgLmFjY291bnRfdGV4dCBwIHtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map