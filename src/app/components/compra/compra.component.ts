import { Component, OnInit, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';


//service

import { CompraService } from '../../services/compra.service';
import { NgForm } from '@angular/forms';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit { 

  public prenda: Prenda;
  slides = [true, false, false, false]

  constructor(private http:HttpClient, private compraService: CompraService) { }

  ngOnInit(): void {}

  onSubmit(compraform: NgForm){
    this.compraService.insertcompra(compraform.value);
  }

  getPrenda(prendaform: any){
    this.prenda=prendaform;
    this.slides[0]=false;
    this.slides[1]=true;
  }
}