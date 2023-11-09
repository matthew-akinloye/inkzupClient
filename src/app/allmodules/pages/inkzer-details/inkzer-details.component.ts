import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/service/artist.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from '../success/success.component';
import { NgxStarsComponent } from 'ngx-stars';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-inkzer-details',
  templateUrl: './inkzer-details.component.html',
  styleUrls: ['./inkzer-details.component.css'],
})
export class InkzerDetailsComponent implements OnInit {
  @ViewChild(NgxStarsComponent)
  starsComponent!: NgxStarsComponent;

  isLoad: any = false;
  search: any = '';
  serviceList: any = [];
  artistData: any = [];
  portfolioList: any = [];
  portfolioImages: any =[];
  reviewList: any = [];
  collectionSize: any = 0;
  page: any = 1;
  pageSize: any = 10;
  page_no: any = '1';
  p: number = 1;
  conversastion_id: any = '';
  conversastion_channel: any = '';
  channel_id: any = '';
  receiver_id: any = '';

  working_hours_show: boolean = false;
  address_show: boolean = false;
  address_detail_show: boolean = false;

  reviewCount: number = 0;

  firstCount = 100;
  last_index_refund = 100;
  last_index_cancel = 100;
  counter = 100;
  counter_cancel = 100;
  isReadMore: boolean = true;

  info_cancel: any = '';
  info_refund: any = '';

  fb_link: any = '';
  insta_link: any = '';
  website_link: any = '';

  showTxt_refund = 'Show More';
  showTxt_cancel = 'Show More';

  constructor(
    private artistService: ArtistService,
    private actRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getArtistProfile();
    this.getArtistService();
    this.getArtistPortfolio();
  }

  checkIfAllPropertiesAreNull = (object: any) => {
    const properties = ["closing_time", "open_close", "opening_time"];
    for (const property of properties) {
      if (object[property] !== null) {
        return true;
      }
    }
    return false;
  };

  checkForAddress = (artistData : any, properties: any) => {
    for (const property of properties) {
      if (artistData[property] !== null) {
        return true;
      }
    }
    return false;
  }

