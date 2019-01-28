import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { AppComponent } from 'src/app/app.component';
import { Compra } from 'src/app/models/compra';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
var CompraComponent = /** @class */ (function () {
    function CompraComponent(appComponent, compraService, cookieService, router) {
        this.appComponent = appComponent;
        this.compraService = compraService;
        this.cookieService = cookieService;
        this.router = router;
        this.slides = [true, false, false, false, false];
    }
    CompraComponent.prototype.ngOnInit = function () {
        this.token = +this.cookieService.get('Token');
        if (!this.token) {
            this.router.navigate(['/login']);
        }
        this.appComponent.typeNav(true);
    };
    CompraComponent.prototype.onSubmit = function (checkout) {
        var compra = new Compra;
        compra.color = this.color.id;
        compra.entregada = false;
        compra.estampado = this.estampado.id;
        compra.fabricada = false;
        compra.pagado = false;
        compra.precio = this.prenda.precio + 30900;
        compra.prenda = this.prenda.id;
        compra.talla = this.talla.id;
        compra.usuario = this.token;
        compra.cantidad = 1;
        if (checkout) {
            compra.carrito = false;
            this.compraService.insertcompra(compra);
            this.router.navigate(['/checkout']);
        }
        else {
            compra.carrito = true;
            this.compraService.insertcompra(compra);
            this.router.navigate(['/']);
        }
        console.log(compra);
    };
    CompraComponent.prototype.getPrenda = function (prendaform) {
        this.prenda = prendaform;
        this.slides[0] = false;
        this.slides[1] = true;
    };
    CompraComponent.prototype.getColor = function (pColor) {
        this.color = pColor;
        this.slides[1] = false;
        this.slides[2] = true;
    };
    CompraComponent.prototype.getTalla = function (pTalla) {
        this.talla = pTalla;
        this.slides[2] = false;
        this.slides[3] = true;
    };
    CompraComponent.prototype.getEstampado = function (pEstampado) {
        this.estampado = pEstampado;
        this.slides[3] = false;
        this.slides[4] = true;
    };
    CompraComponent = tslib_1.__decorate([
        Component({
            selector: 'app-compra',
            templateUrl: './compra.component.html',
            styleUrls: ['./compra.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AppComponent,
            CompraService,
            CookieService,
            Router])
    ], CompraComponent);
    return CompraComponent;
}());
export { CompraComponent };
//# sourceMappingURL=compra.component.js.map