import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from '../../success/success.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isLoad: boolean = false;
  profileData: any = [];
  reviewData: any = [];
  paymentData: any = [];
  editProfileForm!: FormGroup;
  changePasswordForm!: FormGroup;
  first_name_err = '';
  last_name_err = '';
  phone_err = '';
  profileFormErr = '';

  current_password_err = '';
  new_password_err = '';
  repeat_password_err = '';
  password_err: any = '';

  profile_preview: any = '';
  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.editProfileForm = new FormGroup({
      phone: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      profile_img: new FormControl('', []),
    });
    this.getProfile();

    this.changePasswordForm = this.formBuilder.group({
      current_password: ['', []],
      new_password: ['', []],
      confirm_password: ['', []],
    });
  }
  openDeleteDialog(id: any): void {
    const dialogRef = this.dialog
      .open(DeleteCardComponent, {
        width: '400px',
        data: { pageValue: id },
      })
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.successCardDeletDialog();
        }
      });
  }

  getProfile() {
    var phone = '';
    this.isLoad = true;
    this.clientService.getProfile().subscribe(
      (res: any) => {
        this.isLoad = false;
        this.profileData = res;
        this.paymentData = res.payment;
        this.reviewData = res.reviewData;
        this.editProfileForm.patchValue({
          first_name: this.profileData.first_name,
        });
        this.editProfileForm.patchValue({
          last_name: this.profileData.last_name,
        });
        if (this.profileData.phone != null) {
          phone = this.phoneFormat(this.profileData.phone);
        }
        this.editProfileForm.patchValue({ phone: phone });
        this.profile_preview = this.profileData.profile_img;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  EditProfile() {
    var phone = '';
    this.first_name_err = '';
    this.last_name_err = '';
    this.phone_err = '';
    this.profileFormErr = '';

    var formData: any = new FormData();
    var regExpr = /[^0-9]/g;
    if (this.editProfileForm.value.phone != null) {
      phone = this.editProfileForm.value.phone.replace(regExpr, '');
    }

    formData.append('first_name', this.editProfileForm.value.first_name);
    formData.append('last_name', this.editProfileForm.value.last_name);
    formData.append('phone', phone);
    formData.append('profile_img', this.editProfileForm.value.profile_img);
    this.isLoad = true;
    this.clientService.editProfile(formData).subscribe(
      (res: any) => {
        if (res) {
          this.isLoad = false;
          localStorage.setItem('profile_img', res.profile_img);
          localStorage.setItem('name', res.name);

          this.UpdateSideBar();
          this.successProfileDialog();
          this.profileData;
        }
      },
      (err) => {
        this.isLoad = false;
        if (err.error) {
          if (err.error.first_name) {
            this.first_name_err = err.error.first_name[0];
          }
          if (err.error.last_name) {
            this.last_name_err = err.error.last_name[0];
          }
          if (err.error.phone) {
            this.phone_err = err.error.phone[0];
          }
        }
      }
    );
  }
  //Change password
  changePassword() {
    this.isLoad = true;
    this.current_password_err = '';
    this.new_password_err = '';
    this.repeat_password_err = '';
    this.password_err = '';
    this.clientService.changePassword(this.changePasswordForm.value).subscribe(
      (res: any) => {
        this.isLoad = false;
        if (res) {
          this.changePasswordForm.reset();
          this.successPasswordDialog();
          // this.passwordSuccess=res.success;
        }
      },
      (err) => {
        if (err.error) {
          this.isLoad = false;

          this.password_err = err.error.error;
          if (err.error.current_password) {
            this.current_password_err = err.error.current_password[0];
          }

          if (err.error.new_password) {
            this.new_password_err = err.error.new_password[0];
          }
          if (err.error.confirm_password) {
            this.repeat_password_err = err.error.confirm_password[0];
          }
        }
      }
    );
  }

  preview($event: any) {
    let files = $event.target.files;
    if (files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.profile_preview = reader.result;
        const file = $event.target.files[0];
        this.editProfileForm.patchValue({ profile_img: file });
      };
    } else {
      this.profile_preview = 'assets/images/review_image (2).png';
    }
  }

  successPasswordDialog(): void {
    const dialogRef = this.dialog.open(SuccessComponent, {
      width: '460px',
      data: { msg: 'You have successfully updated your password!' },
    });
  }

  successProfileDialog(): void {
    const dialogRef = this.dialog.open(SuccessComponent, {
      width: '460px',
      data: { msg: 'You have successfully updated your profile!' },
    });
  }

  successCardDeletDialog(): void {
    const dialogRef = this.dialog
      .open(SuccessComponent, {
        width: '460px',
        data: { msg: 'You have successfully removed your card!' },
      })
      .afterClosed()
      .subscribe(() => this.getProfile());
  }

  phoneFormat(newVal: any) {
    if (newVal != '' || newVal != null) {
      const regex: RegExp = new RegExp(/(\d{3})(\d{3})(\d{4})/);
      const match = newVal.match(regex);
      if (match) {
        newVal = `(${ match[1] })-${ match[2] }-${ match[3] }`;
      }
    }
    return newVal;
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

  //Update sideBar

  UpdateSideBar() {
    this.router
      .navigateByUrl('/sidebar', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/pages/profile']);
      });
  }

  logout() {
    this.clientService.logout();
  }

  back(): void {
    this.location.back();
  }
}
