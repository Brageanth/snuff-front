import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { Prenda } from 'src/app/models/prenda';
import { Colore } from 'src/app/models/colore';
import { Talla } from 'src/app/models/talla';
import { Estampado } from 'src/app/models/estampado';
import { AppComponent } from 'src/app/app.component';
import { Compra } from 'src/app/models/compra';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  public prenda: Prenda;
  public color: Colore;
  public talla: Talla;
  public estampado: Estampado;
  slides = [true, false, false, false, false];
  token: string;
  users: any;
  userActive: Usuario;

  constructor(
    private appComponent: AppComponent,
    private compraService: CompraService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.token = this.cookieService.get('Token');
    if (!this.token) {
      this.router.navigate(['/login']);
    }
    this.appComponent.typeNav(true);
  }

  onSubmit(checkout: boolean) {
    const compra = new Compra;
    compra.color = this.color.color;
    compra.entregada = false;
    compra.estampado = this.estampado.nombre;
    compra.fabricada = false;
    compra.pagado = false;
    compra.precio = this.prenda.precio + 30900;
    compra.prenda = this.prenda.tipo;
    compra.talla = this.talla.id;
    compra.usuario = this.token;
    compra.cantidad = 1;
    compra.imagen = this.estampado.imagenPrenda;
    if (checkout) {
      compra.carrito = false;
      this.compraService.insertcompra(compra);
      this.router.navigate(['/checkout']);
    } else {
      compra.carrito = true;
      this.compraService.insertcompra(compra);
        this.router.navigate(['/']);
    }
    this.cookieService.set( 'imgCompra', this.prenda.imagen, 1, '/' );
  }

  getPrenda(prendaform: any) {
    this.prenda = prendaform;
    this.slides[0] = false;
    this.slides[1] = true;
  }

  getColor(pColor: any) {
    this.color = pColor;
    this.slides[1] = false;
    this.slides[2] = true;
  }

  getTalla(pTalla: any) {
    this.talla = pTalla;
    this.slides[2] = false;
    this.slides[3] = true;
  }

  getEstampado(pEstampado: any) {
    this.estampado = pEstampado;
    this.slides[3] = false;
    this.slides[4] = true;
  }
}
