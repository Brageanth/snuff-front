import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.selectedusuario = new Usuario();
    }
    UsuarioService.prototype.insertusuario = function (pUsuario) {
        var req = this.http.post('http://pruebasbrageanth.pythonanywhere.com', {
            correo: pUsuario.correo,
            contrasenia: pUsuario.contrasenia,
            celular: pUsuario.celular,
            direccion: pUsuario.direccion
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    UsuarioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map