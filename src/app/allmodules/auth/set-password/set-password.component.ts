import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import {SuccessAuthComponent} from '../success-auth/success-auth.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']

})
export class SetPasswordComponent implements OnInit {
  setPasswordsForm!: FormGroup;
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
    this.setPasswordsForm = this.formBuilder.group({
      password: ['', []],
      confirm_password: ['', []],
      user_id: [localStorage.getItem('user_id'), []],
    });
  }

  setPassword(){
   
    this.password_err="";
    this.cPassword_err="";
    this.isLoad=true;
    this.clientService.setPassword(this.setPasswordsForm.value).subscribe((res:any)=>{
      if(res){
        this.isLoad=false;
        localStorage.removeItem('user_id');
       
       this.successDialog();
        this.router.navigate(['/login']);
      }

    },
    err=>{
      this.isLoad=false;
      if (err.error.password) {
        this.password_err = err.error.password[0];
      }
      if (err.error.confirm_password) {
        this.cPassword_err = err.error.confirm_password[0];
      }
    }
    )

  }

  successDialog(): void {
    const dialogRef = this.dialog.open(SuccessAuthComponent, {
      width: '460px',
    
      data:  { 'msg': 'You have successfully change your password, login to continue' },
    });
  }

}
