import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  email_err = "";
  form_error = "";
  form_success = "";
  isLoad: any = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private ClientService: ClientService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', []],
    });
  }

  forgotPassword() {
    if (!this.forgotPasswordForm.valid) {
      return;
    }
    this.isLoad = true;
    this.form_error = "";
    this.form_success = "";
    this.email_err = "";

    this.ClientService.forgotPassword(this.forgotPasswordForm.value).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.forgotPasswordForm.reset();
        if (res) {
          this.form_success = res.message;
        }
        this.cookieService.delete('email')
        this.cookieService.delete('password')
        this.cookieService.delete('remember')
        // 
      },
      err => {
        this.isLoad = false;
        if (err.error) {
          this.email_err = err.error.email;
        }

        if (err.error.error) {
          this.form_error = err.error.error;
        }

      }
    )
  }

}
