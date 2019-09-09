import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientExaminationComponent } from './patient-examination.component';

describe('PatientExaminationComponent', () => {
  let component: PatientExaminationComponent;
  let fixture: ComponentFixture<PatientExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
