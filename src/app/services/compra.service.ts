import { Injectable } from '@angular/core';
import { Compra } from '../models/compra';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class CompraService {

  selectedcompra: Compra = new Compra ();
  constructor(private http: HttpClient) { }

insertcompra(pCompra: Compra) {
  console.log(pCompra);
  const req = this.http.post('http://pruebasbrageanth.pythonanywhere.com/compra/', {
      prenda: pCompra.prenda,
      color: pCompra.color,
      talla: pCompra.talla,
      estampado: pCompra.estampado,
      usuario: pCompra.usuario,
      cantidad: pCompra.cantidad,
      precio: pCompra.precio,
      fabricada: pCompra.fabricada,
      entregada: pCompra.entregada,
      carrito: pCompra.carrito,
      pagado: pCompra.pagado,
      imagen: pCompra.imagen
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
 }

 sendCompra(pCompra: Compra) {

 }

 getCompras() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((this.http.get('http://pruebasbrageanth.pythonanywhere.com/compra').toPromise().then(
        res => {
          return res;
        },
        err => {
          console.log(err);
        }
      )));
    }, 2000);
  });
 }
}
