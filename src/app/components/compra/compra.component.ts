import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CompraService } from '../../services/compra.service';
import { NgForm } from '@angular/forms';
import { Prenda } from 'src/app/models/prenda';
import { Colore } from 'src/app/models/colore';
import { Talla } from 'src/app/models/talla';
import { Estampado } from 'src/app/models/estampado';
import { AppComponent } from 'src/app/app.component';

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

  constructor(private appComponent: AppComponent, private compraService: CompraService) { }

  ngOnInit(): void {
    this.appComponent.typeNav();
    this.appComponent.getToken();
  }

  onSubmit(compraform: NgForm) {
    this.compraService.insertcompra(compraform.value);
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
