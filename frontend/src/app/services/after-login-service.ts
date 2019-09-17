import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
  })
export class AfterLogin implements CanActivate{
    constructor(private authService: AuthService,
                private token: TokenService,
                private router: Router){} 

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>| boolean{
        console.log(this.authService.authStatus);
        if(this.token.isValid()){
          return true;
        }else{
          this.router.navigate(['login']);
          return false;
        }
    }
}