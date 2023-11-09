import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConsantFormViewComponent } from './consant-form-view/consant-form-view.component';
import { Location } from '@angular/common';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { SuccessComponent } from '../../success/success.component'

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css'],
})
export class ViewBookingComponent implements OnInit {
  constructor(
    private ArtistService: ArtistService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private location: Location
  ) { }
  isLoad: boolean = false;
  show: boolean = false;
  bookingData: any = [];
  refrenceImages: any = [];
  constant_form_date: any = '';
  constant_form_name: any = '';

  ngOnInit(): void {
    this.getbookingDetails();
  }
  //get booking details
  getbookingDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('appoinment_id', this.ActivatedRoute.snapshot.params.uuid);
    this.ArtistService.clientBookingDetails(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.bookingData = res;
        this.refrenceImages = res.refrenceImages;
        this.constant_form_date = res.constant_form_date;
        this.constant_form_name = res.constant_form_name;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  consantFormDialog() {
    const dialogRef = this.dialog.open(ConsantFormViewComponent, {
      width: '50%',
      data: {
        constant_form_date: this.constant_form_date,
        checkDelete: false,
        constant_form_name: this.constant_form_name,
      },
    });
  }

  back(): void {
    this.location.back();
  }

  cancelBookingDialog(id: any): void {
    const dialogRef = this.dialog.open(CancelBookingComponent, {
      width: '400px',
      data: { 'pageValue': id, 'checkDelete': false },
    }).afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result)
        this.successDialog();
      }
    });
  }
  successDialog(): void {
    const dialogRef = this.dialog.open(SuccessComponent, {
      width: '460px',
      data: { 'msg': 'You have successfully  cancelled your booking', 'title': 'Success' },
    })
      .afterClosed().subscribe(() => this.getbookingDetails());
  }

  bookingStatus($event: any) {
    var val = $event.target.value;

    if (val == 1) {
      this.cancelBookingDialog(this.bookingData.uuid)
    }
    else if (val == 2) {
      this.router.navigate(['/pages/booking-reschedule/' + this.bookingData.uuid]);
    }
  }

}
