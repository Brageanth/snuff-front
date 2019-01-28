import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';
import { HomeService } from 'src/app/services/home.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(appComponent, estampadoService, homeService) {
        this.appComponent = appComponent;
        this.estampadoService = estampadoService;
        this.homeService = homeService;
        this.estampadoList = [];
        this.imgLarge = false;
        this.imgWidth = false;
        this.cargo = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ress, _a, _b, i, _i, ress_1, estampado;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.estampadoService.getEstampado()];
                    case 1:
                        ress = _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.homeService.getEmpresa()];
                    case 2:
                        _a.empresaList = (_c.sent());
                        _b = this;
                        return [4 /*yield*/, this.homeService.getCampania()];
                    case 3:
                        _b.campaniaList = (_c.sent());
                        i = 0;
                        for (_i = 0, ress_1 = ress; _i < ress_1.length; _i++) {
                            estampado = ress_1[_i];
                            if (estampado.cantidad > 0) {
                                this.estampadoList.push(estampado);
                                if (i === 0) {
                                    this.estampadoActive = estampado;
                                }
                            }
                            i++;
                        }
                        this.estampadoBack = this.estampadoList[Math.floor(Math.random() * this.estampadoList.length)];
                        console.log(this.empresaList);
                        this.cargo = true;
                        this.appComponent.typeNav(this.cargo);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.activeSlide = function (pEstampado) {
        if (this.estampadoActive === pEstampado) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.imgSize = function () {
        if (this.imgBack.nativeElement.width > this.imgBack.nativeElement.height) {
            this.imgWidth = true;
        }
        else {
            this.imgLarge = true;
        }
    };
    tslib_1.__decorate([
        ViewChild('imgBack'),
        tslib_1.__metadata("design:type", ElementRef)
    ], HomeComponent.prototype, "imgBack", void 0);
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AppComponent, EstampadoService, HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map