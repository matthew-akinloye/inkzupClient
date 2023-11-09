import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/service/artist.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-save-inkzer',
  templateUrl: './save-inkzer.component.html',
  styleUrls: ['./save-inkzer.component.css'],
})
export class SaveInkzerComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    private location: Location
  ) {}

  isLoad: boolean = false;
  savedInkzer: any = [];
  collectionSize: any = 0;
  page: any = 1;
  pageSize: any = 10;
  page_no: any = '1';
  p: number = 1;

  ngOnInit(): void {
    this.getSavedInkzer();
  }

  getSavedInkzer() {
    this.isLoad = true;
    this.artistService.getSavedInkzer().subscribe(
      (res: any) => {
        this.isLoad = false;
        this.savedInkzer = res.data;
        this.pageSize = res.per_page;
        this.page = res.currentPage;
        this.collectionSize = res.total_record;
        return;
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
