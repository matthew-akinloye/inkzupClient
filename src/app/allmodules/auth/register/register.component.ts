import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { SocialAuthService } from 'angularx-social-login';
import {
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: SocialUser = new SocialUser();
  registerForm!: FormGroup;
  formErr = '';
  name_Err = '';
  emailErr = '';
  phone_Err = '';
  password_Err = '';
  confirm_password_Err = '';
  age_err = '';
  term_err = '';
  condition_err = '';
  age_term_condition_err = '';
  isLoad: any = false;
  // SocialEmailErr = '';
  isReadOnly1:boolean=true;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private socialService: SocialAuthService
  ) {}
  hide = true;
  hide1 = true;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', []],
      email: ['', []],
      phone: ['', []],
      password: ['', []],
      confirm_password: ['', []],
      age: ['', []],
      term: ['', []],
    });
  }

  register() {
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
      this.registerForm.patchValue({ age: true });
    } else {
      this.registerForm.patchValue({ age: '' });
    }

    if (this.registerForm.value.term) {
      this.registerForm.patchValue({ term: true });
    } else {
      this.registerForm.patchValue({ term: '' });
    }

    let formData = new FormData();
    formData.append('name', this.registerForm.value.name);
    // formData.append(
    //   'confirm_password',
    //   this.registerForm.value.confirm_password
    // );
    formData.append('email', this.registerForm.value.email);
    formData.append('phone', phone);
    // formData.append('password', this.registerForm.value.password);
    formData.append('age', this.registerForm.value.age);
    formData.append('term', this.registerForm.value.term);

    this.isLoad = true;
    this.clientService.registerClient(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.registerForm.reset();
        console.log('Register Response!!!',res)
        if (res.status == 4) {
          // comment when twilio issue resolved
        // if(res.status == 1){
          localStorage.removeItem('phone');
          //redirect to next registration process
          localStorage.setItem('client_login_type', res.signup_type);
          localStorage.setItem('client_user_id', res.id);
          localStorage.setItem('email', res.email);
          localStorage.setItem('phone', res.phone);
          // this.router.navigate(['/phone-verify']);
          this.router.navigate(['/verify-code']);

          // Remove this code after twilio issue resolved
          // const now = new Date();
          // var expiry: any = now.getTime() + 172800000; //Add 2 day
          // localStorage.setItem('expiry', expiry);
          // localStorage.setItem('name', res.name);
          // localStorage.setItem('status', res.status);
          // localStorage.setItem('profile_img', res.profile_img);
          // localStorage.setItem('user_type', res.user_type);
          //  this.router.navigate(['/pages/Inkzers-list']);
        }
        //
      },
      (err) => {
        this.isLoad = false;
        if (err.error.name) {
          this.name_Err = err.error.name[0];
        }
        if (err.error.email) {
          this.emailErr = err.error.email[0];
        }
        if (err.error.password) {
          this.password_Err = err.error.password[0];
        }
        if (err.error.confirm_password) {
          this.confirm_password_Err = err.error.confirm_password[0];
        }
        if (err.error.phone) {
          this.phone_Err = err.error.phone[0];
        }
        if (err.error.age) {
          this.age_err = err.error.age[0];
        }
        if (err.error.term) {
          this.term_err = err.error.term[0];
        }
      }
    );
  }
  signinWithGoogle(): any {
    this.socialService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: any) => {
        this.isLoad = true;
        // this.SocialEmailErr = '';
        this.user = user;

        var formData: any = new FormData();
        formData.append('id', user.id);
        formData.append('email', user.email);
        formData.append('name', user.name);
        formData.append('photoUrl', user.photoUrl);
        formData.append('provider', user.provider);
        
        this.clientService.SocialLogin(formData).subscribe(
          (res: any) => {
            if (res) {
              localStorage.setItem('email',user.email);
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
              localStorage.setItem('phone', res.phone);
              localStorage.setItem('name', res.name);
              localStorage.setItem('profile_img', res.profile_img);
              localStorage.setItem('user_type', res.user_type);
              localStorage.setItem('client_id', res.id);
              // this.router.navigate(['pages/get-inkzed']);
              this.router.navigate(['pages/Inkzers-list']);
              this.isLoad = false;
            }
          },
          (err) => {
            this.isLoad = false;
            if (err.error) {
              if (err.error.email) {
                // this.SocialEmailErr = err.error.email[0];
              }
            }
          }
        );
      });
  }

  signinWithFacebook(): any {
    this.socialService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user: any) => {
        console.log(
          'clent register by facebook--------------------------',
          user
        );
        this.isLoad = true;
        // this.SocialEmailErr = '';
        this.user = user;

        var formData: any = new FormData();
        formData.append('id', user.id);
        formData.append('email', user.email);
        formData.append('name', user.name);
        formData.append('photoUrl', user.photoUrl);
        formData.append('provider', user.provider);

        this.clientService.SocialLogin(formData).subscribe(
          (res: any) => {
            if (res) {
              if (res.status == 4) {
                localStorage.setItem('client_user_id', res.id);
                localStorage.setItem('client_login_type', res.signup_type);
                this.router.navigate(['/phone-verify']);
                return;
              }

              const now = new Date();
              var expiry: any = now.getTime() + 172800000; //Add 2 day
              localStorage.setItem('expiry', expiry);
              localStorage.setItem('phone', res.phone);
              localStorage.setItem('name', res.name);
              localStorage.setItem('profile_img', res.profile_img);
              localStorage.setItem('user_type', res.user_type);
              localStorage.setItem('client_id', res.id);
              // this.router.navigate(['pages/get-inkzed']);
              this.router.navigate(['pages/Inkzers-list']);
              this.isLoad = false;
            }
          },
          (err) => {
            this.isLoad = false;
            if (err.error) {
              if (err.error.email) {
                // this.SocialEmailErr = err.error.email[0];
              }
            }
          }
        );
      });
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

  MakephoneFormat(newVal: any) {
    if (newVal != '') {
      const regex: RegExp = new RegExp(/(\d{3})(\d{3})(\d{4})/);
      const match = newVal.match(regex);
      if (match) {
        newVal = `(${match[1]})-${match[2]}-${match[3]}`;
      }
      return newVal;
    } else {
      return '';
    }
  }
}
