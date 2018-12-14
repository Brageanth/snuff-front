import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

import { LoginService } from '../../services/login.service';

import { Login } from '../../models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public serverCode: any = 0;
  slides: Array<boolean> = [true, false, false, false];
  users: any;
  user: any;

  constructor(private loginService: LoginService) { }

  async ngOnInit() {
    this.users = await this.loginService.getUsuarios()
  }

  buscarUser(correo:string){    
    for(let user of this.users){
      if(correo==user.correo){        
        return user;
      }
    }
  }

  onSubmit(loginForm: NgForm)
  {
    this.loginService.insertlogin(loginForm.value);
  }

  async onSubmitReset(resetForm: NgForm, n: number)
  { 
    this.serverCode = await this.loginService.resetPassword(resetForm.value);
    
    if(this.serverCode!=0){
      this.nextSlide(n=n+1);
    }
    this.user = this.buscarUser(resetForm.value.resetCorreo);
  }

  onSubmitPassword(updatePasswordForm: NgForm, n: number)
  {     
    this.user.contrasenia = updatePasswordForm.value.contrasenia;
    this.loginService.updatePassword(this.user);
    this.nextSlide(n=n+1);
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
        console.log(_i);
        this.slides[_i]=false;
      }
    }
  }
}
