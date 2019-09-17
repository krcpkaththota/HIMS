import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantDashboadComponent } from './consultant-dashboad.component';

describe('ConsultantDashboadComponent', () => {
  let component: ConsultantDashboadComponent;
  let fixture: ComponentFixture<ConsultantDashboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantDashboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
