import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, updatePassword } from '../models/login';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.selectedusuario = new Login();
        this.selectedUpdateUsuario = new updatePassword();
        this.token = new EventEmitter();
    }
    LoginService.prototype.getUsuarios = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve((_this.http.get('http://pruebasbrageanth.pythonanywhere.com').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                })));
            }, 2000);
        });
    };
    LoginService.prototype.resetPassword = function (pReset) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve((_this.http.post('http://pruebasbrageanth.pythonanywhere.com/reset', {
                    correo: pReset.resetCorreo,
                }).toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                })));
            }, 2000);
        });
    };
    LoginService.prototype.updatePassword = function (user) {
        return this.http.put('http://pruebasbrageanth.pythonanywhere.com/resetPassword' + user.id, user)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map