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

  codigo: number;

  constructor(private loginService: LoginService) { }

  ngOnInit() {    
  }

  onSubmit(loginForm: NgForm)
  {
    this.loginService.insertlogin(loginForm.value);
  }

  onSubmitReset(resetForm: NgForm)
  {    
    console.log(resetForm.value);
    
    this.codigo=this.loginService.resetPassword(resetForm.value);
  }
}
