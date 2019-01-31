import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ColoreService = /** @class */ (function () {
    function ColoreService(http) {
        this.http = http;
    }
    ColoreService.prototype.getColor = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.http.get('http://pruebasbrageanth.pythonanywhere.com/inventario/color').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                }));
            }, 2000);
        });
    };
    ColoreService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ColoreService);
    return ColoreService;
}());
export { ColoreService };
//# sourceMappingURL=colore.service.js.map