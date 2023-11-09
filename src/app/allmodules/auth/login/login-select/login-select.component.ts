import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-select',
  templateUrl: './login-select.component.html',
  styleUrls: ['./login-select.component.css'],
})
export class LoginSelectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  inkerLogin() {
    window.location.href = 'https://inkzup.com/Inkzer';
  }
}
