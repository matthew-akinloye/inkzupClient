import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import {SuccessAuthComponent} from '../success-auth/success-auth.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordsForm!: FormGroup;
  password_err = "";
  cPassword_err = "";
  formErr="";
  formSuccess="";
  isLoad:any=false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private clientService: ClientService
  ) { }
  hide = true;

  ngOnInit(): void {
     
    this.resetPasswordsForm = this.formBuilder.group({
      password: ['', []],
      confirm_password: ['', []],
      token: ['', []],
    });
  }

  resetPasswords() {
    this.isLoad=true;
    this.password_err = "";
    this.cPassword_err = "";
    this.formErr="";
    this.formSuccess="";
    this.resetPasswordsForm.patchValue({ 'token': this.actRoute.snapshot.params.token })
    this.clientService.resetPassword(this.resetPasswordsForm.value).subscribe(
      (res: any) => {
        this.isLoad=false;
        this.resetPasswordsForm.reset();
        if (res) {
          this.successDialog();
          this.router.navigate(['/login']);
        }
      },
      err => {
        this.isLoad=false;
        if (err.error) {
          this.formErr=err.error.error;
          if (err.error.password) {
            this.password_err = err.error.password;
          }
          if (err.error.confirm_password) {
            this.cPassword_err = err.error.confirm_password;
          }
        }

      }

    )

  }

  successDialog(): void {
    const dialogRef = this.dialog.open(SuccessAuthComponent, {
      width: '460px',
    
      data:  { 'msg': 'Reset password successfully.Please login to continue' },
    });
  }

}
