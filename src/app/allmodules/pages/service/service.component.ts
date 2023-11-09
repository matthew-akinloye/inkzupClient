import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  isLoad: any = false;
  search: any = '';
  serviceList: any = [];
  collectionSize: any = 0;
  page: any = 1;
  pageSize: any = 10;
  page_no: any = '1';
  p: number = 1;
  banner_img: any = '';

  constructor(
    private artistService: ArtistService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getArtistService();
  }

  getArtistService() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('user_id', this.actRoute.snapshot.params.uuid);
    this.artistService.getArtistServices(formData).subscribe(
      (res: any) => {
        this.isLoad = false;

        if (res) {
          this.serviceList = res.data;
          this.pageSize = res.per_page;
          this.page = res.currentPage;
          this.collectionSize = res.total_record;
          this.banner_img = res.banner_img;
          return;
        }
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
}
