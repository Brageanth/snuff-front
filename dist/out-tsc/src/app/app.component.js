import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';
import { CompraService } from './services/compra.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService, router, homeService, compraService) {
        this.cookieService = cookieService;
        this.router = router;
        this.homeService = homeService;
        this.compraService = compraService;
        this.title = 'snuff-front';
        this.activeNav = false;
        this.homeNav = true;
        this.cargo = false;
        this.numeroCarrito = 0;
    }
    AppComponent.prototype.navActive = function () {
        this.activeNav = !this.activeNav;
    };
    AppComponent.prototype.getToken = function () {
        this.token = +this.cookieService.get('Token');
    };
    AppComponent.prototype.getNumeroCarrito = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, _i, res_1, compra;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.compraService.getCompras()];
                    case 1:
                        res = _a.sent();
                        for (_i = 0, res_1 = res; _i < res_1.length; _i++) {
                            compra = res_1[_i];
                            if (this.token === compra.usuario) {
                                if (!compra.pagado) {
                                    if (compra.carrito) {
                                        this.numeroCarrito++;
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.typeNav = function (pCargo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.router.url === '/')) return [3 /*break*/, 2];
                        this.homeNav = true;
                        _a = this;
                        return [4 /*yield*/, this.homeService.getEmpresa()];
                    case 1:
                        _a.empresaList = (_b.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        this.homeNav = false;
                        _b.label = 3;
                    case 3:
                        this.getToken();
                        return [4 /*yield*/, this.getNumeroCarrito()];
                    case 4:
                        _b.sent();
                        this.cargo = pCargo;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CookieService,
            Router,
            HomeService,
            CompraService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map