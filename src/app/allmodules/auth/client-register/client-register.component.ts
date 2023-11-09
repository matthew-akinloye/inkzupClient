import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css'],
})
export class ClientRegisterComponent implements OnInit {
  constructor(public route: Router) {}

  ngOnInit(): void {}

  becomeInker() {
    // window.location.href = 'https://inkzup.com/Inkzer/register';
    window.location.href = 'https://inkzup.com/Inkzer/#/register';
    // window.open("https://inkzup.com/Inkzer/register");
    // this.route.navigate(["https://inkzup.com/Inkzer/#/register"]);
    // document.location.href = 'http://localhost:4400/';
  }
}
