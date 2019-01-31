import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Talla } from 'src/app/models/talla';
import { Colore } from 'src/app/models/colore';
import { Prenda } from 'src/app/models/prenda';
import { EstampadoService } from 'src/app/services/estampado.service';
var EstampadoComponent = /** @class */ (function () {
    function EstampadoComponent(estampadoService) {
        this.estampadoService = estampadoService;
        this.estampadoList = [];
        this.estampado = new EventEmitter();
        this.cargo = false;
    }
    EstampadoComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ress, i, _i, ress_1, estampado;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.estampadoService.getEstampado()];
                    case 1:
                        ress = _a.sent();
                        i = 0;
                        for (_i = 0, ress_1 = ress; _i < ress_1.length; _i++) {
                            estampado = ress_1[_i];
                            if (estampado.cantidad > 0) {
                                if (estampado.prenda === this.prenda.id) {
                                    if (estampado.stock === true) {
                                        this.estampadoList.push(estampado);
                                        if (i === 0) {
                                            this.estampadoActive = estampado;
                                        }
                                    }
                                }
                            }
                            i++;
                        }
                        this.cargo = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    EstampadoComponent.prototype.activeSlide = function (pEstampado) {
        this.estampadoActive = pEstampado;
    };
    EstampadoComponent.prototype.guardarEstampado = function () {
        this.estampado.emit(this.estampadoActive);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Prenda)
    ], EstampadoComponent.prototype, "prenda", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Colore)
    ], EstampadoComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Talla)
    ], EstampadoComponent.prototype, "talla", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], EstampadoComponent.prototype, "estampado", void 0);
    EstampadoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-estampado',
            templateUrl: './estampado.component.html',
            styleUrls: ['./estampado.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EstampadoService])
    ], EstampadoComponent);
    return EstampadoComponent;
}());
export { EstampadoComponent };
//# sourceMappingURL=estampado.component.js.map