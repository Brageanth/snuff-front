import { Component, OnInit } from '@angular/core';

// Service

import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  constructor(private usuarioService: UsuarioService ) { }
  

  ngOnInit(): void {    
  }

  onSubmit(usuarioform: NgForm)
  {
    this.usuarioService.insertusuario(usuarioform.value);  
  }
}