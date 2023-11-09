import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-time',
  templateUrl: './booking-time.component.html',
  styleUrls: ['./booking-time.component.css'],
})
export class BookingTimeComponent implements OnInit {
  // public mode: InteractionMode = InteractionMode.DropDown;
  public format: string = 'y-m-d';
  public time;
  public date: Date = new Date();
  minDate = new Date();
  balance_err: any = '';
  price: any = '';

  bookingSlots: any = [];
  // public date: Date;

  constructor(
    private artistService: ArtistService,
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.time = new Date();
    this.time.setHours(19);
    this.time.setMinutes(5);
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
    //Check for booking details
    if (!localStorage.getItem('bookingData')) {
      this.router.navigate(['/pages/Inkzers-list']);
      return;
    }
  }

  isLoad: boolean = false;
  submitted: boolean = false;
  bookingData: any = [];
  bookingFomData: any = [];
  imageData: any = [];

  amount_err = '';
  booking_date_err = '';
  booking_time_err = '';
  AddBookingTimeForm!: FormGroup;

  ngOnInit(): void {
    var retrievedData: any = localStorage.getItem('bookingData');
    this.bookingFomData = JSON.parse(retrievedData);

    this.AddBookingTimeForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      deposite: ['', [Validators.required]],
      // booking_date: [this.bookingFomData.fullDate, [Validators.required]],
      // booking_time: [this.bookingFomData.booking_time, [Validators.required]],
      booking_date: ['', [Validators.required]],
      booking_time: ['', [Validators.required]],
      balance: ['', []],
    });
    this.getbookingDetails();
    console.log(this.AddBookingTimeForm.value.booking_time);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AddBookingTimeForm.controls;
  }

  addBookingTime() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.AddBookingTimeForm.invalid) {
      return;
    }

    var dateVal = new Date(this.AddBookingTimeForm.value.booking_date);

    var month = dateVal.getMonth() + 1;

    var depositeVal =
      this.AddBookingTimeForm.value.deposite == null
        ? 0
        : this.AddBookingTimeForm.value.deposite;

    var date = dateVal.getFullYear() + '-' + month + '-' + dateVal.getDate();

    var balanceAmount = this.price - this.AddBookingTimeForm.value.deposite;

    if (this.AddBookingTimeForm.valid) {
      // this.bookingFomData.assign
      Object.assign(this.bookingFomData, {
        amount: this.AddBookingTimeForm.value.amount,
        deposite: depositeVal,
        balance: balanceAmount,
        booking_date: date,
        booking_time: this.AddBookingTimeForm.value.booking_time,
        fullDate: dateVal,
      });

      localStorage.setItem('bookingData', JSON.stringify(this.bookingFomData));
      this.router.navigate(['/pages/booking-payment']);
    }
  }

  getBookingSlots($event: any) {
    this.bookingSlots = [];
    var dateVal = $event.target.value;

    var month = dateVal.getMonth() + 1;

    var date = dateVal.getFullYear() + '-' + month + '-' + dateVal.getDate();

    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('date', date);
    formData.append('service_id', this.bookingFomData.location);
    this.artistService.getBookingSlots(formData).subscribe(
      (res: any) => {
        if (res) {
          this.isLoad = false;
          if (res.length > 0) {
            this.bookingSlots = res;
          }
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  getbookingDetails() {
    if (this.bookingFomData.location) {
      this.isLoad = true;
      var formData: any = new FormData();
      formData.append('service_id', this.bookingFomData.location);
      this.artistService.getbookingDetails(formData).subscribe(
        (res: any) => {
          this.isLoad = false;
          if (res) {
            this.AddBookingTimeForm.patchValue({ amount: res.price });
            this.AddBookingTimeForm.patchValue({ deposite: res.deposit });
            this.price = res.price;
            this.bookingData = res;
          }
        },
        (err) => {
          this.isLoad = false;
        }
      );
    }
  }

  handleBalancePrice($event: any) {
    this.balance_err = '';
    var val = $event.target.value;

    if (val <= 0) {
      this.balance_err = 'Deposite amount can not be 0';
    } else if (val > this.price) {
      this.balance_err = 'Deposite amount can not be grater than total amount';
    } else if (val == '') {
      this.balance_err = '';
    }
  }
  back(): void {
    this.location.back();
  }

  disableDate() {
    return false;
  }
}
