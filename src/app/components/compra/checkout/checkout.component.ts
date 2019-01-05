import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { CookieService } from 'ngx-cookie-service';
import { Compra } from 'src/app/models/compra';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  token: number;
  compraActual: Compra;
  cargo: boolean;

  constructor(
    private compraService: CompraService,
    private cookieService: CookieService,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  async ngOnInit() {
    this.token = +this.cookieService.get('Token');
    if (!this.token) {
      this.router.navigate(['/login']);
    }
    const res = <any> await this.compraService.getCompras();
    for (const compra of res) {
      if (this.token === compra.usuario) {
        if (!compra.pagado) {
          if (!compra.carrito) {
            this.compraActual = compra;
          }
        }
      }
    }
    if (!this.compraActual) {
      this.router.navigate(['/compra']);
    }
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
  }
}
