import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { PrendaService } from '../../../services/prenda.service';
import { Prenda } from '../../../models/prenda';
var PrendaComponent = /** @class */ (function () {
    function PrendaComponent(prendaService) {
        this.prendaService = prendaService;
        this.prenda = new EventEmitter();
        this.prendasList = [];
        this.cargo = false;
    }
    PrendaComponent.prototype.guardarPrenda = function (prendaform) {
        this.prenda.emit(prendaform);
    };
    PrendaComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ress, _i, ress_1, prenda, prendaActual;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prendaService.getprenda()];
                    case 1:
                        ress = _a.sent();
                        for (_i = 0, ress_1 = ress; _i < ress_1.length; _i++) {
                            prenda = ress_1[_i];
                            prendaActual = new Prenda();
                            if (prenda.cantidad > 0) {
                                if (prenda.tipo === 'CB') {
                                    prendaActual.id = prenda.id;
                                    prendaActual.tipo = 'Camibuso';
                                    prendaActual.cantidad = prenda.cantidad;
                                    prendaActual.precio = prenda.precio;
                                    prendaActual.imagen = prenda.imagen;
                                    this.prendasList.push(prendaActual);
                                }
                                else if (prenda.tipo === 'CH') {
                                    prendaActual.id = prenda.id;
                                    prendaActual.tipo = 'Chaqueta';
                                    prendaActual.cantidad = prenda.cantidad;
                                    prendaActual.precio = prenda.precio;
                                    prendaActual.imagen = prenda.imagen;
                                    this.prendasList.push(prendaActual);
                                }
                                else if (prenda.tipo === 'CHC') {
                                    prendaActual.id = prenda.id;
                                    prendaActual.tipo = 'Chaquetacapota';
                                    prendaActual.cantidad = prenda.cantidad;
                                    prendaActual.precio = prenda.precio;
                                    prendaActual.imagen = prenda.imagen;
                                    this.prendasList.push(prendaActual);
                                }
                                else if (prenda.tipo === 'C') {
                                    prendaActual.id = prenda.id;
                                    prendaActual.tipo = 'Camiseta';
                                    prendaActual.cantidad = prenda.cantidad;
                                    prendaActual.precio = prenda.precio;
                                    prendaActual.imagen = prenda.imagen;
                                    this.prendasList.push(prendaActual);
                                }
                                else if (prenda.tipo === 'BC') {
                                    prendaActual.id = prenda.id;
                                    prendaActual.tipo = 'Busocapota';
                                    prendaActual.cantidad = prenda.cantidad;
                                    prendaActual.precio = prenda.precio;
                                    prendaActual.imagen = prenda.imagen;
                                    this.prendasList.push(prendaActual);
                                }
                            }
                        }
                        this.cargo = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], PrendaComponent.prototype, "prenda", void 0);
    PrendaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-prenda',
            templateUrl: './prenda.component.html',
            styleUrls: ['./prenda.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PrendaService])
    ], PrendaComponent);
    return PrendaComponent;
}());
export { PrendaComponent };
//# sourceMappingURL=prenda.component.js.map