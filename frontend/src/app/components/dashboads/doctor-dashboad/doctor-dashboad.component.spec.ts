import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashboadComponent } from './doctor-dashboad.component';

describe('DoctorDashboadComponent', () => {
  let component: DoctorDashboadComponent;
  let fixture: ComponentFixture<DoctorDashboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDashboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
