import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistVerifiedComponent } from './artist-verified.component';

describe('ArtistVerifiedComponent', () => {
  let component: ArtistVerifiedComponent;
  let fixture: ComponentFixture<ArtistVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistVerifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
