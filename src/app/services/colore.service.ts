import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ColoreService {
    
  constructor(private http:HttpClient) { }

  getColor() { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/color').toPromise().then(
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