import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallaService {

  constructor(private http: HttpClient) { }

  getTalla() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('https://pruebasbrageanth.pythonanywhere.com/inventario/talla').toPromise().then(
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
