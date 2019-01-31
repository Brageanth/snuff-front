import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookieService, appComponent, loginService, router) {
        this.cookieService = cookieService;
        this.appComponent = appComponent;
        this.loginService = loginService;
        this.router = router;
        this.serverCode = 0;
        this.slides = [true, false, false];
        this.cargo = false;
        this.cargando = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loginService.getUsuarios()];
                    case 1:
                        _a.users = _b.sent();
                        if (this.cookieService.check('Token')) {
                            this.token = this.cookieService.get('Token');
                            this.router.navigate(['/compra']);
                        }
                        this.cargo = true;
                        this.appComponent.typeNav(this.cargo);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.modalReset = function () {
        this.resetModal = !this.resetModal;
    };
    LoginComponent.prototype.buscarUser = function (correo) {
        for (var _a = 0, _b = this.users; _a < _b.length; _a++) {
            var user = _b[_a];
            if (correo === user.correo) {
                return user;
            }
        }
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        var userLogin = this.buscarUser(loginForm.value.correo);
        if (userLogin) {
            if (userLogin.contrasenia === loginForm.value.contrasenia) {
                console.log('asdsa');
                this.cookieService.set('Token', userLogin.id, 1, '/');
                this.router.navigate(['/compra']);
            }
            else {
                this.errorPassword = 'Contraseña incorrecta';
            }
        }
        else {
            this.error = ' no se encuentra registrado';
            this.correoError = loginForm.value.correo;
        }
    };
    LoginComponent.prototype.onSubmitReset = function (resetForm, n) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.cargando = true;
                        _a = this;
                        return [4 /*yield*/, this.loginService.resetPassword(resetForm.value)];
                    case 1:
                        _a.serverCode = _b.sent();
                        this.cargando = false;
                        if (this.serverCode !== 0) {
                            this.nextSlide(n = n + 1);
                        }
                        this.user = this.buscarUser(resetForm.value.resetCorreo);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.onSubmitPassword = function (updatePasswordForm, n) {
        this.user.contrasenia = updatePasswordForm.value.contrasenia;
        this.loginService.updatePassword(this.user);
        this.modalReset();
    };
    LoginComponent.prototype.nextSlide = function (n) {
        for (var _i = 0; _i < this.slides.length; _i++) {
            if (n > this.slides.length) {
                this.slides[0] = true;
            }
            else if (n === _i) {
                this.slides[_i] = true;
            }
            else {
                this.slides[_i] = false;
            }
        }
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CookieService,
            AppComponent,
            LoginService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map