  getArtistProfile() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('artist_id', this.actRoute.snapshot.params.id);
    if (localStorage.getItem('token')) {
      this.artistService.getArtistDetails(formData).subscribe(
        (res: any) => {
          this.artistData = res.Artist;
          this.reviewCount = this.artistData.reviewstar;
          this.conversastion_id = this.artistData.conversastion_id;
          this.conversastion_channel = this.artistData.conversastion_channel;
          this.starsComponent.setRating(this.artistData.reviewstar);

          if (res.Artist.refundPolicies) {
            this.info_refund = res.Artist.refundPolicies;
            //show more less for refund policies
            this.last_index_refund = this.info_refund ?? this.info_refund
              .substring(0, 100)
              .lastIndexOf(' ');
            if (this.last_index_refund > 100) this.last_index_refund = 100;
            this.counter = this.last_index_refund;
          }
          if (res.Artist.cancellationPolicies) {
            this.info_cancel = res.Artist.cancellationPolicies;
            //show more less for Cancel policies
            this.last_index_cancel = this.info_cancel ? this.info_cancel
              .substring(0, 100)
              .lastIndexOf(' ') : 0;
            if (this.last_index_cancel > 100) this.last_index_cancel = 100;
            this.counter_cancel = this.last_index_cancel;
          }
          if(res.Artist.workhours.length > 0){
            this.working_hours_show = res.Artist.workhours.every(this.checkIfAllPropertiesAreNull);
          }
          // this.address_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode", "studio_name"]);
          this.address_show = this.checkForAddress(res.Artist,["address", "city", "zipcode", "studio_name"]);

          // this.address_detail_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode"])
          this.address_detail_show = this.checkForAddress(res.Artist,["address", "city", "zipcode"])

          this.fb_link = res.Artist.fb_link;
          this.insta_link = res.Artist.instagram_link;
          this.website_link = res.Artist.website_link;
          this.reviewList = res.Artist.review;
          this.isLoad = false;
          return;
        },
        (err) => {
          this.isLoad = false;
          this.router.navigate(['/404']);
        }
      );
    } else {
      this.artistService.getSingleArtistDetails(formData).subscribe(
        (res: any) => {
          if (res) {
            this.artistData = res.Artist;
            this.reviewList = res.Artist.review;
            this.conversastion_id = res.conversastion_id;
            this.fb_link = res.Artist.fb_link;
            this.insta_link = res.Artist.instagram_link;
            this.website_link = res.Artist.website_link;
            this.starsComponent.setRating(this.artistData.reviewstar);

            //show more less for refund policies
            this.info_refund = res.Artist.refundPolicies;
            this.last_index_refund = this.info_refund ? this.info_refund
              .substring(0, 100)
              .lastIndexOf(' ') : 0;
            if (this.last_index_refund > 100) this.last_index_refund = 100;
            this.counter = this.last_index_refund;

            //show more less for Cancel policies
            this.info_cancel = res.Artist.cancellationPolicies;
            this.last_index_cancel = this.info_cancel ? this.info_cancel
              .substring(0, 100)
              .lastIndexOf(' ') : 0;
            if (this.last_index_cancel > 100) this.last_index_cancel = 100;
            this.counter_cancel = this.last_index_cancel;
            this.isLoad = false;

            if(res.Artist.workhours.length > 0){
              this.working_hours_show = res.Artist.workhours.every(this.checkIfAllPropertiesAreNull);
            }
            // this.address_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode", "studio_name"]);
            this.address_show = this.checkForAddress(res.Artist,["address", "city", "zipcode", "studio_name"]);
            // this.address_detail_show = this.checkForAddress(res.Artist,["street", "address", "route", "city", "zipcode"])
            this.address_detail_show = this.checkForAddress(res.Artist,["address", "city", "zipcode"])
            
            return;
          }
        },
        (err) => {
          this.isLoad = false;
          this.router.navigate(['/404']);
        }
      );
    }
  }

  getArtistService() {
    this.isLoad = true;
    var formData: any = new FormData();
    // let  param = {'search':this.search,}
    formData.append('user_id', this.actRoute.snapshot.params.id);
    this.artistService.getArtistServices(formData).subscribe(
      (res: any) => {
        this.serviceList = res.data;
        this.isLoad = false;
        return;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  getArtistPortfolio() {
    this.isLoad = true;
    var formData: any = new FormData();
    // let  param = {'search':this.search,}
    formData.append('artist_id', this.actRoute.snapshot.params.id);
    this.artistService.getArtistPortfolios(formData).subscribe(
      (res: any) => {
        if (res) {
          this.portfolioList = res.data;
          this.portfolioList.forEach((portfolio: any) => {
            this.portfolioImages.push(...portfolio.portfolioImg);
          });
          this.pageSize = res.per_page;
          this.page = res.currentPage;
          this.collectionSize = res.total_record;
          this.isLoad = false;
          return;
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  saveInkzer(artist_id: any) {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('artist_id', artist_id);
    if (localStorage.getItem('token')) {
      this.artistService.saveInkzer(formData).subscribe(
        (res: any) => {
          this.isLoad = false;
          if (res) {
            this.successeDialog(res.message);
          }
        },
        (err) => {
          this.isLoad = false;
        }
      );
    } else {
      this.isLoad = false;
      this.router.navigate(['/pages/profile']);
    }
  }

  successeDialog(message: any): void {
    const dialogRef = this.dialog
      .open(SuccessComponent, {
        width: '460px',
        data: { msg: message },
      })
      .afterClosed()
      .subscribe(() => this.getArtistProfile());
  }

  takeMeToDynamicUrl(url: any) {
    document.location.href = url;
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

  bookService(uuid: any, service_id: any) {
    this.router.navigate(['/pages/booking-details/' + uuid], {
      queryParams: { service: service_id },
    });
  }

  goDown() {
    if (this.reviewList.length > 0) {
      this.scroller.scrollToAnchor('targetRed');
    }
  }
  messageInkzer(artist: any) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/pages/message'], {
        queryParams: {
          artist: artist,
          conversastion_id: this.conversastion_id,
          channel: this.conversastion_channel,
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
