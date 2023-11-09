import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeInkzerComponent } from './become-inkzer.component';

describe('BecomeInkzerComponent', () => {
  let component: BecomeInkzerComponent;
  let fixture: ComponentFixture<BecomeInkzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeInkzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeInkzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
