import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var TallaService = /** @class */ (function () {
    function TallaService(http) {
        this.http = http;
    }
    TallaService.prototype.getTalla = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/talla').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                }));
            }, 2000);
        });
    };
    TallaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TallaService);
    return TallaService;
}());
export { TallaService };
//# sourceMappingURL=talla.service.js.map