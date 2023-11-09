import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadConsantComponent } from './upload-consant.component';

describe('UploadConsantComponent', () => {
  let component: UploadConsantComponent;
  let fixture: ComponentFixture<UploadConsantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadConsantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadConsantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
