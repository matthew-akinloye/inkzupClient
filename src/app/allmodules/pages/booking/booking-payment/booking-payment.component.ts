import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css'],
})
export class BookingPaymentComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
    if (!localStorage.getItem('bookingData')) {
      this.router.navigate(['/pages/Inkzers-list']);
      return;
    }
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
    var retrievedData: any = localStorage.getItem('bookingData');
    this.bookingFomData = JSON.parse(retrievedData);

    // console.log(this.bookingFomData);

    this.time = this.bookingFomData.booking_time;
    this.deposite = this.bookingFomData.deposite;
    this.amount = this.bookingFomData.amount;

    this.getbookingDetails();

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

  // convenience getter for easy access to form fields
  get f() {
    return this.addPaymentForm.controls;
  }

  getbookingDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('service_id', this.bookingFomData.location);
    formData.append('date', this.bookingFomData.booking_date);
    this.artistService.getUserPayMethod(formData).subscribe(
      (res: any) => {
        if (res) {
          this.isLoad = false;
          this.bookingData = res;
          this.paymethod = res.paymethod;
          this.subscription_plan = res.subscription_plan;
        }
      },
      (err) => {}
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

  addBooking(cardId: any) {
    var formData: any = new FormData();
    formData.append('location', this.bookingFomData.location);
    formData.append('tattoo_size', this.bookingFomData.tattoo_size);
    formData.append('tattoo_color', this.bookingFomData.tattoo_color);
    formData.append('tattoo_description', this.bookingFomData.description);
    formData.append('booking_date', this.bookingFomData.booking_date);
    formData.append('booking_time', this.bookingFomData.booking_time);
    formData.append('total_amount', this.bookingFomData.amount);
    formData.append('deposite', this.bookingFomData.deposite);
    formData.append('fullDate', this.bookingFomData.fullDate);
    formData.append('balance', this.bookingFomData.balance);
    formData.append('tattoo_location', this.bookingFomData.tattoo_location);
    formData.append('file[]', this.bookingFomData.file);
    formData.append('card_id', cardId);
    //Consant form
    if (this.subscription_plan == 2) {
      formData.append('address', this.bookingFomData.address);
      formData.append('city', this.bookingFomData.city);
      formData.append('state', this.bookingFomData.state);
      formData.append('client_initial', this.bookingFomData.client_initial);
      formData.append('signature', this.bookingFomData.signature);
      formData.append('studio_name', this.bookingFomData.studio_name);
      formData.append('identification', this.bookingFomData.identification);
      formData.append('dob', this.bookingFomData.dob);
    }

    // formData.append('refrence_images', this.bookingFomData.location);
    this.isLoad = true;

    this.artistService.addBooking(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        localStorage.removeItem('bookingData');
        this.router.navigate(['/pages/booking-confirm']);
      },
      (err) => {
        this.isLoad = false;
        this.isLoad = false;
        if (err.error) {
          this.paymentErr = err.error;
        }
      }
    );
  }

  CardFormet(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
  }

  addBookingPayment() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addPaymentForm.invalid) {
      return;
    }

    if (this.addPaymentForm.valid) {
      var formData: any = new FormData();
      formData.append('location', this.bookingFomData.location);
      formData.append('tattoo_size', this.bookingFomData.tattoo_size);
      formData.append('tattoo_color', this.bookingFomData.tattoo_color);
      formData.append('tattoo_description', this.bookingFomData.description);
      formData.append('booking_date', this.bookingFomData.booking_date);
      formData.append('booking_time', this.bookingFomData.booking_time);
      formData.append('total_amount', this.bookingFomData.amount);
      formData.append('deposite', this.bookingFomData.deposite);
      formData.append('fullDate', this.bookingFomData.fullDate);
      formData.append('file[]', this.bookingFomData.file);
      formData.append('balance', this.bookingFomData.balance);
      formData.append('tattoo_location', this.bookingFomData.tattoo_location);
      formData.append('name', this.addPaymentForm.value.name);
      formData.append('number', this.addPaymentForm.value.number);
      formData.append('expiryDate', this.addPaymentForm.value.expiryDate);
      formData.append('cvv', this.addPaymentForm.value.cvv);
      //Consant form
      if (this.subscription_plan == 2) {
        formData.append('address', this.bookingFomData.address);
        formData.append('city', this.bookingFomData.city);
        formData.append('state', this.bookingFomData.state);
        formData.append('client_initial', this.bookingFomData.client_initial);
        formData.append('signature', this.bookingFomData.signature);
        formData.append('studio_name', this.bookingFomData.studio_name);
        formData.append('identification', this.bookingFomData.identification);
        formData.append('dob', this.bookingFomData.dob);
      }
      // formData.append('refrence_images', this.bookingFomData.location);
      this.isLoad = true;

      this.artistService.addBooking(formData).subscribe(
        (res: any) => {
          this.isLoad = false;
          localStorage.removeItem('bookingData');
          this.router.navigate(['/pages/booking-confirm']);
        },
        (err) => {
          this.isLoad = false;
          if (err.error) {
            this.paymentErr = err.error;
          }
        }
      );
    }
  }

  cvvFormat(event: any) {
    let newVal = event.target.value.replace(/\D/g, '');
    event.target.value = newVal.trim();
  }

  back(): void {
    this.location.back();
  }

  //pay by cash
  payByCash() {
    var formData: any = new FormData();
    formData.append('location', this.bookingFomData.location);
    formData.append('tattoo_size', this.bookingFomData.tattoo_size);
    formData.append('tattoo_color', this.bookingFomData.tattoo_color);
    formData.append('tattoo_description', this.bookingFomData.description);
    formData.append('booking_date', this.bookingFomData.booking_date);
    formData.append('booking_time', this.bookingFomData.booking_time);
    formData.append('total_amount', this.bookingFomData.amount);
    formData.append('deposite', this.bookingFomData.deposite);
    formData.append('fullDate', this.bookingFomData.fullDate);
    formData.append('balance', this.bookingFomData.balance); 
    formData.append('tattoo_location', this.bookingFomData.tattoo_location);
    formData.append('file[]', this.bookingFomData.file);
    formData.append('payment_type', 2);
    //Consant form
    if (this.subscription_plan == 2) {
      formData.append('address', this.bookingFomData.address);
      formData.append('city', this.bookingFomData.city);
      formData.append('state', this.bookingFomData.state);
      formData.append('client_initial', this.bookingFomData.client_initial);
      formData.append('signature', this.bookingFomData.signature);
      formData.append('studio_name', this.bookingFomData.studio_name);
      formData.append('identification', this.bookingFomData.identification);
      formData.append('dob', this.bookingFomData.dob);
    }
    this.isLoad = true;

    this.artistService.addBooking(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        localStorage.removeItem('bookingData');
        this.router.navigate(['/pages/booking-confirm']);
      },
      (err) => {
        this.isLoad = false;
        this.isLoad = false;
        if (err.error) {
          this.paymentErr = err.error;
        }
      }
    );
  }
}
