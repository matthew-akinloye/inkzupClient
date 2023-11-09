import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConsantFormComponent } from './client-consant-form.component';

describe('ClientConsantFormComponent', () => {
  let component: ClientConsantFormComponent;
  let fixture: ComponentFixture<ClientConsantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConsantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConsantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
