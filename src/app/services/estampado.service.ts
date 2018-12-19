import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class EstampadoService {

  constructor(private http:HttpClient) { }

  getEstampado() { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/estampado').toPromise().then(
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
}