import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrendaService } from '../../../services/prenda.service';
import { NgForm } from '@angular/forms';
import { Prenda } from '../../../models/prenda';

@Component({
  selector: 'app-prenda',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})

export class PrendaComponent implements OnInit {

  @Output() prenda: EventEmitter<any> = new EventEmitter();
  prendasList: Array<Prenda> = [];
  cargo = false;

  constructor(private prendaService: PrendaService ) { }

  guardarPrenda(prendaform: NgForm) {
    this.prenda.emit(prendaform);
  }

  async ngOnInit() {

    const ress = <any> await this.prendaService.getprenda();
    for (const prenda of ress) {
      const prendaActual: Prenda = new Prenda();
      if (prenda.cantidad > 0) {
        if (prenda.tipo === 'CB') {
          prendaActual.id = prenda.id;
          prendaActual.tipo = 'Camibuso';
          prendaActual.cantidad = prenda.cantidad;
          prendaActual.precio = prenda.precio;
          prendaActual.imagen = prenda.imagen;
          this.prendasList.push(prendaActual);
        } else if (prenda.tipo === 'CH') {
          prendaActual.id = prenda.id;
          prendaActual.tipo = 'Chaqueta' ;
          prendaActual.cantidad = prenda.cantidad;
          prendaActual.precio = prenda.precio;
          prendaActual.imagen = prenda.imagen;
          this.prendasList.push(prendaActual);
        } else if (prenda.tipo === 'CHC') {
          prendaActual.id = prenda.id;
          prendaActual.tipo = 'Chaquetacapota' ;
          prendaActual.cantidad = prenda.cantidad;
          prendaActual.precio = prenda.precio;
          prendaActual.imagen = prenda.imagen;
          this.prendasList.push(prendaActual);
        } else if (prenda.tipo === 'C') {
          prendaActual.id = prenda.id;
          prendaActual.tipo = 'Camiseta' ;
          prendaActual.cantidad = prenda.cantidad;
          prendaActual.precio = prenda.precio;
          prendaActual.imagen = prenda.imagen;
          this.prendasList.push(prendaActual);
        } else if (prenda.tipo === 'BC') {
          prendaActual.id = prenda.id;
          prendaActual.tipo = 'Busocapota' ;
          prendaActual.cantidad = prenda.cantidad;
          prendaActual.precio = prenda.precio;
          prendaActual.imagen = prenda.imagen;
          this.prendasList.push(prendaActual);
        }
      }
    }
    this.cargo = true;
  }
}
