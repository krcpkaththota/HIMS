import { AuthService } from './../../services/auth.service';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = null;

  constructor(
    private userAuthService: UserAuthService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    // console.log(this.loginForm);
    return this.userAuthService.login(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigate(['/doctor-dashboad']);
  }

  handleError(error){
    this.error = error.error.error;
  }

}
