import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EstampadoService = /** @class */ (function () {
    function EstampadoService(http) {
        this.http = http;
        this.estampadoList = [];
    }
    EstampadoService.prototype.getEstampado = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/estampado').toPromise().then(function (res) {
                    _this.estampadoList = res;
                    return res;
                }, function (err) {
                    console.log(err);
                }));
            }, 2000);
        });
    };
    EstampadoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EstampadoService);
    return EstampadoService;
}());
export { EstampadoService };
//# sourceMappingURL=estampado.service.js.map