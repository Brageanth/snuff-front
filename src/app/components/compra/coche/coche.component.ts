import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';
import { CompraService } from 'src/app/services/compra.service';
import { Router } from '@angular/router';
import { Compra } from 'src/app/models/compra';
import { Estampado } from 'src/app/models/estampado';
import { TallaService } from 'src/app/services/talla.service';
import { ColoreService } from 'src/app/services/colore.service';
import { EstampadoService } from 'src/app/services/estampado.service';
import { NgForm } from '@angular/forms';

const ENVIO = 2500;

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})

export class CocheComponent implements OnInit {

  ENVIO = ENVIO;
  token: string;
  cargo: boolean;
  usuario: any;
  carrazo: Array<Compra> = [];
  cuadro: Array<Estampado> = [];
  ropita: string;
  subtotal = 0;
  total = 0;
  selectedCompra: Compra;

  constructor(
    private compraService: CompraService,
    private cookieService: CookieService,
    private router: Router,
    private appComponent: AppComponent,
    private tallaService: TallaService,
    private colorService: ColoreService,
    private estampadoService: EstampadoService
  ) { }

  async ngOnInit() {
    this.token = this.cookieService.get('Token');
    if (!this.token) {
      this.router.navigate(['/login', '/coche']);
    }

    const res = <any> await this.compraService.getCompras();
    const tal = <any> await this.tallaService.getTalla();
    const col = <any> await this.colorService.getColor();
    const est = <any> await this.estampadoService.getEstampado();
    for (const compra of res) {
      if (this.token === compra.usuario) {
        if (!compra.pagado) {
          if (compra.carrito) {
            this.carrazo.push(compra);
          }
        }
      }
      for (const talla of tal) {
        if (compra.talla === talla.id) {
          compra.tallaNombre = talla.talla;
        }
      }
      for (const color of col) {
        if (compra.color === color.color) {
          compra.colorHexadecimal = color.hexadecimal;
        }
      }
      for (const estampado of est) {
        if (compra.estampado === estampado.nombre) {
          compra.cantidadDisponible = estampado.cantidad;
        }
      }
    }
    this.calcularSubtotal();
    this.calcularTotal();
    this.appComponent.typeNav(true);
    this.cargo = true;
  }
  async onSubmit() {
    this.cargo = false;
    for (const compra of this.carrazo) {
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
    for (const compra of this.carrazo) {
      console.log(compra.precio_individual);
      this.subtotal += (compra.precio_individual * compra.cantidad);
    }
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = this.subtotal + ENVIO;
  }
}
