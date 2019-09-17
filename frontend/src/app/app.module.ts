import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { PatientsListComponent } from './components/patient/patients-list/patients-list.component';
import { PatientComponent } from './components/patient/patient/patient.component';
import { PatientSearchComponent } from './components/patient/patient-search/patient-search.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { PatientExaminationComponent } from './components/patient/patient-examination/patient-examination.component';
import { PatientComplainsComponent } from './components/patient/patient-complains/patient-complains.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DoctorDashboadComponent } from './components/dashboads/doctor-dashboad/doctor-dashboad.component';
import { DashboadNavbarComponent } from './components/navbars/dashboad-navbar/dashboad-navbar.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ConsultantDashboadComponent } from './components/dashboads/consultant-dashboad/consultant-dashboad.component';
// import { DashboadComponent } from './components/dashboad/dashboad.component';
// import { DashboadNavarComponent } from './components/navbars/dashboad-navar/dashboad-navar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    PatientsListComponent,
    PatientComponent,
    PatientSearchComponent,
    PatientProfileComponent,
    PatientExaminationComponent,
    PatientComplainsComponent,
    HomeComponent,
    DoctorDashboadComponent,
    DashboadNavbarComponent,
    DropdownDirective,
    ConsultantDashboadComponent,
    // DashboadComponent,
    // DoctorDashboadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
