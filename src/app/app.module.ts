import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { CocheComponent } from './components/compra/coche/coche.component';
import { CineComponent } from './components/cine/cine.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { MusicaComponent } from './components/secciones/musica/musica.component';
import { PinturaComponent } from './components/secciones/pintura/pintura.component';

const appRoutes: Routes = [
  { path: 'registro', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compra', component: CompraComponent },
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'coche' , component: CocheComponent}
];


@NgModule({
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
    CheckoutComponent,
    PerfilComponent,
    CocheComponent,
    CineComponent,
    SeccionesComponent,
    MusicaComponent,
    PinturaComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
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
export class AppModule { }
