import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { SuccessAuthComponent } from '../success-auth/success-auth.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vertify-email',
  templateUrl: './vertify-email.component.html',
  styleUrls: ['./vertify-email.component.css'],
})
export class VertifyEmailComponent implements OnInit {
  isLoad: any = false;
  email = localStorage.getItem('email');
  emailVerifyForm!: FormGroup;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('client_user_id')) {
      this.router.navigate(['/login']);
    }
  }
  phoneVerify() {
    this.router.navigate(['/phone-verify']);
  }

  SendVerifyEmail() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('email', localStorage.getItem('email'));
    this.clientService.sendVerifyEmail(formData).subscribe(
      (res) => {
        localStorage.removeItem('email');
        localStorage.removeItem('client_user_id');
        localStorage.removeItem('phone');
        this.successDialog();
        this.router.navigate(['/login']);
      },
      (err) => {
        this.isLoad = false;
        console.warn(err);
      }
    );
  }

  successDialog(): void {
    const dialogRef = this.dialog.open(SuccessAuthComponent, {
      width: '460px',

      data: {
        msg: 'Email was successfully sent. Please check your email and login to continue',
      },
    });
  }
}
