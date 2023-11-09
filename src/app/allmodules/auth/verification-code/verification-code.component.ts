import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css'],
})
export class VerificationCodeComponent implements OnInit {
  otp: any = '';
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
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
      outline: 'none',
    },
  };
  onOtpChange(otp: any) {
    this.otp = otp;
  }

  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }

  phonVerifyForm!: FormGroup;
  formErr = '';
  ValidOtp!: boolean;
  OTP: any = '';
  errMsg = '';
  isLoad: any = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.phonVerifyForm = this.formBuilder.group({
      otp1: ['', []],
    });
  }

  verifyOtp() {
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

    var formData: any = new FormData();
    formData.append('otp', this.otp);
    // if is_login is true inlocal storage then login with social otherwise normal login
    if (localStorage.getItem('is_login') == 'true') {
      formData.append('is_login', true);
    }
    this.formErr = '';
    this.isLoad = true;
    this.clientService.verifyOtp(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        localStorage.removeItem('is_login');
        localStorage.removeItem('email');
        localStorage.removeItem('client_user_id');
       
               const now = new Date();
              var expiry: any = now.getTime() + 172800000; //Add 2 day
              localStorage.setItem('expiry', expiry);
              localStorage.setItem('name', res.name);
              localStorage.setItem('status', res.status);
              localStorage.setItem('profile_img', res.profile_img);
              localStorage.setItem('user_type', res.user_type);
               this.router.navigate(['/pages/Inkzers-list']);
      },
      (err) => {
        this.isLoad = false;
        if (err.error) {
          this.formErr = err.error.error;
        }
      }
    );
  }
}
