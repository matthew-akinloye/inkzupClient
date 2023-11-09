import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCardAddComponent } from './booking-card-add.component';

describe('BookingCardAddComponent', () => {
  let component: BookingCardAddComponent;
  let fixture: ComponentFixture<BookingCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
