import { Injectable } from '@angular/core';

import { Compra } from '../models/Compra';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class CompraService {

  selectedusuario: Compra = new Compra (); 
  constructor( private http:HttpClient) { }

insertcompra(pCompra: Compra)
{
  const req = this.http.post('http://pruebasbrageanth.pythonanywhere.com/compra', {
    prenda: pCompra.prenda,
    color: pCompra.color,
    talla: pCompra.talla,
    estampado: pCompra.estampado,
    usuario: pCompra.usuario,
    cantidad: pCompra.cantidad,
    precio: pCompra.precio,
    fabricada: pCompra.fabricada,
    entregada: pCompra.entregada

    })
      .subscribe(
        res => {
          console.log(res);
          
        },
        err => {
          console.log("Error occured");
        }
      );
 }
}
