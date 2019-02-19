import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrendaService } from '../../../services/prenda.service';
import { NgForm } from '@angular/forms';
import { Prenda } from '../../../models/prenda';

@Component({
  selector: 'app-prenda',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})

export class PrendaComponent implements OnInit {

  @Output() prenda: EventEmitter<any> = new EventEmitter();
  prendasList: Array<Prenda> = [];
  cargo = false;
  genero: boolean;

  constructor(private prendaService: PrendaService ) { }

  guardarPrenda(prendaform: NgForm) {
    this.prenda.emit(prendaform);
  }

  ngOnInit() {
    this.genero = false;
    this.cargo = true;
  }

  async cargarPrendas(pGenero: boolean) {
    this.cargo = false
    const ress = <any> await this.prendaService.getprenda();
    for (const prenda of ress) {
      if (prenda.cantidad > 0) {
        if (prenda.genero === pGenero) {
          this.prendasList.push(prenda);
        }
      }
    }
    this.genero = true;
    this.cargo = true;
  }
}
