import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.cookieService.check('Token')) {
      this.router.navigate(['/login']);
    }
    this.appComponent.typeNav(true);
  }
}
