import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkzersComponent } from './inkzers.component';

describe('InkzersComponent', () => {
  let component: InkzersComponent;
  let fixture: ComponentFixture<InkzersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkzersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkzersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
