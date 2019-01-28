import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(compraService, cookieService, router, appComponent, estampadoService) {
        this.compraService = compraService;
        this.cookieService = cookieService;
        this.router = router;
        this.appComponent = appComponent;
        this.estampadoService = estampadoService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, _i, res_1, compra;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.token = +this.cookieService.get('Token');
                        if (!this.token) {
                            this.router.navigate(['/login']);
                        }
                        return [4 /*yield*/, this.compraService.getCompras()];
                    case 1:
                        res = _a.sent();
                        for (_i = 0, res_1 = res; _i < res_1.length; _i++) {
                            compra = res_1[_i];
                            if (this.token === compra.usuario) {
                                if (!compra.pagado) {
                                    if (!compra.carrito) {
                                        this.compraActual = compra;
                                    }
                                }
                            }
                        }
                        if (!this.compraActual) {
                            this.router.navigate(['/compra']);
                        }
                        this.cargo = true;
                        this.appComponent.typeNav(this.cargo);
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CompraService,
            CookieService,
            Router,
            AppComponent,
            EstampadoService])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map