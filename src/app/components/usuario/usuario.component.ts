import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  constructor(
    private usuarioService: UsuarioService,
    private appComponent: AppComponent,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.cookieService.check('Token')) {
      this.router.navigate(['/compra']);
    }
    this.appComponent.typeNav(true);
  }

  onSubmit(usuarioform: NgForm) {
    this.usuarioService.insertusuario(usuarioform.value);
    this.router.navigate(['/login']);
  }
}
