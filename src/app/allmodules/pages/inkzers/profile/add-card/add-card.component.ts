import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from '../../../success/success.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  addCardForm!: FormGroup;
  name_err = '';
  number_err = '';
  expiryDate_err = '';
  cvc_err = '';
  formErr = '';
  isLoad: any = false;
  submitted: boolean = false;

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
    this.addCardForm = this.formBuilder.group({
      // cardId:['', []],
      name: [
        localStorage.getItem('name') ? localStorage.getItem('name') : '',
        [Validators.required],
      ],
      number: ['', [Validators.required, Validators.minLength(16)]],
      expiryDate: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[012])\/\d{2}$/)],
      ],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addCardForm.controls;
  }

  addNewCard() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addCardForm.invalid) {
      return;
    }
    this.isLoad = true;

    this.clientService.addCard(this.addCardForm.value).subscribe(
      (res: any) => {
        if (res) {
          this.isLoad = false;
          this.successcardDialog();
          this.router.navigate(['/pages/profile']);
        }
      },
      (err) => {
        this.isLoad = false;
        if (err.error) {
          this.formErr = err.error;
          if (err.error.name) {
            this.name_err = err.error.name[0];
          }
          if (err.error.number) {
            this.number_err = err.error.number[0];
          }
          if (err.error.expiryDate) {
            this.expiryDate_err = err.error.expiryDate[0];
          }

          if (err.error.cvv) {
            this.cvc_err = err.error.cvv[0];
          }
        }
      }
    );
  }

  successcardDialog(): void {
    const dialogRef = this.dialog.open(SuccessComponent, {
      width: '460px',
      data: { msg: 'You have successfully added your card' },
    });
  }

  CardFormet(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
  }

  expDateValidators(event: any) {
    const input = event.target as HTMLInputElement;
    const trimmed = input.value
      .replace(/\s+/g, '')
      .slice(0, input.value.indexOf('/') == -1 ? 4 : 5);
    if (trimmed.length > 2) {
      input.value = `${ trimmed.slice(0, 2) }/${ trimmed.slice(
        trimmed.indexOf('/') == -1 ? 2 : 3
      ) }`;
    }
  }
  cvvFormat(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
  }

  back(): void {
    this.location.back();
  }
}
