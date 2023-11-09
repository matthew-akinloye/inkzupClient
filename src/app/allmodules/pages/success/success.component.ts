import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  message:any="";

  constructor( 
    public dialog: MatDialog,
      public dialogRef: MatDialogRef<SuccessComponent>,
       @Optional() @Inject(MAT_DIALOG_DATA) 
       public data: any
  
  ) { 
    this.message = data.msg;
  }


  ngOnInit(): void {
  }

  Okclick(){
    this.dialogRef.close()
  }

}
