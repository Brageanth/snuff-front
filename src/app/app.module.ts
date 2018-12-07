import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


// components
import { UsuarioComponent } from '../app/components/usuario/usuario.component';

//services 
import {UsuarioService} from './services/usuario.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
