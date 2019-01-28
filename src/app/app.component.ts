import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';
import { Empresa } from './models/home';
import { LoginComponent } from './components/login/login.component';
import { CompraService } from './services/compra.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snuff-front';
  activeNav = false;
  homeNav = true;
  token: string;
  empresaList: Empresa;
  cargo = false;
  numeroCarrito = 0;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private homeService: HomeService,
    private compraService: CompraService
  ) { }

  navActive() {
    this.activeNav = !this.activeNav;
  }

  getToken() {
    this.token = this.cookieService.get('Token');
  }

  async getNumeroCarrito() {
    const res = <any> await this.compraService.getCompras();
    for (const compra of res) {
      if (this.token === compra.usuario) {
        if (!compra.pagado) {
          if (compra.carrito) {
            this.numeroCarrito++;
          }
        }
      }
    }
  }

  async typeNav(pCargo: boolean) {
    if (this.router.url === '/') {
      this.homeNav = true;
      this.empresaList = <Empresa> await this.homeService.getEmpresa();
    } else {
      this.homeNav = false;
    }
    this.getToken();
    await this.getNumeroCarrito();
    this.cargo = pCargo;
  }


  logOut() {
    this.cookieService.delete('Token');
    this.router.navigate(['/']);
  }
}
