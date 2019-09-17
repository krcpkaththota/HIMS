import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;
  constructor( 
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private token: TokenService
    ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    this.router.navigate(['/login']);
  }

}
