import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(usuarioService, appComponent, cookieService, router) {
        this.usuarioService = usuarioService;
        this.appComponent = appComponent;
        this.cookieService = cookieService;
        this.router = router;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        if (this.cookieService.check('Token')) {
            this.router.navigate(['/compra']);
        }
        this.appComponent.typeNav(true);
    };
    UsuarioComponent.prototype.onSubmit = function (usuarioform) {
        this.usuarioService.insertusuario(usuarioform.value);
        this.router.navigate(['/login']);
    };
    UsuarioComponent = tslib_1.__decorate([
        Component({
            selector: 'app-usuario',
            templateUrl: './usuario.component.html',
            styleUrls: ['./usuario.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService,
            AppComponent,
            CookieService,
            Router])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map