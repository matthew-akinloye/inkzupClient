import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkzerDetailsComponent } from './inkzer-details.component';

describe('InkzerDetailsComponent', () => {
  let component: InkzerDetailsComponent;
  let fixture: ComponentFixture<InkzerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkzerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkzerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
