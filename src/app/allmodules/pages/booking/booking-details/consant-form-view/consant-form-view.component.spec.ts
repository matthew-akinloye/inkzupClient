import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsantFormViewComponent } from './consant-form-view.component';

describe('ConsantFormViewComponent', () => {
  let component: ConsantFormViewComponent;
  let fixture: ComponentFixture<ConsantFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsantFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsantFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
