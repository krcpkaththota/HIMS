import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComplainsComponent } from './patient-complains.component';

describe('PatientComplainsComponent', () => {
  let component: PatientComplainsComponent;
  let fixture: ComponentFixture<PatientComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
