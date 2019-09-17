import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLogin {

  constructor(private authService: AuthService,
              private token:TokenService,
              private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>| boolean{
      if(!this.token.isValid()){
        return true;
      }else{
        this.router.navigate(['doctor-dashboad']);
        return false;
      }
    
  }
}
