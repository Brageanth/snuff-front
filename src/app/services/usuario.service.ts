import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedusuario: Usuario = new Usuario (); 
  constructor(private http:HttpClient) { }

insertusuario(pUsuario: Usuario)
{
  const req = this.http.post('http://pruebasbrageanth.pythonanywhere.com', {
      correo: pUsuario.correo,
      contrasenia: pUsuario.contrasenia,
      celular: pUsuario.celular,
      direccion: pUsuario.direccion
    })
      .subscribe(
        res => {
          console.log(res);
          
        },
        err => {
          console.log("Error occured");
        }
      );
 }


}
