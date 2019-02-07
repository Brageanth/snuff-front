import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import {HttpClient} from '@angular/common/http';
import { bindNodeCallback } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedusuario: Usuario = new Usuario ();
  constructor(private http: HttpClient) { }

insertusuario(pUsuario: Usuario) {
  const req = this.http.post('https://pruebasbrageanth.pythonanywhere.com', {
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
          console.log('Error occured');
        }
      );
 }

 updateUsuario(pUsuario: Usuario) {
   /* trabajo
   no le metio ganas
   voz
   cansada
   estresada
   todavia te falta mucho
   entonces que haras con el certificado
   estado */

   return new Promise(resolve => {
    setTimeout(() => {
      resolve((this.http.put('https://pruebasbrageanth.pythonanywhere.com/' + pUsuario.id, pUsuario).toPromise().then(
          res => {
            return res;
          },
          err => {
            console.log(err);
          }
        )));
    }, 2000);
  });
 }
}
