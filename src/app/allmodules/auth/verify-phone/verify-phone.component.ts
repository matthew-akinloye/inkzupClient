import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.css'],
})
export class VerifyPhoneComponent implements OnInit {
  phoneVerifyForm!: FormGroup;
  form_err: any = '';
  form_success: any = '';
  phone_err: any = '';
  isLoad: any = false;
  phone = '';
  client_login_type: any = localStorage.getItem('client_login_type');

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('client_user_id')) {
      this.router.navigate(['/login']);
    }
    this.phoneFormat();
    this.phoneVerifyForm = this.formBuilder.group({
      phone: [this.phone, [Validators.required]],
      user_id: [localStorage.getItem('client_user_id'), []],
    });
  }

  sendPhoneOtp() {
    this.isLoad = true;
    var regExpr = /[^0-9]/g;
    var phone = this.phoneVerifyForm.value.phone.replace(regExpr, '');

    var formData: any = new FormData();
    formData.append('phone', phone);
    formData.append('user_id', this.phoneVerifyForm.value.user_id);
    localStorage.removeItem('token');
    this.clientService.sendOtp(formData).subscribe(
      (res) => {
        localStorage.removeItem('token');
        this.isLoad = false;
        this.router.navigate(['/verify-code']);
      },
      (err) => {
        this.isLoad = false;
        this.form_success = '';
        this.phone_err = '';
        if (err.error) {
          this.form_err = err.error.error;
        }
        if (err.error.phone) {
          this.phone_err = err.error.phone[0];
        }
      }
    );
  }
  phoneFormat() {
    let newVal: any = localStorage.getItem('phone')
      ? localStorage.getItem('phone')
      : '';
    if (newVal == 'undefined') {
      this.phone = '';
      return;
    }
    if (newVal) {
      const regex: RegExp = new RegExp(/(\d{3})(\d{3})(\d{4})/);
      const match = newVal.match(regex);
      if (match) {
        newVal = `(${match[1]})-${match[2]}-${match[3]}`;
      }
      this.phone = newVal;
    } else {
      this.phone = '';
    }
  }

  MakephoneFormat(event: any, backspace: any) {
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
  emailVerify() {
    this.router.navigate(['/email-verift']);
  }
}
