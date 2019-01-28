import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Prenda } from '../../../models/prenda';
import { ColoreService } from 'src/app/services/colore.service';
var ColoreComponent = /** @class */ (function () {
    function ColoreComponent(colorService) {
        this.colorService = colorService;
        this.colorList = [];
        this.color = new EventEmitter();
        this.cargo = false;
    }
    ColoreComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ress, i, _i, ress_1, color;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.colorService.getColor()];
                    case 1:
                        ress = _a.sent();
                        i = 0;
                        for (_i = 0, ress_1 = ress; _i < ress_1.length; _i++) {
                            color = ress_1[_i];
                            if (color.cantidad > 0) {
                                if (color.prenda === this.prenda.id) {
                                    this.colorList.push(color);
                                    if (i === 0) {
                                        this.colorActive = color;
                                    }
                                    i++;
                                }
                            }
                        }
                        this.altoCuadro = (65 - this.colorList.length) / this.colorList.length;
                        this.cargo = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoreComponent.prototype.activeSlide = function (pColor) {
        this.colorActive = pColor;
    };
    ColoreComponent.prototype.guardarColor = function () {
        this.color.emit(this.colorActive);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Prenda)
    ], ColoreComponent.prototype, "prenda", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ColoreComponent.prototype, "color", void 0);
    ColoreComponent = tslib_1.__decorate([
        Component({
            selector: 'app-colore',
            templateUrl: './colore.component.html',
            styleUrls: ['./colore.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ColoreService])
    ], ColoreComponent);
    return ColoreComponent;
}());
export { ColoreComponent };
//# sourceMappingURL=colore.component.js.map