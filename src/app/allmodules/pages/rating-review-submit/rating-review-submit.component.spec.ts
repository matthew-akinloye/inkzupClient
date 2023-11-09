import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingReviewSubmitComponent } from './rating-review-submit.component';

describe('RatingReviewSubmitComponent', () => {
  let component: RatingReviewSubmitComponent;
  let fixture: ComponentFixture<RatingReviewSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingReviewSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingReviewSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
