import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInkzerComponent } from './save-inkzer.component';

describe('SaveInkzerComponent', () => {
  let component: SaveInkzerComponent;
  let fixture: ComponentFixture<SaveInkzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInkzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveInkzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
