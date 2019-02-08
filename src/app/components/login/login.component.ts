import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public serverCode: any = 0;
  slides: Array<boolean> = [true, false, false];
  users: any;
  user: any;
  error: string;
  errorPassword: string;
  correoError: string;
  cargo = false;
  cargando = false;
  token: string;
  resetModal: boolean;

  constructor(
    private cookieService: CookieService,
    private appComponent: AppComponent,
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    console.log(1);
    this.users = await this.loginService.getUsuarios();
    if (this.cookieService.check('Token')) {
      this.token = this.cookieService.get('Token');
      this.router.navigate(['/']);
    }
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
  }

  modalReset() {
    this.resetModal = !this.resetModal;
  }

  buscarUser(correo: string) {
    for (const user of this.users) {
      if (correo === user.correo) {
        return user;
      }
    }
  }

  onSubmit(loginForm: NgForm) {
    const userLogin = this.buscarUser(loginForm.value.correo);
    if (userLogin) {
      if (userLogin.contrasenia === loginForm.value.contrasenia) {
        this.cookieService.set( 'Token', userLogin.correo, 1, '/' );
        if (this.activatedRoute.snapshot.paramMap.get('url') === '') {
          this.router.navigate(['/']);
        } else {
          this.router.navigate([this.activatedRoute.snapshot.paramMap.get('url')]);
        }
      } else {
        this.errorPassword = 'Contraseña incorrecta';
      }
    } else {
      this.error = ' no se encuentra registrado';
      this.correoError = loginForm.value.correo;
    }
  }

  async onSubmitReset(resetForm: NgForm, n: number) {
    this.cargando = true;
    this.serverCode = await this.loginService.resetPassword(resetForm.value);
    this.cargando = false;
    if (this.serverCode !== 0) {
      this.nextSlide(n = n + 1);
    }
    this.user = this.buscarUser(resetForm.value.resetCorreo);
  }

  onSubmitPassword(updatePasswordForm: NgForm, n: number) {
    this.user.contrasenia = updatePasswordForm.value.contrasenia;
    this.loginService.updatePassword(this.user);
    this.modalReset();
  }

  nextSlide(n: number): void {
    for (let _i = 0; _i < this.slides.length; _i++) {
      if (n > this.slides.length) {
        this.slides[0] = true;
      } else if (n === _i) {
        this.slides[_i] = true;
      } else {
        this.slides[_i] = false;
      }
    }
  }
}
