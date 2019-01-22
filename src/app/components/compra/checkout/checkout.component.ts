import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { CookieService } from 'ngx-cookie-service';
import { Compra } from 'src/app/models/compra';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/login.service';
import { TallaService } from 'src/app/services/talla.service';
import { EstampadoService } from 'src/app/services/estampado.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  token: string;
  cargo: boolean;
  imgCompra: string;
  usuario: any;
  users: any;
  compras: Array<Compra> = [];

  constructor(
    private compraService: CompraService,
    private cookieService: CookieService,
    private router: Router,
    private appComponent: AppComponent,
    private loginService: LoginService,
    private tallaService: TallaService,
    private estampadoService: EstampadoService
  ) { }

  async ngOnInit() {
    this.token = this.cookieService.get('Token');
    if (!this.token) {
      this.router.navigate(['/login']);
    }
    const res = <any> await this.compraService.getCompras();
    const tal = <any> await this.tallaService.getTalla();
    const est = <any> await this.estampadoService.getEstampado();
    for (const compra of res) {
      if (this.token === compra.usuario) {
        if (!compra.pagado) {
          if (!compra.carrito) {
            this.compras.push(compra);
          }
        }
      }
      for (const talla of tal) {
        if (compra.talla === talla.id) {
          compra.tallaNombre = 'talla ' + talla.talla;
        }
      }
      for (const estampado of est) {
        if (compra.estampado === estampado.nombre) {
          compra.cantidadDisponible = estampado.cantidad;
        }
      }
    }
    if (!this.compras) {
      this.router.navigate(['/compra']);
    }
    this.users = await this.loginService.getUsuarios();
    this.usuario = this.buscarUser(this.token);
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
  }

  buscarUser(correo: string) {
    for (const user of this.users) {
      if (correo === user.correo) {
        return user;
      }
    }
  }

  onSubmit(updateForm: NgForm) {
    this.compraService.sendCompra(updateForm.value);
  }
}
