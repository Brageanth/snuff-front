import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//service

import { CompraService } from '../../services/compra.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private http:HttpClient, private compraService: CompraService) { }

  ngOnInit(): void {}

  onSubmit(compraform: NgForm){

    this.compraService.insertcompra(compraform.value);
  }
}
