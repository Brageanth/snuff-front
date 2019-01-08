import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Estampado } from '../models/estampado';

@Injectable({
  providedIn: 'root'
})
export class EstampadoService {

  estampadoList: Array<Estampado> = [];

  constructor(private http: HttpClient) { }

  getEstampado() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/estampado').toPromise().then(
          res => {
            this.estampadoList = <any>res;
            return res;
          },
          err => {
            console.log(err);
          }
        ));
      }, 2000);
    });
  }
}
