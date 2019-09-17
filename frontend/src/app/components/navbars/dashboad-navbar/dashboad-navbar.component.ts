import { TokenService } from 'src/app/services/token.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboad-navbar',
  templateUrl: './dashboad-navbar.component.html',
  styleUrls: ['./dashboad-navbar.component.css']
})
export class DashboadNavbarComponent implements OnInit {

  constructor(private auth: AuthService,
    private token: TokenService,
    private router: Router) { }

ngOnInit() {
}

logout(event: MouseEvent){
event.preventDefault();
this.auth.changeAuthStatus(false);
this.token.remove();
this.router.navigate(['/login']);
}

}
