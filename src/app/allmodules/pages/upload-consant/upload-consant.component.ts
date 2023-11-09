import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistService } from '../../../service/artist.service';

@Component({
  selector: 'app-upload-consant',
  templateUrl: './upload-consant.component.html',
  styleUrls: ['./upload-consant.component.css']
})
export class UploadConsantComponent implements OnInit {
  name = localStorage.getItem('name');
  isLoad: boolean = false;
  submitted: boolean = false;
  consentForm!: FormGroup;
  client_token = localStorage.getItem('token');
  uuid: any = '';
  client_inital: any = '';



  term_err: any = '';
  bookingFomData: any = [];

  minDate = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private actRoute: ActivatedRoute,
    private artistService: ArtistService
  ) {
    this.uuid = this.actRoute.snapshot.params.uuid;
    if (!this.client_token) {
      this.router.navigate(['/login'], {
        queryParams: { path: '/pages/upload-form/' + this.uuid },
      });
    }
    else {
      this.getBookings();
    }
  }


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
      appointment_uuid: [this.actRoute.snapshot.params.uuid, []],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.consentForm.controls;
  }
  submitConsentForm() {
    this.submitted = true;

    this.term_err = '';

    if (this.consentForm.value.term) {
    } else {
      this.term_err = 'Please accept the T&C and Privacy Policy.';
    }

    // console.log(this.consentForm.valid);
    // stop here if form is invalid
    if (this.consentForm.invalid) {
      return;
    }
    this.isLoad = true;
    this.artistService.updateConsantForm(this.consentForm.value).subscribe((res: any) => {
      this.isLoad = false;
      this.router.navigate(['/pages/booking-confirm']);
    },
      err => {
        this.isLoad = false;
      }
    )
  }

  getBookings() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('booking_id', this.actRoute.snapshot.params.uuid);
    this.artistService.getbookingConsant(formData).subscribe((res: any) => {
      this.consentForm.patchValue({ studio_name: res.studio_name })
      this.consentForm.patchValue({ client_initial: res.client_inital })
      this.consentForm.patchValue({ signature: this.name })
      this.client_inital = res.client_inital;
      this.isLoad = false;
    },
      err => {
        this.router.navigate(['/404']);
        this.isLoad = false;
      }
    )
  }


  back(): void {
    this.location.back();
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

  getbookingDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('service_id', this.bookingFomData.location);
    formData.append('date', this.bookingFomData.booking_date);
    this.artistService.getbookingDetails(formData).subscribe(
      (res: any) => {
        if (res) {
          this.consentForm.patchValue({ studio_name: res.studio_name })
          this.consentForm.patchValue({ client_initial: res.client_inital })
          this.consentForm.patchValue({ signature: this.name })
          this.client_inital = res.client_inital;
          this.isLoad = false;
        }
      },
      (err) => { }
    );
  }

}
