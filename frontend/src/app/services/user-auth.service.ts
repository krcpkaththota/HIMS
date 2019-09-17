import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  signup(data){
    
    data.password = data.confirmedPassword.password;
    data.password_confirmation = data.confirmedPassword.password_confirmation;
    // console.log(data);
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
