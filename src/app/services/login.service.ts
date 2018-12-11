import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Login, Reset } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedusuario: Login = new Login ();
  codigo: any;

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

  resetPassword(pReset: Reset) {  
    console.log(pReset.resetCorreo);
    
    const req = this.http.post('http://pruebasbrageanth.pythonanywhere.com/reset', {
      correo: pReset.resetCorreo,
    }).subscribe(
        res => {
          this.codigo = res;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    return this.codigo;
  }
}
