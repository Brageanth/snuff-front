import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Compra } from '../models/compra';
import { HttpClient } from '@angular/common/http';
var CompraService = /** @class */ (function () {
    function CompraService(http) {
        this.http = http;
        this.selectedusuario = new Compra();
    }
    CompraService.prototype.insertcompra = function (pCompra) {
        console.log(pCompra);
        var req = this.http.post('http://pruebasbrageanth.pythonanywhere.com/compra/', {
            prenda: pCompra.prenda,
            color: pCompra.color,
            talla: pCompra.talla,
            estampado: pCompra.estampado,
            usuario: pCompra.usuario,
            cantidad: pCompra.cantidad,
            precio: pCompra.precio,
            fabricada: pCompra.fabricada,
            entregada: pCompra.entregada,
            carrito: pCompra.carrito,
            pagado: pCompra.pagado
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CompraService.prototype.getCompras = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve((_this.http.get('http://pruebasbrageanth.pythonanywhere.com/compra').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                })));
            }, 2000);
        });
    };
    CompraService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CompraService);
    return CompraService;
}());
export { CompraService };
//# sourceMappingURL=compra.service.js.map