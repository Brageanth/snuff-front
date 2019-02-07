import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  users: Array<Usuario>;
  token: string;
  usuario: Usuario;

  constructor(
    private appComponent: AppComponent,
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService
  ) { }

  async ngOnInit() {
    this.comprobarLogin();
    this.users = <Usuario[]> await this.loginService.getUsuarios();
    this.usuario = this.buscarUser(this.token);
    this.appComponent.typeNav(true);
  }

  comprobarLogin() {
    if (!this.cookieService.check('Token')) {
      this.router.navigate(['/login']);
    } else {
      this.token = this.cookieService.get('Token');
    }
  }

  buscarUser(correo: string) {
    for (const user of this.users) {
      if (correo === user.correo) {
        return user;
      }
    }
  }
}
