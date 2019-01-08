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

  constructor(private prendaService: PrendaService ) { }

  guardarPrenda(prendaform: NgForm) {
    this.prenda.emit(prendaform);
  }

  async ngOnInit() {

    const ress = <any> await this.prendaService.getprenda();
    for (const prenda of ress) {
      if (prenda.cantidad > 0) {
        this.prendasList.push(prenda);
      }
    }
    this.cargo = true;
  }
}
