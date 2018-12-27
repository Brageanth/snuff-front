import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snuff-front';
  activeNav = false;
  homeNav = true;
  token: boolean;

  constructor(private cookieService: CookieService, private router: Router) { }

  navActive() {
    this.activeNav = !this.activeNav;
  }

  getToken() {
    this.token = this.cookieService.check('Token');
    console.log(this.token);
  }

  typeNav() {
    if (this.router.url === '/') {
      this.homeNav = true;
    } else {
      this.homeNav = false;
    }
    console.log(this.router.url);
  }
}
