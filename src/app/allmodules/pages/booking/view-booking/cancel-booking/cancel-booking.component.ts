import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArtistService } from '../../../../../service/artist.service'

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  fromOfficer: any = '';
  deleteErr: any = "";
  deleteSuccess: any = "";
  isLoad: any = false;
  checkDelete: boolean = false
  constructor(
    private artistService: ArtistService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CancelBookingComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA)
    public data: any

  ) {
    this.fromOfficer = data.pageValue;
    this.checkDelete = data.checkDelete;
    this.checkDelete = false;
    dialogRef.disableClose = false;
  }

  ngOnInit(): void {
  }

  onYesClick() {
    // this.dialogRef.close(CancelBookingComponent);
    this.isLoad = true;
    var id = this.fromOfficer;
    if (id) {
      var formData: any = new FormData();
      formData.append('appoinment_id', id);
      this.artistService.cancelBooking(formData).subscribe((res: any) => {
        this.dialogRef.close(CancelBookingComponent);

        this.checkDelete = true;

        this.isLoad = false;
        this.dialogRef.close(this.checkDelete);

      },
        err => {
          this.isLoad = false;
          if (err.error) {
            alert(err.error.error);
          }
        }
      )
    }
  }

}
