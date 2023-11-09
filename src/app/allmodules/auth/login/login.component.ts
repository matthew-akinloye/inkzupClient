import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from 'src/app/service/client.service';
import { SocialAuthService } from 'angularx-social-login';
import {
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  isReadOnly: boolean = true;
  isReadOnly1: boolean = true;
  public user: SocialUser = new SocialUser();
  loginForm!: FormGroup;
  email_Err = '';
  form_Err: any = '';
  password_err = '';
  phone_Err = '';
  RememberMeCheck: any;
  remeberLogin = '';
  isLoad: any = false;
  SocialEmailErr = '';
  URL: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private socialService: SocialAuthService,
    private cookieService: CookieService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      if (params.path) {
        this.URL = params.path;
      }
    });

    if (localStorage.getItem('token')) {
      const now = new Date().getTime();
      var expiry: any = localStorage.getItem('expiry');
      var user_type: any = localStorage.getItem('user_type');
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

    if (
      localStorage.getItem('Inkzer_token') &&
      localStorage.getItem('status')
    ) {
      const now = new Date().getTime();
      var user_type: any = localStorage.getItem('inkzer_user_type');
      var expiry: any = localStorage.getItem('inkzer_expiry');
      var subscription: any = localStorage.getItem('subscription');
    }
    this.loginForm = this.formBuilder.group({
      email: ['', []],
      password: ['', []],
      phone: ['', []],
      rememberMe: ['', []],
    });

    //check remember me
    if (this.cookieService.get('remember') !== undefined) {
      if (this.cookieService.get('remember') === 'Yes') {
        var email = this.cookieService.get('email');
        var password = this.cookieService.get('password');

        this.loginForm.patchValue({ email: email });
        this.loginForm.patchValue({ password: password });

        this.RememberMeCheck = true;
      }
    }
  }

  artistLogin() {
    console.log("called")
    this.email_Err = '';
    this.form_Err = '';
    this.phone_Err = '';
    this.password_err = '';
    this.isLoad = true;
    this.loginForm.patchValue({ rememberMe: this.RememberMeCheck });

    let phone='';
    let regExpr = /[^0-9]/g;

    if (this.loginForm.value.phone != '') {
      phone = this.loginForm.value.phone.replace(regExpr, '');
    }
    let formData = new FormData();
    formData.append('phone', phone);
    // formData.append('email', this.loginForm.value.email);
    // formData.append('password', this.loginForm.value.password);
    
    this.clientService.clientLogin(formData).subscribe(
      (res: any) => {
        this.setDetail();
        //User
        localStorage.setItem('is_login', 'true');
        this.router.navigate(['verify-code']);
        return;
        if (res.user_type == 2) {
          if (res.status == 1) {
            const now = new Date();
            var expiry: any = now.getTime() + 172800000; //Add 2 day
            localStorage.setItem('expiry', expiry);
            localStorage.setItem('name', res.name);
            localStorage.setItem('user_type', res.user_type);
            localStorage.setItem('client_id', res.id);
            localStorage.setItem('status', res.status);
            localStorage.setItem('profile_img', res.profile_img);


            //Redirect to rating page
            var rating = localStorage.getItem('rating');
            var url = localStorage.getItem('url');
            if (rating && url) {
              localStorage.removeItem('url');
              localStorage.removeItem('rating');
              this.router.navigate([url]);
            } else {
              // this.router.navigate(['pages/get-inkzed']);
              if (this.URL) {
                this.router.navigate([this.URL]);
                return;
              }
              this.router.navigate(['pages/Inkzers-list']);
            }
          } else if (res.status == 3) {
            localStorage.setItem('user_id', res.id);
            this.router.navigate(['set-password']);
          }
        }
        //For artist login
        else if (res.user_type == 1) {
          localStorage.removeItem('token');
          if (res.artist_status) {
            if (res.artist_status == 2) {
              localStorage.setItem('user_id', res.id);
              // this.router.navigate(['/subscription-plan']);
              window.location.href =
                'http://inkzup.com/Inkzer/#/subscription-plan';
            } else if (res.artist_status == 3) {
              localStorage.setItem('user_id', res.id);
              // this.router.navigate(['/register-next']);
              window.location.href = 'http://inkzup.com/Inkzer/#/register-next';
            } else if (res.artist_status == 4) {
              localStorage.setItem('user_id', res.id);
              // this.router.navigate(['/register-next']);
              window.location.href = 'http://inkzup.com/Inkzer/#/register-next';
            } else if (res.artist_status == 1 && res.status == 1) {
              const now = new Date();
              var expiry: any = now.getTime() + 172800000; //Add 2 day
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
                window.location.href =
                  'http://inkzup.com/Inkzer/#/pages/dashboard';
              } else {
                window.location.href =
                  'http://inkzup.com/Inkzer/#/pages/booking';
                // this.router.navigate(['/pages/booking']);
              }
            }
          }
        }
        this.isLoad = false;
      },
      (err) => {
        this.isLoad = false;
        if (err.error) {
          this.form_Err = err.error.error;
          // if (err.error.email) {
          //   if (err.error.email.length > 0) {
          //     this.email_Err = err.error.email;
          //   }
          // }
          // if (err.error.password) {
          //   this.password_err = err.error.password;
          // }
          if (err.error.phone) {
            this.phone_Err = err.error.password;
          }
        }
      }
    );
  }

  signinWithGoogle(): any {
    this.socialService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: any) => {
        this.isLoad = true;
        this.SocialEmailErr = '';
        this.user = user;
        var formData: any = new FormData();
        formData.append('name', user.name);
        formData.append('id', user.id);
        formData.append('email', user.email);
        formData.append('provider', user.provider);

        this.clientService.ArtistSocialRegister(formData).subscribe(
          (res: any) => {
            if (res) {
              this.cookieService.delete('remember');
              this.cookieService.delete('email');
              this.cookieService.delete('password');
              localStorage.removeItem('phone');
              if (res.status == 4) {
                localStorage.setItem('client_user_id', res.id);
                localStorage.setItem('client_login_type', res.signup_type);
                this.router.navigate(['/phone-verify']);
                return;
              }
              const now = new Date();
              var expiry: any = now.getTime() + 172800000; //Add 2 day
              localStorage.setItem('expiry', expiry);
              localStorage.setItem('name', res.name);
              localStorage.setItem('status', res.status);
              localStorage.setItem('profile_img', res.profile_img);
              localStorage.setItem('user_type', res.user_type);
              localStorage.setItem('client_id', res.id);

              //Redirect to rating page
              var rating = localStorage.getItem('rating');
              var url = localStorage.getItem('url');
              // console.log('url-----------------------------', url);
              if (rating && url) {
                localStorage.removeItem('url');
                localStorage.removeItem('rating');
                this.router.navigate([url]);
              } else {
                if (this.URL) {
                  this.router.navigate([this.URL]);
                  return;
                }
                // this.router.navigate(['pages/get-inkzed']);
                this.router.navigate(['pages/Inkzers-list']);
              }
            }
            this.isLoad = false;
          },
          (err) => {
            this.isLoad = false;
            if (err.error) {
              if (err.error.email) {
                this.SocialEmailErr = err.error.email[0];
              }
            }
          }
        );
      });
  }

  signinWithFacebook(): any {
    this.form_Err = '';
    this.socialService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user: any) => {
        // this.isLoad = true;
        this.SocialEmailErr = '';
        this.user = user;
        var formData: any = new FormData();
        formData.append('name', user.name);
        formData.append('id', user.id);
        formData.append('email', user.email);
        formData.append('provider', user.provider);

        this.clientService.SocialLogin(formData).subscribe(
          (res: any) => {
            this.isLoad = false;
            if (res) {
              this.cookieService.delete('remember');
              this.cookieService.delete('email');
              this.cookieService.delete('password');
              localStorage.removeItem('phone');
              if (res.status == 4) {
                localStorage.setItem('client_user_id', res.id);
                localStorage.setItem('client_login_type', res.signup_type);
                this.router.navigate(['/phone-verify']);
                return;
              }

              const now = new Date();
              var expiry: any = now.getTime() + 172800000; //Add 2 day
              localStorage.setItem('expiry', expiry);
              localStorage.setItem('name', res.name);
              localStorage.setItem('status', res.status);
              localStorage.setItem('profile_img', res.profile_img);
              localStorage.setItem('user_type', res.user_type);
              localStorage.setItem('client_id', res.id);
              //Redirect to rating page
              var rating = localStorage.getItem('rating');
              var url = localStorage.getItem('url');
              if (rating && url) {
                localStorage.removeItem('url');
                localStorage.removeItem('rating');
                this.router.navigate([url]);
              } else {
                if (this.URL) {
                  this.router.navigate([this.URL]);
                  return;
                }
                // this.router.navigate(['pages/get-inkzed']);
                // this.router.navigate(['/pages/Inkzers-list']);
                this.router.navigate(['/pages/inkzers']);
              }
            }
          },
          (err) => {
            this.isLoad = false;
            if (err.error) {
              if (err.error.email) {
                this.SocialEmailErr = err.error.email[0];
              }
            }
          }
        );
      });
  }
  checkRemeber() {
    if (this.RememberMeCheck) {
      this.RememberMeCheck = false;
      return;
    }
    this.RememberMeCheck = true;
  }

  setDetail() {
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

  phoneFormat(event: any, backspace: any) {
    let newVal = event.target.value.replace(/\D/g, '');
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

  logout() {
    this.clientService.logout();
  }

  checkLogin() {
    this.clientService.checkLogin().subscribe(
      (res: any) => {},
      (err) => {
        this.clientService.logout();
        this.router.navigate(['']);
      }
    );
  }
  test() {
    this.isReadOnly = true;
  }
}
