import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inkzers',
  templateUrl: './inkzers.component.html',
  styleUrls: ['./inkzers.component.css'],
})
export class InkzersComponent implements OnInit {
  constructor(private wowService: NgwWowService, private route: Router) {
    this.wowService.init();
  }

  ngOnInit(): void {}
  inker() {
    window.location.href = 'https://inkzup.com/Inkzer/#/register';
    // this.route.navigate(['/Inkzer/register']);
  }
}
