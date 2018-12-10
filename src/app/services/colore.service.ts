import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Colore } from '../models/colore';

@Injectable({
  providedIn: 'root'
})
export class ColoreService {

  selectedusuario: Colore = new Colore ();
  constructor(private http:HttpClient) { }

  insertlogin(pLogin: Colore) {  
    const req = this.http.post('http://pruebasbrageanth.pythonanywhere.com', {
      correo: pLogin.color,
      contrasenia: pLogin.color,
    }).subscribe(
        res => {
          console.log(res);    
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}