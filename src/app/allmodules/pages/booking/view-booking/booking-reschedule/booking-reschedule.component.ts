import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../../../../service/artist.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-reschedule',
  templateUrl: './booking-reschedule.component.html',
  styleUrls: ['./booking-reschedule.component.css']
})
export class BookingRescheduleComponent implements OnInit {
  isLoad: boolean = false;
  submitted: boolean = false;
  AddBookingTimeForm!: FormGroup;
  minDate = new Date();
  bookingSlots: any = [];
  bookingData: any = []

  constructor(
    private location: Location,
    private artistService: ArtistService,
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.AddBookingTimeForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      deposite: ['', [Validators.required]],
      booking_date: ['', [Validators.required]],
      booking_time: ['', [Validators.required]],
      service_id: ['', [Validators.required]],
      balance: ['', []],
    });
    this.getbookingDetails();
  }
  get f() {
    return this.AddBookingTimeForm.controls;
  }

  getbookingDetails() {
   
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('appoinment_uuid', this.actRoute.snapshot.params.uuid);
    this.artistService.getRescheduleBookingDetails(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        if (res) {
          this.AddBookingTimeForm.patchValue({ amount: res.price });
          this.AddBookingTimeForm.patchValue({ deposite: res.deposit });
          this.AddBookingTimeForm.patchValue({ booking_date: res.fullDate });
          this.AddBookingTimeForm.patchValue({ service_id: res.service_id });
          this.bookingData = res;
          this.getBookingSlots();
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );

  }



  bookingReschedule() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.AddBookingTimeForm.invalid) {
      return;
    }
    var dateVal = new Date(this.AddBookingTimeForm.value.booking_date);
    var month = dateVal.getMonth() + 1;

    var date = dateVal.getFullYear() + '-' + month + '-' + dateVal.getDate();
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('appoinment_id', this.actRoute.snapshot.params.uuid);
    formData.append('booking_time',  this.AddBookingTimeForm.value.booking_time);
    formData.append('booking_date', date);
    formData.append('fullDate', dateVal);
    this.artistService.rescheduleBooking(formData).subscribe((res: any) => {
      this.isLoad = false;
      this.router.navigate(['/pages/booking-confirm']);
    },
      err => {

        this.isLoad = false;
      }
    );

  }
  getBookingSlots() {
    this.AddBookingTimeForm.patchValue({ booking_time: '' });
    this.isLoad = true;

    var formData: any = new FormData();
    formData.append('date', this.bookingData.date);
    formData.append('service_id', this.AddBookingTimeForm.value.service_id);
  
    this.artistService.getBookingSlots(formData).subscribe(
      (res: any) => {
        if (res) {
         
          if(res.length>0){
          this.bookingSlots = res;
          }
          this.isLoad = false;
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  generateSlots(){
    this.bookingSlots=[];
    this.AddBookingTimeForm.patchValue({ booking_time: '' });
    this.isLoad = true;
    var dateVal = new Date(this.AddBookingTimeForm.value.booking_date);
    var month = dateVal.getMonth() + 1;

    var date = dateVal.getFullYear() + '-' + month + '-' + dateVal.getDate();
    var formData: any = new FormData();
    formData.append('date', date);
    formData.append('service_id', this.AddBookingTimeForm.value.service_id);
  
    this.artistService.getBookingSlots(formData).subscribe(
      (res: any) => {
        if (res) {
          if(res.length>0){
            this.bookingSlots = res;
            }
            this.isLoad = false;
          this.isLoad = false;
         
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  back(): void {
    this.location.back();
  }

}
