import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadNavbarComponent } from './dashboad-navbar.component';

describe('DashboadNavbarComponent', () => {
  let component: DashboadNavbarComponent;
  let fixture: ComponentFixture<DashboadNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboadNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
