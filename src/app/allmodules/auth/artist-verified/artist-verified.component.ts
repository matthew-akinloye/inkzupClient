import { Component, OnInit } from '@angular/core';
import {ClientService} from 'src/app/service/client.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-artist-verified',
  templateUrl: './artist-verified.component.html',
  styleUrls: ['./artist-verified.component.css']
})
export class ArtistVerifiedComponent implements OnInit {

  emailVerifyForm!:FormGroup;
  form_err:any="";
  form_Success:any="";
  constructor(
    private clientService:ClientService,
    private router:Router,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.emailVerifyForm=this.formBuilder.group({
      'token':[ this.actRoute.snapshot.params.token,[]]
    });
    this.verifyEmail();
  }

  login(){
    
    // this.router.navigate(['/login']);
    window.location.href="https://inkzup.com/Inkzer/";
  }

  verifyEmail(){
    this.clientService.verifyEmailartist(this.emailVerifyForm.value).subscribe((res:any)=>{
      this.form_Success=res.success;
    },
    err=>{
      if(err.error){
        this.form_err=err.error;
      }
    }
    )

  }

}
