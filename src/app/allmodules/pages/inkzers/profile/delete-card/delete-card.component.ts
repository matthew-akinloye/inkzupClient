import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { SuccessComponent } from '../../../success/success.component';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {

  fromOfficer:string;
  deleteErr!:"";
  deleteSuccess!:"";
  isLoad:any=false;
  checkDelete:boolean=false;

  constructor( private router: Router,
    private clientService: ClientService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteCardComponent>,
     @Optional() @Inject(MAT_DIALOG_DATA) 
     public data: any
  
  ) { 
    this.fromOfficer = data.pageValue;
    this.checkDelete=data.checkDelete;
      this.checkDelete=false;
      dialogRef.disableClose = false;
  }

ngOnInit(): void {

}

onYesClick(){
  this.dialogRef.close(DeleteCardComponent);
  this.isLoad=true;
  var id = this.fromOfficer;
  if(id){
    var formData: any = new FormData();
     formData.append('cardId', id);
     this.clientService.deleteCard(formData).subscribe((res:any)=>{
       if(res.success){
        this.isLoad=false;
        // // alert(res.success)
        this.checkDelete=true;
        this.dialogRef.close(this.checkDelete);
        // this.successDialog();
       }
     
     },
     err=>{
      this.isLoad=false;
      if(err.error){
        alert(err.error.error);
       }
     }
     )
  }
}
onNoClick(){
  this.dialogRef.backdropClick().subscribe(result => {
    this.dialogRef.close(this.checkDelete);
  });
}
successDialog(): void {
  const dialogRef = this.dialog.open(SuccessComponent, {
    width: '460px',
    data:  { 'msg': 'You have successfully  deleted the  client', 'title':'Success' },
  });
}

}
