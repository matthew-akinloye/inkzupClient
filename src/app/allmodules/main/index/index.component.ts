import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ArtistService } from '../../../service/artist.service';
import { ClientService } from '../../../service/client.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  step = 0;

  search: any = '';

  keyword = 'name';
  data: any = [];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(
    private wowService: NgwWowService,
    private artistService: ArtistService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkDomain();
    this.wowService.init();
  }

  ngOnInit(): void {
    if (localStorage.getItem('bookingData')) {
      localStorage.removeItem('bookingData');
    }

    if (localStorage.getItem('token')) {
      const now = new Date().getTime();
      var expiry: any = localStorage.getItem('expiry');
      var user_type: any = localStorage.getItem('user_type');
      if (expiry) {
        if (now < expiry && user_type == 2) {
          localStorage.removeItem('bookingData');
          this.router.navigate(['']);
        } else {
          this.logout();
        }
      }
    }
    this.checkLogin();
  }

  checkLogin() {
    this.clientService.checkLogin().subscribe(
      (res: any) => {},
      (err) => {
        this.router.navigate(['']);
      }
    );
  }
  checkDomain() {
    console.log(11);
    var formData: any = new FormData();
    formData.append('domain', window.location.hostname);

    this.artistService.checkDomain(formData).subscribe(
      (res: any) => {},
      (err) => {}
    );
  }

  logout() {
    this.clientService.logout();
  }
}
