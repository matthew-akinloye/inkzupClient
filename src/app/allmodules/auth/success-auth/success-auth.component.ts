import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-auth',
  templateUrl: './success-auth.component.html',
  styleUrls: ['./success-auth.component.css']
})
export class SuccessAuthComponent implements OnInit {
  message:any="";

  constructor( 
    public dialog: MatDialog,
      public dialogRef: MatDialogRef<SuccessAuthComponent>,
       @Optional() @Inject(MAT_DIALOG_DATA) 
       public data: any
  
  ) { 
    this.message = data.msg;
  }


  ngOnInit(): void {
  }
  okClick(){
    this.dialogRef.close()
  }

}
