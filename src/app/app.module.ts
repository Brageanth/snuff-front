import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


// components
import { UsuarioComponent } from '../app/components/usuario/usuario.component';

//services 
import {UsuarioService} from './services/usuario.service';
import { LoginService } from './services/login.service'; 

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'registro', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
