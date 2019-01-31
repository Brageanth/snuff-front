import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Colore } from 'src/app/models/colore';
import { Prenda } from 'src/app/models/prenda';
import { TallaService } from 'src/app/services/talla.service';
var TallaComponent = /** @class */ (function () {
    function TallaComponent(tallaService) {
        this.tallaService = tallaService;
        this.tallaList = [];
        this.talla = new EventEmitter();
        this.cargo = false;
    }
    TallaComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ress, _i, ress_1, talla;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tallaService.getTalla()];
                    case 1:
                        ress = _a.sent();
                        for (_i = 0, ress_1 = ress; _i < ress_1.length; _i++) {
                            talla = ress_1[_i];
                            if (talla.cantidad > 0) {
                                if (talla.prenda === this.prenda.id) {
                                    if (talla.color === this.color.id) {
                                        this.tallaList.push(talla);
                                    }
                                }
                            }
                        }
                        this.imagen = this.color.imagen;
                        this.cargo = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    TallaComponent.prototype.guardarTalla = function (pTalla) {
        this.talla.emit(pTalla);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Prenda)
    ], TallaComponent.prototype, "prenda", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Colore)
    ], TallaComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TallaComponent.prototype, "talla", void 0);
    TallaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-talla',
            templateUrl: './talla.component.html',
            styleUrls: ['./talla.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TallaService])
    ], TallaComponent);
    return TallaComponent;
}());
export { TallaComponent };
//# sourceMappingURL=talla.component.js.map