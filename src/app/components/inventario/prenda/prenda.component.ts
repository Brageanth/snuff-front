import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// Service

import { PrendaService } from '../../../services/prenda.service';
import { NgForm } from '@angular/forms';
import { Prenda } from '../../../models/prenda';

@Component({

  
  selector: 'app-prenda',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})
export class PrendaComponent implements OnInit {
 
  @Output() prendas:EventEmitter<Prenda> = new EventEmitter<Prenda>()

  prendasList:Array<Prenda> = [];

  constructor(private http:HttpClient, private prendaService: PrendaService ) { }

  onSubmit(prendaform: NgForm)
  {
    prendaform.value; 
  }

  guardarPrenda(prenda: Prenda){
    
  }
  
  async ngOnInit() { 

    let ress = <any> await this.prendaService.getprenda();    
    for (let prenda of ress){
      let prendaActual: Prenda = new Prenda();
      
      if(prenda.tipo=='CB'){
        prendaActual.tipo = 'Camibuso' ;
        prendaActual.cantidad = prenda.cantidad;
        prendaActual.precio = prenda.precio;
        prendaActual.imagen = prenda.imagen;
        this.prendasList.push(prendaActual);
      }
      else if(prenda.tipo=='CH'){
        prendaActual.tipo = 'Chaqueta' ;
        prendaActual.cantidad = prenda.cantidad;
        prendaActual.precio = prenda.precio;
        prendaActual.imagen = prenda.imagen;
        this.prendasList.push(prendaActual);
      }
      else if(prenda.tipo=='CHC'){
        prendaActual.tipo = 'Chaquetacapota' ;
        prendaActual.cantidad = prenda.cantidad;
        prendaActual.precio = prenda.precio;
        prendaActual.imagen = prenda.imagen;
        this.prendasList.push(prendaActual);
      }
      else if(prenda.tipo=='C'){
        prendaActual.tipo = 'Camiseta' ;
        prendaActual.cantidad = prenda.cantidad;
        prendaActual.precio = prenda.precio;
        prendaActual.imagen = prenda.imagen;
        this.prendasList.push(prendaActual);
      }
      else if(prenda.tipo=='BC'){
        prendaActual.tipo = 'Busocapota' ;
        prendaActual.cantidad = prenda.cantidad;
        prendaActual.precio = prenda.precio;
        prendaActual.imagen = prenda.imagen;
        this.prendasList.push(prendaActual);
      }
      console.log(this.prendasList);
    }
  }
}
