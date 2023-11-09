import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-remaining-payment',
  templateUrl: './remaining-payment.component.html',
  styleUrls: ['./remaining-payment.component.css'],
})
export class RemainingPaymentComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.bookingDetailsWithUser();
  }
  isLoad: boolean = false;
  submitted: boolean = false;
  bookingData: any = [];
  bookingFomData: any = [];
  paymethod: any = '';
  date: any = '';
  time: any = '';
  deposite: any = '';
  amount: any = '';
  addPaymentForm!: FormGroup;

  subscription_plan: any = 2;

  paymentErr: any = '';
  expiryDate_err: any = '';

  ngOnInit(): void {
    this.addPaymentForm = this.formBuilder.group({
      name: [
        localStorage.getItem('name') ? localStorage.getItem('name') : '',
        [Validators.required],
      ],
      number: ['', [Validators.required, Validators.minLength(16)]],
      expiryDate: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[012])\/\d{2}$/)],
      ],
      cvv: ['', [Validators.required]],
    });
  }

  get f() {
    return this.addPaymentForm.controls;
  }

  bookingDetailsWithUser() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('appoinment_id', this.actRoute.snapshot.params.uuid);
    this.artistService.bookingDetailsWithUser(formData).subscribe(
      (res: any) => {
        if (res) {
          this.bookingData = res;
          this.paymethod = res.paymethod;
          this.isLoad = false;
        }
      },
      (err) => {
        this.isLoad = false;
        this.router.navigate(['/404']);
      }
    );
  }
  expDateValidators(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
    const input = event.target as HTMLInputElement;
    const trimmed = input.value
      .replace(/\s+/g, '')
      .slice(0, input.value.indexOf('/') == -1 ? 4 : 5);
    if (trimmed.length > 2) {
      input.value = `${trimmed.slice(0, 2)}/${trimmed.slice(
        trimmed.indexOf('/') == -1 ? 2 : 3
      )}`;
    }
  }
  CardFormet(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
  }

  bookingRemainingPayment() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addPaymentForm.invalid) {
      return;
    }

    if (this.addPaymentForm.valid) {
      var formData: any = new FormData();
      formData.append('name', this.addPaymentForm.value.name);
      formData.append('number', this.addPaymentForm.value.number);
      formData.append('expiryDate', this.addPaymentForm.value.expiryDate);
      formData.append('cvv', this.addPaymentForm.value.cvv);
      formData.append('appoinment_id', this.bookingData.uuid);
      this.isLoad = true;

      this.artistService.bookingRemainingPayment(formData).subscribe(
        (res: any) => {
          this.isLoad = false;
          this.router.navigate(['/pages/payment-success']);
        },
        (err) => {
          this.isLoad = false;
        }
      );
    }
  }

  bookingRemainingPaymentCard(cardId: any) {
    var formData: any = new FormData();
    formData.append('appoinment_id', this.bookingData.uuid);
    formData.append('card_id', cardId);
    this.isLoad = true;

    this.artistService.bookingRemainingPayment(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.router.navigate(['/pages/payment-success']);
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }
  cvvFormat(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
  }

  back(): void {
    this.location.back();
  }
}
