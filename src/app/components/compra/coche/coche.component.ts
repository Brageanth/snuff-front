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
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  token: string;
  cargo: boolean;
  usuario: any;
  carrazo: Array<Compra> = [];
  cuadro: Array<Estampado> = [];
  ropita: string;
  subtotal = 0;
  envio = 2500;
  total = 0;

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
      this.router.navigate(['/login']);
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
            this.subtotal += (compra.precio * compra.cantidad);
          }
        }
      }
      for (const talla of tal) {
        if (compra.talla === talla.id) {
          compra.tallaNombre = talla.talla;
        }
      }
      for (const color of col){
        if(compra.color === color.color){
          compra.colorHexadecimal = color.hexadecimal;
        }
      }
      for (const estampado of est) {
        if (compra.estampado === estampado.nombre) {
          compra.cantidadDisponible = estampado.cantidad;
        }
      }
    }

    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
    this.total = this.subtotal + this.envio;
  }
  onSubmit(updateForm: NgForm) {
    this.router.navigate(['/checkout']);
  }
  updateSubtotal(id:number , cantidad:number){
    for(this.compraService) {
      if(Compra === id){

      }
    }
  }
}
