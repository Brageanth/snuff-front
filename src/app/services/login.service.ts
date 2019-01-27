import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Reset, updatePassword } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedusuario: Login = new Login();
  selectedUpdateUsuario: updatePassword = new updatePassword();
  codigo: any;
  token = new EventEmitter();

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((this.http.get('https://pruebasbrageanth.pythonanywhere.com').toPromise().then(
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

  resetPassword(pReset: Reset) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((this.http.post('https://pruebasbrageanth.pythonanywhere.com/reset', {
          correo: pReset.resetCorreo,
        }).toPromise().then(
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

  updatePassword(user: any) {
    return this.http.put('https://pruebasbrageanth.pythonanywhere.com/resetPassword' + user.id, user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
