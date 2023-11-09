import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    private router: Router,
    private location: Location
  ) {}
  selected = 'option2';
  paymentHistory: any = [];
  collectionSize: any = 0;
  page: any = 1;
  pageSize: any = 10;
  page_no: any = '1';
  p: number = 1;
  isLoad: boolean = false;

  ngOnInit(): void {
    this.getpaymentHistory();
  }

  getpaymentHistory() {
    this.isLoad = true;
    this.artistService.paymentHistrory().subscribe(
      (res: any) => {
        this.paymentHistory = res.data;
        this.pageSize = res.per_page;
        this.page = res.currentPage;
        this.collectionSize = res.total_record;
        this.isLoad = false;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  back(): void {
    this.location.back();
  }
}
