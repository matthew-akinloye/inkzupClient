import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-become-inkzer',
  templateUrl: './become-inkzer.component.html',
  styleUrls: ['./become-inkzer.component.css'],
})
export class BecomeInkzerComponent implements OnInit {
  isLoad: any = false;
  search: any = '';
  artistList: any = [];
  styleOfWork: any = [];
  starWork: any = [];
  serviceArr: any = [];
  InkzerArr: any = [];
  stateArr: any = [];
  cityArr: any = [];

  stateList: any = [];
  cityList: any = [];
  inkzerList: any = [];
  styleOfworkList: any = [];
  serviceList: any = [];
  artistname:any=[];

  filterForm!: FormGroup;

  alphabet: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  firstCount = 10;
  showTxt = 'Show More';
  showTxt_state = 'Show More';
  showTxt_city = 'Show More';
  showTxt_inkzer = 'Show More';

  counter = 10;
  counter_state = 10;
  counter_city = 10;
  counter_inkzer = 10;

  last_index = 100;

  info: any = '';

  collectionSize: any = 0;
  page: any = 1;
  pageSize: any = 10;
  page_no: any = '1';
  p: number = 1;

  constructor(
    private artistService: ArtistService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('bookingData')) {
      localStorage.removeItem('bookingData');
    }

    this.filterForm = new FormGroup({
      state: new FormControl('', []),
      city: new FormControl('', []),
      inkzer_name: new FormControl('', []),
      service: new FormControl('', []),
      style_of_work: new FormControl('', []),
      starWork: new FormControl('', []),
      rating: new FormControl('', []),
      search: new FormControl('', []),
    });
    this.getArtist();
    this.getStyleOFwork();
  }

  AddStyleOfWork(val: any, event: any) {
    var checked = event.checked;
    if (checked) {
      this.styleOfWork.push(val);
    } else {
      var index = this.styleOfWork.indexOf(val);
      this.styleOfWork.splice(index, 1);
    }

    this.filterForm.patchValue({ style_of_work: this.styleOfWork });
  }

  AddStar(val: any, event: any) {
    var checked = event.checked;
    if (checked) {
      this.starWork.push(val);
    } else {
      var index = this.starWork.indexOf(val);
      this.starWork.splice(index, 1);
    }

    // console.warn(this.starWork);

    this.filterForm.patchValue({ starWork: this.starWork });
  }

  AddService(val: any, event: any) {
    var checked = event.checked;
    if (checked) {
      this.serviceArr.push(val);
    } else {
      var index = this.serviceArr.indexOf(val);
      this.serviceArr.splice(index, 1);
    }

    // console.warn(this.serviceArr);

    this.filterForm.patchValue({ service: this.serviceArr });
  }

  AddInkzerName(event: any) {
    var checked = event.target.value;
      this.InkzerArr.push(checked);
    this.filterForm.patchValue({ inkzer_name: this.InkzerArr });
  }

  Addstate(val: any, event: any) {
    var checked = event.checked;
    if (checked) {
      this.stateArr.push(val);
    } else {
      var index = this.stateArr.indexOf(val);
      this.stateArr.splice(index, 1);
    }

    this.filterForm.patchValue({ state: this.stateArr });
  }

  citystate(val: any, event: any) {
    var checked = event.checked;
    if (checked) {
      this.cityArr.push(val);
    } else {
      var index = this.cityArr.indexOf(val);
      this.cityArr.splice(index, 1);
    }

    this.filterForm.patchValue({ city: this.cityArr });
  }

  getArtist() {
    this.isLoad = true;

    // console.log(params.code);

    this.filterForm.patchValue({
      search: '',
    });
    this.artistService.getAllArtist(this.filterForm.value).subscribe(
      (res: any) => {
        this.isLoad = false;

        if (res) {
          this.artistList = res.data;
          this.pageSize = res.per_page;
          this.page = res.currentPage;
          this.collectionSize = res.total_record;

          // console.log(this.artistList);
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  filter() {
    this.isLoad = true;
    this.artistService.getAllArtist(this.filterForm.value).subscribe(
      (res: any) => {
        this.isLoad = false;

        if (res) {
          this.artistList = res.data;
          return;
        }
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  getStyleOFwork() {
    this.artistService.getStyleOFwork().subscribe(
      (res: any) => {
        this.styleOfworkList = res.style;
        this.stateList = res.state;
        this.cityList = res.city;
        this.inkzerList = res.inkzers;

        //show more less for refund policies
        this.last_index = 10;
        if (this.last_index > 10) this.last_index = 10;
        this.counter = this.last_index;

        this.serviceList = res.services;
      },
      (err) => {}
    );
  }

  toggleCancel() {
    if (this.counter == 10) {
      this.counter = this.serviceList.length;
      this.showTxt = 'Show less';
    } else {
      this.counter = this.last_index;
      this.showTxt = 'Show More';
    }
  }
  toggleState() {
    if (this.counter_state == 10) {
      this.counter_state = this.stateList.length;
      this.showTxt_state = 'Show less';
    } else {
      this.counter_state = 10;
      this.showTxt_state = 'Show More';
    }
  }

  toggleCity() {
    if (this.counter_city == 10) {
      this.counter_city = this.cityList.length;
      this.showTxt_city = 'Show less';
    } else {
      this.counter_city = this.last_index;
      this.showTxt_city = 'Show More';
    }
  }
  toggleInkzer() {
    if (this.counter_inkzer == 10) {
      this.counter_inkzer = this.serviceList.length;
      this.showTxt_inkzer = 'Show less';
    } else {
      this.counter_inkzer = 10;
      this.showTxt_inkzer = 'Show More';
    }
  }
}
