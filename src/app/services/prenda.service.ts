import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  selectedusuario: Login = new Login ();
  constructor(private http:HttpClient) { }

  insertlogin(pLogin: Login) {  
    const req = this.http.post('http://pruebasbrageanth.pythonanywhere.com', {
      correo: pLogin.correo,
      contrasenia: pLogin.contrasenia,
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

