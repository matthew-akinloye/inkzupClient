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
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  isLoad: boolean = false;
  serviceList: any = [];
  serviceDetails: any = [];
  artistDetails: any = [];
  imagesPreview: any = [];
  images: any = [];
  bookingFomData: any = [];
  submitted: boolean = false;
  subscription_plan: any = '';

  service_id: any = '';
  location_err = '';
  tattoo_size_err = '';
  tattoo_color_err = '';
  description_err = '';
  refrenceImg_err = '';
  AddBookingDetailsForm!: FormGroup;

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
    this.actRoute.queryParams.subscribe((params) => {
      if (params.service) {
        this.service_id = Number(params.service);
      }
    });

    if (localStorage.getItem('bookingData')) {
      var retrievedData: any = localStorage.getItem('bookingData');
      this.bookingFomData = JSON.parse(retrievedData);
    }

    this.AddBookingDetailsForm = new FormGroup({
      location: new FormControl(this.service_id, [Validators.required]),
      tattoo_size: new FormControl(this.bookingFomData.tattoo_size, [
        Validators.required,
      ]),
      tattoo_color: new FormControl(this.bookingFomData.tattoo_color, [
        Validators.required,
      ]),
      description: new FormControl(this.bookingFomData.description, [
        Validators.required,
      ]),
      tattoo_location: new FormControl(this.bookingFomData.tattoo_location, [
        Validators.required,
      ]),
      reference_images: new FormControl('', []),
    });
    this.getServices();
  }

  getServices() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('user_id', this.actRoute.snapshot.params.uuid);
    formData.append('service_id', this.service_id);
    this.artistService.getBookServices(formData).subscribe(
      (res: any) => {
        this.serviceList = res.services;
        this.artistDetails = res.artist;
        this.serviceDetails = res.serviceDetails;

        this.subscription_plan = this.artistDetails.subscription_plan;
        // console.log(this.subscription_plan)
        if (this.service_id) {
          this.AddBookingDetailsForm.patchValue({
            location: this.service_id,
          });
        }
        this.isLoad = false;
      },
      (err) => {}
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AddBookingDetailsForm.controls;
  }

  //Add booking step-1
  AddBookingDetails() {
    this.refrenceImg_err = '';
    this.submitted = true;

    if (this.images.length == 0) {
      this.refrenceImg_err = 'The service images is required.';
    } else {
      this.refrenceImg_err = '';
    }
    // stop here if form is invalid
    if (this.AddBookingDetailsForm.invalid) {
      return;
    }

    if (this.AddBookingDetailsForm.valid) {
      var bookingData: any = new Array();
      var refrence_imges: any = new Array();

      bookingData = {
        location: this.AddBookingDetailsForm.value.location,
        tattoo_location: this.AddBookingDetailsForm.value.tattoo_location,
        tattoo_size: this.AddBookingDetailsForm.value.tattoo_size,
        description: this.AddBookingDetailsForm.value.description,
        tattoo_color: this.AddBookingDetailsForm.value.tattoo_color,
      };

      //Save images in temp location
      var formData: any = new FormData();
      if (this.images.length > 0) {
        for (var i = 0; i < this.images.length; i++) {
          formData.append('file[]', this.images[i]);
        }

        this.isLoad = true;
        this.artistService.saveImgVideo(formData).subscribe(
          (res: any) => {
            this.isLoad = false;
            Object.assign(bookingData, {
              file: res,
            });
            localStorage.setItem('bookingData', JSON.stringify(bookingData));

            if (this.subscription_plan == 1) {
              this.router.navigate(['/pages/booking-time/']);
            } else if (this.subscription_plan == 2) {
              this.router.navigate(['/pages/consent-form/']);
            }
          },
          (err) => {
            this.isLoad = false;
          }
        );
      } else {
        this.refrenceImg_err = 'The service images is required.';
        return;
        // this.isLoad = false;
        // formData.append('file[]', []);
        // localStorage.setItem('bookingData', JSON.stringify(bookingData));
        // // this.router.navigate(['/pages/consent-form/']);
        // if (this.subscription_plan == 1) {
        //   this.router.navigate(['/pages/booking-time/']);
        // } else if (this.subscription_plan == 2) {
        //   this.router.navigate(['/pages/consent-form/']);
        // }
      }
    }
  }

  removeBookingDetails() {
    localStorage.removeItem('location');
    localStorage.removeItem('bookingData');
  }

  onFileChange(event: any) {
    this.refrenceImg_err = '';
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesPreview.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
        this.images.push(event.target.files[i]);
      }
    }
  }
  removeSelectedFile(index: any) {
    // Delete the item from fileNames list
    this.imagesPreview.splice(index, 1);
    // delete file from FileList
    this.images.splice(index, 1);
  }

  back(): void {
    this.location.back();
  }
}
