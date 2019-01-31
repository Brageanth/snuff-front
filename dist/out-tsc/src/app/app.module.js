import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioComponent } from '../app/components/usuario/usuario.component';
import { UsuarioService } from './services/usuario.service';
import { ColoreService } from './services/colore.service';
import { EstampadoService } from './services/estampado.service';
import { PrendaService } from './services/prenda.service';
import { TallaService } from './services/talla.service';
import { LoginService } from './services/login.service';
import { CompraService } from './services/compra.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { PrendaComponent } from './components/inventario/prenda/prenda.component';
import { ColoreComponent } from './components/inventario/colore/colore.component';
import { TallaComponent } from './components/inventario/talla/talla.component';
import { EstampadoComponent } from './components/inventario/estampado/estampado.component';
import { CompraComponent } from './components/compra/compra.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/compra/checkout/checkout.component';
var appRoutes = [
    { path: 'registro', component: UsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'compra', component: CompraComponent },
    { path: '', component: HomeComponent },
    { path: 'checkout', component: CheckoutComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                UsuarioComponent,
                LoginComponent,
                InventarioComponent,
                PrendaComponent,
                ColoreComponent,
                TallaComponent,
                EstampadoComponent,
                CompraComponent,
                HomeComponent,
                CheckoutComponent
            ],
            imports: [HttpClientModule,
                BrowserModule,
                FormsModule,
                RouterModule.forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [
                UsuarioService,
                LoginService,
                PrendaService,
                TallaService,
                ColoreService,
                EstampadoService,
                CompraService,
                CookieService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map