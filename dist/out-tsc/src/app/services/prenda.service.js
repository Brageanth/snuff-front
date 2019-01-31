import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PrendaService = /** @class */ (function () {
    function PrendaService(http) {
        this.http = http;
    }
    PrendaService.prototype.getprenda = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/prenda').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                }));
            }, 2000);
        });
    };
    PrendaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PrendaService);
    return PrendaService;
}());
export { PrendaService };
//# sourceMappingURL=prenda.service.js.map