import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


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

  constructor(private cookieService: CookieService) { }

  navActive() {
    this.activeNav = !this.activeNav;
  }

  getToken() {
    this.token = this.cookieService.check('Token');
    console.log(this.token);
  }

  typeNav() {

  }
}
