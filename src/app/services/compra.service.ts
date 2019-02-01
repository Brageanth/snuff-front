import { Injectable } from '@angular/core';
import { Compra } from '../models/compra';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'

})

export class CompraService {

  selectedcompra: Compra = new Compra ();
  constructor(private http: HttpClient) { }

insertcompra(pCompra: Compra) {
  console.log(pCompra);
  const req = this.http.post('https://pruebasbrageanth.pythonanywhere.com/compra/', {
      prenda: pCompra.prenda,
      color: pCompra.color,
      talla: pCompra.talla,
      estampado: pCompra.estampado,
      usuario: pCompra.usuario,
      cantidad: pCompra.cantidad,
      precio_individual: pCompra.precio_individual,
      precio_total: pCompra.precio_total,
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

 getCompras() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(this.http.get('https://pruebasbrageanth.pythonanywhere.com/compra/').toPromise().then(
        res => {
          return res;
        },
        err => {
          console.log(err);
        }
      ));
    }, 2000);
  });
}

 getBancos() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((this.http.post('https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi', {
        'test': false,
        'language': 'es',
        'command': 'PING',
        'merchant': {
           'apiLogin': 'pRRXKOl8ikMmt9',
           'apiKey': '4Vj8eK4rloUd272L48hsrarnUA'
        }
     }, { headers: {'content-type': 'application/json', 'Accept': 'application/json'}}).toPromise().then(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        )));
    }, 2000);
  });
 }

 updateCompra (pCompra: Compra) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((this.http.put('https://pruebasbrageanth.pythonanywhere.com/compra/' + pCompra.id, pCompra).toPromise().then(
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

 deleteCompra (pCompra: Compra) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((this.http.delete('https://pruebasbrageanth.pythonanywhere.com/compra/' + pCompra.id).toPromise().then(
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
