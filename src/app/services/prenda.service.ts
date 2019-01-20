import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  constructor(private http:HttpClient) { }

  getprenda() { 

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/prenda').toPromise().then(
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