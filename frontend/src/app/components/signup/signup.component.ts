import { UserAuthService } from './../../services/user-auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CanComponentDiactivate } from 'src/app/services/can-deactivate-guard.service';
import { Observable } from 'rxjs';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, CanComponentDiactivate {
  signupForm: FormGroup;
  error = [];
  formSaved = false;

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmedPassword: new FormGroup({
        password: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required,
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
        ])),
        password_confirmation: new FormControl('', [Validators.required, Validators.minLength(5)])
      },(formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      })
    });
  }

  onSubmit(){
    this.formSaved = true;
    // console.log(this.signupForm);
    this.userAuthService.signup(this.signupForm.value).subscribe(
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
    this.error = error.error.errors;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(this.signupForm.dirty && !this.formSaved){
      return confirm('Do you want to discard the changes?');
    }else{
      return true;
    }
       
  }
}
