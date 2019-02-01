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
        "language": "es",
        "command": "SUBMIT_TRANSACTION",
        "merchant": {
           "apiLogin": "pRRXKOl8ikMmt9u",
           "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
        },
        "transaction": {
           "order": {
              "accountId": "512326",
              "referenceCode": "testPanama1",
              "description": "Test order Panama",
              "language": "en",
              "notifyUrl": "http://pruebaslap.xtrweb.com/lap/pruebconf.php",
              "signature": "a2de78b35599986d28e9cd8d9048c45d",
              "shippingAddress": {
                 "country": "PA"
              },
              "buyer": {
                 "fullName": "APPROVED",
                 "emailAddress": "test@payulatam.com",
                 "dniNumber": "1155255887",
                 "shippingAddress": {
                    "street1": "Calle 93 B 17 – 25",
                    "city": "Panama",
                    "state": "Panama",
                    "country": "PA",
                    "postalCode": "000000",
                    "phone": "5582254"
                 }
              },
              "additionalValues": {
                 "TX_VALUE": {
                    "value": 5,
                    "currency": "USD"
                 }
              }
           },
           "creditCard": {
              "number": "4111111111111111",
              "securityCode": "123",
              "expirationDate": "2018/08",
              "name": "test"
           },
           "type": "AUTHORIZATION_AND_CAPTURE",
           "paymentMethod": "VISA",
           "paymentCountry": "PA",
           "payer": {
              "fullName": "APPROVED",
              "emailAddress": "test@payulatam.com"
           },
           "ipAddress": "127.0.0.1",
           "cookie": "cookie_52278879710130",
           "userAgent": "Firefox",
           "extraParameters": {
              "INSTALLMENTS_NUMBER": 1,
              "RESPONSE_URL": "http://www.misitioweb.com/respuesta.php"
           }
        },
        "test": true
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
