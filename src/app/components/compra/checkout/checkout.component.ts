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
import { UsuarioService } from 'src/app/services/usuario.service';

const DEBITO = 'debito';
const CREDITO = 'credito';
const EFECTIVO = 'efectivo';
const CONTRA_ENTREGA = 'contraEntrega';
const ENVIO = 2500;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  DEBITO = DEBITO;
  CREDITO = CREDITO;
  EFECTIVO = EFECTIVO;
  CONTRA_ENTREGA = CONTRA_ENTREGA;
  ENVIO = ENVIO;

  token: string;
  cargo: boolean;
  imgCompra: string;
  usuario: any;
  users: any;
  compras: Array<Compra> = [];
  pig = '../../../../assets/img/pig.png';
  debito = false;
  tarjeta = '../../../../assets/img/tarjeta.png';
  credito = false;
  money = '../../../../assets/img/money.png';
  efectivo = false;
  total = 0;
  subtotal = 0;
  bancos = [];

  constructor(
    public compraService: CompraService,
    private cookieService: CookieService,
    private router: Router,
    private appComponent: AppComponent,
    private loginService: LoginService,
    private tallaService: TallaService,
    private estampadoService: EstampadoService,
    public usuarioService: UsuarioService
  ) { }

  async ngOnInit() {
    this.token = this.cookieService.get('Token');
    if (!this.token) {
      this.router.navigate(['/login', '/checkout']);
    }
    const res = <any> await this.compraService.getCompras();
    const tal = <any> await this.tallaService.getTalla();
    const est = <any> await this.estampadoService.getEstampado();
    const ban = <any> await this.compraService.getBancos();
    console.log(ban);
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
    this.appComponent.typeNav(true);
    this.calcularSubtotal();
    this.calcularTotal();
    this.cargo = true;
  }

  buscarUser(correo: string) {
    for (const user of this.users) {
      if (correo === user.correo) {
        return user;
      }
    }
  }

  async onSubmit() {
    this.cargo = false;
    for (const compra of this.compras) {
      if (compra.cantidad > 0) {
        compra.carrito = false;
        compra.precio_total = compra.precio_individual * compra.cantidad;
        await this.compraService.updateCompra(compra);
      } else {
        await this.compraService.deleteCompra(compra);
      }
    }
    this.router.navigate(['/checkout']);
  }
  calcularSubtotal() {
    this.subtotal = 0;
    for (const compra of this.compras) {
      this.subtotal += (compra.precio_individual * compra.cantidad);
    }
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = this.subtotal + ENVIO;
  }
  activeMetodoPago(pMetodo: string) {
    if (pMetodo === DEBITO) {
      this.pig = '../../../../assets/img/pig-select.png';
      this.tarjeta = '../../../../assets/img/tarjeta.png';
      this.money = '../../../../assets/img/money.png';
      this.debito = true;
      this.credito = false;
      this.efectivo = false;
    } else if (pMetodo === CREDITO) {
      this.pig = '../../../../assets/img/pig.png';
      this.tarjeta = '../../../../assets/img/tarjeta-select.png';
      this.money = '../../../../assets/img/money.png';
      this.credito = true;
      this.debito = false;
      this.efectivo = false;
    } else {
      this.pig = '../../../../assets/img/pig.png';
      this.tarjeta = '../../../../assets/img/tarjeta.png';
      this.money = '../../../../assets/img/money-select.png';
      this.efectivo = true;
      this.credito = false;
      this.debito = false;
    }
  }
}
