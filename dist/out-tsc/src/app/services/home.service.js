import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getCampania = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.http.get('http://pruebasbrageanth.pythonanywhere.com/campania').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                }));
            }, 2000);
        });
    };
    HomeService.prototype.getEmpresa = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.http.get('http://pruebasbrageanth.pythonanywhere.com/empresa').toPromise().then(function (res) {
                    return res;
                }, function (err) {
                    console.log(err);
                }));
            }, 2000);
        });
    };
    HomeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map