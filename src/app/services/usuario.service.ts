import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedusuario: Usuario = new Usuario (); 
<<<<<<< HEAD
  constructor(private http:HttpClient, private router: Router) { }
=======
  constructor(private http:HttpClient) { }
>>>>>>> 894ee13a1f374a21e004c4a08bd70ee8caaa59e8

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
<<<<<<< HEAD
          this.router.navigateByUrl('/login');
=======
          console.log(res);
          
>>>>>>> 894ee13a1f374a21e004c4a08bd70ee8caaa59e8
        },
        err => {
          console.log("Error occured");
        }
      );
 }


}
