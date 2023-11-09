import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/service/artist.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
})
export class ServiceDetailComponent implements OnInit {
  isLoad: any = false;
  search: any = '';
  service: any = '';
  services: any = [];
  filename: any = [];
  i: any;

  firstCount = 100;
  last_index_refund = 100;
  last_index_cancel = 100;
  counter = 100;
  counter_cancel = 100;
  isReadMore: boolean = true;

  fb_link: any = '';
  insta_link: any = '';
  website_link: any = '';

  info_cancel: any = '';
  info_refund: any = '';

  showTxt_refund = 'Show More';
  showTxt_cancel = 'Show More';

  constructor(
    private artistService: ArtistService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    if (localStorage.getItem('bookingData')) {
      localStorage.removeItem('bookingData');
    }

    this.getServiceDetails();
  }

  getServiceDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('service_id', this.actRoute.snapshot.params.id);
    this.artistService.getServiceDetails(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        if (res) {
          this.service = res;
          this.services = res.filename;

          this.fb_link = res.fb_link;
          this.insta_link = res.instagram_link;
          this.website_link = res.website_link;

          this.info_refund = res.refundPolicies;
          this.info_cancel = res.cancellationPolicies;

          //show more less for refund policies
          this.last_index_refund = this.info_refund
            .substring(0, 100)
            .lastIndexOf(' ');
          if (this.last_index_refund > 100) this.last_index_refund = 100;
          this.counter = this.last_index_refund;

          //show more less for Cancel policies
          this.last_index_cancel = this.info_cancel
            .substring(0, 100)
            .lastIndexOf(' ');
          if (this.last_index_cancel > 100) this.last_index_cancel = 100;
          this.counter_cancel = this.last_index_cancel;

          return;
        }
        // this.artistData=res.data;
        // console.log(this.artistData);
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  bookService(uuid: any, service_id: any) {
    this.router.navigate(['/pages/booking-details/' + uuid], {
      queryParams: { service: service_id },
    });
  }

  toggleSkil(refund: any) {
    if (this.counter < 101) {
      this.counter = this.info_refund.length;
      this.showTxt_refund = 'Show less';
    } else {
      this.counter = this.last_index_refund;
      this.showTxt_refund = 'Show More';
    }
  }

  toggleCancel(refund: any) {
    if (this.counter_cancel < 101) {
      this.counter_cancel = this.info_cancel.length;
      this.showTxt_cancel = 'Show less';
    } else {
      this.counter_cancel = this.last_index_cancel;
      this.showTxt_cancel = 'Show More';
    }
  }
  FB() {
    window.open(this.fb_link, '_blank');
  }
  insta() {
    window.open(this.insta_link, '_blank');
  }
  website() {
    // window.location.href = this.website_link;
    window.open(this.website_link, '_blank');
  }
}
