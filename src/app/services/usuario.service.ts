import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedusuario: Usuario = new Usuario (); 
  constructor(private http:HttpClient, private router: Router) { }

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
          this.router.navigateByUrl('/login');
        },
        err => {
          console.log("Error occured");
        }
      );
 }


}
