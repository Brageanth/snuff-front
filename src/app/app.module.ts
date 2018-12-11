import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


// components
import { UsuarioComponent } from '../app/components/usuario/usuario.component';

//services 
import {UsuarioService} from './services/usuario.service';
import { ColoreService } from './services/colore.service';
import { EstampadoService } from './services/estampado.service';
import {PrendaService } from './services/prenda.service';
import {TallaService } from './services/talla.service';
import { LoginService } from './services/login.service'; 
import { CompraService } from './services/compra.service';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { PrendaComponent } from './components/inventario/prenda/prenda.component';
import { ColoreComponent } from './components/inventario/colore/colore.component';
import { TallaComponent } from './components/inventario/talla/talla.component';
import { EstampadoComponent } from './components/inventario/estampado/estampado.component';
import { CompraComponent } from './components/compra/compra.component';

const appRoutes: Routes = [
  { path: 'registro', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compra', component: CompraComponent },
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
    CompraComponent
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
    CompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
