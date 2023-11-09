import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { ArtistService } from 'src/app/service/artist.service';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating-review',
  templateUrl: './rating-review.component.html',
  styleUrls: ['./rating-review.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RatingReviewComponent implements OnInit {
  isLoad: boolean = false;
  submitted: boolean = false;
  reviewForm!: FormGroup;
  rating: any = 0;
  rating_err = '';

  constructor(
    private artistService: ArtistService,
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReviewDetails();
    // if (localStorage.getItem('token')) {
    //   const now = new Date().getTime();
    //   var expiry: any = localStorage.getItem('expiry');
    //   var user_type: any = localStorage.getItem('user_type');
    //   if (expiry) {
    //     if (now < expiry && user_type == 2) {
    //     } else {
    //       this.router.navigate(['/login'], {
    //         queryParams: { path: '/pages/rating-review/' + this.actRoute.snapshot.params.artist_id },
    //       });

    //     }
    //   }
    // } else {
    //   var rating: any = 1;
    //   var url: any = this.router.url;
    //   this.router.navigate(['/login'], {
    //     queryParams: { path: '/pages/rating-review/' + this.actRoute.snapshot.params.artist_id },
    //   });
    //   // this.logout();
    // }

    this.reviewForm = this.formBuilder.group({
      rating: ['', []],
      feedback: ['', [Validators.required, Validators.minLength(30)]],
      images: ['', []],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.reviewForm.controls;
  }

  addReview() {
    this.submitted = true;
    this.rating_err = '';
    // stop here if form is invalid
    if (this.rating == 0) {
      this.rating_err = 'Please select rating.';
      return;
    }

    if (this.reviewForm.invalid) {
      return;
    }
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('artist_uuid', this.actRoute.snapshot.params.artist_id);
    formData.append('rating', this.rating);
    formData.append('message', this.reviewForm.value.feedback);

    this.artistService.addRating(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.router.navigate(['/pages/rating-review-submit']);
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  onRatingSet(rating: number): void {
    this.rating = rating;
  }

  getReviewDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append(
      'appointment_uuid',
      this.actRoute.snapshot.params.artist_id
    );
    this.artistService.getReviewAddInfo(formData).subscribe(
      (res: any) => {
        if (!res) {
          this.router.navigate(['']);
        }
        this.isLoad = false;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  logout() {
    this.clientService.logout();
  }
}
