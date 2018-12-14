import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Login, Reset, updatePassword } from '../models/login';
import { Usuario } from '../models/usuario'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedusuario: Login = new Login();
  selectedUpdateUsuario: updatePassword = new updatePassword();
  codigo: any;

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((this.http.get('http://pruebasbrageanth.pythonanywhere.com').toPromise().then(
          res => {
            return res
          },
          err => {
            console.log(err);
          }
        )))
      }, 2000);
    });
  }

  insertlogin(pLogin: Login) {
    let usersList;
    
    this.http.get('http://pruebasbrageanth.pythonanywhere.com/').subscribe(
    res => {
      usersList = res;
    },
    err => {
      console.log(err);
    });

    for(let user of usersList){
      if(user.correo==pLogin.correo){
        console.log('bien');
        
      }
    }
  }

  resetPassword(pReset: Reset) {    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((this.http.post('http://pruebasbrageanth.pythonanywhere.com/reset', {
          correo: pReset.resetCorreo,
        }).toPromise().then(
            res => {
              return res
            },
            err => {
              console.log(err);
            }
          )))
      }, 2000);
    });
  }
  
  updatePassword(user: any) {
    return this.http.put('http://pruebasbrageanth.pythonanywhere.com/resetPassword'+user.id, user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
