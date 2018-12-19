import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

import { LoginService } from '../../services/login.service';

import {Router} from "@angular/router"

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
  cargo: boolean = false;
  cargando: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  async ngOnInit() {
    this.users = await this.loginService.getUsuarios()
    this.cargo = true;
  }

  buscarUser(correo:string){    
    for(let user of this.users){
      if(correo==user.correo){        
        return user;
      }
    }
  }

  onSubmit(loginForm: NgForm){
    let userLogin =this.buscarUser(loginForm.value.correo);
    if(userLogin){
      if(userLogin.contrasenia==loginForm.value.contrasenia){
        this.router.navigate(['/compra'])
      }
      else{
        this.errorPassword = 'Contraseña incorrecta';
      }
    }
    else{
      this.error = ' no se encuentra registrado';
      this.correoError = loginForm.value.correo;
    }
  }

  async onSubmitReset(resetForm: NgForm, n: number)
  { 
    let width = 1;
    this.cargando = true;
    this.serverCode = await this.loginService.resetPassword(resetForm.value);
    this.cargando = false;
    if(this.serverCode!=0){
      this.nextSlide(n=n+1);
    }
    this.user = this.buscarUser(resetForm.value.resetCorreo);
  }

  onSubmitPassword(updatePasswordForm: NgForm, n: number)
  {     
    this.user.contrasenia = updatePasswordForm.value.contrasenia;
    this.loginService.updatePassword(this.user);
  }

  nextSlide(n: number):void {
    for(var _i = 0; _i < this.slides.length; _i++){
      if(n>this.slides.length){
        this.slides[0]=true;
      }
      else if(n==_i){
        this.slides[_i]=true;
      }
      else{
        this.slides[_i]=false;
      }
    }
  }
}
