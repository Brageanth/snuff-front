import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  getCampania() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('https://pruebasbrageanth.pythonanywhere.com/campania').toPromise().then(
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

  getEmpresa() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get('https://pruebasbrageanth.pythonanywhere.com/empresa').toPromise().then(
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
