import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistService } from 'src/app/service/artist.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.css'],
})
export class ConsentFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private artistService: ArtistService
  ) {
    if (localStorage.getItem('bookingData')) {
      var retrievedData: any = localStorage.getItem('bookingData');
      this.bookingFomData = JSON.parse(retrievedData);
    } else {
      this.router.navigate(['/pages/Inkzers-list']);
      return;
    }
  }

  name = localStorage.getItem('name');
  isLoad: boolean = false;
  submitted: boolean = false;
  consentForm!: FormGroup;

  bookingFomData: any = [];
  bookingData: any = [];
  client_inital: any = '';

  futureDateError: any = 0;

  minDate = new Date().toISOString().split('T')[0];

  ngOnInit(): void {
    this.consentForm = this.formBuilder.group({
      signature: ['', [Validators.required]],
      client_initial: ['', [Validators.required]],
      term1: ['', [Validators.required, Validators.requiredTrue]],
      term2: ['', [Validators.required, Validators.requiredTrue]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      identification: ['', [Validators.required]],
      studio_name: ['', [Validators.required]],
    });
    this.getbookingDetails();

    var dtToday = new Date();

    var month: any = dtToday.getMonth() + 1;
    var day: any = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.consentForm.controls;
  }
  submitConsentForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.consentForm.invalid) {
      return;
    }

    console.log(this.consentForm.value.dob);

    this.futureDateError = 0;
    const mxDate = new Date();
    const inputDate = new Date(this.consentForm.value.dob);
    if (inputDate > mxDate) {
      this.futureDateError = 1;
      return;
    }

    if (this.bookingFomData) {
      Object.assign(this.bookingFomData, {
        signature: this.consentForm.value.signature,
        client_initial: this.client_inital,
        address: this.consentForm.value.address,
        city: this.consentForm.value.city,
        state: this.consentForm.value.state,
        dob: new Date(this.consentForm.value.dob),
        identification: this.consentForm.value.identification,
        studio_name: this.consentForm.value.studio_name,
        termCheck: this.consentForm.value.term1,
      });
      localStorage.setItem('bookingData', JSON.stringify(this.bookingFomData));
      this.router.navigate(['/pages/booking-time/']);
    }
  }

  checkterm($event: any) {}

  back(): void {
    this.location.back();
  }

  getbookingDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('service_id', this.bookingFomData.location);
    formData.append('date', this.bookingFomData.booking_date);
    this.artistService.getbookingDetails(formData).subscribe(
      (res: any) => {
        if (res) {
          this.bookingData = res;
          this.consentForm.patchValue({ studio_name: res.studio_name });
          this.consentForm.patchValue({ client_initial: res.client_inital });
          this.consentForm.patchValue({ signature: this.name });
          this.client_inital = res.client_inital;

          //Fill form if data is available
          if (this.bookingFomData) {
            if (this.bookingFomData.dob) {
              new Date(this.bookingFomData.dob);
              this.consentForm.patchValue({
                dob: new Date(this.bookingFomData.dob)
                  ? new Date(this.bookingFomData.dob)
                  : '',
              });
            }
            this.consentForm.patchValue({
              address: this.bookingFomData.address
                ? this.bookingFomData.address
                : '',
            });
            this.consentForm.patchValue({
              city: this.bookingFomData.city ? this.bookingFomData.city : '',
            });
            this.consentForm.patchValue({
              state: this.bookingFomData.state ? this.bookingFomData.state : '',
            });
            this.consentForm.patchValue({
              identification: this.bookingFomData.identification
                ? this.bookingFomData.identification
                : '',
            });
          }
          this.isLoad = false;
        }
      },
      (err) => {}
    );
  }
  handleAddressChange(event: any) {
    var country = '';
    var state = '';
    var city = '';
    var street = '';
    var route = '';
    var lat = event.geometry.location.lat();
    var long = event.geometry.location.lng();
    var address = event.formatted_address;
    var zipcode = '';
    var country_sort = '';
    // fetch required pera from google responce
    event.address_components.forEach((element: any) => {
      if (element.types.indexOf('locality') != -1 && city == '') {
        city = element.long_name;
      }
      if (element.types.indexOf('street_number') != -1 && street == '') {
        street = element.long_name;
      }
      if (element.types.indexOf('route') != -1 && route == '') {
        route = element.long_name;
      }

      if (
        element.types.indexOf('administrative_area_level_2') != -1 &&
        city == ''
      ) {
        city = element.long_name;
      }

      if (
        element.types.indexOf('administrative_area_level_1') != -1 &&
        state == ''
      ) {
        state = element.long_name;
      }

      if (
        element.types.indexOf('administrative_area_level') != -1 &&
        state == ''
      ) {
        state = element.long_name;
      }

      if (element.types.indexOf('country') != -1 && country == '') {
        country = element.long_name;
        country_sort = element.short_name;
      }
      if (element.types.indexOf('postal_code') != -1 && zipcode == '') {
        zipcode = element.long_name;
      }
    });
    // set value  in form
    // this.consentForm.patchValue({ country: country });
    this.consentForm.patchValue({ state: state });
    this.consentForm.patchValue({ city: city });
    // this.consentForm.patchValue({ zipcode: zipcode });
    // this.consentForm.patchValue({ latitude: lat });
    // this.consentForm.patchValue({ longitude: long });
    this.consentForm.patchValue({ address: address });
    // this.consentForm.patchValue({ street: street });
    // this.consentForm.patchValue({ route: route });
  }

  disableDate() {
    return false;
  }

  //datepicker
  validateDate($event: any) {
    this.futureDateError = 0;
    const mxDate = new Date();
    const inputDate = new Date($event.target.value);
    if (inputDate > mxDate) {
      this.futureDateError = 0;
    }
    this.futureDateError = 1;
  }

  _keyPress(event: any) {
    const pattern = /^[0-9]*$/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  dateFormat(event: any, backspace: any) {
    var value = event.target.value;

    if (value.match(/^\d{2}$/) !== null) {
      value = value + '/';
    } else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
      value = value + '/';
    }

    event.target.value = value.trim();
  }
}
