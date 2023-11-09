import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location
  ) {}

  paymentDetails: any = [];
  isLoad: boolean = false;

  ngOnInit(): void {
    this.getPaymentDetails();
  }

  getPaymentDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('payment_id', this.actRoute.snapshot.params.uuid);
    this.artistService.paymentDetails(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.paymentDetails = res;
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
