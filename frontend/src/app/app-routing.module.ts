import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { BeforeLogin } from './services/before-login.service';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AfterLogin } from './services/after-login-service';
import { HomeComponent } from './components/home/home.component';
import { DoctorDashboadComponent } from './components/dashboads/doctor-dashboad/doctor-dashboad.component';
// import { DashboadComponent } from './components/dashboad/dashboad.component';
// import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [BeforeLogin]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLogin]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLogin],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'doctor-dashboad',
    component: DoctorDashboadComponent,
    canActivate: [AfterLogin]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLogin]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
