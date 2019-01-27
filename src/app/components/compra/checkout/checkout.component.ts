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

  DEBITO = 'debito';
  CREDITO = 'credito';
  EFECTIVO = 'efectivo';
  CONTRA_ENTREGA = 'contraEntrega';
  ENVIO = 2500;

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
    const ban = <any> await this.compraService.getBancos();
    console.log(ban);
    
    for (const compra of res) {
      if (this.token === compra.usuario) {
        if (!compra.pagado) {
          if (!compra.carrito) {
            this.compras.push(compra);
            this.subtotal += compra.precio;
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
    this.total = this.subtotal + this.ENVIO;
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

  activeMetodoPago(pMetodo: string) {
    if (pMetodo === this.DEBITO) {
      this.pig = '../../../../assets/img/pig-select.png';
      this.tarjeta = '../../../../assets/img/tarjeta.png';
      this.money = '../../../../assets/img/money.png';
      this.debito = true;
      this.credito = false;
      this.efectivo = false;
    } else if (pMetodo === this.CREDITO) {
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
